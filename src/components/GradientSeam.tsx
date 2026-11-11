export default function GradientSeam({
  color = "var(--accent)",
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      // Smaller footprint + lighter blur below md: large blurred layers are
      // expensive to paint on mobile GPUs.
      className={`pointer-events-none absolute left-1/2 -translate-x-1/2 w-[110vw] h-[24vh] blur-2xl md:w-[140vw] md:h-[40vh] md:blur-3xl rounded-[50%] opacity-20 ${
        flip ? "-top-[12vh] md:-top-[20vh]" : "-bottom-[12vh] md:-bottom-[20vh]"
      }`}
      style={{ background: color }}
    />
  );
}
