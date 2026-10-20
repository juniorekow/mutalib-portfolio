"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = ["Work", "About", "Services", "Playground", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <header className="sticky top-3 z-50 px-4">
      <motion.nav initial={reduce ? false : { opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }} aria-label="Main" className="relative mx-auto flex h-16 max-w-6xl items-center justify-between overflow-hidden rounded-full border border-white/70 bg-white/55 px-5 shadow-[0_8px_32px_rgba(23,23,23,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl md:px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/70 before:via-white/10 before:to-blue/10 before:content-['']">
        <a href="/#top" className="relative z-10 font-display text-2xl font-bold tracking-tight">MUTALIB<span className="text-coral">.</span></a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => <li key={l}><a className="relative z-10 font-medium transition-colors hover:text-blue" href={`/#${l.toLowerCase()}`}>{l}</a></li>)}
          <li><a href="/#contact" className="btn relative z-10 min-h-11 bg-ink text-cream">Let’s Talk <ArrowUpRight size={18} /></a></li>
        </ul>
        <button type="button" className="relative z-10 rounded-full p-3 transition-colors hover:bg-white/50 md:hidden" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="menu" initial={reduce ? false : { y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reduce ? undefined : { y: -8, opacity: 0 }} className="absolute left-4 right-4 top-[calc(100%+0.5rem)] overflow-hidden rounded-3xl border border-white/70 bg-white/75 px-6 shadow-[0_8px_32px_rgba(23,23,23,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl md:hidden">
            {[...links, "Let’s Talk"].map((l) => (
              <li key={l} className="border-b border-ink/10 last:border-0"><a onClick={() => setOpen(false)} className="block py-4 font-display text-xl font-bold transition-colors hover:text-blue" href={`/#${l === "Let’s Talk" ? "contact" : l.toLowerCase()}`}>{l}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
