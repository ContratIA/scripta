import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ScrollProgress from "@/components/ScrollProgress"
import SchemaMarkup from "@/components/SchemaMarkup"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scriptaseo.com"),
  title: {
    default: "ScriptaSEO — AI SEO & Content Marketing for SaaS",
    template: "%s | ScriptaSEO",
  },
  description: "Replace your SEO agency with AI. ScriptaSEO delivers expert blog posts, keyword research, competitor tracking, and on-page optimization every month — for less than one junior hire.",
  keywords: [
    "AI SEO agency", "SaaS content marketing", "SEO automation", "B2B SaaS SEO",
    "AI content marketing", "SEO content service", "organic traffic growth SaaS",
    "keyword research automation", "programmatic SEO", "SEO blog writing service",
    "replace SEO agency", "AI-powered SEO", "SaaS growth marketing",
    "content marketing ROI", "SEO ROI", "search engine optimization SaaS",
  ],
  authors: [{ name: "ScriptaSEO" }],
  creator: "ScriptaSEO",
  openGraph: {
    title: "ScriptaSEO — AI SEO & Content Marketing for SaaS",
    description: "AI-powered SEO content. Expert blog posts, keyword research, competitor tracking — delivered every month for less than one junior hire.",
    type: "website",
    url: "https://www.scriptaseo.com",
    siteName: "ScriptaSEO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScriptaSEO — AI SEO & Content Marketing for SaaS",
    description: "Replace your SEO agency with AI. Expert content delivered monthly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://www.scriptaseo.com" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="bg-black font-[family-name:var(--font-geist-sans)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:text-sm"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
