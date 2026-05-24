"use client"

const steps = [
  {
    n: "01",
    title: "You onboard in 10 minutes",
    desc: "Fill out a brief about your product, target audience, and goals. That's all we need. No calls, no lengthy briefs.",
  },
  {
    n: "02",
    title: "AI researches your market 24/7",
    desc: "We analyze your competitors, find keyword opportunities your rivals are missing, and map a content strategy that compounds.",
  },
  {
    n: "03",
    title: "Content delivered every week",
    desc: "Expert-level blog posts, optimized for search and conversion, land in your dashboard — ready to publish with one click.",
  },
  {
    n: "04",
    title: "You watch the rankings climb",
    desc: "Monthly reports show keyword rankings, traffic growth, and pipeline impact. We iterate automatically based on performance.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            How Scripta works
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            From onboarding to ranking — fully automated, no meetings required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-indigo-100 transition-colors group">
              <div className="text-5xl font-bold text-zinc-100 group-hover:text-indigo-100 transition-colors mb-4 font-mono">{s.n}</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">{s.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">What you get every month</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "8 SEO blog posts (1,500-2,500 words)",
              "Keyword research — 20 new opportunities",
              "On-page SEO optimization",
              "Competitor content tracking",
              "Internal linking strategy",
              "Monthly performance report",
              "1 landing page copy update",
              "Priority keyword briefings",
              "Slack/email support",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-indigo-200 mt-0.5 text-lg">✓</span>
                <span className="text-indigo-50 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
