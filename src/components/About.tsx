import { SectionHeading } from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-page section-pad scroll-mt-20">
      <SectionHeading eyebrow="About" title="About Me" />
      <div className="card max-w-3xl p-6 sm:p-8">
        <p className="text-lg leading-relaxed text-[var(--muted)]">
          Hi, I&apos;m{" "}
          <span className="font-semibold text-[var(--foreground)]">Talal</span>{" "}
          — a MERN stack developer passionate about building clean,
          user-friendly, and innovative web applications. I love turning ideas
          into seamless digital experiences.
        </p>
        <a
          href="/updated-Talal_resume.pdf"
          download
          className="btn-primary mt-6"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
