import styles from "./../app/main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { educationData, skillData } from "./projectData";
import { useTheme } from "@/context/themeContext";
import { motion } from "framer-motion";

export default function About({ scrollId, scrollRef }) {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <div className={styles.about_container} id={scrollId} ref={scrollRef}>
        {/* ── HEADING ── */}
        <h1>About Me</h1>

        {/* ── TWO COLUMNS ── */}
        <div className={styles.infoWrapper}>
          {/* LEFT — Bio + Education */}
          <motion.div
            className={styles.leftSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Bio */}
            <p className={styles.aboutText}>
              Hi, I&apos;m <span>Talal</span> — a MERN stack developer
              passionate about building clean, user-friendly, and innovative web
              applications. I love turning ideas into seamless digital
              experiences.
            </p>

            {/* Education */}
            <div className={styles.contanerDiv}>
              <h2 className={styles.heading}>Education</h2>
              <div className={styles.education_section}>
                {educationData.map((edu) => (
                  <div className={styles.education_item} key={edu.id}>
                    <h2>{edu.degree}</h2>
                    <p>{edu.institution}</p>
                    {edu.completedYear ? (
                      <p>
                        <strong>Completed:</strong> {edu.completedYear}
                      </p>
                    ) : (
                      <strong>{edu.status}</strong>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Skills */}
          <motion.div
            className={styles.rightSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.contanerDiv}>
              <h2 className={styles.heading}>Skills</h2>
              <ul className={styles.skills_list}>
                {skillData.map((skill) => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ── RESUME ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className={`${styles.reusmeDiv} ${isDarkTheme ? styles.dark : styles.light}`}
          >
            <h2>Muhammad Talal Liaquat — Resume</h2>
            <p>
              Here is a link to my <strong>resume</strong>. Feel free to
              download it to learn more about my experience and skills.
            </p>
            <a
              href="/updated-Talal_resume.pdf"
              download
              className={styles.resume_link}
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
