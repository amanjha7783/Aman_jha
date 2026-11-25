import { Mail, Phone } from "lucide-react";
import { navItems, profile } from "../data/profile";
import { Brand } from "./ui";

const navIds: Record<string, string> = {
  Home: "home",
  About: "about",
  Experience: "experience",
  Projects: "projects",
  Skills: "skills",
  Hackathons: "achievements",
  Certifications: "certifications",
  Contact: "contact",
};

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="wrap grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold">{profile.name}</p>
          <p className="t-small text-muted">{profile.role}</p>
          <p className="t-small text-muted">{profile.institution}</p>
          <div className="mt-3 flex flex-col gap-1.5">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm text-accent transition hover:underline">
              <Mail size={15} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink">
              <Phone size={15} /> {profile.phone}
            </a>
          </div>
        </div>

        <div>
          <p className="t-label font-mono uppercase text-accent">Quick Links</p>
          <ul className="mt-3 grid grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-muted">
            {navItems.map((n) => (
              <li key={n}>
                <a className="transition hover:text-ink" href={`#${navIds[n] || n.toLowerCase()}`}>
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <p className="t-label font-mono uppercase text-accent md:text-right">Connect</p>
          <ul className="mt-3 flex flex-wrap gap-4 md:justify-end">
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent"
              >
                <Brand.GitHub size={17} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent"
              >
                <Brand.LinkedIn size={17} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent"
              >
                <Brand.LeetCode size={17} /> LeetCode
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap border-t border-line py-4">
        <p className="t-small text-center text-muted md:text-left">
          © {new Date().getFullYear()} {profile.name} · Built with React 19, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
