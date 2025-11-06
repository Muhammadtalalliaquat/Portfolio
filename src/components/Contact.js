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

  const contactData = {
    heading: "Get in Touch",
    text: "I'm always excited to discuss new opportunities, innovative projects, and the latest trends in frontend development.",
    cards: [
      {
        title: "Email",
        value: "muhammadtalalliaquat@gmail.com",
        icon: faEnvelope,
      },
      {
        title: "Phone",
        value: "+92 325 2091919",
        icon: faPhone,
      },
      {
        title: "Location",
        value: "Karachi, Pakistan",
        icon: faLocationDot,
      },
    ],
    socials: [
      {
        icon: <FaGithub className={styles.icon} />,
        link: "https://github.com/Muhammadtalalliaquat",
      },
      {
        icon: <FaLinkedin className={styles.icon} />,
        link: "https://www.linkedin.com/in/m-talalliaquat/",
      },
    ],
  };

  return (
    <>
      <div id={scrollId} ref={scrollRef} className={styles.contactContainer}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className={`${styles.innerBox} ${
            isDarkTheme ? styles.dark : styles.light
          }`}
        >
          <div className={styles.leftRightLayout}>
            {/* Left Section - Info Cards */}
            <div className={styles.left}>
              {contactData.cards.map((item, index) => (
                <div key={index} className={styles.infoCard}>
                  <div className={styles.iconBox}>
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section - Text */}
            <div className={styles.rightMainContainer}>
              <div className={styles.right}>
                {(() => {
                  const headingWords = contactData.heading.split(" ");
                  return (
                    <h1>
                      {headingWords.slice(0, -1).join(" ")}{" "}
                      <span>{headingWords[headingWords.length - 1]}</span>
                    </h1>
                  );
                })()}
                <p>{contactData.text}</p>
              </div>

              <div className={styles.socialSection}>
                <h4>Connect with me</h4>
                <div className={styles.socialDiv}>
                  {contactData.socials.map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <p className={styles.signature}>
        Made By <span>Talal Liaquat.</span>All Rights Reserved.
      </p>
    </>
  );
}
