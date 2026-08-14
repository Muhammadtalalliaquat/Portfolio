export type Project = {
  id: number;
  name: string;
  description: string;
  url: string;
  kind: "live" | "github";
  isPrivate?: boolean;
  technologies: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Proficiency = {
  name: string;
  pct: number;
};

export type Education = {
  id: number;
  degree: string;
  institution: string;
  completedYear?: number;
  status?: string;
};

export type Achievement = {
  id: number;
  title: string;
  issuer: string;
  image: string;
  alt: string;
  link: string;
};

export const socialLinks = {
  github: "https://github.com/Muhammadtalalliaquat",
  githubRepos: "https://github.com/Muhammadtalalliaquat?tab=repositories",
  linkedin: "https://www.linkedin.com/in/m-talalliaquat/",
};

export const contactInfo = {
  email: "muhammadtalalliaquat@gmail.com",
  phone: "+92 325 2091919",
  phoneHref: "+923252091919",
  location: "Karachi, Pakistan",
  intro:
    "I'm always excited to discuss new opportunities, innovative projects, and the latest trends in frontend development.",
};

export const techColors: Record<string, string> = {
  javascript: "#f7df1e",
  typescript: "#3178c6",
  "react.js": "#61dafb",
  react: "#61dafb",
  "next.js": "#000000",
  html: "#e34f26",
  css: "#1572b6",
  "electron.js": "#47848f",
  vite: "#646cff",
};

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Desktop Application IPTV",
    description:
      "A desktop application for streaming IPTV content with a user-friendly interface.",
    url: "https://github.com/Muhammadtalalliaquat/IPTV-desktop-application",
    kind: "github",
    isPrivate: true,
    technologies: ["Electron.js", "Vite", "React.js", "Typescript"],
  },
  {
    id: 2,
    name: "SEO Analyzer",
    description:
      "A user-friendly SEO Analyzer app designed to help you optimize your website for search engines.",
    url: "https://metascope-web.vercel.app/",
    kind: "live",
    technologies: ["Javascript"],
  },
  {
    id: 3,
    name: "DocuCraft",
    description:
      "DocuCraft is a smart web app that helps users create, edit, and manage documents easily with a simple, fast, and user-friendly experience.",
    url: "https://docu-craft-eight.vercel.app/",
    kind: "live",
    technologies: ["Typescript", "React.js"],
  },
  {
    id: 4,
    name: "NexServ",
    description:
      "NexServ is a modern digital service platform that helps businesses grow through high-quality web development, UI/UX design, and scalable online solutions. We focus on performance, security, and user-friendly experiences that deliver real results.",
    url: "https://nexserv.vercel.app/",
    kind: "live",
    technologies: ["Next.js", "Javascript"],
  },
  {
    id: 5,
    name: "Fashion Store",
    description:
      "Built with the MERN stack, this fashion store delivers a smooth, full-stack shopping experience from product discovery to checkout.",
    url: "https://frontend-fashion-store-web-app.vercel.app/",
    kind: "live",
    technologies: ["Next.js", "Javascript"],
  },
  {
    id: 6,
    name: "Chat Web App",
    description:
      "A real-time chat web app using WebSockets for instant messaging. Users can send and receive messages seamlessly, with messages stored in a database for persistence.",
    url: "https://next-js-chat-app-project.vercel.app/",
    kind: "live",
    technologies: ["Next.js", "Javascript"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React.js and Next.js",
      "JavaScript (ES6) TypeScript",
      "HTML, CSS, Tailwind",
      "Responsive Design (Flexbox)",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools",
    skills: [
      "Git (CLI)",
      "Problem-Solving and Debugging",
      "Claude Code",
      "Cursor",
      "Google AI Studio",
    ],
  },
];

export const proficiencyData: Proficiency[] = [
  { name: "JavaScript", pct: 80 },
  { name: "TypeScript", pct: 80 },
  { name: "React / Next.js", pct: 85 },
  { name: "React Native", pct: 50 },
];

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Intermediate in Computer Science",
    institution: "Govt. Islamia Science College",
    completedYear: 2025,
  },
  {
    id: 2,
    degree: "Secondary School Certificate",
    institution: "Indus Grammar School",
    completedYear: 2022,
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google / Coursera",
    image: "https://i.postimg.cc/cJcJkW9R/google.png",
    alt: "Google UX Design certificate",
    link: "https://www.coursera.org/account/accomplishments/certificate/82GDGL4B9BCD",
  },
  {
    id: 2,
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    image: "https://gil4w.eu/wp-content/uploads/2021/12/Cisco-1.png",
    alt: "Cisco JavaScript Essentials certificate",
    link: "https://magenta-cesya-2.tiiny.site/",
  },
  {
    id: 3,
    title: "Database Management",
    issuer: "NED Academy",
    image: "/NED-Academy-Logo.png",
    alt: "NED Academy Database Management certificate",
    link: "https://drive.google.com/file/d/16IK9BwgqgZEb2wZCRDL4sAy9tH2eShr7/view",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;
