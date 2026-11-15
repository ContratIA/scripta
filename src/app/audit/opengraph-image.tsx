import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Get Your Free SEO Audit — ScriptaSEO"
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
          alignItems: "center",
          textAlign: "center",
          background: "#000000",
          padding: "80px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "350px",
            background: "radial-gradient(ellipse, rgba(10,132,255,0.22) 0%, transparent 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", border: "1px solid rgba(10,132,255,0.25)", background: "rgba(10,132,255,0.08)", borderRadius: "100px", padding: "8px 20px" }}>
          <span style={{ color: "#64d2ff", fontSize: "16px", fontWeight: 600, letterSpacing: "0.1em" }}>FREE · NO COMMITMENT · 24H TURNAROUND</span>
        </div>
        <div style={{ fontSize: "68px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "20px" }}>
          Get your free{" "}
          <span style={{ color: "#64d2ff" }}>SEO audit</span>
        </div>
        <div style={{ fontSize: "24px", color: "rgba(255,255,255,0.4)", maxWidth: "580px", lineHeight: 1.5 }}>
          We'll identify your top 10 keyword opportunities and show you exactly what content drives growth.
        </div>
        <div style={{ position: "absolute", bottom: "48px", display: "flex", gap: "48px" }}>
          {[["3.2×", "avg. traffic lift"], ["14 days", "first content live"], ["80%", "cost savings"]].map(([val, lbl]) => (
            <div key={lbl} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ color: "#64d2ff", fontSize: "28px", fontWeight: 800 }}>{val}</span>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "14px" }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
