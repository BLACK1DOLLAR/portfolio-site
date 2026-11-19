const items = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "Paystack",
  "WhatsApp Bots",
  "LLMs & RAG",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative border-y border-line py-6 overflow-hidden bg-bg-alt">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl px-8 whitespace-nowrap text-fg-dim"
          >
            {item} <span className="text-accent">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
