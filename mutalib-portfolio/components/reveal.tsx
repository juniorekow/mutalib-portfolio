"use client";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, className, interactive = false }: { children: ReactNode; delay?: number; className?: string; interactive?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={interactive && !reduce ? { y: -6, scale: 1.01 } : undefined}
      whileTap={interactive && !reduce ? { scale: 0.99 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Bar() {
  const reduce = useReducedMotion();
  return <motion.div className="h-1.5 origin-left rounded bg-blue" initial={{ scaleX: reduce ? 1 : 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} />;
}
