import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "ScriptaSEO — AI SEO & Content Marketing for SaaS"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#000000",
          padding: "80px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(10,132,255,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(10,132,255,0.3)",
            background: "rgba(10,132,255,0.1)",
            borderRadius: "100px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#64d2ff",
            }}
          />
          <span style={{ color: "#64d2ff", fontSize: "18px", fontWeight: 600, letterSpacing: "0.08em" }}>
            AI-POWERED SEO FOR SAAS
          </span>
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
            maxWidth: "820px",
          }}
        >
          Stop paying{" "}
          <span style={{ color: "#64d2ff" }}>$5k/mo</span>
          {" "}for SEO agencies.
        </div>
        {/* Subtitle */}
        <div style={{ fontSize: "26px", color: "rgba(255,255,255,0.45)", maxWidth: "640px", lineHeight: 1.5 }}>
          Expert AI blog posts, keyword research, and on-page optimization — delivered monthly.
        </div>
        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "96px",
            right: "96px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#0a84ff", fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            ScriptaSEO
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "18px" }}>scriptaseo.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
