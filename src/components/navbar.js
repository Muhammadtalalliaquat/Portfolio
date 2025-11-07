"use client";

import styles from "./../components/main.module.css";
import { useState, useEffect } from "react";
import { useTheme } from "./../context/themeContext";
import Image from "next/image";

function Navbar({ onScroll, sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkTheme, themeToggle } = useTheme();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const handleClick = (sectionName, ref) => {
    setSelected(sectionName);
    onScroll(ref);
  };

  const toggleMenubar = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={`${styles.navbar} ${isDarkTheme ? styles.dark : styles.light}`}
      // className={styles.navbar}
    >
      <div>
        <span className={styles.btn} onClick={() => window.location.reload()}>
          Portfolio
        </span>
      </div>
      <div className={styles.flex_none}>
        <button
          className={styles.hamburger}
          onClick={toggleMenubar}
          aria-label="Toggle menu"
        >
          <div className={styles.iconWrapper}>
            <Image
              src="https://i.postimg.cc/FRtqmFnP/more.png"
              alt="Hamburger Icon"
              width={15}
              height={15}
              className={`${styles.icon} ${
                !isMenuOpen ? styles.show : styles.hide
              } ${isDarkTheme ? styles.dark : styles.light}`}
            />
            <Image
              src="https://i.postimg.cc/rsftGmBg/close.png"
              alt="Close Icon"
              width={15}
              height={15}
              className={`${styles.icon} ${
                isMenuOpen ? styles.show : styles.hide
              } ${isDarkTheme ? styles.dark : styles.light}`}
            />
          </div>
        </button>

        {/* <button
          className={styles.hamburger}
          onClick={toggleMenubar}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Image
              className={`${styles.closeMenustyle} ${
                isDarkTheme ? styles.dark : styles.light
              }`}
              width={15}
              height={15}
              src={"https://i.postimg.cc/rsftGmBg/close.png"}
              alt="Close Menu"
            />
          ) : (
            <Image
              className={`${styles.closeMenustyle} ${
                isDarkTheme ? styles.dark : styles.light
              }`}
              width={15}
              height={15}
              src={"https://i.postimg.cc/FRtqmFnP/more.png"}
              alt="hamburger menu"
            />
          )}
        </button> */}

        <ul className={`${styles.menu} ${isMenuOpen ? styles.menu_open : ""}`}>
          <li
            className={selected === "achievement" ? styles.active : ""}
            onClick={() => handleClick("achievement", sections.acheievemnet)}
          >
            <span>Achievements</span>
          </li>
          <li
            className={selected === "projects" ? styles.active : ""}
            onClick={() => handleClick("projects", sections.projects)}
          >
            <span>Projects</span>
          </li>
          <li
            className={selected === "about" ? styles.active : ""}
            onClick={() => handleClick("about", sections.about)}
          >
            <span>About</span>
          </li>
          <li
            className={selected === "contact" ? styles.active : ""}
            onClick={() => handleClick("contact", sections.contact)}
          >
            <span>Contact</span>
          </li>

          <li className={styles.themeToggleLi}>
            <button
              onClick={() => themeToggle(!isDarkTheme)}
              className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-500 shadow-inner"
            >
              {/* Circle toggle thumb */}
              <span
                className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform duration-500 ${
                  isDarkTheme ? "translate-x-8 rotate-180" : "translate-x-0"
                }`}
              ></span>

              {/* Sun icon (Light mode) */}
              <svg
                className={`absolute left-2 w-4 h-4 text-yellow-400 transition-opacity duration-500 ${
                  isDarkTheme ? "opacity-0" : "opacity-100"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5a1 1 0 0 1 1-1V2a1 1 0 0 1-2 0v1.5a1 1 0 0 1 1 1zM12 19.5a1 1 0 0 1-1 1V22a1 1 0 0 1 2 0v-1.5a1 1 0 0 1-1-1zM4.22 5.64a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41L4.22 7.05a1 1 0 0 1 0-1.41zM18.31 17.73a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1H4.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zM19.5 12a1 1 0 0 1 1-1H22a1 1 0 0 1 0 2h-1.5a1 1 0 0 1-1-1zM5.64 18.36a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41L5.64 19.77a1 1 0 0 1 0-1.41zM17.73 5.64a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41L17.73 7.05a1 1 0 0 1 0-1.41z" />
                <circle cx="12" cy="12" r="3" />
              </svg>

              {/* Moon icon (Dark mode) */}
              <svg
                className={`absolute right-2 w-4 h-4 text-gray-100 transition-opacity duration-500 ${
                  isDarkTheme ? "opacity-100" : "opacity-0"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 1 1 11.1 3.41 1 1 0 0 0 12.36 2 10 10 0 1 0 22 14.05a1 1 0 0 0-.36-1.05z" />
              </svg>
            </button>
            {/* <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                checked={isDarkTheme}
                onChange={themeToggle}
              />

              <svg
                className="swap-off h-6 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {isMenuOpen && (
                <span style={{ marginLeft: "40px" }}>Dark To Light</span>
              )}
              <svg
                className="swap-on h-6 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
