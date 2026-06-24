"use client";

import Image from "next/image";
import style from "./../portfolio/main.module.css";
// import styles from "../main.module.css";
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
              <span className="inline-flex items-center gap-2 w-fit text-[11px] font-medium tracking-widest uppercase text-violet-600 bg-violet-50 dark:bg-violet-950/30 dark:text-violet-400 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400" />
                Open to work
              </span>

              {/* Greeting */}
              <p className="text-sm text-gray-400 tracking-wide -mb-2">
                Hello there
              </p>

              {/* Name */}
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

              <p className="text-purple-500 font-semibold text-sm">
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

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
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
                className="flex items-center gap-3 mt-1"
              >
                <span className="text-[11px] text-gray-400 tracking-wide">
                  Find me on
                </span>
                <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                <Icon />
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                {/* Decorative ring */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-[10px] border-violet-100 dark:border-violet-900/30 z-0" />

                {/* Photo frame */}
                <div className="relative z-10 rounded-2xl overflow-hidden border border-violet-100 dark:border-violet-900/40 bg-violet-50 dark:bg-violet-950/10">
                  <Image
                    className={style.imageDiv}
                    src="/me-picture.png"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    priority
                  />

                  {/* Available badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-md px-2.5 py-1 text-[11px] font-medium text-violet-600 dark:text-violet-400 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Available
                  </div>
                </div>
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
            {/* ── HEADING ── */}
            <h2 className={style.projectHeading}>Open Source Projects</h2>

            {/* ── GRID ── */}
            <div className={style.projectGrid}>
              {projectsData.map(
                ({ name, description, url, technologies, id }, i) => (
                  <motion.div
                    key={name}
                    className={style.projectCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: i * 0.08,
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
                    {/* Icon */}
                    <div className={style.cardIcon}>
                      <svg
                        width="15"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3>{name}</h3>

                    {/* Description */}
                    <p>{description}</p>

                    {/* Footer row */}
                    <div className={style.btn_contanier}>
                      {/* Tech pills with color dots */}
                      <div className={style.tech_contanier}>
                        {technologies.map((tech) => (
                          <div key={tech + id}>
                            <p
                              style={{
                                display: "inline-block",
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                backgroundColor:
                                  techColors[tech.toLowerCase()] || "#CECBF6",
                                margin: "0",
                                flexShrink: 0,
                              }}
                            />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>

                      {/* View button */}
                      <button className={style.viewButton}>
                        <Link
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </Link>
                      </button>
                    </div>
                  </motion.div>
                ),
              )}
            </div>

            {/* ── MORE PROJECTS ── */}
            <div className={style.viewMoreProjetcs}>
              <Link
                target="_blank"
                href="https://github.com/Muhammadtalalliaquat?tab=repositories"
              >
                <button className={style.viewButton_readmore}>
                  More Projects ↗
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
