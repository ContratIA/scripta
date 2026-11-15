import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!stripeKey || !webhookSecret) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 })
  }

  let body: string
  try {
    body = await req.text()
  } catch {
    return NextResponse.json({ error: "Failed to read body" }, { status: 400 })
  }

  const sig = req.headers.get("stripe-signature")
  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  const Stripe = (await import("stripe")).default
  const stripe = new Stripe(stripeKey)

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object
    const details = session.customer_details
    const customerEmail = details?.email ?? undefined
    const customerName = details?.name ?? null
    const plan = (session.metadata?.plan as string | undefined) ?? "growth"

    // 1. Persistir cliente pagado en Supabase (tabla customers)
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY
    if (customerEmail && supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/customers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            email: customerEmail,
            name: customerName,
            plan,
            stripe_session_id: session.id,
            status: "active",
            created_at: new Date().toISOString(),
          }),
        })
      } catch {}
    }

    // 2. Email de bienvenida
    const resendKey = process.env.RESEND_API_KEY
    if (customerEmail && resendKey) {
      try {
        const { Resend } = await import("resend")
        const resend = new Resend(resendKey)
        await resend.emails.send({
          from: "ScriptaSEO <hello@scriptaseo.com>",
          to: customerEmail,
          subject: "Welcome to ScriptaSEO",
          html: `<p>You are on the ${plan} plan. First content in 14 days.</p>`,
        })
      } catch {}
    }
  }

  return NextResponse.json({ received: true })
}
