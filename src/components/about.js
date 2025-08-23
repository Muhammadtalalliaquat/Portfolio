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
        <h1>About Me</h1>
        <p>
          Hi, I&apos;m Talal! A passionate web developer focused on crafting
          user-friendly designs and seamless experiences. I specialize in
          front-end technologies and love exploring modern tools to build
          innovative web applications. Constantly learning and growing, I aim to
          tackle challenges and create meaningful solutions.
        </p>

        <div className={styles.infoContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.contanerDiv}>
              <h2 className={styles.heading}>Skills</h2>
              <ul className={styles.skills_list}>
                {skillData.map((skill) => (
                  <div key={skill.id}>
                    <li className={styles.skills_list_li}>{skill.name}</li>
                  </div>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            // key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.contanerDiv}>
              <h2 className={styles.heading}>Education</h2>
              <div className={styles.education_section}>
                {educationData.map((edu) => (
                  <div className={styles.education_item} key={edu.id}>
                    <h2>{edu.degree}</h2>
                    <p>{edu.institution}</p>
                    {edu.completedYear ? (
                      <p>
                        <strong>Completed Year:</strong> {edu.completedYear}
                      </p>
                    ) : (
                      <strong>{edu.status}</strong>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <br />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className={`${styles.reusmeDiv} ${
              isDarkTheme ? styles.dark : styles.light
            }`}
            // className={styles.reusmeDiv}
          >
            {/* Resume Section */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Muhammad Talal Liaquat Resume
            </h2>
            <p>
              Here is a link to my <strong>resume</strong>. Feel free to
              download it to learn more about my experience and skills.
            </p>
            <a href="/My-reusme.pdf" download className={styles.resume_link}>
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
