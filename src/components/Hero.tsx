"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="container-page section-pad grid items-center gap-12 pt-28 md:grid-cols-2 md:pt-32">
      <div className="space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-[var(--accent)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Open to work
        </span>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m{" "}
          <span className="text-[var(--accent)]">
            <TypeAnimation
              sequence={["Talal 👋", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-lg font-medium text-[var(--accent)]">
          <TypeAnimation
            sequence={["Web Developer", 2000, "MERN Stack Developer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>

        <p className="max-w-md text-[var(--muted)] leading-relaxed">
          MERN stack developer specializing in clean, sustainable front-end
          code, with training from{" "}
          <span className="font-semibold text-[var(--foreground)]">
            Saylani&apos;s Mass IT Institute
          </span>
          . I focus on writing maintainable code that improves user experience.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="/updated-Talal_resume.pdf" download className="btn-secondary">
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-xs tracking-wide text-[var(--muted)]">
            Find me on
          </span>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full border-8 border-[var(--accent-soft)]" />
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <Image
            src="/me-picture.png"
            alt="Muhammad Talal Liaquat"
            width={480}
            height={560}
            priority
            className="h-[340px] w-full object-cover object-top sm:h-[400px]"
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available
          </div>
        </div>
      </motion.div>
    </section>
  );
}
