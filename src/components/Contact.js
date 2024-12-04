import Icon from "@/components/icon";
import styles from "./../app/main.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Contact({ scrollId, scrollRef }) {
  return (
    <>
      <div className={styles.contactContainer} id={scrollId} ref={scrollRef}>
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
    </>
  );
}
