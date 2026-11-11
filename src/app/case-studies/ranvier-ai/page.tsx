import type { Metadata } from "next";
import type { ReactNode } from "react";
import GradientSeam from "@/components/GradientSeam";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Ranvier AI case study | Sylvanus Ikechukwu Augustine",
  description:
    "How Ranvier AI, a WhatsApp-accessible medical study copilot, answers with RAG retrieval over medical textbooks, a Redis cache and backend LLM inference.",
  alternates: { canonical: "/case-studies/ranvier-ai/" },
  openGraph: {
    title: "Ranvier AI case study",
    description:
      "A WhatsApp-accessible medical study copilot built on RAG over medical textbooks, Redis caching and backend LLM inference.",
    url: "/case-studies/ranvier-ai/",
    type: "article",
  },
};

// Visible marker for content only the author can supply. Search the repo for
// "TODO:" and replace every <Todo> before treating this page as finished.
function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-dashed border-accent-2/60 text-accent-2 text-xs uppercase tracking-widest px-2 py-0.5 align-middle">
      TODO: {children}
    </span>
  );
}

function Section({
  n,
  id,
  title,
  children,
}: {
  n: string;
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-line pt-12 md:pt-16 grid md:grid-cols-[8rem_1fr] gap-6 md:gap-10"
    >
      <span className="font-display text-5xl md:text-6xl text-accent">{n}</span>
      <div>
        <h2 id={`${id}-heading`} className="font-display text-3xl md:text-5xl mb-6 text-balance">
          {title}
        </h2>
        <div className="space-y-5 text-fg-dim text-base md:text-lg leading-relaxed max-w-3xl">
          {children}
        </div>
      </div>
    </section>
  );
}

const flow = [
  {
    step: "WhatsApp webhook",
    detail: "A learner's message arrives through a webhook. WhatsApp is the whole interface, so there is no app to install.",
  },
  {
    step: "Node.js / Express",
    detail: "The Express backend receives the webhook, parses the request and orchestrates the remaining steps.",
  },
  {
    step: "Retrieval over the textbook index",
    detail: "Structured RAG retrieval pulls the relevant passages from a vector index built over medical textbooks.",
  },
  {
    step: "Redis cache",
    detail: "A Redis caching layer keeps repeat work off the slow path so responses stay sub-second.",
  },
  {
    step: "LLM inference",
    detail: "Backend LLM inference composes the summary, explanation or multiple-choice drill from the retrieved context.",
  },
  {
    step: "Response",
    detail: "The answer is sent back to the learner in the same WhatsApp conversation.",
  },
];

export default function RanvierCaseStudy() {
  return (
    <main className="relative bg-bg overflow-hidden">
      <GradientSeam color="rgba(201,255,91,0.35)" flip />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-28 md:pb-36">
        <a
          href={withBasePath("/#systems")}
          data-cursor-hover
          className="inline-flex min-h-11 items-center text-xs uppercase tracking-widest text-fg-dim hover:text-fg transition-colors"
        >
          <span aria-hidden className="mr-2">←</span> Back to Featured Systems
        </a>

        <header className="mt-8 mb-20 md:mb-28">
          <span className="uppercase tracking-[0.3em] text-xs text-accent">
            Case study · AI / ML Engineering
          </span>
          <h1 className="font-display text-[12vw] md:text-[7vw] leading-[0.95] tracking-tight mt-6">
            Ranvier <span className="italic font-normal text-accent-2">AI</span>
          </h1>
          <p className="mt-8 max-w-2xl text-fg-dim text-base md:text-lg leading-relaxed">
            A WhatsApp-accessible study copilot that gives medical trainees textbook summaries,
            detailed explanations and multiple-choice drills, grounded in medical textbooks
            through retrieval-augmented generation.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Node.js", "Express", "Python", "Vector DBs", "Redis", "OpenAI API", "Webhooks"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide text-fg-dim border border-line px-2.5 py-1"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </header>

        <div className="space-y-20 md:space-y-28">
          <Section n="01" id="problem" title="Problem">
            <p>
              Medical trainees need fast, reliable answers from dense textbook material:
              summaries of a topic, a detailed explanation of a mechanism, or a set of practice
              questions. A general-purpose chatbot answers from its training data, not from the
              textbooks they are examined on.
            </p>
            <p>
              Ranvier AI meets them where they already are, in a WhatsApp chat, and grounds every
              answer in retrieved textbook context.
            </p>
            <p>
              <Todo>describe the specific gap you saw as a medical student, in your own words</Todo>
            </p>
          </Section>

          <Section n="02" id="architecture" title="Architecture">
            <p>Each message follows a single request path:</p>
            <ol className="mt-2 border border-line bg-bg-alt divide-y divide-line">
              {flow.map((f, i) => (
                <li key={f.step} className="grid grid-cols-[3rem_1fr] gap-4 p-5 md:p-6">
                  <span className="font-display text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-display text-xl md:text-2xl text-fg">{f.step}</div>
                    <p className="mt-1 text-sm md:text-base text-fg-dim leading-relaxed">
                      {f.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p>
              <Todo>say where Python fits (e.g. embedding / indexing jobs) and which vector store you use</Todo>
            </p>
          </Section>

          <Section n="03" id="decisions" title="Decisions & trade-offs">
            <ul className="space-y-6">
              <li>
                <strong className="text-fg font-medium">WhatsApp as the interface.</strong>{" "}
                Delivering over a webhook removes any install step for learners. The cost is
                working inside a chat format: plain-text replies, no custom UI.
              </li>
              <li>
                <strong className="text-fg font-medium">Retrieval before generation.</strong>{" "}
                Answers are grounded in retrieved textbook passages rather than the model&apos;s
                memory alone. That adds a retrieval step to every request, and answer quality
                depends on how well the index is chunked and searched.
              </li>
              <li>
                <strong className="text-fg font-medium">A Redis caching layer.</strong>{" "}
                Caching keeps repeat work off the slow path to hold sub-second latency. The
                trade-off is freshness: cached results must be invalidated when the index changes.{" "}
                <Todo>what you cache (retrievals, completions or both), the cache key and TTL</Todo>
              </li>
              <li>
                <strong className="text-fg font-medium">Lean payloads.</strong> Payload structure
                is optimised to lower token spend while keeping query handling fast.{" "}
                <Todo>one concrete example of what you trimmed</Todo>
              </li>
            </ul>
          </Section>

          <Section n="04" id="results" title="Results">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
              {[
                ["Response latency", "Sub-second", "p50 / p95 latency in ms"],
                ["Textbook corpus", null, "corpus size (books, pages or chunks)"],
                ["Cache hit rate", null, "cache hit rate (%)"],
                ["Token spend", null, "token reduction from payload optimisation"],
              ].map(([label, value, todo]) => (
                <div key={label} className="bg-bg-alt p-6 md:p-8">
                  <dt className="text-fg-dim text-xs uppercase tracking-widest">{label}</dt>
                  <dd className="mt-3">
                    {value && <div className="font-display text-3xl md:text-4xl text-fg mb-3">{value}</div>}
                    <Todo>{todo}</Todo>
                  </dd>
                </div>
              ))}
            </dl>
            <p>
              <Todo>usage so far (e.g. number of learners or questions answered), if you can share it</Todo>
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
