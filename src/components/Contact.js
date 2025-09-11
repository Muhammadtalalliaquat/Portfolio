// import Icon from "@/components/icon";
import styles from "./../app/main.module.css";
import { useTheme } from "@/context/themeContext";
import Link from "next/link";
// import Image from "next/image";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact({ scrollId, scrollRef }) {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <div id={scrollId} ref={scrollRef} className={styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          // className={styles.innerBox}
          className={`${styles.innerBox} ${
            isDarkTheme ? styles.dark : styles.light
          }`}
        >
          <div className={styles.contactContainerChildren}>
            <h1 className={styles.contactHeading}>Reach out to me!</h1>
            <p className={styles.contactText}>
              I’m open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <p>Karachi, Pakistan</p>
            </div>

            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <p>+92 325 2091919</p>
            </div>

            <div className={styles.iconDiv}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <p>muhammadtalalliaquat@gmail.com</p>
            </div>

            <div className={styles.socialDiv}>
              <Link
                href="https://github.com/Muhammadtalalliaquat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={styles.icon} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/m-talalliaquat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.icon} />
              </Link>
              {/* <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className={styles.icon} />
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* Signature */}
      </div>
      <p className={styles.signature}>
        Made By <span>Talal Liaquat.</span>All Rights Reserved.
      </p>

      {/* <div className={styles.contactContainer} id={scrollId} ref={scrollRef}>
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
      </div> */}
    </>
  );
}
