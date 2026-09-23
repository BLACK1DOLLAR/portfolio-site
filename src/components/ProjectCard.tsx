"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import MagneticButton from "./MagneticButton";

export default function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: "easeOut" }}
      className="group relative border border-line bg-bg-alt overflow-hidden"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-hover
        className="block"
      >
        <div
          className={`relative h-72 md:h-80 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
        >
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.name} homepage`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
          <span className="absolute top-5 left-5 font-display text-6xl text-white/20 drop-shadow-lg">
            {project.index}
          </span>
          <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest px-3 py-1 border border-white/40 text-white bg-black/30 backdrop-blur-sm">
            {project.category}
          </span>
          <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-xs uppercase tracking-widest flex items-center gap-2 text-white">
            Visit live site <span aria-hidden>↗</span>
          </div>
        </div>

        <div className="p-6 md:p-7">
          <h3 className="font-display text-2xl md:text-3xl mb-2">{project.name}</h3>
          <p className="text-sm text-fg-dim leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-wide text-fg-dim border border-line px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>

      <div className="px-6 md:px-7 pb-6 md:pb-7">
        <MagneticButton
          as="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-xs uppercase tracking-widest border-b border-fg/40 pb-1 hover:border-accent hover:text-accent transition-colors"
        >
          Open project ↗
        </MagneticButton>
      </div>
    </motion.article>
  );
}
