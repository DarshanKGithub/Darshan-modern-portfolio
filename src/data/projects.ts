import { Project } from "../types/projects";

export const projects: Project[] = [
  {
    title: "E-Local – E-Commerce Platform",
    description:
      "A full-stack e-commerce web application featuring user authentication, product listings, cart management, and a responsive UI built for real-world usage.",
    tech: ["Next.js", "TypeScript", "Node.js"],
    github: "https://github.com/DarshanKGithub/ELocal-frontend",
    live: "https://e-local-frontend-j5dv.vercel.app/",
  },

  {
    title: "Developer Portfolio",
    description:
      "A modern, performance-optimized personal portfolio built using Next.js and TypeScript to showcase projects, skills, and professional experience with a clean, recruiter-friendly design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/DarshanKGithub/portfolio",
    live: "https://darshan-modern-portfolio.vercel.app/",
  },

  {
    title: "AI Developer Productivity Assistant",
    description:
      "A production-style AI developer assistant powered by local LLaMA 3.1, featuring real-time token streaming, developer-focused Explain/Debug/Refactor modes, and a clean frontend–backend architecture designed to mirror real-world GenAI systems.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "LLaMA 3.1",
      "Ollama",
      "Streaming APIs",
      "Tailwind CSS",
    ],
    github: "https://github.com/DarshanKGithub/GenAIDev-Assistant",
    live: "", // add live link later if deployed
  },

  {
    title: "Java Workspace",
    description:
      "A personal Java workspace where I practice core Java concepts, write clean and optimized code, and solve data structures, algorithms, and problem-solving exercises to strengthen my backend and logical programming skills.",
    tech: ["Java", "OOPs", "DSA", "Collections", "Exception Handling"],
    github: "https://github.com/DarshanKGithub/Java-Workspace",
    live: "",
  },

  {
    title: "JavaScript Series",
    description:
      "A structured JavaScript practice series covering closures, promises, async/await, array methods, DOM manipulation, and real-world logic building to strengthen frontend and scripting fundamentals.",
    tech: [
      "JavaScript",
      "ES6+",
      "Closures",
      "Promises",
      "Async/Await",
      "DOM",
    ],
    github: "https://github.com/DarshanKGithub/JavaScript-Series",
    live: "",
  },

  {
    title: "Banking Management System (Spring Boot)",
    description:
      "A backend-focused banking management system built using Spring Boot implementing core CRUD operations such as account creation, deposits, withdrawals, and account management with a clean service-layer architecture.",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "CRUD",
      "MySQL",
      "JPA / Hibernate",
    ],
    github: "https://github.com/DarshanKGithub/BankingManagement---Springboot",
    live: "",
  },
];
