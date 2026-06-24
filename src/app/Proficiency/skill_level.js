"use client";

import { useEffect, useRef } from "react";
import styles from "./../../app/portfolio/main.module.css";

const Proficiency = () => {
  const frontendRef = useRef(null);
  const programmingRef = useRef(null);
  const reactjsRef = useRef(null);
  const reactNativeRef = useRef(null);

  useEffect(() => {
    frontendRef.current.style.setProperty("--proficiency", "75%");
    programmingRef.current.style.setProperty("--proficiency", "70%");
    reactjsRef.current.style.setProperty("--proficiency", "85%");
    reactNativeRef.current.style.setProperty("--proficiency", "50%");
  }, []);

  const skills = [
    { name: "JavaScript", pct: 90, ref: frontendRef },
    { name: "TypeScript", pct: 80, ref: programmingRef },
    { name: "React / Next.js", pct: 85, ref: reactjsRef },
    { name: "React Native", pct: 70, ref: reactNativeRef },
  ];

  return (
    <div className={styles.proficiencyContainer}>
      <h2 className={styles.heading}>Proficiency</h2>

      {skills.map(({ name, pct, ref }) => (
        <div className={styles.skill} key={name}>
          <span className={styles.skillName}>{name}</span>
          <span
            className={styles.skillBar}
            ref={ref}
            style={{ ["--proficiency"]: `${pct}%` }}
          />
          <span className={styles.skillPct}>{pct}%</span>
        </div>
      ))}
    </div>
  );
};

export default Proficiency;
