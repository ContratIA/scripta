import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")!

  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder") {
    return NextResponse.json({ error: "Not configured" }, { status: 503 })
  }

  const Stripe = (await import("stripe")).default
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Record<string, unknown>
    const details = session.customer_details as { email?: string } | undefined
    const meta = session.metadata as Record<string, string> | undefined
    const customerEmail = details?.email
    const plan = meta?.plan || "growth"

    if (customerEmail && process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder") {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: "Scripta <hello@getscripta.com>",
        to: customerEmail,
        subject: "Welcome to Scripta",
        html: `<p>You are on the ${plan} plan. First content in 14 days.</p>`,
      })
    }
  }

  return NextResponse.json({ received: true })
}
