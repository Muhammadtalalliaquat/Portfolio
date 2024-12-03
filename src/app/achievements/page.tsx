import Image from "next/image";
import styles from "./../achievements/main.module.css";
import Link from "next/link";

type scrollsectionType = {
  id: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function Achievements({ id , ref }: scrollsectionType) {

  return (
    <>
      <div className={styles.achievements} id={id} ref={ref}>
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
