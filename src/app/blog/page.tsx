import { getAllPosts } from "@/content/posts"
import Nav from "@/components/Nav"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog — SEO Content Strategy for SaaS | ScriptaSEO",
  description: "Expert guides on SaaS SEO, content marketing, and organic growth. Strategies used by companies getting 3x more trials from search.",
  openGraph: {
    title: "ScriptaSEO Blog — SaaS SEO Strategy",
    description: "Expert guides on SaaS SEO, content marketing, and organic growth.",
    url: "https://scriptaseo.com/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#000000] relative overflow-hidden">
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(10,132,255,0.14) 0%, rgba(10,132,255,0.04) 55%, transparent 75%)" }} />
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <Nav />

      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border border-white/[0.07] bg-white/[0.03] rounded-full px-4 py-1.5 mb-6">
            <span className="text-white/45 text-[11px] font-medium tracking-wide">SEO · Strategy · Growth</span>
          </div>
          <h1 className="text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.1] mb-4">
            The ScriptaSEO Blog
          </h1>
          <p className="text-white/35 text-[17px] leading-relaxed max-w-xl">
            Expert guides on SaaS content strategy, keyword research, and building an organic growth engine.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#2997ff]/25 p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-medium text-[#2997ff]/80 bg-[#2997ff]/10 border border-[#2997ff]/15 rounded-full px-3 py-1">
                  {post.category}
                </span>
                <span className="text-[11px] text-white/20">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span className="text-[11px] text-white/20">{post.readTime} min read</span>
              </div>

              <h2 className="text-[19px] font-semibold text-white group-hover:text-[#64d2ff] transition-colors mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-white/35 text-[14px] leading-relaxed line-clamp-2">
                {post.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-[#2997ff]/60 group-hover:text-[#2997ff] transition-colors text-[12px] font-medium">
                Read article
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-[#2997ff]/15 bg-[#2997ff]/5 text-center">
          <h3 className="text-[20px] font-semibold text-white mb-2">Ready to grow your organic traffic?</h3>
          <p className="text-white/35 text-[14px] mb-5">Get a free keyword gap analysis and content plan for your SaaS.</p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-[#0a84ff] hover:bg-[#2997ff] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all shadow-[0_0_24px_rgba(10,132,255,0.35)] hover:shadow-[0_0_40px_rgba(10,132,255,0.55)]"
          >
            Get free SEO audit →
          </Link>
        </div>
      </div>
    </main>
  )
}
