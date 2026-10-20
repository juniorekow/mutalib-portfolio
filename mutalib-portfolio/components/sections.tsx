import { ArrowUpRight, ClipboardList, FlaskConical, Palette, TrendingUp } from "lucide-react";
import Reveal, { Bar } from "./reveal";
import { areas, education, experience, services, site, steps } from "@/lib/data";
import { h2, wrap } from "@/lib/ui";

const icons = [Palette, FlaskConical, TrendingUp, ClipboardList];

export function Hero() {
  return (
    <section id="top" className={`${wrap} grid items-center gap-14 pb-16 pt-12 lg:grid-cols-[1.25fr_1fr] lg:pt-20`}>
      <Reveal className="relative z-10">
        <p className="label">Designer · Educator · Digital Creative</p>
        <h1 className="mt-6 font-display text-[clamp(2.7rem,8vw,6.2rem)] font-bold leading-[.95] tracking-tight">
          <span className="block">Good ideas deserve</span>
          <span className="block"><span className="bg-lime px-2 [box-decoration-break:clone]">a beautiful</span> way</span>
          <span className="block">to <em className="font-medium text-blue">grow.</em></span>
        </h1>
        <p className="mt-8 max-w-xl text-lg">I’m Mutalib Abubakar — a multidisciplinary creative working at the intersection of design, technology, digital marketing, and STEM education. I turn ideas into engaging experiences that help people learn, connect, and grow.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="btn bg-blue text-white">Explore My Work ↘</a>
          <a href="#about" className="btn border-2 border-ink">A Little About Me</a>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm"><span aria-hidden className="h-2.5 w-2.5 rounded-full border border-ink bg-lime" />Open to creative collaborations.</p>
      </Reveal>
      <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md" delay={0.12}>
        {/* Replace this placeholder with a real portrait (e.g. next/image from /public/portrait.jpg) */}
        <div className="absolute inset-x-8 inset-y-0 grid place-items-center rounded-t-full border-2 border-dashed border-ink bg-lav p-8 text-center text-sm font-medium">Portrait placeholder<br />Add public/portrait.jpg</div>
        <div aria-hidden className="float absolute -left-2 top-12 flex -rotate-6 gap-1.5 rounded-xl border-2 border-ink bg-white p-2.5">
          {["bg-blue", "bg-coral", "bg-lime", "bg-lav"].map((c) => <i key={c} className={`h-6 w-6 rounded-full ${c}`} />)}
        </div>
        <div aria-hidden className="float absolute -right-2 top-1/3 w-32 rotate-6 space-y-2 rounded-xl border-2 border-ink bg-white p-3 [animation-delay:-2s]">
          <i className="block h-3 w-2/3 rounded bg-ink" /><i className="block h-10 rounded bg-lav" /><i className="block h-3 rounded bg-ink/20" />
        </div>
        <div aria-hidden className="float absolute -left-3 bottom-24 h-20 w-20 rounded-full border-[10px] border-coral [animation-delay:-4s]" />
        <span className="absolute bottom-6 right-0 -rotate-3 rounded-full bg-blue px-4 py-2 font-display text-sm font-semibold text-white">Ideas → Impact</span>
        <span aria-hidden className="float absolute -top-2 right-10 font-display text-6xl text-coral">✳</span>
      </Reveal>
      <a href="#about" className="label col-span-full">Scroll ↓</a>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-ink py-24 text-cream">
      <div className={wrap}>
        <Reveal>
          <p className="label text-lime">A little about me</p>
          <h2 className={h2}>Part creative. Part problem-solver. <em className="font-medium text-lav">Always learning.</em></h2>
          <p className="mt-6 max-w-2xl text-lg text-cream/80">I enjoy combining creativity, technology, and education to solve problems and help others develop. My interests span visual design, user experience, digital communication, marketing, STEM instruction, and business fundamentals — and I like the places where they overlap.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => {
            const I = icons[i];
            return (
              <Reveal key={a.title} delay={i * 0.08} className="h-full" interactive>
                <div className={`${a.tint} h-full rounded-2xl p-6 text-ink ${i % 2 ? "lg:mt-8" : ""}`}>
                  <I size={32} aria-hidden />
                  <h3 className="mt-8 font-display text-xl font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn mt-12 bg-cream text-ink">More About My Journey <ArrowUpRight size={18} /></a>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className={`${wrap} py-24`}>
      <Reveal><p className="label">Let’s make something better</p><h2 className={h2}>Creative thinking. Practical solutions.</h2></Reveal>
      <ul className="mt-12 divide-y-2 divide-ink border-y-2 border-ink">
        {services.map(([t, d]) => (
          <li key={t}>
            <Reveal className="grid gap-3 py-8 transition-colors hover:text-blue md:grid-cols-[1fr_1.2fr] md:items-baseline" interactive>
              <h3 className="font-display text-2xl font-bold md:text-4xl">{t}</h3><p>{d}</p>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm">Bookkeeping is also part of my professional toolkit.</p>
      <a href="#contact" className="btn mt-8 bg-coral text-ink">Have a project in mind? Let’s talk <ArrowUpRight size={18} /></a>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-lime/40 py-24">
      <div className={wrap}>
        <Reveal><p className="label">How ideas become experiences</p><h2 className={h2}>From ‘what if?’ to ‘there it is.’</h2></Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t}><Reveal delay={i * 0.08} interactive className="h-full"><Bar /><p className="mt-4 font-display text-6xl font-bold text-blue">{`0${i + 1}`}</p><h3 className="font-display text-2xl font-bold">{t}</h3><p className="mt-2">{d}</p></Reveal></li>
          ))}
        </ol>
        <p className="mt-10 text-sm">Every brief is different, so the approach adapts to the project.</p>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="bg-[#0d0d16] py-24 text-[#f4f4f5]">
      <div className={wrap}>
        <Reveal className="text-center">
          <h2 className="bg-gradient-to-r from-[#ec4899] via-[#b7d84b] to-[#22e65b] bg-clip-text font-display text-3xl font-bold uppercase tracking-tight text-transparent md:text-5xl">
            Professional Experience
          </h2>
          <span aria-hidden className="mx-auto mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-[#ec4899] to-[#4ef0cd]" />
        </Reveal>
        <ol className="relative mx-auto mt-16 max-w-6xl space-y-8 before:absolute before:bottom-0 before:left-[11px] before:top-0 before:w-[3px] before:bg-gradient-to-b before:from-[#22e6cc] before:via-[#ec4899] before:to-[#22e6cc] md:space-y-8 md:before:left-1/2 md:before:-translate-x-1/2">
          {experience.map(([role, organization], index) => {
            const left = index % 2 === 0;
            const accent = left ? "#22e6cc" : "#ec1682";
            return (
              <li key={role} className="relative grid grid-cols-1 items-start md:grid-cols-[1fr_48px_1fr]">
                <span
                  aria-hidden
                  className="absolute left-[3px] top-5 h-5 w-5 rounded-full border-[5px] border-[#0d0d16] md:static md:col-start-2 md:row-start-1 md:mx-auto md:mt-0"
                  style={{ backgroundColor: accent, boxShadow: `0 0 0 2px ${accent}` }}
                />
                <Reveal className={`ml-12 md:ml-0 md:row-start-1 ${left ? "md:col-start-1" : "md:col-start-3"}`} delay={index * 0.07} interactive>
                <div
                  className={`rounded-xl border-2 p-6 md:p-8 ${left ? "md:text-right" : "md:text-left"}`}
                  style={{ borderColor: accent, backgroundColor: left ? "rgba(34, 230, 204, .15)" : "rgba(236, 22, 130, .14)" }}
                >
                  <p className="font-display text-sm font-bold" style={{ color: accent }}>Dates to be added</p>
                  <h3 className="mt-3 font-display text-xl font-bold md:text-2xl">{role}</h3>
                  <p className="mt-2 font-display font-bold" style={{ color: accent }}>{organization}</p>
                </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-[#4ef0cd]">Education &amp; development</h3>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {education.map(([institution, programme]) => (
              <Reveal key={institution} className="h-full" interactive>
              <div className="h-full rounded-xl border border-[#4ef0cd]/50 bg-white/[.04] p-6">
                <p className="font-display text-lg font-bold">{institution}</p>
                <p className="mt-2 text-sm text-white/70">{programme}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-cream">
      <div className={wrap}>
        <p className="font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-none">MUTALIB<span className="text-coral">.</span></p>
        <p className="mt-4 max-w-md text-cream/80">Made with curiosity, creativity, and a little bit of code.</p>
        <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {["Work", "About", "Services", "Playground", "Contact"].map((l) => <a key={l} href={`/#${l.toLowerCase()}`} className="hover:text-lime">{l}</a>)}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-lime">LinkedIn ↗</a>
        </nav>
        <nav aria-label="Social media" className="mt-6 flex flex-wrap gap-3">
          {[
            ["WhatsApp", "https://www.whatsapp.com/"],
            ["LinkedIn", site.linkedin],
            ["TikTok", "https://www.tiktok.com/"],
            ["Instagram", "https://www.instagram.com/"],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/30 px-4 py-2 text-sm font-semibold transition-colors hover:border-lime hover:text-lime">
              {label} ↗
            </a>
          ))}
        </nav>
        <div className="mt-12 flex flex-wrap justify-between gap-4 text-sm text-cream/70">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a href="#" className="hover:text-lime">Back to top ↑</a>
          <p>See you on the internet. ✳</p>
        </div>
      </div>
    </footer>
  );
}
