import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0.6, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

export function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="wrap section-y">
      <Reveal className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <div>
          <p className="t-label font-mono font-medium uppercase text-accent">{eyebrow}</p>
          <h2 className="font-display t-h2 mt-3 max-w-[22ch] font-extrabold">{title}</h2>
        </div>
        {intro && <p className="t-lead max-w-[56ch] text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-[clamp(2rem,4vw,3.5rem)]">{children}</div>
    </section>
  );
}

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-line px-3 py-1 font-mono text-[0.8rem] text-muted">{children}</span>
);

export const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-accent-ink transition hover:-translate-y-px hover:opacity-90 active:translate-y-0";
export const btnGhost = "inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-surface px-6 py-3.5 text-base font-bold transition hover:border-accent hover:text-accent";

export const Brand = {
  GitHub: (p: { size?: number }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
  ),
  LinkedIn: (p: { size?: number }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
  ),
  LeetCode: (p: { size?: number }) => (
    <svg width={p.size ?? 20} height={p.size ?? 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M13.48 0a1.37 1.37 0 0 0-.97.44L3.6 9.5a4.9 4.9 0 0 0 0 6.9l3.9 3.97a4.9 4.9 0 0 0 6.9 0l2.6-2.64a1.37 1.37 0 0 0-1.96-1.92l-2.6 2.64a2.15 2.15 0 0 1-3 0l-3.9-3.97a2.15 2.15 0 0 1 0-3l8.86-9.06A1.37 1.37 0 0 0 13.48 0Zm4.2 11.1h-7.1a1.37 1.37 0 0 0 0 2.75h7.1a1.37 1.37 0 0 0 0-2.75Z"/></svg>
  ),
};
