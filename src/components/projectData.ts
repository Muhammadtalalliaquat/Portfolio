
export type projectsDataTyoe = {
  name: string;
  description: string;
  url: string;
  id: number;
  // technologies: string[];
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
  react: "cyan", // example for react
  html: "red", // example for html
  css: "green", // example for css
  // add more technologies here
};

export const projectsData: projectsDataTyoe[] = [
  {
    name: "Blog Post Crafted",
    description: "A blogging app is a platform where users can read and comment on blog posts.",
    url: "https://blogging-app-tawny.vercel.app/get-started",
    technologies: ["Typescript"],
    id: 1
  },
  {
    name: "Expense Tracker",
    description: "A user-friendly Expense Tracker app designed to help you easily track and manage your monthly expenses.",
    url: "https://expenses-tracker-bay-xi.vercel.app",
    technologies: ["Typescript"],
    id: 2
  },
  {
    name: "Temperature Converter",
    description: "Easily switch between Celsius, Fahrenheit, and Kelvin with this simple tool.",
    url: "https://muhammadtalalliaquat.github.io/Temperature-converter-app/",
    technologies: ["Javascript"],
    id: 3
  },
  {
    name: "To Do App",
    description: "This To-Do app allows users to create, edit, and manage their tasks easily.It is a user-friendly interface that helps you keep track of what you need to do",
    url: "https://muhammadtalalliaquat.github.io/To-do-app-javascript/",
    technologies: ["javascript"],
    id: 4
  },
  {
    name: "Calculation App",
    description: "The Calculation App is a straightforward tool designed to help users perform basic arithmetic calculations with ease.",
    url: "https://muhammadtalalliaquat.github.io/Calculation-App/",
    technologies: ["Javascript"],
    id: 5
  },
  {
    name: "Web UI design",
    description: "Web UI (User Interface) design refers to the process of creating the visual elements and layout of a website or web application.",
    url: "https://muhammadtalalliaquat.github.io/Saylani-web-page/",
    technologies: ["Html"],
    id: 6
  },
];