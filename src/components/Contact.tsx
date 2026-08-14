import { SectionHeading } from "@/components/SectionHeading";
import { contactInfo, socialLinks } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  const cards = [
    {
      title: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: FiMail,
    },
    {
      title: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phoneHref}`,
      icon: FiPhone,
    },
    {
      title: "Location",
      value: contactInfo.location,
      href: undefined,
      icon: FiMapPin,
    },
  ];

  return (
    <section
      id="contact"
      className="container-page section-pad min-h-[70vh] scroll-mt-20"
    >
      <SectionHeading eyebrow="Contact" title="Get in Touch" />
      <div className="grid gap-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:grid-cols-2">
        <div className="space-y-4">
          {cards.map((card) => {
            const Icon = card.icon;
            const inner = (
              <>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-[var(--muted)]">
                    {card.title}
                  </span>
                  <span className="text-sm">{card.value}</span>
                </span>
              </>
            );
            return card.href ? (
              <a
                key={card.title}
                href={card.href}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4 hover:bg-[var(--surface-2)]"
              >
                {inner}
              </a>
            ) : (
              <div
                key={card.title}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4"
              >
                {inner}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col justify-between gap-6">
          <p className="text-[var(--muted)] leading-relaxed">
            {contactInfo.intro}
          </p>
          <div>
            <p className="mb-3 text-sm font-medium">Connect with me</p>
            <div className="flex gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-[var(--border)] p-3 hover:text-[var(--accent)]"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-[var(--border)] p-3 hover:text-[var(--accent)]"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
