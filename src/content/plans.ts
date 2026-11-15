export type Plan = {
  id: "starter" | "growth" | "scale"
  name: string
  price: number
  desc: string
  features: string[]
  cta: string
  href: string
  highlight: boolean
  badge?: string
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 997,
    desc: "For early-stage startups building organic presence from zero",
    features: [
      "4 SEO blog posts/month",
      "10 keyword opportunities",
      "Monthly competitor snapshot",
      "Basic performance report",
      "Email support",
    ],
    cta: "Start with Starter",
    href: "/audit?plan=starter",
    highlight: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 1997,
    desc: "For funded startups replacing their content team with AI",
    features: [
      "8 SEO blog posts/month",
      "20 keyword opportunities",
      "Weekly competitor tracking",
      "On-page SEO optimization",
      "1 landing page copy update",
      "Internal linking strategy",
      "Monthly growth call (30 min)",
      "Slack + email support",
    ],
    cta: "Start with Growth",
    href: "/audit?plan=growth",
    highlight: true,
    badge: "Most popular",
  },
  {
    id: "scale",
    name: "Scale",
    price: 3497,
    desc: "For Series A+ companies that need to dominate search",
    features: [
      "16 SEO blog posts/month",
      "40 keyword opportunities",
      "Daily competitor monitoring",
      "Full technical SEO audit",
      "3 landing page copy updates",
      "Programmatic SEO setup",
      "Weekly growth call (60 min)",
      "Priority Slack support",
    ],
    cta: "Start with Scale",
    href: "/audit?plan=scale",
    highlight: false,
  },
]
