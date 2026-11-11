import { BRAND, EMAIL, GITHUB_URL, LINKEDIN_URL, NAME } from "@/lib/site";

const links = [
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { label: "Email", href: `mailto:${EMAIL}`, external: false },
];

export default function Footer() {
  return (
    <footer className="bg-bg-alt px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-fg-dim">
      <span className="text-center md:text-left">
        © {new Date().getFullYear()} {NAME} · {BRAND}
      </span>
      <nav aria-label="Social">
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                data-cursor-hover
                className="inline-flex min-h-11 items-center hover:text-fg transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span>Built with Next.js, Tailwind &amp; Framer Motion</span>
    </footer>
  );
}
