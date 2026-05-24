/**
 * setup-stripe.mjs — crea los 3 productos y precios en Stripe automáticamente
 * Ejecutar UNA VEZ con: STRIPE_SECRET_KEY=sk_live_xxx node setup-stripe.mjs
 */
import Stripe from "stripe"
import { writeFileSync } from "fs"

const KEY = process.env.STRIPE_SECRET_KEY
if (!KEY || KEY === "sk_test_placeholder") {
  console.error("ERROR: Set STRIPE_SECRET_KEY env var first")
  console.error("Usage: STRIPE_SECRET_KEY=sk_live_xxx node setup-stripe.mjs")
  process.exit(1)
}

const stripe = new Stripe(KEY)

const products = [
  { name: "Scripta Starter", price: 99700, description: "4 SEO blog posts/month + keyword research" },
  { name: "Scripta Growth",  price: 199700, description: "8 SEO blog posts/month + full strategy" },
  { name: "Scripta Scale",   price: 349700, description: "16 SEO blog posts/month + programmatic SEO" },
]

async function main() {
  const ids = {}
  console.log("Creating Stripe products and prices...\n")

  for (const p of products) {
    const product = await stripe.products.create({ name: p.name, description: p.description })
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: p.price,
      currency: "usd",
      recurring: { interval: "month" },
    })
    const key = p.name.split(" ")[1].toLowerCase()
    ids[key] = { productId: product.id, priceId: price.id }
    console.log(`✓ ${p.name}: ${price.id}`)
  }

  const envContent = `# Add these to Vercel environment variables
STRIPE_STARTER_PRICE_ID=${ids.starter.priceId}
STRIPE_GROWTH_PRICE_ID=${ids.growth.priceId}
STRIPE_SCALE_PRICE_ID=${ids.scale.priceId}
NEXT_PUBLIC_STRIPE_STARTER_ID=${ids.starter.priceId}
NEXT_PUBLIC_STRIPE_GROWTH_ID=${ids.growth.priceId}
NEXT_PUBLIC_STRIPE_SCALE_ID=${ids.scale.priceId}
`
  writeFileSync("stripe-price-ids.env", envContent)
  console.log("\n✓ Saved to stripe-price-ids.env")
  console.log("→ Add these to: vercel env add VARIABLE_NAME production")
}

main().catch(console.error)
