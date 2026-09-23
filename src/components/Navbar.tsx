"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const background = useTransform(
    scrollY,
    [0, 160],
    ["rgba(10,10,11,0)", "rgba(10,10,11,0.85)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 160], [0, 0.14]);
  const blur = useTransform(scrollY, [0, 160], [0, 12]);

  return (
    <>
      <motion.header
        style={{
          background: menuOpen ? "rgba(10,10,11,1)" : background,
          borderBottomColor: useTransform(borderOpacity, (v) => `rgba(244,241,234,${v})`),
          backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b overflow-x-hidden"
      >
        <nav className="flex items-center justify-between gap-3 px-5 sm:px-6 md:px-10 py-4 md:py-5">
          <a
            href="#top"
            data-cursor-hover
            onClick={() => setMenuOpen(false)}
            className="font-display text-base sm:text-lg tracking-tight relative z-50 shrink-0"
          >
            <span className="sm:hidden">
              Sylvanus<span className="text-accent">.</span>I.
            </span>
            <span className="hidden sm:inline">
              Sylvanus<span className="text-accent">.</span>Ikechukwu
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-fg-dim">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} data-cursor-hover className="hover:text-fg transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <MagneticButton
            as="a"
            href="#contact"
            className={`hidden md:inline-flex px-5 py-2.5 text-xs uppercase tracking-widest border ${
              scrolled ? "border-fg/30" : "border-fg/50"
            } hover:bg-fg hover:text-ink transition-colors`}
          >
            Let&apos;s Talk
          </MagneticButton>

          <button
            type="button"
            data-cursor-hover
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-50 flex shrink-0 flex-col justify-center items-end gap-1.5 w-11 h-11 -mr-2"
          >
            <span
              className={`block h-px w-7 bg-fg transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-7 bg-fg transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-center px-8 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl py-2 inline-block"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + links.length * 0.06, duration: 0.4 }}
              className="mt-10 inline-flex w-fit px-6 py-4 bg-fg text-ink text-sm uppercase tracking-widest"
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
