"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { proficiencyData, skillGroups } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="container-page section-pad scroll-mt-20">
      <SectionHeading
        eyebrow="Skills"
        title="Skills & proficiency"
        description="Frontend, backend, and tools I use to ship maintainable web apps."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-5">
          {proficiencyData.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-[var(--muted)]">{skill.pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-2)]">
                <motion.div
                  className="h-full rounded-full bg-[var(--accent)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
