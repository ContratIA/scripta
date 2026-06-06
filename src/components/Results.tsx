"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Zap, DollarSign, Clock } from "lucide-react"

const stats = [
  { value: "3.2×",     label: "Avg. traffic increase",       Icon: TrendingUp,  color: "text-indigo-400",  bg: "from-indigo-500/10 to-violet-600/5"  },
  { value: "67 days",  label: "Avg. to first-page ranking",  Icon: Zap,         color: "text-emerald-400", bg: "from-emerald-500/10 to-green-600/5"  },
  { value: "80%",      label: "Cost savings vs. agency",     Icon: DollarSign,  color: "text-violet-400",  bg: "from-violet-500/10 to-purple-600/5"  },
  { value: "14 days",  label: "First content goes live",     Icon: Clock,       color: "text-sky-400",     bg: "from-sky-500/10 to-blue-600/5"       },
]

const cases = [
  {
    company: "Invoca",
    category: "Call Analytics SaaS",
    headline: "+43% organic sessions",
    story: "Targeted mid-funnel keywords competitors ignored. 8-month compounding content strategy generated $1.5M in attributed pipeline.",
    result: "+$1.5M",
    resultLabel: "attributed pipeline",
    color: "indigo",
    span: "md:col-span-4",
  },
  {
    company: "Omnius",
    category: "Revenue Operations",
    headline: "67 → 2,100 signups/mo",
    story: "Replaced a $12k/month agency. 110% organic growth in 6 months at 1/8th the cost.",
    result: "31×",
    resultLabel: "signup growth",
    color: "emerald",
    span: "md:col-span-2",
  },
  {
    company: "Fintech Client",
    category: "B2B Fintech SaaS",
    headline: "+22% revenue/session",
    story: "Buyers arrived pre-qualified via SEO — already educated, shorter sales cycles, higher LTV.",
    result: "22%",
    resultLabel: "revenue/session",
    color: "violet",
    span: "md:col-span-2",
  },
  {
    company: "DevTools Co.",
    category: "Developer Tooling",
    headline: "0 → 18k organic/mo",
    story: "Programmatic SEO across 400+ use-case pages. Content clusters built around ICP jobs-to-be-done.",
    result: "18k",
    resultLabel: "organic visitors",
    color: "sky",
    span: "md:col-span-4",
  },
]

const colorMap: Record<string, { badge: string; num: string; border: string; glow: string }> = {
  indigo:  { badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/15",  num: "text-indigo-400",  border: "hover:border-indigo-500/25",  glow: "rgba(99,102,241,0.08)"  },
  emerald: { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/15", num: "text-emerald-400", border: "hover:border-emerald-500/25", glow: "rgba(16,185,129,0.08)" },
  violet:  { badge: "bg-violet-500/10 text-violet-400 border-violet-500/15",   num: "text-violet-400",  border: "hover:border-violet-500/25",  glow: "rgba(139,92,246,0.08)"  },
  sky:     { badge: "bg-sky-500/10 text-sky-400 border-sky-500/15",             num: "text-sky-400",     border: "hover:border-sky-500/25",     glow: "rgba(14,165,233,0.08)"  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section id="results" ref={ref} className="py-32 px-6 bg-[#06060F] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)" }}
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
          <p className="text-[11px] text-indigo-400/70 uppercase tracking-[0.22em] mb-4 font-medium">Proven results</p>
          <h2 className="text-[46px] md:text-[54px] font-bold tracking-[-0.03em] leading-[1.02] text-white mb-5">
            Real companies.<br />
            <span className="text-gradient">Real compound growth.</span>
          </h2>
          <p className="text-white/35 text-[17px] max-w-[520px] mx-auto leading-relaxed">
            SEO content compounds. Every post keeps generating traffic and leads — months after delivery.
          </p>
        </motion.div>

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

        <p className="text-center mt-8 text-white/12 text-[11px]">
          Typical outcomes for B2B SaaS companies using AI-powered content strategies. Individual results vary.
        </p>
      </div>
    </section>
  )
}
