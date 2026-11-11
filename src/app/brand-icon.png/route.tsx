import { ImageResponse } from "next/og";

// Generated monogram favicon, exported to out/brand-icon.png at build time.
// A route handler rather than the icon.tsx convention because that convention's
// <link> omits basePath under static export, which breaks it on GitHub Pages.
// TODO (optional): replace with a designed brand mark.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#f4f1ea",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        S<span style={{ color: "#ff5a2b" }}>.</span>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
