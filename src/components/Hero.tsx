"use client"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-100/40 to-purple-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-indigo-700 text-xs font-medium">AI-powered · 24/7 delivery · Results in 30 days</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight leading-none mb-6">
          Your AI Growth Team.<br />
          <span className="gradient-text">Fraction of the cost.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Scripta replaces your entire SEO and content team with AI. 
          8 expert blog posts, keyword strategy, competitor tracking — 
          delivered every month for less than one junior hire.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="bg-zinc-900 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-700 transition-all hover:scale-[1.02] shadow-lg shadow-zinc-900/10"
          >
            Start growing — from $997/mo
          </a>
          <a
            href="#results"
            className="text-zinc-600 text-base font-medium hover:text-zinc-900 transition-colors flex items-center gap-2"
          >
            See real results →
          </a>
        </div>

        {/* Social proof */}
        <p className="mt-8 text-sm text-zinc-400">
          No contracts · Cancel anytime · First results in 14 days
        </p>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-zinc-100 pt-10">
          {[
            { value: "3.2x", label: "Avg. traffic increase" },
            { value: "14 days", label: "First content live" },
            { value: "80%", label: "Less than a team" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-zinc-900">{s.value}</div>
              <div className="text-sm text-zinc-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
