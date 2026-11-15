"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Logo from "@/components/Logo"

const planes = [
  { nombre: "Starter", precio: "997", desc: "Para negocios que quieren empezar a aparecer en Google", destacado: false, features: ["4 artículos de blog SEO/mes", "10 palabras clave locales", "1 página de servicio optimizada", "Informe mensual de posiciones", "Soporte por email"] },
  { nombre: "Growth", precio: "1.997", desc: "Para negocios que quieren dominar su zona", destacado: true, features: ["8 artículos de blog SEO/mes", "20 palabras clave locales", "3 páginas de servicio optimizadas", "Optimización Google Business Profile", "Seguimiento semanal de competidores", "Informe mensual + llamada (30 min)"] },
  { nombre: "Scale", precio: "3.497", desc: "Para negocios con varias sedes o mercados", destacado: false, features: ["16 artículos de blog SEO/mes", "40 palabras clave locales", "6 páginas de servicio optimizadas", "SEO técnico completo", "Estrategia por ubicación", "Llamada semanal (60 min)"] },
]

const pasos = [
  { n: "01", t: "Brief de 10 minutos", d: "Cuéntanos qué haces, a quién atiendes y en qué zona. Sin llamadas eternas ni reuniones innecesarias." },
  { n: "02", t: "Investigación de tu mercado", d: "Analizamos qué buscan tus clientes en Google y qué palabras clave están ganando tus competidores." },
  { n: "03", t: "Contenido y páginas optimizadas", d: "Artículos de blog y páginas de servicio escritos para posicionar y convertir — no relleno genérico." },
  { n: "04", t: "Seguimiento de posiciones", d: "Cada mes ves qué palabras clave suben, qué tráfico llega y de dónde vienen las llamadas." },
]

const faqs = [
  { q: "¿En cuánto tiempo veré resultados?", a: "El primer contenido se publica en 14 días. La mayoría de negocios ven mejoras de posicionamiento en 60–90 días. El SEO es una inversión que se acumula mes a mes." },
  { q: "¿Es contenido genérico de IA?", a: "No. Cada pieza se construye sobre investigación real de palabras clave y de tu competencia local. Escribimos para tu comprador exacto, en tu zona." },
  { q: "¿Necesito saber algo técnico?", a: "No. Nosotros nos encargamos de todo: investigación, redacción, SEO on-page y reporting. Tú solo revisas y apruebas." },
  { q: "¿Hay contrato o permanencia?", a: "Nunca. Mes a mes, cancela cuando quieras. Si no estás contento con el primer mes, te lo devolvemos — sin preguntas." },
  { q: "¿Publicáis en mi web?", a: "Sí. WordPress, Wix, Squarespace o lo que uses. También entregamos los textos listos para publicar." },
  { q: "¿Qué pasa después de pedir la auditoría?", a: "Analizamos tu web en 24 horas, identificamos tus 10 mejores oportunidades y te enviamos un informe. Sin compromiso." },
]

