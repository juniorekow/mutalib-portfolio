"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { categories, projects } from "@/lib/data";
import { h2, wrap } from "@/lib/ui";

const span = { w: "md:col-span-4", s: "md:col-span-2", h: "md:col-span-3" };

export default function Work() {
  const [cat, setCat] = useState("All");
  const all = cat === "All";
  const list = projects.filter((p) => all || p.category === cat);
  return (
    <section id="work" className={`${wrap} py-24`}>
      <p className="label">The good stuff</p>
      <h2 className={h2}>Things I’ve made, shaped, and helped grow.</h2>
      <p className="mt-4 text-sm">Sample layouts only — replace with real projects in lib/data.ts.</p>
      <div role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-medium transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 active:scale-95 ${cat === c ? "bg-ink text-cream" : "hover:bg-lime"}`}>{c}</button>
        ))}
      </div>
      <MotionConfig reducedMotion="user">
        <ul className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.li layout key={p.slug} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} whileHover={{ y: -6 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} className={all ? span[p.size] : "md:col-span-3"}>
                <Link href={`/work/${p.slug}`} className="group block">
                  <div className={`${p.tint} relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-ink`}>
                    <div className="absolute inset-6 rotate-3 rounded-xl border-2 border-ink bg-white transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105" />
                    <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-1 text-xs text-cream">Placeholder</span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4"><h3 className="font-display text-xl font-bold group-hover:text-blue">{p.title}</h3><span className="text-sm">{p.category}</span></div>
                  <p className="text-sm">{p.blurb}</p>
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </MotionConfig>
    </section>
  );
}
