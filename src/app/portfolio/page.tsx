"use client";

import Image from "next/image";
import style from "./../portfolio/main.module.css";
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
            <div className="w-3/5">
              <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Talal 👋</h1>
              <q style={{ fontWeight: "bolder", textDecoration: "qute" }}>
                Front-end developer
              </q>
              <p className="600 leading-relaxed ">
                As a well-rounded individual and a front-hand web developer, I
                am very attentive to the little things, especially
                user-responsive and user-friendly web applications. I am
                currently learning back-hand from{" "}
                <b> Saylani mass IT training institute.</b> While passionate
                about both, I focus on writing clean, simple, and sustainable
                front end. Through close cooperation and creative solutions to
                problems, I aim to provide users with a flawless experience!
              </p>

              <div id={style.acountContainer} className="mt-4">
                <Icon />
              </div>
            </div>

            <div>
              <Image
                src="https://i.ibb.co/CWvfFmr/output-onlinegiftools.gif"
                style={{ objectFit: "cover" }}
                alt="Development GIF"
                width={300}
                height={300}
                unoptimized
              />
            </div>
          </div>

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
                ({ name, description, url, technologies, id }) => (
                  <div key={name} className={style.projectCard}>
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <div className={style.btn_contanier}>
                      <div className={style.tech_contanier}>
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
                  </div>
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
                width={30}
                height={30}
              />
            </div>
          )}

          <p className={style.bottom_p}>Made By Talal Liaquat</p>
        </>
      )}
    </>
  );
}