export default function SeoNegociosPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", plan: "growth" })

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-[#000000] overflow-hidden relative">
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.16) 0%, rgba(10,132,255,0.04) 55%, transparent 75%)" }} />
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div aria-hidden className="absolute top-1/4 -left-72 w-[560px] h-[560px] rounded-full bg-[#006edb]/10 blur-[160px] pointer-events-none" />

      <header className="fixed top-0 inset-x-0 z-50 bg-[#000000]/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="ScriptaSEO inicio">
            <Logo size={28} showWordmark={true} />
          </Link>
          <a href="#solicitar" className="text-[13px] px-4 py-2 rounded-full font-medium text-white bg-[#0a84ff]/90 hover:bg-[#2997ff] border border-[#2997ff]/30 transition-all">
            Auditoría gratuita →
          </a>
        </div>
      </header>

      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 glass-accent rounded-full px-4 py-1.5 mb-8">
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2997ff] animate-pulse" />
            <span className="text-white/50 text-[11px] font-medium">SEO para negocios locales · Resultados en 14 días</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="text-[44px] sm:text-[58px] md:text-[70px] font-semibold tracking-[-0.02em] leading-[0.95] mb-7">
            <span className="text-white">Consigue clientes</span>
            <br />
            <span className="text-gradient-hero">de Google, sin anuncios.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="text-[17px] md:text-[19px] text-white/40 max-w-[600px] mx-auto mb-10 leading-[1.7]">
            ScriptaSEO posiciona tu negocio en Google con contenido SEO optimizado para tu zona. Primeros resultados en 14 días. Desde 997€/mes, sin permanencia.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href="#solicitar" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[14px] font-semibold text-white bg-[#0a84ff] hover:bg-[#2997ff] shadow-[0_0_32px_rgba(10,132,255,0.4)] hover:shadow-[0_0_60px_rgba(10,132,255,0.65)] transition-all btn-glow">
              Solicitar auditoría gratuita →
            </a>
            <a href="#precios" className="text-[14px] text-white/35 hover:text-white/70 transition-colors">Ver precios</a>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 max-w-[420px] mx-auto border-t border-white/[0.06] pt-8">
            {[["3.2×", "Más tráfico de media"], ["14 días", "Primer contenido"], ["80%", "Ahorro vs agencia"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-[24px] font-bold text-gradient-green tabular">{v}</div>
                <div className="text-[11px] text-white/25 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">Cómo funciona</p>
            <h2 className="text-[38px] md:text-[48px] font-semibold tracking-[-0.02em] text-white leading-tight">De cero a primeras posiciones</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {pasos.map((p) => (
              <div key={p.n} className="glass rounded-2xl p-7">
                <div className="text-[28px] font-bold text-[#2997ff]/60 mb-4 mono">{p.n}</div>
                <h3 className="text-[16px] font-semibold text-white mb-2">{p.t}</h3>
                <p className="text-white/35 text-[13px] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precios" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">Precios</p>
            <h2 className="text-[38px] md:text-[48px] font-semibold tracking-[-0.02em] text-white leading-tight">Sin sorpresas. Sin permanencia.</h2>
            <p className="text-white/35 text-[16px] max-w-md mx-auto mt-4">Garantía de devolución de 30 días en todos los planes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {planes.map((p) => (
              <div key={p.nombre} className={p.destacado ? "border-animated flex-1 flex flex-col" : "glass rounded-2xl p-7 flex flex-col flex-1"}>
                {p.destacado ? (
                  <div className="flex-1 flex flex-col bg-[#0B0B1E] rounded-[calc(1.25rem-1px)] p-7">
                    <div className="text-[11px] font-semibold text-[#64d2ff] mb-1 tracking-wide">MÁS POPULAR</div>
                    <div className="text-[12px] font-semibold text-white/30 mb-1 tracking-wide">{p.nombre}</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-[44px] font-bold text-white leading-none tabular">{p.precio}€</span>
                      <span className="text-[13px] text-white/30">/mes</span>
                    </div>
                    <p className="text-[13px] text-white/35 leading-relaxed mb-7">{p.desc}</p>
                    <a href="#solicitar" className="block text-center py-3 rounded-xl font-semibold text-[13px] mb-7 bg-[#0a84ff] hover:bg-[#2997ff] text-white shadow-[0_0_20px_rgba(10,132,255,0.35)] transition-all">Empezar con {p.nombre}</a>
                    <ul className="space-y-3 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[13px]">
                          <svg className="w-4 h-4 text-[#2997ff] mt-[1px] flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <span className="text-white/60">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <>
                    <div className="text-[12px] font-semibold text-white/30 mb-1 tracking-wide">{p.nombre}</div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-[44px] font-bold text-white leading-none tabular">{p.precio}€</span>
                      <span className="text-[13px] text-white/25">/mes</span>
                    </div>
                    <p className="text-[13px] text-white/30 leading-relaxed mb-7">{p.desc}</p>
                    <a href="#solicitar" className="block text-center py-3 rounded-xl font-semibold text-[13px] mb-7 bg-white/[0.07] hover:bg-white/[0.11] text-white border border-white/[0.09] transition-all">Empezar con {p.nombre}</a>
                    <ul className="space-y-3 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[13px]">
                          <svg className="w-4 h-4 text-white/25 mt-[1px] flex-shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <span className="text-white/40">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">Preguntas frecuentes</p>
            <h2 className="text-[38px] md:text-[44px] font-semibold tracking-[-0.02em] text-white leading-tight">Respuestas claras</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((f) => (
              <details key={f.q} className="glass rounded-2xl overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="text-[14px] font-medium text-white/70 group-open:text-white pr-6">{f.q}</span>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full border border-white/15 text-white/30 flex items-center justify-center text-[13px] group-open:rotate-45 transition-all">+</span>
                </summary>
                <div className="px-6 pb-5 border-t border-white/[0.05] pt-4">
                  <p className="text-white/45 leading-relaxed text-[13px]">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="solicitar" className="py-32 px-6">
        <div className="max-w-xl mx-auto">
          <div className="rounded-3xl border border-[#2997ff]/15 bg-gradient-to-br from-[#003e7e]/25 via-[#0B0B1E] to-[#003e7e]/20 p-8 md:p-10">
            {status === "done" ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2997ff]/20 to-[#2997ff]/20 border border-[#2997ff]/25 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6 text-[#2997ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Auditoría recibida</h2>
                <p className="text-white/40 text-[15px]">Analizaremos {form.website || "tu web"} y te enviaremos un informe completo en 24 horas.</p>
              </div>
            ) : (
              <>
                <h2 className="text-[28px] font-bold text-white mb-2">Auditoría SEO gratuita</h2>
                <p className="text-white/40 text-[14px] mb-7">Te mostramos las palabras clave que tus competidores están ganando y tú no. Sin compromiso.</p>
                <form onSubmit={submit} className="space-y-4">
                  <input required type="text" placeholder="Tu nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#2997ff]/50 transition-colors" />
                  <input required type="email" placeholder="Tu email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#2997ff]/50 transition-colors" />
                  <input type="text" placeholder="Nombre del negocio (opcional)" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#2997ff]/50 transition-colors" />
                  <input type="text" placeholder="Tu página web (ej: tudominio.com)" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-[#2997ff]/50 transition-colors" />
                  <select value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} className="w-full bg-[#0B0B1E] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-[#2997ff]/50 transition-colors">
                    <option value="growth">Plan Growth — 1.997€/mes (8 artículos)</option>
                    <option value="starter">Plan Starter — 997€/mes (4 artículos)</option>
                    <option value="scale">Plan Scale — 3.497€/mes (16 artículos)</option>
                    <option value="unsure">No estoy seguro todavía</option>
                  </select>
                  <button type="submit" disabled={status === "loading"} className="w-full bg-[#0a84ff] hover:bg-[#2997ff] text-white py-3.5 rounded-xl font-semibold text-[14px] transition-all shadow-[0_0_28px_rgba(10,132,255,0.35)] disabled:opacity-50">
                    {status === "loading" ? "Enviando..." : "Obtener mi auditoría gratuita →"}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400/80 text-[12px] text-center">Algo salió mal. Escríbenos a <a href="mailto:hello@scriptaseo.com" className="underline">hello@scriptaseo.com</a>.</p>
                  )}
                  <p className="text-center text-[11px] text-white/20">Sin spam · Auditoría en 24h · Cancela cuando quieras</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-10 text-center">
        <p className="text-white/25 text-[13px]">© 2026 ScriptaSEO. Todos los derechos reservados.</p>
        <div className="mt-3 flex items-center justify-center gap-5 text-[12px]">
          <Link href="/" className="text-white/30 hover:text-white/60">Web en inglés</Link>
          <Link href="/privacy" className="text-white/30 hover:text-white/60">Privacidad</Link>
          <Link href="/terms" className="text-white/30 hover:text-white/60">Términos</Link>
        </div>
      </footer>
    </main>
  )
}





