"use client";

import { motion } from "framer-motion";
import GradientSeam from "./GradientSeam";

const systems = [
  {
    index: "01",
    category: "AI / ML Engineering",
    name: "Ranvier AI",
    summary:
      "WhatsApp-accessible medical study copilot: textbook summaries, detailed explanations and multiple-choice drills, served by backend LLM inference with structured RAG retrieval over medical textbooks and a Redis cache for sub-second responses.",
    stats: [
      ["Sub-second", "Response latency"],
      ["RAG", "Over medical textbooks"],
    ],
    tags: ["Node.js", "Express", "Python", "Vector DBs", "Redis", "OpenAI API", "Webhooks"],
    gradient: "from-[#1c1330] via-[#0f0c1e] to-[#08080a]",
  },
  {
    index: "02",
    category: "Full-Stack Web Architecture",
    name: "NIMSA South East Regional Portal & Voting Engine",
    summary:
      "The official regional portal for the Nigerian Medical Students' Association, South East, across 19 university chapters, with Paystack-backed member verification and dues collection, and a live-election voting engine with real-time leaderboards.",
    stats: [
      ["50,000+", "Verified votes processed"],
      ["19", "University chapters"],
    ],
    tags: ["Node.js", "Express", "React", "PostgreSQL", "EJS", "Paystack API", "Render"],
    gradient: "from-[#132018] via-[#0d1612] to-[#08080a]",
  },
  {
    index: "03",
    category: "Gameplay & Interactive Engineering",
    name: "Interactive 3D Systems & Game Engines",
    summary:
      "Three 3D game prototypes in Unity with custom C# scripts for character controllers, state machines, combat mechanics and physics, plus scene organisation, input mapping and event-driven game logic.",
    stats: [
      ["3", "Unity 3D prototypes"],
      ["Event-driven", "State machines"],
    ],
    tags: ["C#", "Unity 3D", "Git", "Physics Systems"],
    gradient: "from-[#2a1710] via-[#170f0c] to-[#08080a]",
  },
];

export default function Systems() {
  return (
    <section id="systems" className="relative bg-bg py-28 md:py-36 px-6 md:px-10 overflow-hidden">
      <GradientSeam color="rgba(201,255,91,0.35)" flip />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-accent">
            Featured Systems
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl text-balance">
            AI architecture, full-stack platforms &amp; interactive software.
          </h2>
          <p className="text-fg-dim text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
            Beyond client sites: the engineering work behind low-latency products,
            payment-ready platforms and real-time 3D.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {systems.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col border border-line bg-bg-alt overflow-hidden"
            >
              <div className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${s.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,43,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(201,255,91,0.10),transparent_50%)] transition-transform duration-700 ease-out group-hover:scale-110" />
                <span className="absolute top-5 left-5 font-display text-6xl text-white/20 drop-shadow-lg">
                  {s.index}
                </span>
                <span className="absolute top-5 right-5 max-w-[60%] text-right text-[10px] uppercase tracking-widest px-3 py-1 border border-white/40 text-white bg-black/30 backdrop-blur-sm">
                  {s.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-display text-2xl md:text-3xl mb-3 text-balance">{s.name}</h3>
                <p className="text-sm text-fg-dim leading-relaxed mb-6">{s.summary}</p>

                <div className="grid grid-cols-2 gap-6 border-t border-line pt-6 mb-6">
                  {s.stats.map(([stat, label]) => (
                    <div key={label}>
                      <div className="font-display text-2xl md:text-3xl">{stat}</div>
                      <div className="text-fg-dim text-[11px] uppercase tracking-widest mt-2">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-wide text-fg-dim border border-line px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
