"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import Logo from "./Logo"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 22 })
  const sy = useSpring(y, { stiffness: 300, damping: 22 })

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width  / 2) * 0.25)
        y.set((e.clientY - r.top  - r.height / 2) * 0.25)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="text-[13px] text-white/40 hover:text-white/90 transition-colors duration-200 px-1"
    >
      {children}
    </motion.a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#000000]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_32px_rgba(0,0,0,0.95)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group" aria-label="ScriptaSEO home">
          <Logo size={28} showWordmark={true} className="group-hover:opacity-90 transition-opacity" />
          <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/20 text-[9px] font-medium text-[#2997ff] tracking-wide uppercase">
            Beta
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#results">Results</NavLink>
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>

        {/* CTA */}
        <motion.a
          href="/audit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="text-[13px] px-4 py-2 rounded-full font-medium text-white
            bg-[#0a84ff]/90 hover:bg-[#2997ff]
            border border-[#2997ff]/30 hover:border-[#2997ff]/50
            shadow-[0_0_16px_rgba(10,132,255,0.25)]
            hover:shadow-[0_0_28px_rgba(10,132,255,0.45)]
            transition-all duration-200"
        >
          Free audit →
        </motion.a>
      </div>
    </nav>
  )
}
