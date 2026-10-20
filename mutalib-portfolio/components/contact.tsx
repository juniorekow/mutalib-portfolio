"use client";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { h2, wrap } from "@/lib/ui";

const box = "w-full rounded-xl border-2 border-ink bg-white px-4 py-3 text-ink transition-[border-color,box-shadow] duration-200 focus:border-blue focus:shadow-[0_0_0_4px_rgba(67,97,238,0.15)]";

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">{label}</label>
      {children}
      {error && <p id={`${id}-e`} className="mt-1 text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}

export default function Contact({ email, linkedin }: { email: string; linkedin: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [err, setErr] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");
  const a = (k: string) => ({ id: k, name: k, className: box, "aria-invalid": !!err[k], "aria-describedby": err[k] ? `${k}-e` : undefined });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const er: Record<string, string> = {};
    if (!d.name?.trim()) er.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? "")) er.email = "Enter a valid email address, like name@example.com.";
    if (!d.topic?.trim()) er.topic = "Tell me what you need help with.";
    if ((d.details ?? "").trim().length < 10) er.details = "Add a few more details (at least 10 characters).";
    setErr(er);
    if (Object.keys(er).length) return;
    setState("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Something went wrong. Please try again.");
      setState("ok"); form.reset();
    } catch (x) {
      setMsg(x instanceof Error ? x.message : "Something went wrong. Please try again."); setState("error");
    }
  }

  return (
    <section id="contact" className="bg-blue py-24 text-white">
      <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
        <div>
          <h2 className={h2}>Got an idea? Let’s give it a little life.</h2>
          <p className="mt-6 max-w-lg text-lg">Whether you need a fresh visual identity, a thoughtful digital experience, help growing your brand, or a creative collaborator for an exciting project, I’d love to hear what you’re working on.</p>
          <ul className="mt-8 space-y-2">
            <li><a className="underline" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
            <li>{email ? <a className="underline" href={`mailto:${email}`}>{email}</a> : "Email address coming soon"}</li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="relative space-y-4 rounded-2xl bg-white p-6 text-ink md:p-8">
          <div aria-hidden className="absolute -left-[9999px]"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <Field id="name" label="Name" error={err.name}><input {...a("name")} autoComplete="name" /></Field>
          <Field id="email" label="Email address" error={err.email}><input {...a("email")} type="email" autoComplete="email" /></Field>
          <Field id="topic" label="What do you need help with?" error={err.topic}><input {...a("topic")} /></Field>
          <Field id="details" label="Project details" error={err.details}><textarea {...a("details")} rows={5} /></Field>
          <button type="submit" disabled={state === "sending"} className="btn bg-ink text-cream disabled:opacity-60">{state === "sending" ? "Sending…" : <>Send My Message <ArrowUpRight size={18} /></>}</button>
          {state === "ok" && <p role="status" className="font-medium text-green-800">Message sent. Thank you, I’ll reply soon.</p>}
          {state === "error" && <p role="alert" className="font-medium text-red-700">{msg}</p>}
        </form>
      </div>
    </section>
  );
}
