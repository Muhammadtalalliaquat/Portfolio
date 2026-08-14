import { navItems, socialLinks } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-page flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          Made by <span className="text-[var(--foreground)]">Talal Liaquat.</span>{" "}
          All rights reserved. {year}
        </p>
        <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-[var(--foreground)]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
