import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Terms of Service — ScriptaSEO",
  description: "The terms governing your use of ScriptaSEO's website and services.",
}

const sections = [
  {
    title: "1. Agreement",
    body: "By using scriptaseo.com or purchasing our services, you agree to these Terms of Service. If you do not agree, please do not use the site or services.",
  },
  {
    title: "2. The service",
    body: "ScriptaSEO provides AI-assisted SEO and content marketing services for B2B SaaS companies, including keyword research, content production, competitor analysis, and reporting. Specific deliverables depend on the plan you select and are described on our pricing page.",
  },
  {
    title: "3. Subscriptions and billing",
    body: "Plans are billed monthly in advance and renew automatically until cancelled. You may cancel at any time with 7 days notice before your next billing date; cancellation stops future charges but does not refund the current period.",
  },
  {
    title: "4. Satisfaction guarantee",
    body: "We offer unlimited revisions on delivered content. If you are unsatisfied with your first month, contact us within 30 days of purchase and we will issue a full refund of that month's payment — no questions asked.",
  },
  {
    title: "5. No guaranteed results",
    body: "We do not guarantee specific search rankings, traffic volumes, or revenue. SEO outcomes depend on factors outside our control, including your niche, competition, and Google's algorithm. We provide our services with reasonable skill and care.",
  },
  {
    title: "6. Client responsibilities",
    body: "You are responsible for the accuracy of information you provide about your product and business, and for publishing content to your own site (or granting us access to your CMS). You must ensure you have rights to any material you provide to us.",
  },
  {
    title: "7. Intellectual property",
    body: "Upon full payment for a billing period, you own the content we produce for you during that period. We retain ownership of our platform, processes, and any pre-existing materials.",
  },
  {
    title: "8. Limitation of liability",
    body: "To the maximum extent permitted by law, ScriptaSEO's total liability for any claim arising from our services is limited to the amount you paid us in the three months preceding the claim. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "9. Termination",
    body: "Either party may terminate service with 7 days written notice. We may also suspend or terminate access if you breach these terms or engage in fraudulent activity.",
  },
  {
    title: "10. Contact",
    body: "Questions about these terms? Email hello@scriptaseo.com.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#000000] relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.12) 0%, rgba(10,132,255,0.03) 55%, transparent 75%)" }} />
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none opacity-30" />

      <Nav />

      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-[38px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-3">Terms of Service</h1>
        <p className="text-white/30 text-[14px] mb-12">Last updated: February 2026</p>

        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-[17px] font-semibold text-white mb-2">{s.title}</h2>
              <p className="text-white/40 text-[15px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
