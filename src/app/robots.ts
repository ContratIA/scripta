import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/dashboard/", "/checkout/", "/success/"] },
    ],
    sitemap: "https://scriptaseo.com/sitemap.xml",
    host: "https://scriptaseo.com",
  }
}
