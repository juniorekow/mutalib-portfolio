"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { h2, wrap } from "@/lib/ui";

const palette = ["#F8F5EF", "#171717", "#4361EE", "#FF6B5E", "#C9B6FF", "#D5F36A"];
const thoughts = ["Every good design starts with a good question.", "Learning is the best kind of play.", "Make it work. Then make it delightful.", "Small details, big feelings.", "Curiosity is a skill. Practise it."];
const stickers = [
  { c: "bg-coral rounded-full", p: "left-[8%] top-[18%] h-20 w-20", r: -10 },
  { c: "bg-lime rounded-2xl", p: "left-[45%] top-[10%] h-16 w-24", r: 8 },
  { c: "bg-lav rounded-[40%]", p: "left-[20%] top-[55%] h-24 w-24", r: -4 },
  { c: "bg-blue [clip-path:polygon(50%_0,100%_100%,0_100%)]", p: "left-[65%] top-[50%] h-24 w-24", r: 12 },
];

export default function Playground() {
  const area = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);
  const [accent, setAccent] = useState(2);
  const [t, setT] = useState(0);
  const [w, setW] = useState(600);
  const [copied, setCopied] = useState("");
  useEffect(() => { setFine(window.matchMedia("(pointer: fine)").matches); }, []);

  async function copy(hex: string, i: number) {
    setAccent(i);
    try { await navigator.clipboard.writeText(hex); setCopied(hex); } catch { setCopied(""); }
  }
  const follow = fine && !reduce;
  return (
    <section
      id="playground" className="bg-lav/40 py-24"
      onPointerMove={(e) => { if (follow && dot.current) { dot.current.style.opacity = "1"; dot.current.style.transform = `translate(${e.clientX + 14}px,${e.clientY + 14}px)`; } }}
      onPointerLeave={() => { if (dot.current) dot.current.style.opacity = "0"; }}
    >
      {follow && <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-40 h-5 w-5 rounded-full bg-coral opacity-0 transition-opacity" />}
      <div className={wrap}>
        <p className="label">Serious about creativity. Not boring about it.</p>
        <h2 className={h2}>Welcome to my little corner of the internet.</h2>
        <p className="mt-4 font-display text-xl italic">Click around. I won’t judge.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div ref={area} className="relative h-80 overflow-hidden rounded-2xl border-2 border-ink bg-cream">
            <p className="absolute left-4 top-3 text-xs">{fine ? "Drag the shapes" : "Tap the shapes"}</p>
            {stickers.map((s, i) => (
              <motion.button key={i} type="button" aria-label={`Shape ${i + 1}`} drag={fine} dragConstraints={area} dragMomentum={false} initial={{ rotate: s.r }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9, rotate: s.r + 20 }} className={`absolute border-2 border-ink ${fine ? "cursor-grab" : ""} ${s.c} ${s.p}`} />
            ))}
          </div>
          <div className="rounded-2xl border-2 border-ink bg-white p-6">
            <div className="grid h-40 place-items-center rounded-xl border-2 border-ink transition-colors duration-500" style={{ backgroundColor: palette[accent] }}>
              <span className="font-display text-5xl font-bold text-white mix-blend-difference">Aa</span>
            </div>
            <button type="button" className="btn mt-4 bg-ink text-cream" onClick={() => setAccent((accent + 1) % palette.length)}>Change accent</button>
            <div role="group" aria-label="Colour palette" className="mt-4 flex gap-2">
              {palette.map((c, i) => <button key={c} type="button" aria-label={`Use and copy ${c}`} onClick={() => copy(c, i)} className="h-10 w-10 rounded-full border-2 border-ink" style={{ backgroundColor: c }} />)}
            </div>
            <p aria-live="polite" className="mt-2 text-sm">{copied ? `Copied ${copied}` : "Tap a swatch to use and copy its hex."}</p>
          </div>
          <div className="rounded-2xl border-2 border-ink bg-ink p-6 text-cream">
            <p className="min-h-[7rem] font-display text-3xl leading-tight" style={{ fontWeight: w }}>{thoughts[t]}</p>
            <button type="button" className="btn mt-2 bg-lime text-ink" onClick={() => setT((t + 1) % thoughts.length)}>Another thought</button>
            <label className="mt-6 block text-sm">Type weight: {w}
              <input type="range" min={300} max={700} step={50} value={w} onChange={(e) => setW(Number(e.target.value))} className="mt-2 block w-full accent-lime" />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
