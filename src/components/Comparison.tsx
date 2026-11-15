"use client"
import { motion } from "framer-motion"

const rows = [
  { feature: "Monthly cost",              scripta: "$997 – $3,497",         agency: "$5,000 – $15,000",   freelancer: "$2,000 – $5,000",  win: true },
  { feature: "First content live",       scripta: "14 days",               agency: "30 – 60 days",       freelancer: "1 – 2 weeks",      win: true },
  { feature: "Content per month",        scripta: "4 – 16 posts",          agency: "2 – 4 posts",        freelancer: "2 – 8 posts",      win: true },
  { feature: "Keyword opportunities",    scripta: "10 – 40 per month",     agency: "Monthly",            freelancer: "Rarely",           win: true },
  { feature: "Competitor tracking",      scripta: "Monthly to daily (by plan)", agency: "Quarterly",     freelancer: "Never",            win: true },
  { feature: "Performance reports",      scripta: "Monthly + on-demand",   agency: "Monthly (delayed)",  freelancer: "Rarely",           win: true },
  { feature: "Contract",                 scripta: "None — cancel anytime", agency: "6 – 12 months",      freelancer: "Project-based",    win: true },
  { feature: "Direct founder access",    scripta: "Always",                agency: "Junior AM + delays", freelancer: "Sometimes",        win: true },
]

export default function Comparison() {
  return (
    <section className="py-40 px-6 bg-[#000000] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#0a84ff]/5 blur-[130px] pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">The honest comparison</p>
          <h2 className="text-[56px] md:text-[72px] font-semibold tracking-[-0.02em] leading-[1.02] text-white mb-5">
            Why not just hire an agency?
          </h2>
          <p className="text-white/35 text-[17px] max-w-[540px] mx-auto leading-relaxed">
            Agencies sell you on strategy, then hand you off to a junior team with a 60-day ramp.
            We deliver — at AI speed, at a fraction of the cost.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-white/[0.07]"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.07]">
            <div className="p-5 text-[11px] font-medium text-white/25 uppercase tracking-widest" />
            <div className="p-5 flex items-center gap-2 border-l border-white/[0.05]">
              <div className="w-5 h-5 rounded-[6px] bg-gradient-to-br from-[#2997ff] to-[#006edb] flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">S</div>
              <span className="text-[13px] font-bold text-gradient tracking-tight">ScriptaSEO</span>
            </div>
            <div className="p-5 border-l border-white/[0.05] text-[13px] font-medium text-white/30">SEO Agency</div>
            <div className="p-5 border-l border-white/[0.05] text-[13px] font-medium text-white/30">Freelancer</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-t border-white/[0.05] transition-colors hover:bg-white/[0.015] ${
                i % 2 !== 0 ? "bg-white/[0.01]" : ""
              }`}
            >
              <div className="p-5 text-[13px] text-white/40 font-medium">{row.feature}</div>
              <div className="p-5 text-[13px] font-semibold text-[#64d2ff] bg-[#2997ff]/[0.04] border-l border-[#2997ff]/10 flex items-center gap-2">
                {row.win && (
                  <svg className="w-3.5 h-3.5 text-[#2997ff] flex-shrink-0" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {row.scripta}
              </div>
              <div className="p-5 text-[13px] text-white/25 border-l border-white/[0.05]">{row.agency}</div>
              <div className="p-5 text-[13px] text-white/25 border-l border-white/[0.05]">{row.freelancer}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/audit"
            className="inline-flex items-center gap-2 bg-[#0a84ff] hover:bg-[#2997ff] text-white px-8 py-4 rounded-full text-[14px] font-semibold transition-all duration-300 shadow-[0_0_28px_rgba(10,132,255,0.32)] hover:shadow-[0_0_52px_rgba(10,132,255,0.55)] hover:scale-[1.02]"
          >
            Get your free SEO audit →
          </a>
          <p className="mt-4 text-white/20 text-[13px]">No contract · Cancel anytime · First content in 14 days</p>
        </div>
      </div>
    </section>
  )
}
