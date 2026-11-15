"use client"
import { motion } from "framer-motion"
import { ClipboardList, SearchCode, PenLine, BarChart3 } from "lucide-react"

const steps = [
  {
    n: "01",
    Icon: ClipboardList,
    title: "Onboard in 10 minutes",
    desc: "Fill out a brief about your SaaS product, target ICP, and organic growth goals. No calls. No lengthy sessions. No agency ramp.",
    accent: "indigo",
    size: "md:col-span-4",
  },
  {
    n: "02",
    Icon: SearchCode,
    title: "AI researches your market 24/7",
    desc: "We analyze competitor content gaps, map high-intent buyer keywords, and build a programmatic SEO strategy that compounds monthly.",
    accent: "emerald",
    size: "md:col-span-2",
  },
  {
    n: "03",
    Icon: PenLine,
    title: "Expert content delivered weekly",
    desc: "Long-form SEO blog posts (1,500–2,500 words), use-case pages, and comparison articles — written to rank, convert, and educate.",
    accent: "violet",
    size: "md:col-span-2",
  },
  {
    n: "04",
    Icon: BarChart3,
    title: "Track rankings. Watch pipeline grow.",
    desc: "Monthly reports surface keyword ranking velocity, organic traffic growth, and revenue attribution. Strategy iterates automatically from SERP data.",
    accent: "sky",
    size: "md:col-span-4",
  },
]

const accentMap: Record<string, { icon: string; num: string; border: string; bg: string }> = {
  indigo:  { icon: "text-[#2997ff]",  num: "text-[#2997ff]/25",  border: "hover:border-[#2997ff]/25",  bg: "group-hover:from-[#2997ff]/8 group-hover:to-[#006edb]/4"   },
  emerald: { icon: "text-emerald-400", num: "text-emerald-500/25", border: "hover:border-emerald-500/25", bg: "group-hover:from-emerald-500/8 group-hover:to-green-600/4"   },
  violet:  { icon: "text-[#2997ff]",  num: "text-[#2997ff]/25",  border: "hover:border-[#2997ff]/25",  bg: "group-hover:from-[#2997ff]/8 group-hover:to-[#006edb]/4"   },
  sky:     { icon: "text-sky-400",     num: "text-sky-500/25",     border: "hover:border-sky-500/25",     bg: "group-hover:from-sky-500/8 group-hover:to-blue-600/4"         },
}

const included = [
  "8 SEO blog posts (1,500–2,500 words)",
  "20 transactional keyword targets/month",
  "On-page SEO & meta optimization",
  "Competitor content gap analysis",
  "Internal linking & semantic clustering",
  "Monthly organic traffic report",
  "1 conversion-focused landing page update",
  "Buyer-intent keyword briefings",
  "Slack / email support",
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-40 px-6 bg-[#000000] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-600/5 blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">The process</p>
          <h2 className="text-[56px] md:text-[72px] font-semibold tracking-[-0.02em] leading-[1.02] text-white mb-5">
            How ScriptaSEO works
          </h2>
          <p className="text-white/35 text-[17px] max-w-lg mx-auto leading-relaxed">
            From onboarding to SERP rankings — fully AI-automated, no meetings required.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-6 gap-3 mb-4">
          {steps.map((s, i) => {
            const am = accentMap[s.accent]
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`${s.size} glass rounded-2xl p-7 ${am.border} transition-all duration-300 group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${am.bg} transition-all duration-500 pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <s.Icon className={`w-[18px] h-[18px] ${am.icon} opacity-55 group-hover:opacity-95 transition-opacity`} aria-hidden />
                    <span className={`text-[42px] font-bold mono leading-none ${am.num} group-hover:opacity-60 transition-opacity`}>{s.n}</span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-3 leading-snug tracking-[-0.02em]">{s.title}</h3>
                  <p className="text-white/35 leading-relaxed text-[13px]">{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden mt-6"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#003e7e]/30 via-[#0d0d0d] to-[#003e7e]/15" />
          <div className="absolute inset-0 border border-white/[0.07] rounded-2xl" />
          <div className="relative p-10">
            <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-3 font-medium text-center">Every month</p>
            <h3 className="text-[26px] font-bold text-white mb-2 text-center tracking-[-0.02em]">
              Everything you'd pay an agency $10k/mo for
            </h3>
            <p className="text-white/25 text-[13px] text-center mb-8">
              At AI speed. At a fraction of the cost.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2997ff] mt-[1px] flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-white/50 text-[13px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
