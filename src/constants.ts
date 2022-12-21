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
  content: "I am a computer science student with a passion for self-learning and creating projects in my spare time. In addition to my hobby projects, I have also gained some professional experience as a software developer and course developer. I am proficient in languages such as Scala, and TypeScript, and have experience with frameworks such as React, Node.js, and React Native. I am seeking software developer roles and internships where I can continue to grow and develop my skills next summer.",
  image: "https://avatars.githubusercontent.com/u/87767032?v=4",
} as const

export const projects: Project[] = [
  {
    name: "siidorow.com",
    description: "New portfolio website designed from scratch to be more unique.",
    image: "siidorow.png",
    link: "https://github.com/MikaelSiidorow/siidorow",
    tags: ["svelte", "typescript"],
  },
  {
    name: "RealMeal.",
    description: "A social app for sharing food photos, built during Junction 2022.",
    image: "realmeal.png",
    link: "https://github.com/KatalystSoftware/EatMeal",
    tags: ["react native", "typescript", "firebase"],
  },
  {
    name: "Kipubot",
    description: "A telegram bot for showing graphs and stats about friday bottle raffles",
    image: "kipubot.png",
    tags: ["python", "postgres"],
  },
]

export const tagColors = {
  react: "#61DAFB",
  svelte: "#FF3E20",
  javascript: "#F1E05A",
  typescript: "#3178C6",
  html: "#E44C27",
  css: "#563E7C",
  "react native": "#61DAFB",
  firebase: "#FFCA28",
  python: "#3572A5",
  postgres: "#336791",
} as const;

export const footerContent = {
  email: "mikael@siidorow.com",
  source: "https://github.com/MikaelSiidorow/siidorow"
} as const;