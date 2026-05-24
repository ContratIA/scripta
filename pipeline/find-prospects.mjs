/**
 * Prospect finder: busca SaaS companies con Brave Search
 * Targets: funded startups with $1M-$50M ARR, tech stack visible, no big SEO agency
 * Output: prospects.json con 500 leads listos para cold email
 */
import { writeFileSync, readFileSync, existsSync } from "fs"
import { join } from "path"

const BRAVE_KEY = process.env.BRAVE_API_KEY
const OUTPUT = join(import.meta.dirname, "prospects.json")

const QUERIES = [
  "site:linkedin.com/company SaaS startup \"Series A\" \"head of growth\" 2025",
  "\"YC\" OR \"Y Combinator\" SaaS product \"blog\" site:twitter.com 2025",
  "inurl:pricing SaaS \"per month\" -wordpress -shopify -medium",
  "\"we're hiring\" \"content marketer\" OR \"SEO\" SaaS startup site:linkedin.com",
  "\"powered by\" OR \"built with\" nextjs OR react SaaS tool pricing",
]

const NICHES = [
  "devtools saas",
  "hr tech saas startup",
  "fintech saas b2b",
  "legal tech saas",
  "sales enablement saas",
  "marketing automation saas",
  "project management saas",
  "data analytics saas startup",
]

async function searchBrave(query) {
  if (!BRAVE_KEY) {
    console.log("No BRAVE_API_KEY, using mock data")
    return getMockProspects()
  }
  const url = `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=20&result_filter=web`
  const res = await fetch(url, { headers: { "X-Subscription-Token": BRAVE_KEY, "Accept": "application/json" } })
  const data = await res.json()
  return data.web?.results || []
}

function getMockProspects() {
  return [
    { url: "https://linear.app", title: "Linear — Project Management" },
    { url: "https://retool.com", title: "Retool — Internal Tools" },
    { url: "https://clerk.com", title: "Clerk — Auth for SaaS" },
    { url: "https://cal.com", title: "Cal.com — Scheduling" },
    { url: "https://posthog.com", title: "PostHog — Product Analytics" },
  ]
}

function extractDomain(url) {
  try { return new URL(url).hostname.replace("www.", "") } catch { return null }
}

async function main() {
  const prospects = []
  const seen = new Set()

  for (const niche of NICHES) {
    const query = `${niche} startup "blog" OR "resources" -enterprise -fortune500`
    console.log(`Searching: ${query}`)
    try {
      const results = await searchBrave(query)
      for (const r of results) {
        const domain = extractDomain(r.url)
        if (domain && !seen.has(domain) && !domain.includes("linkedin") && !domain.includes("twitter")) {
          seen.add(domain)
          prospects.push({
            domain,
            title: r.title || "",
            url: r.url,
            niche,
            email: `hello@${domain}`, // placeholder, enriched in next step
            status: "pending",
            addedAt: new Date().toISOString(),
          })
        }
      }
    } catch (e) {
      console.error(`Error for ${niche}:`, e.message)
    }
    await new Promise(r => setTimeout(r, 1000)) // rate limit
  }

  writeFileSync(OUTPUT, JSON.stringify(prospects, null, 2))
  console.log(`✓ Found ${prospects.length} prospects → prospects.json`)
}

main()
