"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute top-40 -left-40 h-[420px] w-[420px] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-indigo-400 font-medium mb-32 tracking-wide">
            👋 Hello, I’m Darshan Kshetri
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Software Developer
            <br />
            crafting{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              scalable
            </span>{" "}
            web systems
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
            I design and build production-ready web applications with a strong
            focus on performance, clean architecture, backend reliability, and
            automation-driven quality.
          </p>

          {/* TECH STACK */}
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Spring Boot",
              "Playwright",
              "PostgreSQL",
              "MongoDB",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full
                bg-white/5 border border-white/10 text-gray-300
                hover:border-indigo-400/40 hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>

      {/* METRICS */}
<div className="mt-10 flex gap-12">
  <div>
    <p className="text-3xl font-bold">
      <AnimatedCounter value={6} suffix="+" />
    </p>
    <p className="text-sm text-gray-400 mt-1">
      Months Industry Experience
    </p>
  </div>

  <div>
    <p className="text-3xl font-bold">
      <AnimatedCounter value={5} suffix="+" />
    </p>
    <p className="text-sm text-gray-400 mt-1">
      Real-world Projects
    </p>
  </div>
</div>

          {/* CTA */}
          <div className="mt-12 flex gap-4">
            <a
              href="/Darshan_Kshetri_CV.pdf"
              className="px-7 py-3 rounded-lg font-medium
              bg-indigo-600 hover:bg-indigo-500
              shadow-lg shadow-indigo-600/20 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-7 py-3 rounded-lg font-medium
              border border-white/20 hover:border-white/40
              hover:bg-white/5 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>

            <pre className="text-sm text-gray-300 leading-6 font-mono">
{`const developer = {
  name: "Darshan Kshetri",
  role: "Software Developer",
  expertise: [
    "Frontend (React / Next.js)",
    "Backend (Spring Boot / Node.js)",
    "Automation (Playwright)"
  ],
  databases: ["PostgreSQL", "MongoDB"],
  cloud: "AWS",
  focus: "Scalable & Maintainable Systems"
};`}
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
