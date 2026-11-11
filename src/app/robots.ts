import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Crawlers only read robots.txt at a domain root. On GitHub Pages this is served at
// /portfolio-site/robots.txt, so it only takes effect once the site has its own domain.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
