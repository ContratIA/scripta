import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Scripta — AI Growth Team for SaaS",
  description: "Replace your SEO and content team with AI. 8 expert blog posts, keyword strategy, competitor tracking — delivered every month for less than one junior hire.",
  openGraph: {
    title: "Scripta — AI Growth Team for SaaS",
    description: "AI-powered SEO content. Fraction of the cost of a team.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
