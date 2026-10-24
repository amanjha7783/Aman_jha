import { navItems, profile } from "../data/profile";
import { Brand } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-8 py-10 md:grid-cols-3">
        <div><p className="font-display text-lg font-extrabold">{profile.name}</p><p className="t-small text-muted">{profile.role}</p>
          <a href={`mailto:${profile.email}`} className="mt-2 block break-all text-sm text-accent">{profile.email}</a></div>
        <ul className="grid grid-cols-2 gap-1 text-sm text-muted">{navItems.map((n) => <li key={n}><a className="hover:text-ink" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul>
        <div className="flex gap-3 md:justify-end">
          <a aria-label="GitHub" href={profile.links.github} target="_blank" rel="noreferrer"><Brand.GitHub /></a>
          <a aria-label="LinkedIn" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Brand.LinkedIn /></a>
          <a aria-label="LeetCode" href={profile.links.leetcode} target="_blank" rel="noreferrer"><Brand.LeetCode /></a>
        </div>
      </div>
      <p className="wrap border-t border-line py-4 t-small text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
