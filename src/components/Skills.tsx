"use client";

import { motion } from "framer-motion";
import GradientSeam from "./GradientSeam";

const groups = [
  {
    n: "01",
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C#", "SQL", "HTML5/CSS3"],
  },
  {
    n: "02",
    title: "Backend & Cloud",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "PaaS Deployments (Render, Vercel)",
    ],
  },
  {
    n: "03",
    title: "AI & LLM Systems",
    items: ["RAG Architecture", "Vector Indexing", "Prompt Engineering", "API Pipeline Optimization"],
  },
  {
    n: "04",
    title: "Frontend & UI",
    items: ["React.js", "Tailwind CSS", "Modern Responsive Web Design"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-bg-alt border-y border-line py-28 md:py-36 px-6 md:px-10 overflow-hidden"
    >
      <GradientSeam color="rgba(255,90,43,0.4)" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-accent">Toolbox</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
            Technical skill matrix.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: "easeOut" }}
              className="border border-line bg-bg p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-2xl md:text-3xl">{g.title}</h3>
                <span className="font-display text-3xl text-accent">{g.n}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] uppercase tracking-wide text-fg-dim border border-line px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
