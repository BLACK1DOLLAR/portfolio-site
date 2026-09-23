"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Discovery call",
    body: "We talk through what the business actually needs — products, services, the one action you want a visitor to take. No templates pitched until I understand the client.",
  },
  {
    n: "02",
    title: "Config, not chaos",
    body: "Content, prices, colors and copy go into a single config file. The layout is proven — what changes per client is data, not code, so nothing breaks on delivery.",
  },
  {
    n: "03",
    title: "Build & preview",
    body: "A live preview link goes out within days, not weeks. We test every button, every link, on a real phone, before anything is called finished.",
  },
  {
    n: "04",
    title: "Ship & support",
    body: "The site goes live on a fast static host. I stay reachable after launch — small edits are quick, and the client always knows where their content lives.",
  },
];

function StackCard({ step, i }: { step: (typeof steps)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.5]);

  return (
    <div
      ref={ref}
      className="sticky top-0 h-[100svh] flex items-center px-6 md:px-10"
      style={{ top: `${i * 12}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-5xl mx-auto border border-line bg-bg p-10 md:p-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
      >
        <span className="font-display text-7xl md:text-8xl text-accent">{step.n}</span>
        <div>
          <h3 className="font-display text-3xl md:text-5xl mb-5 text-balance">{step.title}</h3>
          <p className="text-fg-dim text-base md:text-lg leading-relaxed max-w-xl">{step.body}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative bg-bg-alt border-y border-line">
      <div className="px-6 md:px-10 pt-28 md:pt-36 pb-10 max-w-7xl mx-auto">
        <span className="uppercase tracking-[0.3em] text-xs text-accent">How I Work</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
          Four steps from brief to live site.
        </h2>
      </div>
      {steps.map((step, i) => (
        <StackCard key={step.n} step={step} i={i} />
      ))}
    </section>
  );
}
