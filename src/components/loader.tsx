import Image from "next/image";
// import style from "./../components/main.module.css";

export default function Loader() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center ">
        {/* Loader Image */}
        <div className="relative animate-pulse">
          <Image
            src="https://i.postimg.cc/FzGLHWtt/output-onlinegiftools.gif"
            alt="Loading..."
            width={120}
            height={120}
            className=""
          />
        </div>

        {/* Name */}
        <h1 className="mt-6 text-2xl md:text-3xl font-bold tracking-wide">
          Talal Liaquat
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-sm md:text-base text-gray-400 uppercase tracking-widest">
          Portfolio Loading...
        </p>

        {/* Progress Bar */}
        <div className="mt-5 w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-indigo-500 animate-loading" />
        </div>

        {/* Animation */}
        <style jsx>{`
          @keyframes loading {
            0% {
              width: 0%;
            }
            50% {
              width: 60%;
            }
            100% {
              width: 100%;
            }
          }

          .animate-loading {
            animation: loading 1.8s infinite ease-in-out;
          }
        `}</style>
      </div>
      {/* <div className={style.container}>
        <Image
          className={style.image}
          src={"https://i.postimg.cc/FzGLHWtt/output-onlinegiftools.gif"}
          alt="Loading..."
          width={200}
          height={200}
        />
        <p className={style.text}>Talal Liaquat</p>
        <span className={style.span}>Protfolio</span>
      </div> */}
    </>
  );
}
