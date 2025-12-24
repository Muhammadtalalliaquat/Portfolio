"use client";

import Image from "next/image";
import style from "./../portfolio/main.module.css";
import styles from "../main.module.css";
import Navbar from "@/components/navbar";
import Proficiency from "@/app/Proficiency/skill_level";
import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import Icon from "@/components/icon";
import { projectsData, techColors } from "@/components/projectData";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/loader";
import Achievement from "@/components/achievement";
import Contact from "@/components/Contact";
import About from "@/components/about";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Portfolio() {
  const { isDarkTheme } = useTheme();
  const [loader, setLoader] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const loading = () => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  useEffect(() => {
    loading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const acheievemnetRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScrollYeaix = () => {
      if (window.scrollY > 350) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScrollYeaix);

    return () => window.removeEventListener("scroll", handleScrollYeaix);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar
            onScroll={handleScroll}
            sections={{
              projects: projectsRef,
              contact: contactRef,
              acheievemnet: acheievemnetRef,
              about: aboutMeRef,
            }}
          />

          <br />
          <div
            className={`${style.main_container} ${
              isDarkTheme ? style.dark : style.light
            }`}
          >
            <div className="w-full md:w-3/6 space-y-4">
              <h1 className="text-3xl font-bold">
                Hi, I&apos;m{" "}
                <TypeAnimation
                  sequence={["Talal 👋", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </h1>

              <p className="text-yellow-600 font-semibold text-lg">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </p>

              <p className="leading-relaxed">
                MERN stack developer specializing in clean, sustainable
                front-end code. Passionate about user-friendly design and
                efficient web solutions, with training from{" "}
                <span className="font-bold">
                  Saylani&apos;s Mass IT Institute
                </span>
                . While I have experience in both front-end and back-end
                development, my primary focus is on writing clean, simple, and
                maintainable code to enhance user experiences.
              </p>

              <div
                id={style.acountContainer}
                className="flex items-center gap-3 mt-4"
              >
                <Icon />
              </div>
            </div>

            <div>
              {/* <Image
                src="https://i.ibb.co/CWvfFmr/output-onlinegiftools.gif"
                style={{ objectFit: "cover" }}
                alt="Development GIF"
                width={300}
                height={300}
                unoptimized
              /> */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Image
                  className={styles.imageDiv}
                  src="/my-pic.png"
                  alt="Profile Picture"
                  width={300}
                  height={300}
                />
              </motion.div>
            </div>
          </div>
          <br />

          <Proficiency />
          <br />

          <div
            className={style.projectOverview}
            id="projects"
            ref={projectsRef}
          >
            <h2 className={style.projectHeading}>Open Source Projects</h2>
            <div className={style.lines}>
              <div></div>
              <div className={style.center_line}></div>
              <div></div>
            </div>
            <br />
            <div className={style.projectGrid}>
              {projectsData.map(
                ({ name, description, url, technologies, id }, i) => (
                  <motion.div
                    key={name}
                    className={style.projectCard}
                    // initial={{ opacity: 0, y: 30 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.4, delay: i * 0.3 ,  ease: "easeOut",}}
                    // viewport={{ once: true, amount: 0.2 }}
                    initial={{ opacity: 0, y: 20 }} // thoda kam movement for snappy feel
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25, // short but not too harsh
                      delay: i * 0.08, // faster stagger
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.15 }}
                    whileHover={{
                      scale: 0.97,
                      translateZ: 0,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.97 }}
                    layout
                  >
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <div className={style.btn_contanier}>
                      <div className={style.tech_contanier}>
                        {technologies.map((tech) => (
                          <div key={tech + id}>
                            <p
                              style={{
                                color:
                                  techColors[tech.toLowerCase()] || "black",
                                display: "inline-block",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor:
                                  techColors[tech.toLowerCase()] || "black",
                                margin: "0 5px",
                              }}
                            ></p>
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                      <button className={style.viewButton}>
                        <Link
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                )
              )}
            </div>

            <br />
            <div className={style.viewMoreProjetcs}>
              <Link
                target="_blank"
                href="https://github.com/Muhammadtalalliaquat?tab=repositories"
              >
                <button className={style.viewButton_readmore}>
                  More Projects
                </button>
              </Link>
            </div>
          </div>

          <Achievement scrollId="acheievemnet" scrollRef={acheievemnetRef} />

          <About scrollId="about" scrollRef={aboutMeRef} />
          <br />
          <Contact scrollId="contact" scrollRef={contactRef} />

          {showButton && (
            <div
              className={`${style.arrowSign} ${style.transition}`}
              onClick={handleScrollToTop}
            >
              <Image
                src={"https://i.postimg.cc/1tX5HNJW/arrow.png"}
                style={{ objectFit: "cover", fill: "white" }}
                alt="Scroll to Top"
                width={20}
                height={20}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}
