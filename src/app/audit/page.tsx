"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import Logo from "@/components/Logo"
import { motion, AnimatePresence } from "framer-motion"

const plans = [
  { value: "starter", label: "Starter", price: "$997/mo", posts: "4 posts/month" },
  { value: "growth",  label: "Growth",  price: "$1,997/mo", posts: "8 posts/month" },
  { value: "scale",   label: "Scale",   price: "$3,497/mo", posts: "16 posts/month" },
  { value: "unsure",  label: "Not sure yet", price: "", posts: "We'll help you decide" },
]

export default function AuditPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", plan: "growth" })

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-[#000000] overflow-hidden relative">
      {/* Background glows — match homepage */}
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.18) 0%, rgba(10,132,255,0.05) 55%, transparent 75%)" }} />
      <div aria-hidden className="absolute top-1/4 -left-72 w-[500px] h-[500px] rounded-full bg-[#006edb]/10 blur-[150px] pointer-events-none" />
      <div aria-hidden className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full bg-[#006edb]/8 blur-[140px] pointer-events-none" />

      {/* Blueprint grid */}
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      <Nav />

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center min-h-screen px-6"
          >
            <div className="text-center max-w-md">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2997ff]/20 to-[#2997ff]/20 border border-[#2997ff]/25 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(10,132,255,0.2)]">
                <svg className="w-7 h-7 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Audit request received</h1>
              <p className="text-white/40 text-[17px] leading-relaxed mb-8">
                We'll analyze <strong className="text-white/60">{form.website || "your site"}</strong> and send a full SEO opportunity report within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors">
                  ← Back to ScriptaSEO
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg mx-auto px-6 pt-32 pb-24 relative"
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 border border-white/[0.07] bg-white/[0.03] rounded-full px-4 py-1.5 mb-6">
                <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2997ff] animate-pulse" />
                <span className="text-white/45 text-[11px] font-medium tracking-wide">Free · No commitment · 24h turnaround</span>
              </div>
              <h1 className="text-[38px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-4">
                Get your free<br />
                <span className="text-gradient">SEO audit</span>
              </h1>
              <p className="text-white/35 text-[16px] leading-relaxed">
                We'll identify your top 10 keyword opportunities and show you exactly what content will drive organic growth.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="space-y-3.5">

              {/* Name */}
              <div>
                <label className="block text-[12px] font-medium text-white/40 mb-1.5 tracking-wide">Your name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Alex Johnson"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white text-[14px] placeholder:text-white/15 outline-none focus:border-[#2997ff]/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12px] font-medium text-white/40 mb-1.5 tracking-wide">Work email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="alex@yourcompany.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white text-[14px] placeholder:text-white/15 outline-none focus:border-[#2997ff]/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              {/* Company + Website */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-white/40 mb-1.5 tracking-wide">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white text-[14px] placeholder:text-white/15 outline-none focus:border-[#2997ff]/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-white/40 mb-1.5 tracking-wide">Website</label>
                  <input
                    type="text"
                    value={form.website}
                    onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
                    placeholder="acme.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white text-[14px] placeholder:text-white/15 outline-none focus:border-[#2997ff]/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              {/* Plan selector — visual cards instead of dropdown */}
              <div>
                <label className="block text-[12px] font-medium text-white/40 mb-2 tracking-wide">Plan you're interested in</label>
                <div className="grid grid-cols-2 gap-2">
                  {plans.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, plan: p.value }))}
                      className={`text-left px-3.5 py-3 rounded-xl border transition-all duration-200 ${
                        form.plan === p.value
                          ? "border-[#2997ff]/50 bg-[#2997ff]/10 shadow-[inset_0_0_0_1px_rgba(10,132,255,0.15)]"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className={`text-[12px] font-semibold mb-0.5 ${form.plan === p.value ? "text-[#64d2ff]" : "text-white/60"}`}>
                        {p.label} {p.price && <span className="font-normal text-white/30">· {p.price}</span>}
                      </div>
                      <div className="text-[11px] text-white/25">{p.posts}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                className="w-full bg-[#0a84ff] hover:bg-[#2997ff] text-white py-3.5 rounded-xl font-semibold text-[14px] transition-all duration-300 shadow-[0_0_28px_rgba(10,132,255,0.35)] hover:shadow-[0_0_44px_rgba(10,132,255,0.55)] disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : "Get my free audit →"}
              </motion.button>

              {status === "error" && (
                <p className="text-red-400/80 text-[12px] text-center">
                  Something went wrong.{" "}
                  <a href="mailto:hello@scriptaseo.com" className="underline hover:text-red-300 transition-colors">
                    Email us directly
                  </a>
                </p>
              )}

              <p className="text-center text-[11px] text-white/15 pt-1">
                No spam · Audit delivered within 24h · Cancel anytime
              </p>
            </form>

            {/* Social proof strip */}
            <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center justify-center gap-6">
              {[["3.2×", "avg. traffic lift"], ["14 days", "first content live"], ["80%", "cost savings"]].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="text-[15px] font-bold text-[#2997ff] tabular">{val}</div>
                  <div className="text-[10px] text-white/20 mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
