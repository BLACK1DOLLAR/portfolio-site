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
      className={`pointer-events-none absolute left-1/2 -translate-x-1/2 w-[140vw] h-[40vh] rounded-[50%] blur-3xl opacity-20 ${
        flip ? "-top-[20vh]" : "-bottom-[20vh]"
      }`}
      style={{ background: color }}
    />
  );
}
