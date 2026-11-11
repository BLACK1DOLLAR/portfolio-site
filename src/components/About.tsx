import TextReveal from "./TextReveal";
import GradientSeam from "./GradientSeam";

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-28 md:py-40 px-6 md:px-10 overflow-hidden">
      <GradientSeam color="rgba(201,255,91,0.35)" />

      <div className="max-w-5xl mx-auto relative z-10">
        <span className="uppercase tracking-[0.3em] text-xs text-accent">About</span>

        <TextReveal
          text="I'm Sylvanus Ikechukwu Augustine — a full-stack and AI systems engineer and medical student, bringing medical-science rigour to backends, LLM pipelines and real-time platforms."
          className="font-display text-3xl md:text-5xl leading-[1.15] mt-6 max-w-4xl text-balance text-fg-dim"
        />

        <p className="mt-10 max-w-3xl text-fg-dim text-base md:text-lg leading-relaxed">
          I&apos;m an MBBS student at Chukwuemeka Odumegwu Ojukwu University (COOU), and I
          build Ranvier AI, an AI-assisted study copilot for medical trainees. As Director of
          ICT for the NIMSA South East Regional Executive Council, I run the region&apos;s
          digital infrastructure: the web portal, member databases and dues and voting systems
          for 19 medical-student chapters.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-10">
          {[
            ["19", "Regional chapters served"],
            ["3,500+", "Students on NIMSA SE"],
            ["50,000+", "Verified votes processed"],
            ["3", "Stacks: web, AI & Unity"],
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
