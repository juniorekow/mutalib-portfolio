import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { wrap } from "@/lib/ui";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
type Props = { params: { slug: string } };
export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} | Mutalib Abubakar` : "Project", robots: { index: false } };
}
const parts = ["Project overview", "The problem or opportunity", "Research and discovery", "Design process", "Wireframes or creative exploration", "Final designs or deliverables", "Tools and technologies", "Outcomes and lessons learned"];

export default function CaseStudy({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <article className={`${wrap} py-12`}>
      <Link href="/#work" className="text-sm font-semibold underline">← Back to work</Link>
      <p className="label mt-8">{p.category}</p>
      <h1 className="mt-3 font-display text-5xl font-bold leading-none md:text-7xl">{p.title}</h1>
      <p className="mt-6 rounded-xl bg-lime px-4 py-3 text-sm font-medium">Placeholder case study: a sample layout, not real client work.</p>
      <div className={`${p.tint} mt-8 aspect-[16/7] rounded-2xl border-2 border-ink`} role="img" aria-label="Placeholder project cover" />
      <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-4">
        {[["Category", p.category], ["My role", p.role], ["Tools", p.tools], ["Year", p.year]].map(([k, v]) => <div key={k}><dt className="font-bold">{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <div className="mt-12 grid max-w-3xl gap-10">
        {parts.map((t, i) => (
          <section key={t}><h2 className="font-display text-2xl font-bold"><span className="text-blue">0{i + 1}</span> {t}</h2><p className="mt-2">Placeholder: add real content once this project is documented.</p></section>
        ))}
      </div>
    </article>
  );
}
