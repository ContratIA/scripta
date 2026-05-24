import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import Results from "@/components/Results"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Nav from "@/components/Nav"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Results />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
