"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// reducedMotion="user" makes every framer-motion animation honour the OS
// "reduce motion" setting: transform/layout animations (card entrances, the
// hero scroll cue, menu slide-ins) are skipped, opacity still fades.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
