import { getPost, getAllPosts } from "@/content/posts"
import Nav from "@/components/Nav"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | ScriptaSEO Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://scriptaseo.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  }
}

function renderContent(content: string) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-[22px] font-bold text-white mt-10 mb-4 tracking-tight">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold text-white/80 text-[15px] leading-relaxed mb-3">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith("| ") && line.includes("|")) {
      // Table
      const tableLines = [line]
      i++
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }
      const [header, , ...rows] = tableLines
      const headers = header.split("|").filter(Boolean).map(h => h.trim())
      const data = rows.map(r => r.split("|").filter(Boolean).map(c => c.trim()))
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08]">
                {headers.map((h, j) => (
                  <th key={j} className="text-left py-2.5 px-3 text-white/50 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, ri) => (
                <tr key={ri} className="border-b border-white/[0.04]">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2.5 px-3 text-white/60">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.startsWith("- ")) {
      const listItems = [line.slice(2)]
      i++
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-4">
          {listItems.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g)
            return (
              <li key={j} className="text-white/50 text-[15px] leading-relaxed flex gap-2">
                <span className="text-[#2997ff] mt-1.5 flex-shrink-0">·</span>
                <span>
                  {parts.map((part, pi) => pi % 2 === 1 ? <strong key={pi} className="text-white/75">{part}</strong> : part)}
                </span>
              </li>
            )
          })}
        </ul>
      )
      continue
    } else if (line.trim() === "") {
      // skip blank
    } else {
      // Regular paragraph — parse inline bold and links
      const parts = line.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g)
      elements.push(
        <p key={i} className="text-white/50 text-[15px] leading-[1.8] mb-4">
          {parts.map((part, pi) => {
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
            if (linkMatch) {
              return (
                <Link key={pi} href={linkMatch[2]} className="text-[#2997ff] hover:text-[#64d2ff] underline underline-offset-2 transition-colors">
                  {linkMatch[1]}
                </Link>
              )
            }
            const boldMatch = part.match(/^\*\*(.*)\*\*$/)
            if (boldMatch) return <strong key={pi} className="text-white/75 font-semibold">{boldMatch[1]}</strong>
            return part
          })}
        </p>
      )
    }

    i++
  }

  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "ScriptaSEO" },
    publisher: { "@type": "Organization", name: "ScriptaSEO", url: "https://scriptaseo.com" },
    url: `https://scriptaseo.com/blog/${post.slug}`,
  }

  return (
    <main className="min-h-screen bg-[#000000] relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.12) 0%, rgba(10,132,255,0.03) 55%, transparent 75%)" }} />
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none opacity-30" />

      <Nav />

      <article className="max-w-2xl mx-auto px-6 pt-36 pb-24 relative">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-[12px] text-white/25 hover:text-white/60 transition-colors mb-10">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-medium text-[#2997ff]/80 bg-[#2997ff]/10 border border-[#2997ff]/15 rounded-full px-3 py-1">
            {post.category}
          </span>
          <span className="text-[11px] text-white/20">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span className="text-[11px] text-white/20">{post.readTime} min read</span>
        </div>

        <h1 className="text-[36px] sm:text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-5">
          {post.title}
        </h1>
        <p className="text-white/40 text-[17px] leading-relaxed mb-10 pb-10 border-b border-white/[0.06]">
          {post.description}
        </p>

        {/* Content */}
        <div className="prose-container">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-[#2997ff]/15 bg-[#2997ff]/5 text-center">
          <h3 className="text-[20px] font-semibold text-white mb-2">Get your free SEO audit</h3>
          <p className="text-white/35 text-[14px] mb-5">
            We'll identify your top keyword opportunities and show you exactly what content will drive organic growth.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-[#0a84ff] hover:bg-[#2997ff] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all shadow-[0_0_24px_rgba(10,132,255,0.35)] hover:shadow-[0_0_40px_rgba(10,132,255,0.55)]"
          >
            Get free audit →
          </Link>
        </div>
      </article>
    </main>
  )
}
