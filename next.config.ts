import path from "node:path";
import type { NextConfig } from "next";

// GitHub Pages serves this as a project site at /portfolio-site/, so the
// build needs that prefix baked in. Only apply it in CI (GitHub Actions
// sets GITHUB_ACTIONS=true) so local dev/build still runs at the root.
const basePath = process.env.GITHUB_ACTIONS ? "/portfolio-site" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  // unoptimized next/image renders a plain <img>, which skips the automatic
  // basePath prefixing Next normally does — expose it so components can
  // prefix static asset paths themselves.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
