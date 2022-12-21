import type { Project } from "./types";

export const socials = [
  {
    id: "github",
    url: "https://github.com/mikaelsiidorow",
  },
  {
    id: "linkedin",
    url: "https://linkedin.com/in/mikaelsiidorow",
  },
  {
    id: "telegram",
    url: "https://t.me/mikaelsiidorow",
  },
  {
    id: "discord",
    url: "https://discord.com/users/153929794466217984",
  },
] as const;

export const heroContent = {
  name: "Mikael Siidorow",
  title: "Software Hobbyist",
  // two paragraph lorem ipsum
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis mattis dolor non fringilla. Quisque nec mattis quam. Curabitur semper, lectus a fermentum dapibus, magna arcu ullamcorper lectus, at efficitur leo est ut lacus. Aenean gravida sit amet elit id aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia quam at nisl faucibus, a finibus est mollis. Nam.",
  image: "https://avatars.githubusercontent.com/u/87767032?v=4",
} as const

export const projects: Project[] = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/350",
    link: "https://youtube.com",
    tags: ["svelte", "typescript"],
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/350",
    link: "https://google.com",
    tags: ["react", "typescript"],
  },
  {
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/350",
    tags: ["react", "typescript", "html", "css"],
  },
  {
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/350",
    tags: ["react", "typescript"],
  },
]

export const tagColors = {
  react: "#61DAFB",
  svelte: "#FF3E20",
  javascript: "#F1E05A",
  typescript: "#3178C6",
  html: "#E44C27",
  css: "#563E7C",
} as const;

export const footerContent = {
  email: "mikael@siidorow.com",
  source: "https://github.com/MikaelSiidorow/siidorow"
} as const;