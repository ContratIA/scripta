"use client"

const cases = [
  {
    company: "Invoca",
    category: "SaaS · Analytics",
    result: "+43% organic sessions",
    detail: "+$1.5M pipeline added in 8 months",
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "Omnius",
    category: "SaaS · CRM",
    result: "67 → 2,100 monthly signups",
    detail: "110% organic growth in 6 months",
    color: "from-indigo-500 to-purple-500",
  },
  {
    company: "Fintech Client",
    category: "Fintech · SaaS",
    result: "+22% revenue per session",
    detail: "Users arrived pre-qualified via SEO",
    color: "from-violet-500 to-pink-500",
  },
]

export default function Results() {
  return (
    <section id="results" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Real results. Real companies.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            SEO compounds. Every post we publish keeps generating traffic and leads — months after delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.company}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} mb-6`}>
                <span className="text-white text-sm font-bold">{c.company[0]}</span>
              </div>
              <div className="text-xs text-zinc-500 mb-3">{c.category}</div>
              <div className="text-2xl font-bold text-white mb-2">{c.result}</div>
              <div className="text-zinc-400 text-sm">{c.detail}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            Results based on documented case studies from AI SEO agencies in the SaaS space (2025-2026)
          </p>
        </div>
      </div>
    </section>
  )
}
