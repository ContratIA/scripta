"use client"

const plans = [
  {
    name: "Starter",
    price: 997,
    desc: "For early-stage startups building organic presence",
    features: [
      "4 SEO blog posts/month",
      "10 keyword opportunities",
      "Monthly competitor snapshot",
      "Basic performance report",
      "Email support",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: 1997,
    desc: "For funded startups replacing their content team",
    features: [
      "8 SEO blog posts/month",
      "20 keyword opportunities",
      "Weekly competitor tracking",
      "On-page SEO optimization",
      "1 landing page copy update",
      "Internal linking strategy",
      "Monthly growth call (30 min)",
      "Slack + email support",
    ],
    cta: "Start with Growth",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Scale",
    price: 3497,
    desc: "For Series A+ companies that need to dominate search",
    features: [
      "16 SEO blog posts/month",
      "40 keyword opportunities",
      "Daily competitor monitoring",
      "Full technical SEO audit",
      "3 landing page copy updates",
      "Programmatic SEO setup",
      "Weekly growth call (60 min)",
      "Priority Slack support",
    ],
    cta: "Start with Scale",
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Simple, predictable pricing
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            No setup fees. No contracts. Cancel anytime. A full-time SEO hire costs $6k-10k/month — we deliver more for a fraction of that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 relative ${
                p.highlight
                  ? "bg-zinc-900 text-white shadow-2xl shadow-zinc-900/20 scale-[1.02]"
                  : "bg-white border border-zinc-200"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <div className={`text-sm font-medium mb-1 ${p.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                  {p.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${p.highlight ? "text-white" : "text-zinc-900"}`}>
                    ${p.price.toLocaleString()}
                  </span>
                  <span className={`text-sm ${p.highlight ? "text-zinc-400" : "text-zinc-400"}`}>/month</span>
                </div>
                <p className={`mt-2 text-sm leading-relaxed ${p.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                  {p.desc}
                </p>
              </div>

              <a
                href={`/checkout?plan=${p.name.toLowerCase()}`}
                className={`block text-center py-3 rounded-xl font-semibold text-sm mb-8 transition-all hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-white text-zinc-900 hover:bg-zinc-100"
                    : "bg-zinc-900 text-white hover:bg-zinc-700"
                }`}
              >
                {p.cta}
              </a>

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 ${p.highlight ? "text-indigo-400" : "text-indigo-500"}`}>✓</span>
                    <span className={p.highlight ? "text-zinc-300" : "text-zinc-600"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-zinc-400">
          Not sure which plan? <a href="mailto:hello@getscripta.com" className="text-indigo-600 hover:underline">Email us</a> — we'll help you pick the right fit.
        </p>
      </div>
    </section>
  )
}
