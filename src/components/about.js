import styles from "./../app/main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { educationData, skillData } from "./projectData";

export default function About({ scrollId, scrollRef }) {
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
        </div>

        <br />

        <div className={styles.reusmeDiv}>
          {/* Resume Section */}
          <h2 className="text-2xl font-bold mb-2">
            Muhammad Talal Liaquat Resume
          </h2>
          <p>
            Here is a link to my <strong>resume</strong>. Feel free to download
            it to learn more about my experience and skills.
          </p>
          <a href="/My-reusme.pdf" download className={styles.resume_link}>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
