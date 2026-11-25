import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "../data/experience";
import { Reveal, Section, Tag } from "./ui";

function WorkflowPanel({ workflow, metrics }: { workflow: { step: string; text: string }[]; metrics?: { label: string; value: string }[] }) {
  const [sel, setSel] = useState(0);
  return (
    <div className="mt-4 rounded-lg border border-line bg-surface p-4 md:p-6">
      <p className="t-label font-mono uppercase text-accent">Workflow &amp; Implementation Details</p>
      <ol className="mt-4 flex flex-wrap items-center gap-y-2" aria-label="Workflow steps">
        {workflow.map((w, i) => (
          <li key={w.step} className="flex items-center">
            <button onClick={() => setSel(i)} aria-pressed={sel === i}
              className={`rounded-md border px-3 py-2 text-sm font-bold transition ${sel === i ? "border-accent bg-accent text-accent-ink" : "border-line text-muted hover:border-accent"}`}>
              {i + 1}. {w.step}
            </button>
            {i < workflow.length - 1 && <span className="mx-1 h-px w-3 bg-line md:w-5" aria-hidden />}
          </li>
        ))}
      </ol>
      <p className="mt-4 min-h-12 text-base text-muted" aria-live="polite"><b className="text-ink">{workflow[sel].step}:</b> {workflow[sel].text}</p>

      {metrics && metrics.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-line bg-canvas/60 p-3">
              <p className="font-mono text-xs text-muted">{m.label}</p>
              <p className="mt-1 text-sm font-bold text-accent">{m.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Experience() {
  const [open, setOpen] = useState<string | null>("cris");
  return (
    <Section id="experience" eyebrow="Experience" title="Work Experience" intro="Applied engineering and machine learning roles within the Indian Railways ecosystem.">
      <ol className="border-t border-ink/80">
        {experiences.map((e) => (
          <li key={e.id} className="border-b border-line py-[clamp(1.75rem,3vw,2.75rem)]">
            <Reveal>
              <article className="grid gap-6 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-[clamp(2rem,5vw,5rem)]">
                <header className="lg:sticky lg:top-24 lg:self-start">
                  <p className="font-mono text-[0.8rem] text-accent">{e.period}</p>
                  <h3 className="font-display t-h3 mt-2 font-extrabold">{e.role}</h3>
                  <p className="mt-1 font-bold">{e.org}</p>
                  <p className="t-small text-muted">{e.sub}</p>
                </header>
                <div className="min-w-0">
                  <p className="font-mono text-[0.8rem] text-accent">{e.context}</p>
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[1.0625rem] leading-relaxed text-muted marker:text-accent lg:max-w-[68ch]">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  {e.tech.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{e.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
                  {e.workflow.length > 0 && (
                    <>
                      <button onClick={() => setOpen(open === e.id ? null : e.id)} aria-expanded={open === e.id}
                        className="mt-6 inline-flex items-center gap-2 py-1 font-bold text-accent transition hover:opacity-80">
                        {open === e.id ? "Hide" : "Show"} technical breakdown <ChevronDown size={18} className={`transition ${open === e.id ? "rotate-180" : ""}`} />
                      </button>
                      {open === e.id && <WorkflowPanel workflow={e.workflow} metrics={e.metrics} />}
                    </>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
