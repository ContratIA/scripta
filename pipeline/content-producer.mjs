/**
 * Content producer 24/7: genera blog posts SEO para clientes activos
 * Se ejecuta cada noche vía schedule
 * Por cada cliente activo: keyword research → outline → full post → entrega
 */
import { writeFileSync, mkdirSync, existsSync } from "fs"
import { join } from "path"
import { spawn } from "child_process"

const CLAUDE = "C:/Users/eloym/.vscode/extensions/anthropic.claude-code-2.1.145-win32-x64/resources/native-binary/claude.exe"
const OUTPUT_DIR = join(import.meta.dirname, "content-output")

if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true })

function runClaude(prompt, model = "claude-sonnet-4-6") {
  return new Promise((resolve, reject) => {
    const proc = spawn(CLAUDE, ["--print", "--no-color", "--model", model, "-p", prompt], { shell: false })
    let out = ""
    proc.stdout.on("data", d => out += d.toString())
    proc.on("close", code => code === 0 ? resolve(out.trim()) : reject(new Error(`Exit ${code}`)))
  })
}

async function researchKeywords(clientDomain, niche) {
  return runClaude(`You are an expert SEO strategist.

Client: ${clientDomain} (${niche})
Task: Find 10 high-value, low-competition keywords this company should rank for.

Focus on:
- Buyer-intent keywords (people ready to buy)
- Problem-aware keywords (people searching for solutions)  
- Comparison keywords (vs competitors)
- Long-tail keywords with clear search intent

Return as JSON array:
[{"keyword": "...", "intent": "buyer|problem|comparison", "difficulty": "low|medium", "estimatedMonthlySearches": 000}]`)
}

async function generateBlogPost(keyword, clientDomain, niche) {
  const outline = await runClaude(`Create a detailed SEO blog post outline for:
Keyword: "${keyword}"
Client: ${clientDomain} (${niche})

Include: H1, meta description, H2s with H3 subpoints, word count target per section.
Make it comprehensive enough to rank #1.`)

  const post = await runClaude(`Write a complete, expert-level SEO blog post:

Keyword: "${keyword}"
Outline: ${outline}

Requirements:
- 2000-2500 words
- Expert tone, data-driven
- Include statistics and examples
- Natural keyword integration (avoid stuffing)
- Strong intro hook, clear sections, compelling CTA
- Format in Markdown`)

  return { keyword, outline, post }
}

// Mock client for demo (replace with real client DB)
const DEMO_CLIENTS = [
  { id: "demo", domain: "example-saas.com", niche: "project management SaaS", postsPerMonth: 4 }
]

async function main() {
  const today = new Date().toISOString().split("T")[0]
  console.log(`\n🚀 Content producer starting — ${today}`)

  for (const client of DEMO_CLIENTS) {
    console.log(`\nProcessing client: ${client.domain}`)
    
    const clientDir = join(OUTPUT_DIR, client.id, today)
    mkdirSync(clientDir, { recursive: true })

    // Step 1: Keyword research
    console.log("  → Researching keywords...")
    let keywords = []
    try {
      const kw = await researchKeywords(client.domain, client.niche)
      const match = kw.match(/\[[\s\S]*\]/)
      keywords = match ? JSON.parse(match[0]).slice(0, 2) : [] // 2 posts per run
    } catch (e) {
      console.error("  ✗ Keyword research failed:", e.message)
      keywords = [{ keyword: `best ${client.niche} tools 2026`, intent: "buyer" }]
    }

    // Step 2: Generate posts
    for (const kw of keywords) {
      console.log(`  → Writing: "${kw.keyword}"`)
      try {
        const { post } = await generateBlogPost(kw.keyword, client.domain, client.niche)
        const filename = kw.keyword.replace(/[^a-z0-9]/gi, "-").toLowerCase() + ".md"
        writeFileSync(join(clientDir, filename), post)
        console.log(`  ✓ Saved: ${filename}`)
      } catch (e) {
        console.error(`  ✗ Failed: ${e.message}`)
      }
    }
  }

  console.log(`\n✓ Content production complete. Output: ${OUTPUT_DIR}`)
}

main()
