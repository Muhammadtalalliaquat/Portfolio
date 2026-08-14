"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Achievements() {
  return (
    <section
      id="certifications"
      className="container-page section-pad scroll-mt-20"
    >
      <SectionHeading
        eyebrow="Credentials"
        title="Achievements & Certifications"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <motion.article
            key={item.id}
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <div className="flex h-48 items-center justify-center bg-white p-6">
              <Image
                src={item.image}
                alt={item.alt}
                width={400}
                height={180}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                {item.issuer}
              </p>
              <h3 className="mt-1 font-semibold leading-snug">{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--accent)]"
              >
                View certificate <FiArrowUpRight />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
