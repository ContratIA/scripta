"use client"
import dynamic from "next/dynamic"
import { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion"

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false })

/* ── Animated counter ─────────────────────────────────────────────── */
function CountUp({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref  = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2400
    const start    = performance.now()
    const tick = (now: number) => {
      const p      = Math.min((now - start) / duration, 1)
      const eased  = 1 - Math.pow(1 - p, 4)
      setVal(parseFloat((to * eased).toFixed(decimals)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, decimals])

  return (
    <span ref={ref} className="tabular">
      {decimals > 0 ? val.toFixed(decimals) : Math.floor(val)}{suffix}
    </span>
  )
}

/* ── Magnetic CTA ─────────────────────────────────────────────────── */
function MagneticCTA({ href, primary = true, children }: { href: string; primary?: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const bx  = useMotionValue(0)
  const by  = useMotionValue(0)
  const sx  = useSpring(bx, { stiffness: 260, damping: 20 })
  const sy  = useSpring(by, { stiffness: 260, damping: 20 })

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={(e) => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        bx.set((e.clientX - r.left - r.width  / 2) * 0.3)
        by.set((e.clientY - r.top  - r.height / 2) * 0.3)
      }}
      onMouseLeave={() => { bx.set(0); by.set(0) }}
      className={
        primary
          ? "group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-semibold text-white bg-[#0a84ff] hover:bg-[#2997ff] shadow-[0_0_28px_rgba(10,132,255,0.38)] hover:shadow-[0_0_52px_rgba(10,132,255,0.6)] transition-all duration-300 btn-glow will-change-transform"
          : "group inline-flex items-center gap-1.5 text-[14px] font-medium text-white/35 hover:text-white/75 transition-colors duration-200"
      }
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
        {primary ? "→" : "↓"}
      </span>
    </motion.a>
  )
}

/* ── 3D Dashboard Card ────────────────────────────────────────────── */
function DashboardCard() {
  const wrap = useRef<HTMLDivElement>(null)
  const mx   = useMotionValue(0.5)
  const my   = useMotionValue(0.5)
  const rotX = useSpring(useTransform(my, [0, 1], [6, -6]),  { stiffness: 65, damping: 22 })
  const rotY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 65, damping: 22 })

  const metrics = [
    { label: "Keywords ranking", value: "127", change: "+43%", color: "text-[#2997ff]", bar: "from-[#2997ff] to-[#2997ff]", bg: "from-[#2997ff]/10 to-[#006edb]/5", pct: 74 },
    { label: "Monthly visitors",  value: "34.2k",  change: "+3.2×",       color: "text-emerald-400",  bar: "from-emerald-500 to-green-500",  bg: "from-emerald-500/10 to-green-600/5",  pct: 87 },
    { label: "Revenue impact",    value: "$1.5M",  change: "attributed",  color: "text-[#2997ff]",   bar: "from-[#2997ff] to-[#2997ff]",  bg: "from-[#2997ff]/10 to-[#006edb]/5",  pct: 61 },
  ]

  const pipeline = [
    { label: "Blog posts published",   pct: 100, color: "from-[#2997ff] to-[#2997ff]" },
    { label: "Keywords targeted",      pct: 78,  color: "from-emerald-500 to-green-500" },
    { label: "Competitor gaps filled", pct: 62,  color: "from-[#2997ff] to-[#2997ff]" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Halo */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-3xl blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(10,132,255,0.18) 0%, rgba(10,132,255,0.04) 60%, transparent 100%)" }}
        />

        {/* 3D wrapper */}
        <div
          ref={wrap}
          style={{ perspective: "1200px" }}
          onMouseMove={(e) => {
            if (!wrap.current) return
            const r = wrap.current.getBoundingClientRect()
            mx.set((e.clientX - r.left) / r.width)
            my.set((e.clientY - r.top)  / r.height)
          }}
          onMouseLeave={() => { mx.set(0.5); my.set(0.5) }}
        >
          <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }} className="relative">

            {/* Depth layers */}
            <div aria-hidden className="absolute top-4 inset-x-6 -bottom-4 -z-10 rounded-[20px] bg-[#003e7e]/20 border border-[#2997ff]/10 blur-[2px]" />
            <div aria-hidden className="absolute top-8 inset-x-12 -bottom-8 -z-20 rounded-[20px] bg-[#003e7e]/10 blur-[5px]" />

            {/* Card */}
            <div className="relative rounded-[20px] border border-white/[0.08] bg-[#0d0d0d]/95 backdrop-blur-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.95)]">

              {/* Browser chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-black/30">
                <div className="flex gap-1.5" aria-hidden>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.05]">
                  <div aria-hidden className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-white/30 mono tracking-tight">dashboard.scriptaseo.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-[18px] h-[18px] rounded-md bg-gradient-to-br from-[#2997ff] to-[#006edb] flex items-center justify-center shadow-[0_0_8px_rgba(10,132,255,0.5)]">
                    <span className="text-white text-[8px] font-bold">S</span>
                  </div>
                  <span className="text-[10px] text-white/35 font-medium">ScriptaSEO</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-4 grid grid-cols-3 gap-2.5">
                {metrics.map((m) => (
                  <div key={m.label} className={`bg-gradient-to-br ${m.bg} border border-white/[0.05] rounded-[14px] p-3`}>
                    <div className="text-[9px] text-white/30 mb-2 font-medium tracking-wide">{m.label}</div>
                    <div className={`text-lg font-bold tabular mono ${m.color} leading-none`}>{m.value}</div>
                    <div className="text-[9px] text-white/25 mt-1">{m.change}</div>
                  </div>
                ))}
              </div>

              {/* Pipeline */}
              <div className="px-4 pb-4 space-y-2.5">
                <div className="text-[8px] text-white/20 uppercase tracking-[0.18em] mb-2 mono">Content pipeline · May 2026</div>
                {pipeline.map((b, idx) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-[9px] text-white/25 mb-1">
                      <span>{b.label}</span>
                      <span className="tabular mono">{b.pct}%</span>
                    </div>
                    <div className="h-[3px] bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${b.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${b.pct}%` }}
                        transition={{ duration: 1.8, delay: 0.9 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 border-t border-white/[0.04] bg-black/15 flex items-center justify-between">
                <span className="text-[9px] text-white/15 mono">Updated 2 min ago</span>
                <div className="flex items-center gap-1">
                  <div aria-hidden className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] text-emerald-400/50 mono">Live</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Hero ─────────────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-32 pb-24"
      aria-label="Hero"
    >
      {/* Three.js particles — absolute fill */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
      </div>

      {/* Subtle grid */}
      <div aria-hidden className="absolute inset-0 z-[1] grid-bg pointer-events-none" />

      {/* Single soft glow — top */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 z-[2] pointer-events-none"
        style={{
          width: "1100px",
          height: "560px",
          background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.10) 0%, transparent 60%)",
        }}
      />

      {/* ── Text ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.p {...fadeUp(0)} className="text-[15px] font-medium text-[#2997ff] mb-7 tracking-tight">
          AI-powered SEO for B2B SaaS
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="text-[52px] sm:text-[72px] lg:text-[96px] xl:text-[112px] font-semibold tracking-[-0.035em] leading-[1.0] text-white mb-8"
        >
          SEO that pays
          <br />
          <span className="text-gradient-hero">for itself.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="text-[19px] md:text-[22px] text-[#a1a1a6] max-w-[560px] mx-auto leading-[1.5]"
        >
          Expert, keyword-targeted content — delivered every month, for less than one junior hire.
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-11">
          <a
            href="/audit"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#0a84ff] hover:bg-[#2997ff] text-white text-[17px] font-medium transition-colors duration-200"
          >
            Get your free audit
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1 px-5 py-4 text-[17px] font-medium text-[#2997ff] hover:underline"
          >
            See pricing <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>

      {/* ── Product visual ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[900px] mx-auto px-6 mt-20"
      >
        <DashboardCard />
      </motion.div>
    </section>
  )
}
