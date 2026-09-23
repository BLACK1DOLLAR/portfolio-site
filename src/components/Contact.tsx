import MagneticButton from "./MagneticButton";
import GradientSeam from "./GradientSeam";

const EMAIL = "augustine200729@gmail.com";
const WHATSAPP_DIGITS = "2348147590814";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Sylvanus, I'd like to talk about building a site."
);

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-bg-alt border-t border-line py-28 md:py-40 px-6 md:px-10 overflow-hidden"
    >
      <GradientSeam color="rgba(255,90,43,0.4)" flip />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="uppercase tracking-[0.3em] text-xs text-accent">Contact</span>
        <h2 className="font-display text-[12vw] md:text-[7vw] leading-[0.95] mt-6 text-balance">
          Let&apos;s build your
          <br />
          site<span className="text-accent">.</span>
        </h2>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <MagneticButton
              as="a"
              href={`https://wa.me/${WHATSAPP_DIGITS}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-accent text-fg text-sm uppercase tracking-widest hover:bg-fg hover:text-ink transition-colors"
            >
              Message on WhatsApp
            </MagneticButton>
            <MagneticButton
              as="a"
              href={`mailto:${EMAIL}`}
              className="px-8 py-5 bg-fg text-ink text-sm uppercase tracking-widest hover:bg-accent hover:text-fg transition-colors"
            >
              {EMAIL}
            </MagneticButton>
          </div>
          <p className="text-fg-dim text-sm max-w-md">
            Send a brief — what your business sells, and who buys it. I&apos;ll reply with next steps.
          </p>
        </div>
      </div>
    </section>
  );
}
