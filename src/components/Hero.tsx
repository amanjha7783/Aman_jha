import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { Brand, btnGhost, btnPrimary } from "./ui";

const rise = (i: number, reduce: boolean | null) =>
  reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.07 * i, ease: "easeOut" as const } };

export function Hero() {
  const reduce = useReducedMotion();
  const social = [
    { label: "GitHub", href: profile.links.github, Icon: Brand.GitHub },
    { label: "LinkedIn", href: profile.links.linkedin, Icon: Brand.LinkedIn },
    { label: "LeetCode", href: profile.links.leetcode, Icon: Brand.LeetCode },
  ];
  return (
    <section id="home" className="relative overflow-hidden pt-[4.25rem]">
      <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden />
      <div className="wrap grid items-center gap-10 py-[clamp(2.5rem,5vw,4rem)] lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-[clamp(2rem,5vw,6rem)]">
        <div>
          <motion.p {...rise(0, reduce)} className="t-label font-mono font-medium uppercase text-accent">
            AI/ML Engineering · Full-Stack Development
          </motion.p>
          <motion.h1 {...rise(1, reduce)} className="font-display t-display mt-5 max-w-[15ch] font-extrabold">
            Building Intelligent Systems with AI, Data &amp; Code.
          </motion.h1>
          <motion.p {...rise(2, reduce)} className="t-lead mt-6 max-w-[52ch] text-muted">
            I'm {profile.name}, a B.Tech student in Artificial Intelligence &amp; Data Science at Gati Shakti Vishwavidyalaya. I build machine learning systems, data-driven applications, and full-stack products that solve practical problems.
          </motion.p>
          <motion.div {...rise(3, reduce)} className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <a href="#projects" className={btnPrimary}>Explore My Projects <ArrowRight size={18} /></a>
            <a href={profile.resume} download className={btnGhost}><Download size={18} /> Download Resume</a>
            <a href="#contact" className={btnGhost}><Mail size={18} /> Contact Me</a>
          </motion.div>
          <motion.ul {...rise(4, reduce)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted" aria-label="Profiles">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-2 transition hover:text-accent">
                  <Icon size={18} /> <span className="t-small font-medium">{label}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.figure {...(reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.15, ease: "easeOut" as const } })}
          className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:justify-self-end lg:max-w-none">
          <div className="relative lg:ml-auto lg:w-fit">
            {/* offset outline: one structural accent, no glow */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border-2 border-accent sm:translate-x-4 sm:translate-y-4" aria-hidden />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-sunken shadow-[var(--shadow-card)] lg:h-[min(72svh,46rem)] lg:w-auto">
              <img
                src="/images/aman-profile-800.jpg"
                srcSet="/images/aman-profile-480.jpg 480w, /images/aman-profile-800.jpg 800w, /images/aman-profile.jpg 1196w"
                sizes="(min-width: 1024px) 40vw, 24rem"
                width={1196} height={1327}
                alt="Aman Kumar Jha at a railway operations control centre"
                fetchPriority="high" decoding="async"
                className="h-full w-full object-cover"
                style={{ objectPosition: "58% 22%" }}
              />
            </div>
          </div>
          <figcaption className="mt-8 flex items-baseline justify-between gap-4 border-t border-line pt-3 t-small text-muted lg:ml-auto lg:w-[min(calc(72svh*0.8),36.8rem)]">
            <span className="font-bold text-ink">Aman Kumar Jha — AI &amp; Data Science</span>
            <span className="hidden sm:inline">Railway operations control centre</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
