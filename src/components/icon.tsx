import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import style from "./../components/main.module.css";
import Link from "next/link";



export default function Icon() {
    return(
        <>
         <div className={style.iconContanier}>
            <Link href={"https://github.com/Muhammadtalalliaquat"} target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className={style.icon}
              />
            </Link>

            <Link href={"https://www.linkedin.com/in/m-talalliaquat/"} target="_blank">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className={style.icon}
              /> 
            </Link>
          </div>
        </>
    )
}
