import { ImageResponse } from "next/og";
import { BRAND, JOB_TITLE, NAME } from "@/lib/site";

// Open Graph / Twitter card, rendered once at build time to out/og.png.
// A route handler (not the opengraph-image convention) so the exported file has a
// .png extension — GitHub Pages serves extensionless files as octet-stream, which
// some link-preview crawlers reject. Referenced from metadata in app/layout.tsx.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 25% 15%, rgba(255,90,43,0.28), transparent 55%), radial-gradient(circle at 85% 90%, rgba(201,255,91,0.16), transparent 50%), #0a0a0b",
          color: "#f4f1ea",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#ff5a2b",
          }}
        >
          {JOB_TITLE}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            {NAME}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#a8a5a0" }}>
            Node.js · React · PostgreSQL · RAG / LLM pipelines · C# / Unity
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(244,241,234,0.14)",
            paddingTop: 28,
            fontSize: 26,
            color: "#a8a5a0",
          }}
        >
          <span style={{ color: "#c9ff5b" }}>{BRAND}</span>
          <span>black1dollar.github.io/portfolio-site</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
