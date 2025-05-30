import Image from "next/image";
import styles from "./../app/main.module.css";
import Link from "next/link";
import { achievements } from "../components/projectData"
import { motion } from "framer-motion";

export default function Achievement({ scrollId, scrollRef }) {
  return (
    <>
      <div className={styles.achievements} id={scrollId} ref={scrollRef}>
        <h1>Achievements And Certifications 🏆</h1>
        {achievements.map((achievement, i) => (
          <motion.div
            key={achievement.alt}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div key={achievement.id} className={styles.achievement_item}>
              <Image
                width={200}
                height={200}
                alt={achievement.alt}
                src={achievement.image}
              />
              <div className={styles.itemDvi}>
                <p>{achievement.title}</p>
                <Link href={achievement.link} target="_blank">
                  <span>Certification</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      ;
    </>
  );
}
