"use client";

import { useEffect, useRef } from 'react';
import styles from "./../../app/portfolio/main.module.css";


const Proficiency = () => {
  const frontendRef = useRef(null);
  const programmingRef = useRef(null);
  const codeStructureRef = useRef(null);

  useEffect(() => {
    frontendRef.current.style.setProperty('--proficiency', '70%');
    programmingRef.current.style.setProperty('--proficiency', '60%');
    codeStructureRef.current.style.setProperty('--proficiency', '60%');
  }, []);

  return (
    <div className={styles.proficiencyContainer}>
      <h1 className={styles.heading}>Proficiency</h1>
      
      <div className={styles.skill}>
        <span className={styles.skillName}>Frontend/Design:</span>
        <span className={styles.skillBar} ref={frontendRef}></span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>Programming:</span>
        <span className={styles.skillBar} ref={programmingRef}></span>
      </div>

      <div className={styles.skill}>
        <span className={styles.skillName}>Code/Structure:</span>
        <span className={styles.skillBar} ref={codeStructureRef}></span>
      </div>
    </div>
  );
};

export default Proficiency;





