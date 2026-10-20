"use client";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export function Bar() {
  const reduce = useReducedMotion();
  return <motion.div className="h-1.5 origin-left rounded bg-blue" initial={{ scaleX: reduce ? 1 : 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />;
}
