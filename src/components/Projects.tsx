"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import GradientSeam from "./GradientSeam";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative bg-bg py-28 md:py-36 px-6 md:px-10">
      <GradientSeam color="rgba(255,90,43,0.5)" flip />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="uppercase tracking-[0.3em] text-xs text-accent">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
              Eight live builds, shipped for real businesses.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                data-cursor-hover
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-colors ${
                  active === cat
                    ? "border-accent bg-accent text-ink"
                    : "border-line text-fg-dim hover:text-fg hover:border-fg/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
