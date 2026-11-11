import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import {
  BRAND,
  EMAIL,
  GITHUB_URL,
  JOB_TITLE,
  LINKEDIN_URL,
  NAME,
  SITE_URL,
} from "@/lib/site";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const TITLE = `${NAME} | ${JOB_TITLE}`;
const DESCRIPTION =
  "Full-stack & AI systems engineer building Node.js, React and PostgreSQL platforms, RAG/LLM pipelines and C#/Unity gameplay systems. Open to remote roles worldwide.";

// og.png and brand-icon.png are generated at build time by route handlers in this
// folder. Relative URLs below resolve against metadataBase (which includes
// /portfolio-site), so they work on GitHub Pages.
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${NAME}, ${JOB_TITLE}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: NAME, url: `${SITE_URL}/` }],
  alternates: { canonical: "/" },
  icons: { icon: { url: `${SITE_URL}/brand-icon.png`, type: "image/png", sizes: "32x32" } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${NAME} · ${BRAND}`,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: BRAND,
  jobTitle: JOB_TITLE,
  url: `${SITE_URL}/`,
  email: `mailto:${EMAIL}`,
  sameAs: [LINKEDIN_URL, GITHUB_URL],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>
          <SmoothScroll />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
