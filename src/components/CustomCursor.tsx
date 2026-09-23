"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0;
    let y = 0;
    let scale = 1;

    function move(e: PointerEvent) {
      x = e.clientX;
      y = e.clientY;
    }

    function onEnter(e: Event) {
      const target = e.target as HTMLElement;
      if (target.closest?.("[data-cursor-hover]")) scale = 3.5;
    }
    function onLeave(e: Event) {
      const target = e.target as HTMLElement;
      if (target.closest?.("[data-cursor-hover]")) scale = 1;
    }

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", onEnter, true);
    document.addEventListener("pointerout", onLeave, true);

    let raf: number;
    function tick() {
      if (dot) {
        dot.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onEnter, true);
      document.removeEventListener("pointerout", onLeave, true);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot rounded-full transition-transform duration-150 ease-out hidden md:block" />;
}
