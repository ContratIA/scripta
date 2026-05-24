import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

const PROSPECTS_FILE = join(import.meta.dirname, "prospects.json")
const OUTPUT_FILE = join(import.meta.dirname, "emails-ready.json")

const TEMPLATES = {
  "devtools": {
    subject: "Your devtools content is leaving leads on the table",
    body: `Hi,

I noticed {domain} doesn't have SEO content targeting developers searching for {niche} solutions.

Companies like PostHog and Linear get 40-60% of signups from organic search. That's 40-60% of revenue with zero ad spend.

Scripta delivers 8 expert blog posts/month targeting your exact buyer keywords — AI-powered, $1,997/month, first results in 30 days.

Would a 15-min call make sense?`,
    followUp1: "Hey — just following up. Would love to show you the keyword opportunities we found for {domain}.",
    followUp2: "Last reach out — if SEO isn't a priority right now, no worries. Happy to connect whenever it is.",
  },
  "hr tech": {
    subject: "HR tech companies leave 30% of leads to competitors",
    body: `Hi,

HR buyers research for weeks before purchasing. If {domain} isn't ranking for the keywords they search, you're handing leads to competitors.

Scripta builds your SEO moat: 8 expert posts/month targeting HR decision-makers, $1,997/month, first content live in 14 days.

Worth a 15-min call?`,
    followUp1: "Quick follow-up — we identified 47 keyword gaps for {domain} that your competitors are winning. Want to see the report?",
    followUp2: "Last note — happy to share the keyword analysis regardless. Just reply and I'll send it over.",
  },
  "default": {
    subject: "The organic growth channel {domain} isn't using",
    body: `Hi,

SaaS companies with strong SEO content get 3x more trials than those relying on paid ads alone.

{domain} has a real opportunity to own page 1 for keywords your buyers search every day.

Scripta delivers it: 8 expert blog posts/month, keyword strategy, competitor tracking — $1,997/month, no contract.

15 minutes to explore this?`,
    followUp1: "Following up — I put together a quick keyword opportunity report for {domain}. Want me to send it over?",
    followUp2: "Last follow-up, I promise. If organic growth isn't the focus right now, I get it. Happy to reconnect whenever.",
  }
}

function getNicheTemplate(niche) {
  if (niche.includes("devtools") || niche.includes("dev")) return TEMPLATES["devtools"]
  if (niche.includes("hr") || niche.includes("human")) return TEMPLATES["hr tech"]
  return TEMPLATES["default"]
}

function renderTemplate(template, domain, niche) {
  return Object.fromEntries(
    Object.entries(template).map(([k, v]) => [k, v.replace(/{domain}/g, domain).replace(/{niche}/g, niche)])
  )
}

function main() {
  const prospects = JSON.parse(readFileSync(PROSPECTS_FILE, "utf8"))
  
  // Filter out generic domains
  const valid = prospects.filter(p => 
    !["medium.com","linkedin.com","twitter.com","github.com","youtube.com","reddit.com"].includes(p.domain)
  )

  const results = valid.slice(0, 100).map(p => {
    const template = getNicheTemplate(p.niche)
    const email = renderTemplate(template, p.domain, p.niche)
    return {
      domain: p.domain,
      to: `hello@${p.domain}`,
      niche: p.niche,
      ...email,
      status: "ready",
      generatedAt: new Date().toISOString(),
    }
  })

  writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2))
  console.log(`✓ Generated ${results.length} emails → emails-ready.json`)
  
  // Preview first 3
  results.slice(0, 3).forEach(e => {
    console.log(`\n--- ${e.domain} ---`)
    console.log(`Subject: ${e.subject}`)
    console.log(`To: ${e.to}`)
  })
}

main()
