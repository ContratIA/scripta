import { faqs } from "@/content/faqs"

// Server component: <details> deja todas las respuestas en el HTML inicial (indexables) y no necesita JS.
export default function FAQ() {
  return (
    <section id="faq" className="py-40 px-6 bg-[#000000] relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 30% at 50% 50%, rgba(10,132,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[680px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] text-[#2997ff]/70 uppercase tracking-[0.22em] mb-4 font-medium">FAQ</p>
          <h2 className="text-[56px] md:text-[72px] font-semibold tracking-[-0.02em] leading-[1.02] text-white">
            Questions answered
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group glass rounded-2xl overflow-hidden transition-colors duration-200 open:border-[#2997ff]/20 hover:border-white/10"
            >
              <summary className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-[14px] font-medium pr-6 leading-snug transition-colors duration-200 text-white/70 group-hover:text-white group-open:text-white">
                  {f.q}
                </h3>
                <span
                  aria-hidden
                  className="flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[13px] transition-all duration-300 border-white/15 text-white/30 group-open:border-[#2997ff]/40 group-open:text-[#2997ff] group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 border-t border-white/[0.05] pt-4">
                <p className="text-white/45 leading-relaxed text-[13px]">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
