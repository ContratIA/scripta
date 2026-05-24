"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

const plans: Record<string, { name: string; price: number; priceId: string }> = {
  starter: { name: "Starter", price: 997, priceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_ID || "" },
  growth: { name: "Growth", price: 1997, priceId: process.env.NEXT_PUBLIC_STRIPE_GROWTH_ID || "" },
  scale: { name: "Scale", price: 3497, priceId: process.env.NEXT_PUBLIC_STRIPE_SCALE_ID || "" },
}

function CheckoutContent() {
  const params = useSearchParams()
  const planKey = params.get("plan") || "growth"
  const plan = plans[planKey] || plans.growth

  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: planKey }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Start with {plan.name}</h1>
          <p className="text-zinc-400 mt-2">${plan.price.toLocaleString()}/month · Cancel anytime</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <div className="space-y-4 mb-8">
            {["No setup fees", "First content in 14 days", "Cancel anytime", "Money-back guarantee"].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <span className="text-indigo-400">✓</span>
                <span className="text-zinc-300 text-sm">{f}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-semibold transition-colors text-base"
          >
            Continue to payment →
          </button>

          <p className="text-center mt-4 text-xs text-zinc-600">
            Secured by Stripe · SSL encrypted
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  )
}
