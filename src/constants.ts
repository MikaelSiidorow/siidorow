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
  content:
    "I am a computer science student with a passion for self-learning and creating projects in my spare time. In addition to my hobby projects, I have also gained some professional experience as a software developer and course developer. I am proficient in languages such as Scala, and TypeScript, and have experience with frameworks such as React, Node.js, and React Native. I have found an exciting internship for the summer of 2023, but I'll be open to new opportunities in the fall.",
  image: "avatar.webp",
} as const;

export const projects = [
  {
    name: "TiKUI",
    description:
      "A WIP React component library for Tietokilta, built with Tailwind CSS and Radix UI.",
    image: "tiklogo.webp",
    link: "https://github.com/tietokilta/ui",
    tags: ["figma", "react", "typescript", "tailwind"],
  },
  {
    name: "ActiveCitizen",
    description:
      "Crowdsourcing platform for improving Espoo with generative AI, Solve the SDGs '23.",
    image: "activecitizen.webp",
    link: "https://github.com/KatalystSoftware/smart-cities",
    tags: ["pwa", "trpc", "next", "tailwind"],
  },
  {
    name: "Birdrust",
    description:
      "Drone tracking app, built with Svelte and Rust, for the 2023 Reaktor summer assignment",
    image: "birdrust.webp",
    link: "https://github.com/MikaelSiidorow/birdrust",
    tags: ["svelte", "rust", "tailwind"],
  },
  {
    name: "siidorow.com",
    description:
      "New portfolio website designed from scratch to be more unique.",
    image: "siidorow.svg",
    link: "https://github.com/MikaelSiidorow/siidorow",
    tags: ["svelte", "typescript", "tailwind"],
  },
  {
    name: "RealMeal.",
    description:
      "A social app for sharing food photos, built during Junction 2022.",
    image: "realmeal.webp",
    link: "https://github.com/KatalystSoftware/EatMeal",
    tags: ["react native", "typescript", "firebase"],
  },
  {
    name: "Kipubot",
    description:
      "A telegram bot for showing graphs and stats about friday bottle raffles.",
    image: "kipubot.webp",
    link: "https://github.com/MikaelSiidorow/kipubot",
    tags: ["python", "postgres"],
  },
] satisfies Project[];

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
  tailwind: "#38BDF8",
  next: "#000000",
  pwa: "#5A06CA",
  figma: "#F24E1E",
  trpc: "#3A8CCB",
  rust: "#DFA584",
} as const;

export const footerContent = {
  email: "mikael@siidorow.com",
  source: "https://github.com/MikaelSiidorow/siidorow",
} as const;
