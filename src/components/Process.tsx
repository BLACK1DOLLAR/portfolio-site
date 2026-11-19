"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "A concrete plan",
    body: "Send me your project and I reply with a concrete plan: what gets built, in what order, and how long it takes. If there's a simpler way to get what you need, I'll tell you.",
  },
  {
    n: "02",
    title: "One owner, end to end",
    body: "Frontend, backend, database, payments and deployment. You work with one developer who owns the whole product, so nothing falls between the cracks.",
  },
  {
    n: "03",
    title: "Working demos at every stage",
    body: "You see a working demo at every stage, not just at the end, with plain-English updates and no jargon. I test every flow on a real phone before anything is called finished.",
  },
  {
    n: "04",
    title: "Ship & clean handover",
    body: "The product goes live and you get tidy code and documentation. I stay reachable after launch, and later fixes don't break what already works.",
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
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="sticky top-0 min-h-[70svh] flex items-center py-8 px-6 md:px-10"
      style={{ top: `${i * 12}px` }}
    >
      <motion.div
        style={reduceMotion ? undefined : { scale, opacity }}
        className="w-full max-w-5xl mx-auto border border-line bg-bg-alt p-8 md:p-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
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
    <section id="process" className="relative bg-bg">
      <div className="px-6 md:px-10 pt-28 md:pt-36 pb-10 max-w-7xl mx-auto">
        <span className="uppercase tracking-[0.3em] text-xs text-accent">How I Work</span>
        <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
          Four steps from brief to live product.
        </h2>
      </div>
      {steps.map((step, i) => (
        <StackCard key={step.n} step={step} i={i} />
      ))}
    </section>
  );
}
