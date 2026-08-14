"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { projectsData, socialLinks, techColors } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="container-page section-pad scroll-mt-20">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Selected apps I have built, from desktop streaming to live web products."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projectsData.map((project, i) => (
          <motion.article
            key={project.id}
            className="card flex flex-col p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              {project.isPrivate ? (
                <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-medium text-[var(--accent)]">
                  Private repository
                </span>
              ) : null}
            </div>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <ul className="mb-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-xs"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor:
                        techColors[tech.toLowerCase()] || "#9b86ff",
                    }}
                  />
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-fit text-xs"
            >
              {project.kind === "live" ? (
                <>
                  Live demo <FiArrowUpRight />
                </>
              ) : (
                <>
                  View on GitHub <FiGithub />
                </>
              )}
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={socialLinks.githubRepos}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          More Projects
          <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}
