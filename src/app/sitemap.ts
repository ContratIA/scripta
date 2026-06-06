import { MetadataRoute } from "next"
import { getAllPosts } from "@/content/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://scriptaseo.com"
  const now = new Date()
  const posts = getAllPosts()

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/audit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ...posts.map(p => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]
}
