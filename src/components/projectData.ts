export type projectsDataTyoe = {
  name: string;
  description: string;
  url: string;
  id: number;
  technologies: string[];
};

export type colorsDataTyoe = {
  javascript: string;
  typescript: string;
  react: string;
  html: string;
  css: string;
};

export const techColors: { [key: string]: string } = {
  javascript: "yellow",
  typescript: "blue",
  react: "cyan",
  html: "red",
  css: "green",
};

const text = "This GitHub repository is private and cannot be accessed";;

export const projectsData: projectsDataTyoe[] = [
  {
    name: "Desktop Application IPTV",
    description: `A desktop application for streaming IPTV content with a user-friendly interface.${text}`,
    url: "https://github.com/Muhammadtalalliaquat/IPTV-desktop-application",
    technologies: ["Electron.js", "Vite", "React.js", "Typescript"],
    id: 1,
  },
  {
    name: "SEO Analyzer",
    description: `A user-friendly SEO Analyzer app designed to help you optimize your website for search engines.`,
    url: "https://metascope-web.vercel.app/",
    technologies: ["Javascript"],
    id: 2,
  },
  {
    name: "DocuCraft",
    description: `DocuCraft is a smart web app that helps users create, edit, and manage documents easily with a simple, fast, and user-friendly experience.`,
    url: "https://docu-craft-eight.vercel.app/",
    technologies: ["Typescript", "React.js"],
    id: 3,
  },
  {
    name: "NexServ",
    description: `NexServ is a modern digital service platform that helps businesses grow through high-quality web development, UI/UX design, and scalable online solutions. We focus on performance, security, and user-friendly experiences that deliver real results.`,
    url: "https://nexserv.vercel.app/",
    technologies: ["Next.js", "Javascript"],
    id: 4,
  },
  {
    name: "Fashion Store",
    description: `Built with the MERN stack, this fashion store delivers a smooth, full-stack shopping experience from product discovery to checkout.`,
    url: "https://frontend-fashion-store-web-app.vercel.app/",
    technologies: ["Next.js", "Javascript"],
    id: 5,
  },
  {
    name: "Chat Web App",
    description: `A real-time chat web app using WebSockets for instant messaging. Users can send and receive messages seamlessly, with messages stored in a database for persistence.`,
    url: "https://next-js-chat-app-project.vercel.app/",
    technologies: ["Next.js", "Javascript"],
    id: 6,
  },

  // {
  //   name: "Calculation App",
  //   description:
  //     `The Calculation App is a straightforward tool designed to help users perform basic arithmetic calculations with ease.`,
  //   url: "https://muhammadtalalliaquat.github.io/Calculation-App/",
  //   technologies: ["Javascript"],
  //   id: 5,
  // },
];

type skillDataType = {
  id: number;
  name: string;
};

export const skillData: skillDataType[] = [
  { id: 3, name: "React.js and Next.js" },
  { id: 2, name: "JavaScript (ES6) TypeScript" },
  { id: 1, name: "HTML, CSS, Tailwind" },
  { id: 7, name: "Node.js" },
  { id: 8, name: "Express.js" },
  { id: 4, name: "Responsive Design (Flexbox)" },
  { id: 5, name: "Git (CLI)" },
  { id: 9, name: "Problem-Solving and Debugging" },
];

type educationDataDataType = {
  id: number;
  degree: string;
  institution: string;
  status: string;
  completedYear?: number;
};

export const educationData: educationDataDataType[] = [
  {
    id: 1,
    degree: "Intermediate in Computer Science",
    institution: "Govt. Islamia Science College",
    completedYear: 2025,
    status: "",
  },
  {
    id: 2,
    degree: "Secondary School Certificate",
    institution: "Indus Grammar School",
    completedYear: 2022,
    status: "",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Foundations of User Experience (UX) Design",
    image: "https://i.postimg.cc/cJcJkW9R/google.png",
    alt: "google-image",
    link: "https://www.coursera.org/account/accomplishments/certificate/82GDGL4B9BCD",
  },
  {
    id: 2,
    title: "JavaScript Essentials 1",
    image: "https://gil4w.eu/wp-content/uploads/2021/12/Cisco-1.png",
    alt: "cisco-networking",
    link: "https://magenta-cesya-2.tiiny.site/",
  },
  {
    id: 3,
    title: "Database Management",
    image: "/NED-Academy-Logo.png",
    alt: "NED Academy",
    link: "https://drive.google.com/file/d/16IK9BwgqgZEb2wZCRDL4sAy9tH2eShr7/view",
  },
  // {
  //   id: 4,
  //   title: "Web And Mobile App Development",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rs7eLON5MfY39cwwkRJLU-Muee1bbMHsIVei1MRDxS6cwacPORa2MSA&s=10",
  //   alt: "Saylami Mass IT Training",
  //   link: "",
  // },
];
