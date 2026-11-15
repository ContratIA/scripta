import { plans } from "@/content/plans"
import { faqs } from "@/content/faqs"

const SITE = "https://www.scriptaseo.com"
const ORG_ID = `${SITE}/#organization`

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// Sitio completo (layout): Organization + WebSite
export default function SchemaMarkup() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": ORG_ID,
            name: "ScriptaSEO",
            url: SITE,
            logo: `${SITE}/logo.png`,
            email: "hello@scriptaseo.com",
            description:
              "AI-powered SEO content marketing for SaaS companies: keyword research, blog posts, competitor tracking and on-page optimization delivered monthly.",
            contactPoint: {
              "@type": "ContactPoint",
              email: "hello@scriptaseo.com",
              contactType: "customer support",
            },
          },
          {
            "@type": "WebSite",
            "@id": `${SITE}/#website`,
            name: "ScriptaSEO",
            url: SITE,
            inLanguage: "en",
            publisher: { "@id": ORG_ID },
          },
        ],
      }}
    />
  )
}

// Solo home: Service (desde los planes) + FAQPage (desde el FAQ visible)
export function HomeSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${SITE}/#service`,
            name: "AI SEO Content Marketing for SaaS",
            serviceType: "Search Engine Optimization",
            provider: { "@id": ORG_ID },
            areaServed: { "@type": "Place", name: "Worldwide" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "ScriptaSEO Plans",
              itemListElement: plans.map((p) => ({
                "@type": "Offer",
                name: `${p.name} — AI SEO Plan`,
                url: `${SITE}/#pricing`,
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: p.price,
                  priceCurrency: "USD",
                  unitCode: "MON",
                },
                description: p.features.join(", "),
              })),
            },
          },
          {
            "@type": "FAQPage",
            "@id": `${SITE}/#faq`,
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ],
      }}
    />
  )
}
