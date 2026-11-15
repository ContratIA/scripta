import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy — ScriptaSEO",
  description: "How ScriptaSEO collects, uses, and protects your personal data.",
}

const sections = [
  {
    title: "1. Who we are",
    body: "ScriptaSEO (\"we\", \"us\") operates the website scriptaseo.com. We provide AI-powered SEO and content services for B2B SaaS companies.",
  },
  {
    title: "2. Data we collect",
    body: "When you request a free SEO audit or contact us, we collect the information you submit: name, email address, company, website URL, and the plan you're interested in. We also collect standard technical data such as IP address and referrer for security and rate-limiting.",
  },
  {
    title: "3. How we use your data",
    body: "We use your information solely to respond to your inquiry, deliver the SEO audit you requested, and — if you become a customer — to provide and bill for our services. We do not sell or rent your personal data to third parties.",
  },
  {
    title: "4. Payment processing",
    body: "Payments are processed by Stripe. When you pay, Stripe collects and processes your payment details directly; we do not store your full card number on our servers. Stripe's use of your data is governed by Stripe's own privacy policy.",
  },
  {
    title: "5. Third-party services",
    body: "We use a small number of service providers to operate our business: Stripe (payments), Resend (transactional email), and Supabase (data storage). Each processes data only as needed to provide their service.",
  },
  {
    title: "6. Data retention",
    body: "We retain lead and customer data for as long as needed to provide our services and comply with legal obligations. You may request deletion of your personal data at any time by emailing hello@scriptaseo.com.",
  },
  {
    title: "7. Your rights (GDPR)",
    body: "If you are in the EEA or UK, you have the right to access, correct, export, and delete your personal data, and to object to or restrict its processing. To exercise any of these rights, contact hello@scriptaseo.com.",
  },
  {
    title: "8. Cookies",
    body: "This site uses only essential, functional cookies (e.g., for security and session handling). We do not use third-party advertising or tracking cookies.",
  },
  {
    title: "9. Contact",
    body: "Questions about this policy? Email hello@scriptaseo.com.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#000000] relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.12) 0%, rgba(10,132,255,0.03) 55%, transparent 75%)" }} />
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none opacity-30" />

      <Nav />

      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-[38px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-3">Privacy Policy</h1>
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
