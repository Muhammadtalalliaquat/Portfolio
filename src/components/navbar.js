"use client";

import styles from "./../components/main.module.css";
import { useState, useEffect } from "react";
import { useTheme } from "./../context/themeContext";
// import Image from "next/image";


function Navbar({ onScroll, sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkTheme, themeToggle } = useTheme();
  const [selected, setSelected] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  const handleClick = (sectionName, ref) => {
    setSelected(sectionName);
    onScroll(ref);
  };

  const navItems = [
    { key: "achievement", label: "Achievements", ref: sections.acheievemnet },
    { key: "projects",    label: "Projects",     ref: sections.projects },
    { key: "about",       label: "About",        ref: sections.about },
    { key: "contact",     label: "Contact",      ref: sections.contact },
  ];

  // const toggleMenubar = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`${styles.navbar} ${isDarkTheme ? styles.dark : styles.light} ${scrolled ? styles.scrolled : ""}`}
    >
      <span className={styles.logo} onClick={() => window.location.reload()}>
        <span className={styles.logoMark}>TL</span>
        Talal<span className={styles.dot}>Liaquat.</span>
      </span>

      {/* Desktop links */}
      <ul className={styles.links}>
        {navItems.map(({ key, label, ref }) => (
          <li key={key} className={selected === key ? styles.active : ""}>
            <button onClick={() => handleClick(key, ref)}>{label}</button>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className={styles.controls}>
        {/* Theme toggle */}
        <button
          className={styles.themeToggle}
          onClick={() => themeToggle(!isDarkTheme)}
          aria-label="Toggle theme"
        >
          <span
            className={`${styles.thumb} ${isDarkTheme ? styles.thumbDark : ""}`}
          />
          <svg
            className={`${styles.sunIcon} ${!isDarkTheme ? styles.iconVisible : ""}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            width="14"
            height="14"
          >
            <path d="M12 4.5a1 1 0 0 1 1-1V2a1 1 0 0 1-2 0v1.5a1 1 0 0 1 1 1zM12 19.5a1 1 0 0 1-1 1V22a1 1 0 0 1 2 0v-1.5a1 1 0 0 1-1-1zM4.22 5.64a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41L4.22 7.05a1 1 0 0 1 0-1.41zM18.31 17.73a1 1 0 0 1 1.41 0l1.06 1.06a1 1 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1H4.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zM19.5 12a1 1 0 0 1 1-1H22a1 1 0 0 1 0 2h-1.5a1 1 0 0 1-1-1zM5.64 18.36a1 1 0 0 1 1.41 0l1.06 1.06a1 1 1 1-1.41 1.41L5.64 19.77a1 1 0 0 1 0-1.41zM17.73 5.64a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41L17.73 7.05a1 1 0 0 1 0-1.41z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <svg
            className={`${styles.moonIcon} ${isDarkTheme ? styles.iconVisible : ""}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            width="14"
            height="14"
          >
            <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 1 1 11.1 3.41 1 1 0 0 0 12.36 2 10 10 0 1 0 22 14.05a1 1 0 0 0-.36-1.05z" />
          </svg>
        </button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.barTop : ""}`}
          />
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.barMid : ""}`}
          />
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.barBot : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className={styles.mobileMenu}>
            {navItems.map(({ key, label, ref }) => (
              <li key={key} className={selected === key ? styles.active : ""}>
                <button onClick={() => handleClick(key, ref)}>{label}</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
    // <div
    //   className={`${styles.navbar} ${isDarkTheme ? styles.dark : styles.light}`}
    // >
    //   <div>
    //     <span className={styles.btn} onClick={() => window.location.reload()}>
    //       Portfolio
    //     </span>
    //   </div>
    //   <div className={styles.flex_none}>
    //     <button
    //       className={styles.hamburger}
    //       onClick={toggleMenubar}
    //       aria-label="Toggle menu"
    //     >
    //       <div className={styles.iconWrapper}>
    //         <Image
    //           src="https://i.postimg.cc/FRtqmFnP/more.png"
    //           alt="Hamburger Icon"
    //           width={15}
    //           height={15}
    //           className={`${styles.icon} ${
    //             !isMenuOpen ? styles.show : styles.hide
    //           } ${isDarkTheme ? styles.dark : styles.light}`}
    //         />
    //         <Image
    //           src="https://i.postimg.cc/rsftGmBg/close.png"
    //           alt="Close Icon"
    //           width={15}
    //           height={15}
    //           className={`${styles.icon} ${
    //             isMenuOpen ? styles.show : styles.hide
    //           } ${isDarkTheme ? styles.dark : styles.light}`}
    //         />
    //       </div>
    //     </button>

    //     {isMenuOpen && (
    //       <div
    //         className="fixed inset-0 z-40 sm:hidden"
    //         onClick={() => setIsMenuOpen(false)}
    //       />
    //     )}
    //     <div
    //       className={`${isMenuOpen ? "absolute top-0 left-0 w-full z-50" : ""}`}
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       <ul
    //         className={`${styles.menu} ${isMenuOpen ? styles.menu_open : ""}`}
    //       >
    //         <li
    //           className={selected === "achievement" ? styles.active : ""}
    //           onClick={() => handleClick("achievement", sections.acheievemnet)}
    //         >
    //           <span>Achievements</span>
    //         </li>
    //         <li
    //           className={selected === "projects" ? styles.active : ""}
    //           onClick={() => handleClick("projects", sections.projects)}
    //         >
    //           <span>Projects</span>
    //         </li>
    //         <li
    //           className={selected === "about" ? styles.active : ""}
    //           onClick={() => handleClick("about", sections.about)}
    //         >
    //           <span>About</span>
    //         </li>
    //         <li
    //           className={selected === "contact" ? styles.active : ""}
    //           onClick={() => handleClick("contact", sections.contact)}
    //         >
    //           <span>Contact</span>
    //         </li>

    //         <li className={styles.themeToggleLi}>
    //           <button
    //             onClick={() => themeToggle(!isDarkTheme)}
    //             className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-500 shadow-inner"
    //           >
    //             <span
    //               className={`absolute left-1 top-1 w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform duration-500 ${
    //                 isDarkTheme ? "translate-x-8 rotate-180" : "translate-x-0"
    //               }`}
    //             ></span>

    //             <svg
    //               className={`absolute left-2 w-4 h-4 text-yellow-400 transition-opacity duration-500 ${
    //                 isDarkTheme ? "opacity-0" : "opacity-100"
    //               }`}
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M12 4.5a1 1 0 0 1 1-1V2a1 1 0 0 1-2 0v1.5a1 1 0 0 1 1 1zM12 19.5a1 1 0 0 1-1 1V22a1 1 0 0 1 2 0v-1.5a1 1 0 0 1-1-1zM4.22 5.64a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41L4.22 7.05a1 1 0 0 1 0-1.41zM18.31 17.73a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41zM2 12a1 1 0 0 1 1-1H4.5a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zM19.5 12a1 1 0 0 1 1-1H22a1 1 0 0 1 0 2h-1.5a1 1 0 0 1-1-1zM5.64 18.36a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41L5.64 19.77a1 1 0 0 1 0-1.41zM17.73 5.64a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41L17.73 7.05a1 1 0 0 1 0-1.41z" />
    //               <circle cx="12" cy="12" r="3" />
    //             </svg>

    //             <svg
    //               className={`absolute right-2 w-4 h-4 text-gray-100 transition-opacity duration-500 ${
    //                 isDarkTheme ? "opacity-100" : "opacity-0"
    //               }`}
    //               fill="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 1 1 11.1 3.41 1 1 0 0 0 12.36 2 10 10 0 1 0 22 14.05a1 1 0 0 0-.36-1.05z" />
    //             </svg>
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Navbar;
