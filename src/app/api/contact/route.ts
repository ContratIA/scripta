import { NextRequest, NextResponse } from "next/server"
import { rateLimit, getIp } from "@/lib/rate-limit"
import { isValidEmail, isValidPlan, sanitize, parseBody } from "@/lib/validate"

// Fire-and-forget webhook to Make/Zapier/n8n
async function fireWebhook(payload: Record<string, unknown>) {
  const url = process.env.WEBHOOK_URL
  if (!url) return
  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-ScriptaSEO-Event": "audit_request",
        "X-ScriptaSEO-Version": "1",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    })
  } catch {}
}

export async function POST(req: NextRequest) {
  if (!rateLimit(getIp(req), 5, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const body = parseBody(raw)
  const email = body.email

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 })
  }

  const name = sanitize(body.name)
  const company = sanitize(body.company)
  const website = sanitize(body.website, 100)
  const plan = isValidPlan(body.plan) ? body.plan : "unsure"
  const ts = new Date().toISOString()

  // Structured webhook payload — ready for Make/Zapier subagent automation
  const webhookPayload = {
    event: "audit_request",
    schema_version: "1",
    timestamp: ts,
    lead: { name, email, company, website, plan },
    source: "scriptaseo_landing",
    meta: {
      form: "audit-page",
      utm_source: req.headers.get("referer") ?? null,
    },
  }

  // Run all side-effects in parallel — don't block the response
  const [supabaseResult] = await Promise.allSettled([
    // 1. Persist to Supabase
    (async () => {
      const supabaseUrl = process.env.SUPABASE_URL
      const supabaseKey = process.env.SUPABASE_SERVICE_KEY
      if (!supabaseUrl || !supabaseKey) return
      await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ name, email, company, website, plan, source: "audit-form", created_at: ts }),
      })
    })(),

    // 2. Email notification
    (async () => {
      const resendKey = process.env.RESEND_API_KEY
      if (!resendKey) return
      const { Resend } = await import("resend")
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: "ScriptaSEO Leads <hello@scriptaseo.com>",
        to: process.env.LEAD_NOTIFY_EMAIL || "hello@scriptaseo.com",
        subject: `🎯 New lead: ${company || name} — ${plan} plan`,
        html: `
          <div style="font-family:sans-serif;max-width:520px">
            <h2 style="color:#a855f7">New ScriptaSEO lead</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Company</td><td style="padding:8px 0;font-weight:600">${company || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Website</td><td style="padding:8px 0">${website || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Plan</td><td style="padding:8px 0"><b style="color:#a855f7">${plan}</b></td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px">Time</td><td style="padding:8px 0;font-size:12px;color:#666">${ts}</td></tr>
            </table>
            <hr style="margin:16px 0;border:none;border-top:1px solid #eee">
            <a href="https://app.supabase.com" style="background:#a855f7;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-size:14px">View in Supabase →</a>
          </div>
        `,
      })
    })(),

    // 3. Webhook — fires to WEBHOOK_URL (Make/Zapier/n8n)
    fireWebhook(webhookPayload),
  ])

  void supabaseResult // suppress unused warning

  return NextResponse.json({ ok: true, ts })
}
