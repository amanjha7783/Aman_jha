import { useEffect, useState } from "react";
import { Award, Landmark, Rocket } from "lucide-react";
import { achievements, certifications, coursework, education, skillGroups, softSkills } from "../data/misc";
import { Reveal, Section, Tag } from "./ui";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with" intro="Taken from my resume and projects. No proficiency bars, because they say little; the projects show how each tool was used.">
      <dl className="border-t border-ink/80">
        {skillGroups.map((g) => (
          <Reveal key={g.title}>
            <div className="grid gap-3 border-b border-line py-5 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-10">
              <dt className="font-display t-h3 font-bold">{g.title}</dt>
              <dd className="flex flex-wrap gap-2">{g.items.map((t) => <Tag key={t}>{t}</Tag>)}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
      <p className="mt-6 text-muted"><b className="text-ink">Soft skills:</b> {softSkills.join(" · ")}</p>

      <div id="education" className="mt-[clamp(3.5rem,7vw,6rem)] grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-[clamp(2rem,5vw,5rem)]">
        <div>
          <h3 className="font-display t-h2 font-extrabold">Education</h3>
          <p className="mt-6 font-bold">Relevant coursework</p>
          <div className="mt-3 flex flex-wrap gap-2">{coursework.map((c) => <Tag key={c}>{c}</Tag>)}</div>
        </div>
        <ol className="space-y-6 border-l-2 border-accent/40 pl-6">
          {education.map((e) => (
            <li key={e.school} className="relative">
              <span className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-canvas" aria-hidden />
              <Reveal>
                <p className="font-mono text-[0.8rem] text-accent">{e.period}</p>
                <p className="mt-1 text-lg font-bold">{e.school}</p>
                <p className="text-muted">{e.detail} · {e.score}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Achievements() {
  const groups = [["Hackathon", "Hackathons"], ["Industrial visit", "Industrial visits"]] as const;
  return (
    <Section id="achievements" eyebrow="Hackathons & visits" title="Where I have participated and learned">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-[clamp(2rem,5vw,5rem)]">
        {groups.map(([kind, label]) => (
          <div key={kind}>
            <h3 className="flex items-center gap-2 font-display t-h3 font-bold text-accent">{kind === "Hackathon" ? <Rocket size={20} /> : <Landmark size={20} />}{label}</h3>
            <ul className="mt-4 border-t border-ink/80">
              {achievements.filter((a) => a.kind === kind).map((a) => (
                <li key={a.title} className="border-b border-line py-4">
                  <Reveal>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-bold">{a.title}</p>
                      <span className="rounded-md bg-accent/12 px-2 py-0.5 font-mono text-xs text-accent">{a.status}</span>
                    </div>
                    <p className="mt-1 text-muted">{a.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Courses completed">
      <ul className="grid border-t border-ink/80 lg:grid-cols-2 lg:gap-x-[clamp(2rem,5vw,5rem)]">
        {certifications.map((c) => (
          <li key={c.title} className="flex gap-4 border-b border-line py-4">
            <Award size={20} className="mt-1 shrink-0 text-signal" aria-hidden />
            <div className="min-w-0">
              <p className="font-bold leading-snug">{c.title}</p>
              <p className="t-small text-muted">{c.issuer}{c.date ? ` · ${c.date}` : ""}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

type Repo = { name: string; description: string | null; language: string | null; html_url: string; pushed_at: string };

export function DeveloperProfiles({ user, links }: { user: string; links: { github: string; linkedin: string; leetcode: string } }) {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: Repo[]) => setRepos(d))
      .catch(() => setFailed(true));
  }, [user]);
  const langs = repos ? Object.entries(repos.reduce<Record<string, number>>((m, r) => (r.language ? { ...m, [r.language]: (m[r.language] ?? 0) + 1 } : m), {})).sort((a, b) => b[1] - a[1]).slice(0, 6) : [];
  return (
    <Section id="profiles" eyebrow="Developer profiles" title="GitHub & coding profiles">
      <div className="grid gap-4 sm:grid-cols-3">
        {[["GitHub", links.github, "Code and projects"], ["LeetCode", links.leetcode, "Problem solving"], ["LinkedIn", links.linkedin, "Professional profile"]].map(([n, h, d]) => (
          <a key={n} href={h} target="_blank" rel="noreferrer" className="rounded-lg border border-line bg-surface p-5 transition hover:border-accent">
            <p className="font-display text-lg font-bold">{n}</p><p className="text-muted">{d}</p><p className="mt-2 break-all font-mono text-[0.8rem] text-accent">{h.replace("https://", "")}</p>
          </a>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-line bg-surface p-6">
        <h3 className="font-bold">Live from GitHub</h3>
        {!repos && !failed && <p className="mt-3 text-sm text-muted">Loading public repositories…</p>}
        {failed && <p className="mt-3 text-sm text-muted">GitHub data could not be loaded right now. Please visit the profile directly.</p>}
        {repos && (
          <>
            <p className="mt-3 text-sm text-muted">{repos.length} public repositories. Top languages: {langs.map(([l, n]) => `${l} (${n})`).join(", ")}.</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {repos.slice(0, 6).map((r) => (
                <li key={r.name}><a href={r.html_url} target="_blank" rel="noreferrer" className="block rounded-lg border border-line p-3 hover:border-accent">
                  <span className="font-bold">{r.name}</span> <span className="font-mono text-[0.8rem] text-muted">{r.language}</span>
                  <span className="mt-1 line-clamp-2 block text-xs text-muted">{r.description ?? "No description"}</span></a></li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Section>
  );
}
