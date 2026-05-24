"use client"
import { useState } from "react"

const faqs = [
  {
    q: "How is this different from a regular SEO agency?",
    a: "Traditional agencies charge $5k-15k/month with 30-60 day ramp times and account managers you rarely hear from. Scripta delivers AI-powered content that's faster, more data-driven, and a fraction of the cost — with transparent reporting.",
  },
  {
    q: "How quickly will I see results?",
    a: "First content goes live within 14 days. SEO compounds over time — most clients see meaningful traffic increases within 60-90 days. We optimize as we go, adapting to what's working.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We handle everything: keyword research, writing, on-page optimization, reporting. You just review and publish with one click from your dashboard.",
  },
  {
    q: "What if I'm not satisfied with the content?",
    a: "We offer unlimited revisions on every piece. If you're not happy after the first month, we'll refund it — no questions asked.",
  },
  {
    q: "Can you publish directly to my CMS?",
    a: "Yes. We integrate with WordPress, Webflow, Ghost, Contentful, and most major CMS platforms. We can publish directly or send ready-to-upload files.",
  },
  {
    q: "Is there a contract?",
    a: "Never. Month-to-month, cancel anytime. We earn your business every month.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Questions answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-zinc-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-medium text-zinc-900 pr-4">{f.q}</span>
                <span className={`text-zinc-400 text-xl flex-shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-zinc-500 leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
