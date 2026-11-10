"use client";

/**
 * Portfolio — Black Dollar Codes (Sylvanus Ikechukwu Augustine)
 * Drop-in replacement for src/app/page.tsx
 * Stack: Next.js (App Router) + Tailwind CSS + Framer Motion
 */

import { motion } from "framer-motion";

/* ───────────────────────── DATA ───────────────────────── */

const EMAIL = "blackdollarcodes@protonmail.com";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    name: "Ranvier AI",
    category: "AI / ML Engineering",
    summary:
      "AI-powered medical study copilot featuring backend LLM inference, structured RAG context retrieval over medical textbooks, and Redis caching to achieve sub-second response latency.",
    metrics: ["Sub-second latency", "RAG over medical textbooks", "Redis caching"],
    stack: ["Node.js", "Express", "Python", "Vector DBs", "Redis", "OpenAI API", "Webhooks"],
  },
  {
    name: "COOUMSA Business Hub & Regional Digital Portals",
    category: "Full-Stack Web Architecture",
    summary:
      "Enterprise web platforms and voting/commerce infrastructure serving 19 student regional chapters, featuring Paystack payment gateways, live automated leaderboards, and role-based access security.",
    metrics: ["19 regional chapters", "Paystack payments", "Live leaderboards"],
    stack: ["Node.js", "Express", "React", "PostgreSQL", "EJS", "Paystack API", "Render"],
  },
  {
    name: "Interactive 3D Systems & Game Engines",
    category: "Gameplay & Interactive Engineering",
    summary:
      "Production-ready 3D game prototypes engineered in C# and Unity, featuring custom character control scripts, event-driven state machines, and physics optimization.",
    metrics: ["Custom character controllers", "Event-driven state machines", "Physics optimization"],
    stack: ["C#", "Unity 3D", "Git", "Physics Pipelines"],
  },
];

const SKILLS = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C#", "SQL", "HTML5/CSS3"],
  },
  {
    title: "Backend & Cloud",
    items: ["Node.js", "Express.js", "PostgreSQL", "Redis", "REST APIs", "PaaS Deployments (Render, Vercel)"],
  },
  {
    title: "AI & LLM Systems",
    items: ["RAG Architecture", "Vector Indexing", "Prompt Engineering", "API Pipeline Optimization"],
  },
  {
    title: "Frontend & UI",
    items: ["React.js", "Tailwind CSS", "Modern Responsive Web Design"],
  },
];

/* ───────────────────────── HELPERS ───────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="mb-10">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    </motion.div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 antialiased selection:bg-emerald-400/30">
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0F172A]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-mono text-sm font-semibold text-white">
            Black<span className="text-emerald-400">Dollar</span>Codes
          </a>
          <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-emerald-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-lg border border-emerald-400/40 px-4 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/10"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pt-28">
            <motion.p
              {...fadeUp}
              className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
            >
              Sylvanus Ikechukwu Augustine · Black Dollar Codes
            </motion.p>

            <motion.h1
              {...fadeUp}
              className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl"
            >
              Engineering High-Performance Web Systems,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Architecture
              </span>{" "}
              &amp; Interactive Software.
            </motion.h1>

            <motion.p {...fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Full-Stack Developer &amp; AI Systems Engineer specializing in Node.js, React,
              PostgreSQL, LLM pipelines, and resilient backend microservices.
            </motion.p>

            <motion.div {...fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                View Featured Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/60 hover:text-emerald-300"
              >
                Contact / Resume
              </a>
            </motion.div>

            <motion.p {...fadeUp} className="mt-12 max-w-2xl border-l-2 border-emerald-400/60 pl-4 text-sm leading-relaxed text-slate-400">
              Medical science rigour meets full-stack engineering and AI architecture,
              building high-performance, low-latency applications and developer-led products.
            </motion.p>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHeading eyebrow="Featured work" title="Projects" />

          <div className="grid gap-6 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-emerald-400/40"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  {p.category}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-white">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.summary}</p>

                {/* Key metrics */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <li
                      key={m}
                      className="rounded-md bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300"
                    >
                      {m}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <ul className="mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── TECHNICAL SKILL MATRIX ── */}
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHeading eyebrow="Toolbox" title="Technical Skill Matrix" />

          <div className="grid gap-6 sm:grid-cols-2">
            {SKILLS.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-[#0F172A] px-3 py-1.5 text-sm text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 p-8 text-center sm:p-14"
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              Let&apos;s build
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Open to full-stack, AI engineering, and contract/full-time remote roles worldwide.
            </h2>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-block rounded-lg bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
            >
              {EMAIL}
            </a>
            {/* Add your resume: drop resume.pdf in /public and uncomment below
            <a href="/resume.pdf" className="ml-4 text-sm font-semibold text-emerald-300 underline underline-offset-4">
              Download Resume
            </a>
            */}
          </motion.div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Sylvanus Ikechukwu Augustine · Black Dollar Codes
          </p>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-emerald-400">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
