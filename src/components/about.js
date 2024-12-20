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
          hello! I&apos;m Talal, a web developer with a passion for creating
          innovative and easy-to-use web applications. I have experience in
          front-end technology. Focused on creating user-friendly designs... and
          smooth user experience
        </p>
        <p>
          In addition to writing code I also enjoy learning new skills. and
          explore modernity as well Website development tools and managing
          challenging projects I have a goal To continue to grow as a developer
          and make meaningful contributions. The solution is
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
          <h2 className="text-2xl font-bold mb-2">Muhammad Talal Liaquat Resume</h2>
          <p>
            Here is a link to my <strong>resume</strong>. Feel free to download
            it to learn more about my experience and skills.
          </p>
          <a
            href="/My-reusme.pdf"
            download
            className={styles.resume_link}
          >
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
