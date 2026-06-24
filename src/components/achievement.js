import Image from "next/image";
import styles from "./../app/main.module.css";
import Link from "next/link";
import { achievements } from "../components/projectData";
import { motion } from "framer-motion";

export default function Achievement({ scrollId, scrollRef }) {
  return (
    <>
      <div className={styles.achievements} id={scrollId} ref={scrollRef}>
        {/* ── HEADING ── */}
        <h1>Achievements &amp; Certifications 🏆</h1>

        {/* ── GRID ── */}
        <div className={styles.achievementGrid}>
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.alt}
              className={styles.achievement_item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{
                scale: 0.98,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Certificate image */}
              <Image
                width={400}
                height={180}
                alt={achievement.alt}
                src={achievement.image}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />

              {/* Card footer */}
              <div className={styles.itemDvi}>
                <p>
                  <abbr
                    title={achievement.title}
                    style={{ textDecoration: "none" }}
                  >
                    {achievement.title.length > 30
                      ? `${achievement.title.slice(0, 30)}…`
                      : achievement.title}
                  </abbr>
                </p>

                <Link
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    View
                    <svg
                      width="10"
                      height="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      ;
    </>
  );
}
