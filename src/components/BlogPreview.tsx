import Link from "next/link"
import { getAllPosts } from "@/content/posts"

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="relative py-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/[0.07] bg-white/[0.03] rounded-full px-4 py-1.5 mb-5">
              <span className="text-white/45 text-[11px] font-medium tracking-wide">From the blog</span>
            </div>
            <h2 className="text-[34px] font-bold text-white tracking-[-0.03em] leading-tight">
              SEO strategy for SaaS
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-[#2997ff] hover:text-[#64d2ff] font-medium transition-colors"
          >
            All articles
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#2997ff]/20 p-5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-medium text-[#2997ff]/70 bg-[#2997ff]/8 border border-[#2997ff]/12 rounded-full px-2.5 py-0.5">
                  {post.category}
                </span>
                <span className="text-[10px] text-white/18">{post.readTime} min</span>
              </div>
              <h3 className="text-[15px] font-semibold text-white/85 group-hover:text-white transition-colors leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-white/30 text-[12px] leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <div className="mt-4 text-[11px] text-[#2997ff]/50 group-hover:text-[#2997ff] transition-colors flex items-center gap-1">
                Read
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
