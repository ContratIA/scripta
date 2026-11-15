"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Zap, DollarSign, Clock } from "lucide-react"

const stats = [
  { value: "3.2×",     label: "Avg. traffic increase",       Icon: TrendingUp,  color: "text-[#2997ff]",  bg: "from-[#2997ff]/10 to-[#006edb]/5"  },
  { value: "67 days",  label: "Avg. to first-page ranking",  Icon: Zap,         color: "text-emerald-400", bg: "from-emerald-500/10 to-green-600/5"  },
  { value: "80%",      label: "Cost savings vs. agency",     Icon: DollarSign,  color: "text-[#2997ff]",  bg: "from-[#2997ff]/10 to-[#006edb]/5"  },
  { value: "14 days",  label: "First content goes live",     Icon: Clock,       color: "text-sky-400",     bg: "from-sky-500/10 to-blue-600/5"       },
]

const cases = [
  {
    company: "Call-analytics SaaS",
    category: "Illustrative benchmark",
    headline: "+43% organic sessions in 8 months",
    story: "A call-analytics platform targeted mid-funnel keywords competitors ignored. The compounding content strategy attributed roughly $1.5M in pipeline.",
    result: "+43%",
    resultLabel: "organic sessions",
    color: "indigo",
    span: "md:col-span-4",
  },
  {
    company: "Revenue-ops platform",
    category: "Illustrative benchmark",
    headline: "67 → 2,100 signups/mo",
    story: "Replaced a $12k/month agency with AI content. 110% organic growth in 6 months at roughly 1/8th the cost.",
    result: "31×",
    resultLabel: "signup growth",
    color: "emerald",
    span: "md:col-span-2",
  },
  {
    company: "B2B fintech SaaS",
    category: "Illustrative benchmark",
    headline: "+22% revenue per session",
    story: "Buyers arrived pre-qualified via SEO — already educated, shorter sales cycles, higher lifetime value.",
    result: "22%",
    resultLabel: "revenue/session",
    color: "violet",
    span: "md:col-span-2",
  },
  {
    company: "Developer tooling",
    category: "Illustrative benchmark",
    headline: "0 → 18k organic visits/mo",
    story: "Programmatic SEO across 400+ use-case pages. Content clusters built around the ICP's jobs-to-be-done.",
    result: "18k",
    resultLabel: "organic visitors",
    color: "sky",
    span: "md:col-span-4",
  },
]

const colorMap: Record<string, { badge: string; num: string; border: string; glow: string }> = {
  indigo:  { badge: "bg-[#2997ff]/10 text-[#2997ff] border-[#2997ff]/15",  num: "text-[#2997ff]",  border: "hover:border-[#2997ff]/25",  glow: "rgba(10,132,255,0.08)"  },
  emerald: { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/15", num: "text-emerald-400", border: "hover:border-emerald-500/25", glow: "rgba(16,185,129,0.08)" },
  violet:  { badge: "bg-[#2997ff]/10 text-[#2997ff] border-[#2997ff]/15",   num: "text-[#2997ff]",  border: "hover:border-[#2997ff]/25",  glow: "rgba(10,132,255,0.08)"  },
  sky:     { badge: "bg-sky-500/10 text-sky-400 border-sky-500/15",             num: "text-sky-400",     border: "hover:border-sky-500/25",     glow: "rgba(14,165,233,0.08)"  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section id="results" ref={ref} className="py-40 px-6 bg-[#000000] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(10,132,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">The compounding math</p>
          <h2 className="text-[56px] md:text-[72px] font-semibold tracking-[-0.02em] leading-[1.02] text-white mb-5">
            What organic growth<br />
            <span className="text-gradient">actually looks like.</span>
          </h2>
          <p className="text-white/35 text-[17px] max-w-[560px] mx-auto leading-relaxed">
            SEO content compounds — every post keeps generating traffic and leads months after delivery.
            These are typical outcomes from AI-powered SEO programs in B2B SaaS.
          </p>
        </motion.div>

        <div
          role="note"
          className="max-w-2xl mx-auto mb-10 flex items-start gap-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] px-5 py-4 text-left"
        >
          <span aria-hidden className="mt-[1px] flex-shrink-0 w-5 h-5 rounded-full border border-amber-400/40 text-amber-300 text-[11px] font-bold flex items-center justify-center">i</span>
          <p className="text-amber-100/80 text-[13px] leading-relaxed">
            <strong className="text-amber-200 font-semibold">Illustrative examples, not ScriptaSEO client results.</strong>{" "}
            The figures and case studies below are benchmarks from publicly documented AI-assisted SEO programs in
            B2B SaaS. Your outcomes depend on your niche, product, and timeline.
          </p>
        </div>

        {/* Stat cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeItem}
              className={`bg-gradient-to-br ${s.bg} glass rounded-2xl p-6 text-center group cursor-default`}
            >
              <s.Icon className={`w-4 h-4 mx-auto mb-3 ${s.color} opacity-50 group-hover:opacity-90 transition-opacity`} aria-hidden />
              <div className={`text-[28px] font-bold tabular ${s.color} leading-none mb-1.5`}>{s.value}</div>
              <div className="text-white/25 text-[11px] leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case study bento */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-6 gap-3"
        >
          {cases.map((c) => {
            const cm = colorMap[c.color]
            return (
              <motion.div
                key={c.company}
                variants={fadeItem}
                className={`${c.span} glass rounded-2xl p-7 group flex flex-col ${cm.border} transition-all duration-300 cursor-default`}
                style={{ "--glow": cm.glow } as React.CSSProperties}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[10px] font-medium mb-2 ${cm.badge}`}>
                      {c.category}
                    </div>
                    <div className="text-[16px] font-bold text-white leading-snug">{c.company}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-[28px] font-bold tabular ${cm.num} leading-none`}>{c.result}</div>
                    <div className="text-white/20 text-[10px] mt-0.5">{c.resultLabel}</div>
                  </div>
                </div>
                <div className="text-[15px] font-semibold text-white/80 mb-3">{c.headline}</div>
                <p className="text-white/35 text-[13px] leading-relaxed flex-1">{c.story}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <p className="text-center mt-8 text-white/45 text-[12px] max-w-2xl mx-auto leading-relaxed">
          Illustrative benchmarks — not ScriptaSEO client results.
        </p>
      </div>
    </section>
  )
}
