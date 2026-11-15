import type { NextConfig } from "next"

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://api.stripe.com https://checkout.stripe.com",
      "frame-src https://js.stripe.com https://checkout.stripe.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
]

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
  ],
  // URLs del antiguo sitio estático que aún no existen en Next.js (301 explícito; permanent:true daría 308)
  redirects: async () => [
    { source: "/es", destination: "/", statusCode: 301 },
    { source: "/es/:path*", destination: "/", statusCode: 301 },
    { source: "/tools", destination: "/", statusCode: 301 },
    { source: "/tools/:path*", destination: "/", statusCode: 301 },
    { source: "/saas-seo-content", destination: "/", statusCode: 301 },
    { source: "/blog/b2b-saas-seo-strategy", destination: "/blog", statusCode: 301 },
  ],
  // Disable x-powered-by header (hides Next.js fingerprint)
  poweredByHeader: false,
}

export default nextConfig
