"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { navItems } from "@/data/portfolio";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeId, setActiveId] = useState("about");
  const lockRef = useRef(false);
  const lockTimer = useRef<number | undefined>(undefined);

  const unlockSpy = useCallback(() => {
    lockRef.current = false;
    if (lockTimer.current) {
      window.clearTimeout(lockTimer.current);
      lockTimer.current = undefined;
    }
  }, []);

  const navigateTo = useCallback(
    (id: string) => {
      lockRef.current = true;
      setActiveId(id);
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      const onScrollEnd = () => unlockSpy();
      window.addEventListener("scrollend", onScrollEnd, { once: true });
      if (lockTimer.current) window.clearTimeout(lockTimer.current);
      lockTimer.current = window.setTimeout(() => {
        window.removeEventListener("scrollend", onScrollEnd);
        unlockSpy();
      }, 1200);
    },
    [unlockSpy],
  );

  useEffect(() => {
    const ids = navItems.map((item) => item.id);

    const updateActive = () => {
      if (lockRef.current) return;

      const offset = 120;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 160;

      if (atBottom) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
      if (lockTimer.current) window.clearTimeout(lockTimer.current);
    };
  }, []);

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar activeId={activeId} onNavigate={navigateTo} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
