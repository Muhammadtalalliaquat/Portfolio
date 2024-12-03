import Image from "next/image";
import styles from "./../achievement/main.module.css";
import Link from "next/link";

type goTosectionType = {
  scrollId: string;
  scrollRef: React.Ref<HTMLDivElement>;
};

export default function Achievement({ scrollId , scrollRef }: goTosectionType) {

  return (
    <>
      <div className={styles.achievements} id={scrollId} ref={scrollRef}>
        <h1>Achievements And Certifications 🏆</h1>
        <div className={styles.achievement_item}>
          <Image
            width={200}
            height={200}
            alt="google-image"
            src="https://i.postimg.cc/cJcJkW9R/google.png"
          />
          <div className={styles.itemDvi}>
            <p>Foundations of User Experience (UX) Design</p>
            <Link href="https://www.coursera.org/account/accomplishments/certificate/82GDGL4B9BCD" target="_blank">
              <span>Certification</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
