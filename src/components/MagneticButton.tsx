"use client";

import { useRef, type ReactNode, type MouseEventHandler } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CommonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type MagneticButtonProps =
  | ({
      as: "a";
      href: string;
      target?: string;
      rel?: string;
      onClick?: MouseEventHandler<HTMLAnchorElement>;
    } & CommonProps)
  | ({
      as?: "button";
      type?: "button" | "submit" | "reset";
      onClick?: MouseEventHandler<HTMLButtonElement>;
    } & CommonProps);

export default function MagneticButton(props: MagneticButtonProps) {
  const { children, className, strength = 0.4 } = props;
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const innerX = useMotionValue(0);
  const innerY = useMotionValue(0);
  const innerSpringX = useSpring(innerX, { stiffness: 250, damping: 18 });
  const innerSpringY = useSpring(innerY, { stiffness: 250, damping: 18 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
    innerX.set(relX * strength * 0.4);
    innerY.set(relY * strength * 0.4);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    innerX.set(0);
    innerY.set(0);
  }

  const inner = (
    <motion.span
      style={{ x: innerSpringX, y: innerSpringY }}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (props.as === "a") {
    const { href, target, rel, onClick } = props;
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement | null>}
        data-cursor-hover
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: springX, y: springY }}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  const { type, onClick } = props;
  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement | null>}
      data-cursor-hover
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {inner}
    </motion.button>
  );
}
