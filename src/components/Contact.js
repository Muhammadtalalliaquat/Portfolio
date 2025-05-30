import Icon from "@/components/icon";
import styles from "./../app/main.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Contact({ scrollId, scrollRef }) {
  return (
    <>
      <div className={styles.contactContainer} id={scrollId} ref={scrollRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.contactContainerChildren}>
            <div>
              <h1 className={styles.contactHeading}>Reach out to me!</h1>
              <p className={styles.contactText}>
                I am open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className={styles.iconDiv}>
                <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                <p>Karachi, Pakistan</p>
              </div>
              <div className={styles.iconDiv}>
                <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                <p>+923252091919</p>
              </div>
              <div className={styles.iconDiv}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <p>muhammadtalalliaquat@gmail.com</p>
              </div>
              <div className={styles.iconDiv}>
                <Icon />
              </div>
            </div>
            <div>
              <Image
                className={styles.imageDiv}
                src="https://i.postimg.cc/0yHgk2W5/my-pic-removebg-preview.png"
                alt="Profile Picture"
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
