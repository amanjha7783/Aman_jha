import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "../data/profile";
import { btnPrimary } from "./ui";

const ids: Record<string, string> = { Home: "home", About: "about", Experience: "experience", Projects: "projects", Skills: "skills", Hackathons: "achievements", Certifications: "certifications", Contact: "contact" };

export function useTheme() {
  const [theme, setTheme] = useState<string>(() => document.documentElement.dataset.theme || "dark");
  const toggle = () => {
    const n = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = n;
    try { localStorage.setItem("theme", n); } catch { /* storage unavailable */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", n === "dark" ? "#0d1020" : "#f8f8fb");
    setTheme(n);
  };
  return { theme, toggle };
}

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    Object.values(ids).forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/92 backdrop-blur">
      <nav aria-label="Main" className="wrap flex h-[4.25rem] items-center justify-between">
        <a href="#home" className="font-mono text-base font-bold tracking-wider">
          <span className="text-accent">&lt;</span>{profile.monogram}<span className="text-accent">/&gt;</span>
        </a>
        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((n) => (
            <li key={n}>
              <a href={`#${ids[n]}`} aria-current={active === ids[n] ? "true" : undefined}
                className={`relative rounded-lg px-3 py-2 text-[0.95rem] font-medium transition hover:text-ink ${active === ids[n] ? "text-ink" : "text-muted"}`}>
                {n}
                {active === ids[n] && <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded bg-accent" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line hover:border-accent">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={profile.resume} download className={`${btnPrimary} hidden !px-4 !py-2.5 !text-[0.95rem] sm:inline-flex`}><Download size={16} /> Resume</a>
          <button className="grid h-11 w-11 place-items-center rounded-lg border border-line xl:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <div className={`grid transition-[grid-template-rows] duration-300 xl:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <ul className="wrap border-t border-line bg-canvas py-3" inert={!open}>
            {navItems.map((n) => (
              <li key={n}><a href={`#${ids[n]}`} onClick={() => setOpen(false)} aria-current={active === ids[n] ? "true" : undefined}
                className={`block rounded-lg px-3 py-3.5 text-lg font-medium ${active === ids[n] ? "text-accent" : "text-muted"} hover:text-ink`}>{n}</a></li>
            ))}
            <li className="pt-2"><a href={profile.resume} download className={`${btnPrimary} w-full`}><Download size={18} /> Download Resume</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
