"use client";

import { useEffect, useRef } from 'react';
import styles from "./../../app/portfolio/main.module.css";


const Proficiency = () => {
  const frontendRef = useRef(null);
  const programmingRef = useRef(null);
  const reactjsRef = useRef(null);
  const reactNativeRef = useRef(null);



  useEffect(() => {
    frontendRef.current.style.setProperty('--proficiency', '70%');
    programmingRef.current.style.setProperty('--proficiency', '75%');
    reactjsRef.current.style.setProperty('--proficiency', '75%');
    reactNativeRef.current.style.setProperty('--proficiency', '50%');

  }, []);

  return (
    <div className={styles.proficiencyContainer}>
      <h1 className={styles.heading}>Proficiency</h1>
      
      <div className={styles.skill}>
        <span className={styles.skillName}>Javascript:</span>
        <span className={styles.skillBar} ref={frontendRef}></span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>Typescript:</span>
        <span className={styles.skillBar} ref={programmingRef}></span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>React/Next js</span>
        <span className={styles.skillBar} ref={reactjsRef}></span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>React Native:</span>
        <span className={styles.skillBar} ref={reactNativeRef}></span>
      </div>
    </div>
  );
};

export default Proficiency;





