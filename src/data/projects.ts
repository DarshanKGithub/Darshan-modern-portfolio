import { Project } from "../types/projects";

export const projects: Project[] = [
  {
    title: "Human Resource Management System (HRMS)",
    description:
      "Architected and deployed a full-stack HRMS platform covering employee lifecycle, attendance, leave, and payroll. Designed a JWT-secured RBAC system with 5 permission tiers. Built scalable RESTful APIs using FastAPI, SQLAlchemy, and PostgreSQL. Developed responsive UIs with Next.js and Tailwind CSS.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "SQLAlchemy", "Tailwind CSS", "JWT"],
    github: "",
    live: "https://hrms.greatertechhub.com",
  },
  {
    title: "Quality Health Meter",
    description:
      "Built a full-stack SaaS application to analyze website URLs and auto-generate health diagnostic reports, eliminating manual analysis effort. Integrated Razorpay payment gateway and Gmail API for automated transactional workflows, enabling end-to-end business automation.",
    tech: ["Spring Boot", "React.js", "PostgreSQL", "AWS EC2", "Razorpay", "Gmail API"],
    github: "",
    live: "https://qhmeter.com",
  },
  {
    title: "AI Developer Productivity Assistant",
    description:
      "Developed an AI-powered coding assistant using Groq Cloud's GPT-OSS-120B LLM with modular prompt routing. Built a real-time streaming frontend with Next.js featuring syntax-highlighted code rendering and clipboard integration, reducing developer time-to-answer for engineering queries.",
    tech: ["Next.js", "Node.js", "Express.js", "Groq Cloud", "GPT-120B", "Tailwind CSS"],
    github: "https://github.com/DarshanKGithub/GenAIDev-Assistant",
    live: "",
  },
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
      "A modern, performance-optimized personal portfolio built using Next.js and TypeScript to showcase projects, skills, and professional experience with a high-end minimalist luxury design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/DarshanKGithub/portfolio",
    live: "https://darshan-modern-portfolio.vercel.app/",
  }
];
