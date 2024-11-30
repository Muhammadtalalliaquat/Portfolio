import Navbar from "@/components/navbar";
import styles from "./../contact/main.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {


  return (
    <>
      <Navbar />
      <br />

      <div className={styles.contactContainer}>
        <h1 className={styles.contactHeading}>Contact Me</h1>
        <p className={styles.contactText}>
          Feel free to reach out to me via email at{" "}
          <a
            className={styles.email}
            href="mailto:muhammadtalalliaquat@gmail.com"
          >
            muhammadtalalliaquat@gmail.com
          </a>{" "}
          or call me at <b>+923252091919</b>. I am open to discussing new
          projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <h2 className={styles.connect}>Connect with me: </h2>
        <div className={styles.connectContainer}>
          <div className={styles.subContainer}>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/023/986/608/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="LinkedIn Logo"
              width={30}
              height={30}
            />
            <Link
              // href="https://www.linkedin.com/in/muhammad-talal-428699255/"
              href="https://www.linkedin.com/in/m-talalliaquat/"


              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Muhammadtalalliaquat</span>
            </Link>
          </div>

          <div className={styles.subContainer}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github Logo"
              width={20}
              height={20}
            />
            <Link
              href="https://github.com/Muhammadtalalliaquat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Muhammadtalalliaquat</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
