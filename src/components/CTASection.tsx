"use client"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-40 px-6 bg-[#000000] relative overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 50%, rgba(10,132,255,0.12) 0%, rgba(10,132,255,0.04) 40%, transparent 70%)",
        }}
      />
      {/* Grid */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Outer glow */}
        <div
          aria-hidden
          className="absolute -inset-px rounded-3xl pointer-events-none"
          style={{ boxShadow: "0 0 80px rgba(10,132,255,0.15), 0 0 160px rgba(10,132,255,0.06)" }}
        />

        <div className="relative rounded-3xl border border-[#2997ff]/15 bg-gradient-to-br from-[#003e7e]/25 via-[#0B0B1E] to-[#003e7e]/20 overflow-hidden">
          {/* Top shine */}
          <div
            aria-hidden
            className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(10,132,255,0.5) 50%, transparent)" }}
          />

          <div className="px-8 py-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-5 font-medium">
                Start today
              </p>

              <h2 className="text-[44px] md:text-[60px] font-semibold tracking-[-0.02em] leading-[0.92] text-white mb-6">
                Your competitors are<br />
                <span className="text-gradient-hero">already publishing.</span>
              </h2>

              <p className="text-white/40 text-[17px] max-w-[480px] mx-auto mb-10 leading-relaxed">
                Every week you wait is a week of compounding SEO advantage you're handing
                to your competitors. Get your free audit — no pitch, just data.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/audit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold text-white bg-[#0a84ff] hover:bg-[#2997ff] transition-all duration-300 shadow-[0_0_32px_rgba(10,132,255,0.4)] hover:shadow-[0_0_60px_rgba(10,132,255,0.65)] hover:scale-[1.03] btn-glow"
                >
                  Get your free SEO audit <span aria-hidden>→</span>
                </a>
                <a
                  href="#pricing"
                  className="text-[14px] text-white/35 font-medium hover:text-white/70 transition-colors duration-200"
                >
                  View pricing
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-8 flex-wrap">
                {["No contract", "First content in 14 days", "Cancel anytime"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/25 text-[12px]">
                    <svg className="w-3.5 h-3.5 text-[#2997ff]/60" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
