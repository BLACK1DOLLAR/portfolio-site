export default function Footer() {
  return (
    <footer className="bg-bg-alt px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-fg-dim">
      <span>© {new Date().getFullYear()} Sylvanus Ikechukwu</span>
      <span>Built with Next.js, Tailwind &amp; Framer Motion</span>
    </footer>
  );
}
