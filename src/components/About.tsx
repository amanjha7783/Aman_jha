import { workAreas } from "../data/profile";
import { Reveal, Section } from "./ui";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A student who likes building things that work">
      <div className="grid gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <Reveal className="space-y-5 text-[1.0625rem] leading-relaxed text-muted lg:max-w-[58ch]">
          <p className="text-ink">I am a B.Tech student in Artificial Intelligence &amp; Data Science at Gati Shakti Vishwavidyalaya (GSV), Vadodara. I specialize in building end-to-end intelligent systems: from designing and benchmarking machine learning pipelines on real-world datasets to engineering full-stack production interfaces and computer vision tools.</p>
          <p>My railway technology and public sector experience is hands-on. At the Centre for Railway Information Systems (CRIS, Ministry of Railways), I built ML pipelines for SFOORTI freight rake turnaround prediction, and at the Divisional Railway Manager's Office (DRM), Delhi, I automated passenger display boards and announcement systems.</p>
          <p>My projects span healthcare AI (NutriScan Pro), public safety GIS analytics (AI Crime Analytics Platform), intelligent transportation (Traffic Analytics Dashboard with YOLOv8 &amp; OSRM), telecommunications signal processing (DTMF Signal Lab), and biometric security (Face Recognition Door Lock System).</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="font-display t-h3 font-bold">What I work on</h3>
          <ul className="mt-4 border-t border-ink/80">
            {workAreas.map((w) => (
              <li key={w.title} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-6">
                <p className="font-bold">{w.title}</p>
                <p className="t-small text-muted">{w.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
