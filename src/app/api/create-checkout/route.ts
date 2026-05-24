import { NextRequest, NextResponse } from "next/server"

const PRICE_IDS: Record<string, string> = {
  starter: process.env.STRIPE_STARTER_PRICE_ID || "price_placeholder",
  growth: process.env.STRIPE_GROWTH_PRICE_ID || "price_placeholder",
  scale: process.env.STRIPE_SCALE_PRICE_ID || "price_placeholder",
}

export async function POST(req: NextRequest) {
  const { plan } = await req.json()
  const priceId = PRICE_IDS[plan]

  if (!priceId || priceId === "price_placeholder") {
    return NextResponse.json({ error: "Stripe not configured yet" }, { status: 503 })
  }

  const Stripe = (await import("stripe")).default
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/#pricing`,
    billing_address_collection: "required",
    customer_creation: "always",
    metadata: { plan },
  })

  return NextResponse.json({ url: session.url })
}
