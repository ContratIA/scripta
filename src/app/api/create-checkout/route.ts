import { NextRequest, NextResponse } from "next/server"
import { rateLimit, getIp } from "@/lib/rate-limit"
import { isValidCheckoutPlan } from "@/lib/validate"

const PRICE_IDS: Record<string, string> = {
  starter: process.env.STRIPE_STARTER_PRICE_ID ?? "",
  growth: process.env.STRIPE_GROWTH_PRICE_ID ?? "",
  scale: process.env.STRIPE_SCALE_PRICE_ID ?? "",
}

export async function POST(req: NextRequest) {
  if (!rateLimit(getIp(req), 10, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const plan = (body as Record<string, unknown>)?.plan
  if (!isValidCheckoutPlan(plan)) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
  }

  const priceId = PRICE_IDS[plan]
  if (!priceId) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 })
  }

  try {
    const Stripe = (await import("stripe")).default
    const stripe = new Stripe(stripeKey)

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
  } catch {
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 })
  }
}
