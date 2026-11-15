"use client"
import { motion } from "framer-motion"
import { plans } from "@/content/plans"

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 px-6 bg-[#000000] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 right-0 w-[440px] h-[440px] rounded-full bg-[#0a84ff]/6 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[440px] h-[440px] rounded-full bg-[#006edb]/5 blur-[130px] pointer-events-none"
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
          <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">Pricing</p>
          <h2 className="text-[56px] md:text-[72px] font-semibold tracking-[-0.02em] leading-[1.02] text-white mb-5">
            Simple, predictable pricing
          </h2>
          <p className="text-white/35 text-[17px] max-w-lg mx-auto leading-relaxed">
            No setup fees. No contracts. Cancel anytime. A full-time SEO hire costs $6k–10k/month —
            we deliver more, faster. Every plan includes a 30-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              {p.highlight ? (
                <div className="border-animated flex-1 flex flex-col" style={{ boxShadow: "0 0 60px rgba(10,132,255,0.18)" }}>
                  <div className="rounded-[calc(1.25rem-1px)] bg-[#0B0B1E] flex flex-col flex-1 p-7 relative">
                    {p.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="bg-[#0a84ff] text-white text-[11px] font-semibold px-3.5 py-1 rounded-full whitespace-nowrap shadow-[0_0_16px_rgba(10,132,255,0.5)]">
                          {p.badge}
                        </span>
                      </div>
                    )}

                    <div className="mb-7 pt-2">
                      <div className="text-[12px] font-semibold text-white/40 mb-1.5 tracking-wide">{p.name}</div>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-[48px] font-bold text-white leading-none tabular">${p.price.toLocaleString()}</span>
                        <span className="text-[13px] text-white/30">/mo</span>
                      </div>
                      <p className="text-[13px] text-white/35 leading-relaxed">{p.desc}</p>
                    </div>

                    <a
                      href={p.href}
                      className="block text-center py-3 rounded-xl font-semibold text-[13px] mb-7 transition-all duration-200 hover:scale-[1.02] bg-[#0a84ff] hover:bg-[#2997ff] text-white shadow-[0_0_20px_rgba(10,132,255,0.35)]"
                    >
                      {p.cta}
                    </a>

                    <ul className="space-y-3 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[13px]">
                          <svg className="w-4 h-4 text-[#2997ff] mt-[1px] flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
                            <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-white/60">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="glass rounded-2xl p-7 hover:border-white/12 transition-all duration-300 flex flex-col flex-1">
                  <div className="mb-7">
                    <div className="text-[12px] font-semibold text-white/30 mb-1.5 tracking-wide">{p.name}</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-[48px] font-bold text-white leading-none tabular">${p.price.toLocaleString()}</span>
                      <span className="text-[13px] text-white/25">/mo</span>
                    </div>
                    <p className="text-[13px] text-white/30 leading-relaxed">{p.desc}</p>
                  </div>

                  <a
                    href={p.href}
                    className="block text-center py-3 rounded-xl font-semibold text-[13px] mb-7 transition-all duration-200 hover:scale-[1.02] bg-white/[0.07] hover:bg-white/[0.11] text-white border border-white/[0.09]"
                  >
                    {p.cta}
                  </a>

                  <ul className="space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13px]">
                        <svg className="w-4 h-4 text-white/25 mt-[1px] flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-white/40">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-[13px] text-white/22">
          Not sure which plan?{" "}
          <a href="mailto:hello@scriptaseo.com" className="text-[#2997ff] hover:text-[#64d2ff] transition-colors">
            Email us
          </a>{" "}
          — we'll help you find the right fit. 30-day money-back guarantee on every plan.
        </p>
      </div>
    </section>
  )
}
