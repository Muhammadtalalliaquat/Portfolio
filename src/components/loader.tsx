import Image from "next/image";
import style from "./../components/main.module.css";

export default function Loader() {
  return (
    <>
      <div className={style.container}>
        <Image
          className={style.image}
          src={"https://i.postimg.cc/FzGLHWtt/output-onlinegiftools.gif"}
          alt="Loading..."
          width={200}
          height={200}
        />
        <p className={style.text}>Talal Liaquat</p>
        <span className={style.span}>Protfolio</span>
      </div>
    </>
  );
}
