import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import LogoBar from "@/components/LogoBar"
import Results from "@/components/Results"
import HowItWorks from "@/components/HowItWorks"
import Comparison from "@/components/Comparison"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import BlogPreview from "@/components/BlogPreview"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import { HomeSchema } from "@/components/SchemaMarkup"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] overflow-hidden">
      <HomeSchema />
      <Nav />
      <Hero />
      <LogoBar />
      <Results />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <FAQ />
      <BlogPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
