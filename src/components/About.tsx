import TextReveal from "./TextReveal";
import GradientSeam from "./GradientSeam";

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <GradientSeam color="rgba(201,255,91,0.35)" />

      <div className="max-w-5xl mx-auto relative z-10">
        <span className="uppercase tracking-[0.3em] text-xs text-accent">About</span>

        <TextReveal
          text="I'm Sylvanus Ikechukwu, a full-stack developer who builds fast, config-driven websites for small businesses — pharmacies, gadget stores, beauty studios — and ships them within days, not months."
          className="font-display text-3xl md:text-5xl leading-[1.15] mt-6 max-w-4xl text-balance text-fg-dim"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-10">
          {[
            ["8+", "Sites shipped"],
            ["48hrs", "Typical turnaround"],
            ["100%", "Mobile-first builds"],
            ["1", "Codebase, many clients"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="font-display text-4xl md:text-5xl">{stat}</div>
              <div className="text-fg-dim text-xs uppercase tracking-widest mt-2">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
