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

export const projectsData: projectsDataTyoe[] = [
  {
    name: "NexServ",
    description:
      "NexServ is a modern digital service platform that helps businesses grow through high-quality web development, UI/UX design, and scalable online solutions. We focus on performance, security, and user-friendly experiences that deliver real results.",
    url: "https://nexserv.vercel.app/",
    technologies: ["Next.js", "Javascript"],
    id: 1,
  },
  {
    name: "Fashion Store",
    description:
      "Built with the MERN stack, this fashion store delivers a smooth, full-stack shopping experience from product discovery to checkout.",
    url: "https://frontend-fashion-store-web-app.vercel.app/",
    technologies: ["Next.js", "Javascript"],
    id: 2,
  },
  {
    name: "Chat Web App",
    description:
      "A real-time chat web app using WebSockets for instant messaging. Users can send and receive messages seamlessly, with messages stored in a database for persistence.",
    url: "https://next-js-chat-app-project.vercel.app/",
    technologies: ["Next.js", "Javascript"],
    id: 3,
  },
  {
    name: "Blog Post Crafted",
    description:
      "A blogging app is a platform where users can read and comment on blog posts.",
    url: "https://blogging-app-tawny.vercel.app/get-started",
    technologies: ["Next.js", "Typescript"],
    id: 4,
  },
  {
    name: "Expense Tracker",
    description:
      "A user-friendly Expense Tracker app designed to help you easily track and manage your monthly expenses.",
    url: "https://expenses-tracker-bay-xi.vercel.app",
    technologies: ["Next.js", "Typescript"],
    id: 5,
  },
  // {
  //   name: "Calculation App",
  //   description:
  //     "The Calculation App is a straightforward tool designed to help users perform basic arithmetic calculations with ease.",
  //   url: "https://muhammadtalalliaquat.github.io/Calculation-App/",
  //   technologies: ["Javascript"],
  //   id: 5,
  // },
  {
    name: "Web UI design",
    description:
      "Web UI (User Interface) design refers to the process of creating the visual elements and layout of a website or web application.",
    url: "https://muhammadtalalliaquat.github.io/Saylani-web-page/",
    technologies: ["Html"],
    id: 6,
  },
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
    status: "Ongoing",
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
];
