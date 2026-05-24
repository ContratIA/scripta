"use client"
import { useState, useEffect } from "react"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
          <span className="font-semibold text-zinc-900 text-sm tracking-tight">Scripta</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#results" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Results</a>
          <a href="#how" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">How it works</a>
          <a href="#pricing" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Pricing</a>
        </div>
        <a
          href="#pricing"
          className="bg-zinc-900 text-white text-sm px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors font-medium"
        >
          Start today →
        </a>
      </div>
    </nav>
  )
}
