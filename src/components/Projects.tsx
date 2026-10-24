import { type CSSProperties, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, TriangleAlert, X } from "lucide-react";
import { type Category, type Project, projects } from "../data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { Brand, Reveal, Section, Tag } from "./ui";

const filters: ("All" | Category)[] = ["All", "AI/ML", "Full-Stack", "Data Science", "Computer Vision", "Signal Processing"];

function Detail({ p, onClose }: { p: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { ref.current?.showModal(); }, []);
  const list = (title: string, items: string[]) => (
    <div><h4 className="t-label font-mono uppercase text-accent">{title}</h4>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted">{items.map((i) => <li key={i}>{i}</li>)}</ul></div>
  );
  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="proj-title" className="m-auto max-h-[90vh] w-[min(46rem,94vw)] overflow-y-auto rounded-xl border border-line bg-surface p-0 text-ink">
      <div style={tint(p.visual)} className="h-44 border-b border-line bg-sunken p-4"><ProjectVisual kind={p.visual} /></div>
      <div className="space-y-6 p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="proj-title" className="font-display text-2xl font-extrabold">{p.name}</h3>
            <p className="text-muted">{p.tagline} · {p.period} · {p.status}</p>
          </div>
          <button autoFocus onClick={() => ref.current?.close()} aria-label="Close" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line"><X size={18} /></button>
        </div>
        {p.note && <p className="flex gap-2 rounded-lg border border-signal/50 bg-signal/10 p-3 text-sm"><TriangleAlert size={18} className="mt-0.5 shrink-0 text-signal" />{p.note}</p>}
        <div><h4 className="t-label font-mono uppercase text-accent">Problem</h4><p className="mt-2 text-sm text-muted">{p.problem}</p></div>
        <div><h4 className="t-label font-mono uppercase text-accent">Solution & my contribution</h4><p className="mt-2 text-sm text-muted">{p.solution}</p></div>
        {list("Features", p.features)}
        <div><h4 className="t-label font-mono uppercase text-accent">Architecture</h4>
          <ol className="mt-3 flex flex-wrap items-center gap-2 text-xs">{p.architecture.map((a, i) => (
            <li key={a} className="flex items-center gap-2"><span className="rounded-md border border-line bg-canvas px-2.5 py-1.5">{a}</span>{i < p.architecture.length - 1 && <span className="text-accent" aria-hidden>→</span>}</li>))}</ol></div>
        {list("Implementation", p.implementation)}
        {list("Possible improvements", p.future)}
        <div className="flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
        <div className="flex flex-wrap gap-3">
          <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-ink"><Brand.GitHub size={16} /> View on GitHub</a>
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-bold"><ExternalLink size={16} /> Live demo</a>}
        </div>
      </div>
    </dialog>
  );
}

/* Each project family gets its own hue so the grid reads as distinct work, not one repeated card. */
const hue: Record<Project["visual"], number> = { nutri: 150, crime: 25, dtmf: 75, face: 305, tower: 200, sky: 245, traffic: 220, entity: 275 };
const tint = (k: Project["visual"]) => ({ "--c-accent": `oklch(var(--vl) 0.16 ${hue[k]})` }) as CSSProperties;

function StatusPill({ status }: { status: Project["status"] }) {
  return <span className={`rounded-md px-2 py-0.5 font-mono text-xs ${status === "Completed" ? "bg-accent/12 text-accent" : "bg-signal/15 text-signal"}`}>{status}</span>;
}

function ProjectCard({ p, featured, onOpen }: { p: Project; featured: boolean; onOpen: () => void }) {
  return (
    <article style={tint(p.visual)}
      className={`group grid overflow-hidden rounded-lg border border-line bg-surface shadow-[var(--shadow-card)] transition duration-200 hover:border-accent motion-reduce:transition-none ${featured ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]" : "grid-rows-[auto_1fr]"}`}>
      <div className={`border-b border-line bg-sunken p-5 ${featured ? "h-56 sm:h-72 lg:h-full lg:min-h-[22rem] lg:border-b-0 lg:border-r" : "h-44"}`}>
        <ProjectVisual kind={p.visual} />
      </div>
      <div className={`flex flex-col ${featured ? "p-[clamp(1.5rem,3vw,2.75rem)]" : "p-6"}`}>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[0.8rem] text-muted">{p.period}</span>
          <StatusPill status={p.status} />
        </div>
        <h3 className={`font-display mt-3 font-extrabold ${featured ? "t-h2" : "t-h3"}`}>{p.name}</h3>
        <p className="mt-1 font-medium text-accent">{p.tagline}</p>
        <p className="mt-4 text-[0.95rem] text-muted"><b className="text-ink">Problem.</b> {p.problem}</p>
        <p className="mt-2 flex-1 text-[0.95rem] text-muted"><b className="text-ink">Solution.</b> {p.solution}</p>
        {p.note && <p className="t-small mt-4 border-l-2 border-signal pl-3 text-muted">{p.note}</p>}
        <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={onOpen} className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-[0.95rem] font-bold text-accent-ink transition hover:opacity-90">Details <ArrowUpRight size={16} /></button>
          <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-[0.95rem] font-bold transition hover:border-accent hover:text-accent"><Brand.GitHub size={16} /> Code</a>
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-[0.95rem] font-bold hover:border-accent"><ExternalLink size={16} /> Live demo</a>}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const [sel, setSel] = useState<Project | null>(null);
  const shown = projects.filter((p) => f === "All" || p.categories.includes(f));
  const [lead, ...rest] = shown;
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" intro="Each project links to its repository. No live demos are listed because none are deployed yet.">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((c) => (
          <button key={c} onClick={() => setF(c)} aria-pressed={f === c}
            className={`rounded-md border px-4 py-2 text-[0.95rem] transition ${f === c ? "border-ink bg-ink font-bold text-canvas" : "border-line text-muted hover:border-ink hover:text-ink"}`}>{c}</button>
        ))}
      </div>
      {!lead ? <p className="mt-8 text-muted">No projects in this category yet.</p> : (
        <div className="mt-8 space-y-[clamp(1.25rem,2.5vw,2rem)]">
          <Reveal><ProjectCard p={lead} featured onOpen={() => setSel(lead)} /></Reveal>
          {rest.length > 0 && (
            <div className="grid gap-[clamp(1.25rem,2.5vw,2rem)] md:grid-cols-2 xl:grid-cols-3">
              {rest.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.06} className="flex"><div className="w-full"><ProjectCard p={p} featured={false} onOpen={() => setSel(p)} /></div></Reveal>)}
            </div>
          )}
        </div>
      )}
      {sel && <Detail p={sel} onClose={() => setSel(null)} />}
    </Section>
  );
}
