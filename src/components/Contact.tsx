import { type FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { profile } from "../data/profile";
import { Brand, Reveal, Section } from "./ui";

const ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
type State = "idle" | "sending" | "sent" | "mailto" | "error";
const field = "mt-1.5 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-base font-normal";

export function Contact() {
  const [state, setState] = useState<State>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const err: Record<string, string> = {};
    if (!d.name?.trim()) err.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? "")) err.email = "Please enter a valid email.";
    if (!d.subject?.trim()) err.subject = "Please add a subject.";
    if ((d.message ?? "").trim().length < 10) err.message = "Message should be at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    if (!ENDPOINT) {
      const body = encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${body}`;
      setState("mailto");
      return;
    }
    setState("sending");
    try {
      const r = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw new Error();
      setState("sent");
      e.currentTarget.reset();
    } catch { setState("error"); }
  }

  const Err = ({ k }: { k: string }) => errors[k] ? <span role="alert" className="text-xs text-red-600">{errors[k]}</span> : null;
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect" intro="Have an interesting AI project, internship opportunity, or research idea? Let's connect.">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-[clamp(2rem,5vw,5rem)]">
        <Reveal className="space-y-3">
          {[
            [<Mail size={18} />, profile.email, `mailto:${profile.email}`],
            [<Brand.LinkedIn size={18} />, "LinkedIn", profile.links.linkedin],
            [<Brand.GitHub size={18} />, "GitHub", profile.links.github],
            [<Brand.LeetCode size={18} />, "LeetCode", profile.links.leetcode],
          ].map(([icon, label, href]) => (
            <a key={href as string} href={href as string} target={(href as string).startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-line bg-surface px-5 py-4 break-all text-lg transition hover:border-accent"><span className="text-accent">{icon}</span>{label}</a>
          ))}
        </Reveal>
        <Reveal delay={0.08}>
          <form onSubmit={submit} noValidate className="space-y-5 rounded-lg border border-line bg-surface p-[clamp(1.25rem,3vw,2rem)] shadow-[var(--shadow-card)]">
            <label className="block font-bold">Name<input name="name" autoComplete="name" className={field} /><Err k="name" /></label>
            <label className="block font-bold">Email<input name="email" type="email" autoComplete="email" className={field} /><Err k="email" /></label>
            <label className="block font-bold">Subject<input name="subject" className={field} /><Err k="subject" /></label>
            <label className="block font-bold">Message<textarea name="message" rows={5} className={field} /><Err k="message" /></label>
            <button disabled={state === "sending"} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-accent-ink disabled:opacity-60">
              <Send size={16} /> {state === "sending" ? "Sending…" : ENDPOINT ? "Send message" : "Open in email app"}
            </button>
            <p aria-live="polite" className="text-sm">
              {state === "sent" && <span className="text-emerald-700">Message sent. Thank you, I will reply soon.</span>}
              {state === "mailto" && <span className="text-muted">Your email app should open with the message ready. Please press send there; nothing has been sent yet.</span>}
              {state === "error" && <span className="text-red-600">Could not send the message. Please email {profile.email} directly.</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
