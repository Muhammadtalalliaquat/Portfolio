"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { educationData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="container-page section-pad scroll-mt-20">
      <SectionHeading eyebrow="Background" title="Education" />
      <ol className="relative space-y-6 border-l border-[var(--border)] pl-6">
        {educationData.map((edu, i) => (
          <motion.li
            key={edu.id}
            className="relative"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="absolute -left-[29px] top-6 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)]" />
            <div className="card p-5">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-[var(--muted)]">{edu.institution}</p>
              {edu.completedYear ? (
                <p className="mt-1 text-sm text-[var(--accent)]">
                  Completed {edu.completedYear}
                </p>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
