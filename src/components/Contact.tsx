import MagneticButton from "./MagneticButton";
import GradientSeam from "./GradientSeam";
import { withBasePath } from "@/lib/basePath";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_PATH,
  WHATSAPP_DIGITS,
} from "@/lib/site";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Sylvanus, I saw your portfolio and would like to talk about a role."
);

const secondaryButton =
  "px-6 py-4 border border-fg/40 text-fg text-xs sm:text-sm uppercase tracking-widest hover:bg-fg hover:text-ink transition-colors";

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
          Let&apos;s build something
          <br />
          that scales<span className="text-accent">.</span>
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
              className="max-w-full break-all px-5 sm:px-8 py-5 bg-fg text-ink text-xs sm:text-sm uppercase tracking-widest hover:bg-accent hover:text-fg transition-colors"
            >
              {EMAIL}
            </MagneticButton>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <MagneticButton
              as="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              GitHub ↗
            </MagneticButton>
            <MagneticButton
              as="a"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              LinkedIn ↗
            </MagneticButton>
            {/* TODO: add public/resume.pdf — this link 404s until the file exists. */}
            <a
              href={withBasePath(RESUME_PATH)}
              download
              data-cursor-hover
              className={secondaryButton}
            >
              Download resume ↓
            </a>
          </div>

          <p className="text-fg-dim text-sm max-w-md">
            Hiring for a full-stack, AI or gameplay role? Send the details and I&apos;ll reply
            with availability.
          </p>
          <p className="text-fg-dim text-sm max-w-md border-t border-line pt-6">
            Open to full-stack, AI engineering, and contract/full-time remote roles worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
