import { workAreas } from "../data/profile";
import { Reveal, Section } from "./ui";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A student who likes building things that work">
      <div className="grid gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <Reveal className="space-y-5 text-[1.0625rem] leading-relaxed text-muted lg:max-w-[58ch]">
          <p className="text-ink">I am a third-year B.Tech student at Gati Shakti Vishwavidyalaya, Vadodara. I like developing practical AI solutions: training and evaluating machine learning models, working with real-world datasets, and wrapping them in full-stack applications that people can actually use.</p>
          <p>My railway exposure has been hands-on. At the Centre for Railway Information Systems (CRIS) I worked on freight rake turnaround-time prediction for SFOORTI, and earlier I interned at the DRM Office, Delhi on passenger information systems.</p>
          <p>Alongside this I have built AI-based projects in nutrition, public-safety analytics, computer vision and signal processing. I am looking for internships, research opportunities and software engineering roles where I can keep learning by building.</p>
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
