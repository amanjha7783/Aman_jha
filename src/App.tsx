import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Achievements, Certifications, DeveloperProfiles, Skills } from "./components/Sections";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { profile } from "./data/profile";

export default function App() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ anchors: { offset: -72 } });
    let id = requestAnimationFrame(function raf(t) { lenis.raf(t); id = requestAnimationFrame(raf); });
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Experience /><Projects /><Skills /><Achievements /><Certifications />
        <DeveloperProfiles user={profile.githubUser} links={profile.links} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
