import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About — ScriptaSEO",
  description: "ScriptaSEO is an AI-powered SEO and content service for B2B SaaS companies, solo-built by Eloy Muros.",
}

const principles = [
  {
    title: "Content is the highest-ROI channel",
    body: "Buyers search before they buy. A single article ranking #1 keeps producing traffic and trials month after month at near-zero marginal cost — paid ads stop the moment you stop paying.",
  },
  {
    title: "Execution beats theory",
    body: "Most SaaS founders already know SEO matters. They don't lack strategy — they lack the bandwidth to ship expert, keyword-targeted content every single week. That's the problem we solve.",
  },
  {
    title: "Honesty over hype",
    body: "We publish real, defensible claims and benchmarks. We won't promise overnight rankings or guaranteed #1 positions, because no honest operator can. What we promise is consistent, well-researched content that compounds.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#000000] relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.14) 0%, rgba(10,132,255,0.04) 55%, transparent 75%)" }} />
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <Nav />

      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">About ScriptaSEO</h1>
        <p className="text-white/40 text-[18px] leading-relaxed mb-12">
          ScriptaSEO is an AI-powered SEO and content service for B2B SaaS companies. We replace the
          traditional SEO agency — the $5k–15k/month retainer, the 60-day ramp, the junior writer hand-off —
          with an automated system that researches your market, targets buyer-intent keywords, and ships
          expert content every week.
        </p>

        <div className="space-y-6 mb-16">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
              <h2 className="text-[18px] font-semibold text-white mb-2">{p.title}</h2>
              <p className="text-white/40 text-[15px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#2997ff]/15 bg-[#2997ff]/5 p-8 mb-16">
          <h2 className="text-[20px] font-semibold text-white mb-3">Built by a solo founder</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-5">
            ScriptaSEO is solo-built and bootstrapped by Eloy Muros. No VC money, no bloated team — which is
            exactly why we can deliver agency-grade output at a fraction of the price. You talk directly to
            the person building your content engine.
          </p>
          <p className="text-white/40 text-[15px] leading-relaxed">
            Questions? Email{" "}
            <a href="mailto:hello@scriptaseo.com" className="text-[#2997ff] hover:text-[#64d2ff]">hello@scriptaseo.com</a>
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-[#0a84ff] hover:bg-[#2997ff] text-white px-7 py-3 rounded-full text-[14px] font-semibold transition-all shadow-[0_0_28px_rgba(10,132,255,0.35)] hover:shadow-[0_0_44px_rgba(10,132,255,0.55)]"
          >
            Get your free SEO audit →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
