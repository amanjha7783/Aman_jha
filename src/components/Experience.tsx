import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "../data/experience";
import { Reveal, Section, Tag } from "./ui";

function CrisPanel({ workflow }: { workflow: { step: string; text: string }[] }) {
  const [sel, setSel] = useState(0);
  return (
    <div className="mt-4 rounded-lg border border-line bg-surface p-4 md:p-6">
      <p className="t-label font-mono uppercase text-accent">Pipeline · freight rake turnaround time</p>
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

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-line p-4">
          <p className="text-base font-bold">Model comparison</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center justify-between rounded-md bg-accent/15 px-3 py-2"><span className="font-bold">LightGBM</span><span className="font-mono text-[0.8rem] text-accent">Selected · best in evaluated experiments</span></li>
            <li className="flex items-center justify-between px-3 py-2 text-muted"><span>Other benchmarked algorithms</span><span className="font-mono text-[0.8rem]">names not published here</span></li>
          </ul>
          <p className="mt-3 rounded-md border border-dashed border-line px-3 py-2 font-mono text-[0.8rem] text-muted">Metrics (R², RMSE, MAE): not published. Add them to src/data/experience.ts when cleared to share.</p>
        </div>
        <div className="rounded-lg border border-line p-4">
          <p className="text-base font-bold">Explainability (SHAP)</p>
          <div className="mt-3 rounded-md bg-accent/15 px-3 py-2 text-sm">
            <span className="font-mono text-[0.8rem] text-accent">Strongest predictor</span>
            <p className="font-bold">Station-level historical turnaround average</p>
          </div>
          <p className="mt-3 rounded-md border border-dashed border-line px-3 py-2 font-mono text-[0.8rem] text-muted">Full feature ranking and SHAP values: not published. No chart is drawn, to avoid implying numbers that I haven't verified.</p>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const [open, setOpen] = useState<string | null>("cris");
  return (
    <Section id="experience" eyebrow="Experience" title="Two railway internships" intro="Both in the Indian Railways ecosystem: one on machine learning for freight operations, one on passenger information systems.">
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
                  <p className="font-mono text-[0.8rem] text-muted">{e.context}</p>
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[1.0625rem] leading-relaxed text-muted marker:text-accent lg:max-w-[68ch]">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  {e.tech.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{e.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
                  {e.workflow.length > 0 && (
                    <>
                      <button onClick={() => setOpen(open === e.id ? null : e.id)} aria-expanded={open === e.id}
                        className="mt-6 inline-flex items-center gap-2 py-1 font-bold text-accent">
                        {open === e.id ? "Hide" : "Show"} project workflow <ChevronDown size={18} className={`transition ${open === e.id ? "rotate-180" : ""}`} />
                      </button>
                      {open === e.id && <CrisPanel workflow={e.workflow} />}
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
