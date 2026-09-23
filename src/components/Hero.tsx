"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const slides = [
  "from-[#1c1330] via-[#0f0c1e] to-[#08080a]",
  "from-[#132018] via-[#0d1612] to-[#08080a]",
  "from-[#2a1710] via-[#170f0c] to-[#08080a]",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[78svh] md:h-[100svh] w-full overflow-hidden grain">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[index]}`}
        >
          <div className="absolute inset-0 animate-kenburns bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,43,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(201,255,91,0.10),transparent_50%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <div className="relative z-10 md:h-full flex flex-col justify-center md:justify-end px-6 md:px-10 pt-28 pb-16 md:pt-0 md:pb-28">
        <span className="uppercase tracking-[0.3em] text-xs text-fg-dim mb-6">
          Full-Stack Web Developer
        </span>

        <h1 className="font-display text-balance text-[13vw] md:text-[7.5vw] leading-[0.95] tracking-tight">
          I build sites
          <br />
          that <span className="italic font-normal text-accent-2">feel</span> like
          <br />
          products.
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <MagneticButton
            as="a"
            href="#work"
            className="px-7 py-4 bg-fg text-ink text-sm uppercase tracking-widest hover:bg-accent hover:text-fg transition-colors"
          >
            View Selected Work →
          </MagneticButton>
          <a
            href="#contact"
            data-cursor-hover
            className="text-sm uppercase tracking-widest text-fg-dim hover:text-fg transition-colors border-b border-transparent hover:border-fg pb-1"
          >
            Start a project
          </a>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-6 md:right-10 text-fg-dim text-xs uppercase tracking-widest hidden md:flex items-center gap-2"
      >
        Scroll
        <span className="w-px h-8 bg-fg-dim/60" />
      </motion.div>
    </section>
  );
}
