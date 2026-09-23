const items = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "PostgreSQL",
  "REST & GraphQL APIs",
  "Static Site Export",
  "UI/UX Craft",
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
