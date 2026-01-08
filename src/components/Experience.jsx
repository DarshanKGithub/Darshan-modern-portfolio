"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative max-w-7xl mx-auto px-6 py-28"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Professional <span className="text-indigo-500">Experience</span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Industry experience delivering production-grade systems, automation,
          and scalable backend services in a real company environment.
        </p>
      </div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
      >
        {/* Role & Company */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold">
              SDET Intern
            </h3>
            <p className="text-indigo-400 mt-1">
              RemoSys Infosystems Pvt. Ltd. — Pune
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-3 md:mt-0">
            Apr 2025 – Sep 2025
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6 max-w-4xl">
          Worked as an SDET Intern on a live production application, contributing
          across frontend development, backend API design, performance
          optimization, and automated testing for a health monitoring platform.
        </p>

        {/* Responsibilities & Work */}
        <ul className="space-y-3 text-gray-300 leading-relaxed max-w-4xl">
          <li>
            • Built and enhanced UI using <span className="text-white">React.js</span> and{" "}
            <span className="text-white">Next.js</span>, including real-time meter
            gauges, reports, loaders, and fully responsive layouts.
          </li>
          <li>
            • Migrated encrypted legacy <span className="text-white">Java JAR</span> business logic
            into scalable <span className="text-white">Spring Boot REST APIs</span>.
          </li>
          <li>
            • Implemented <span className="text-white">Java virtual threads</span> and
            performed backend performance tuning to handle high concurrent traffic.
          </li>
          <li>
            • Designed and executed automated test suites using{" "}
            <span className="text-white">Selenium</span> and{" "}
            <span className="text-white">Playwright</span>, reducing manual QA
            effort by <span className="text-white">~40%</span>.
          </li>
          <li>
            • Integrated <span className="text-white">Razorpay</span> payment gateway for
            secure online transactions and <span className="text-white">Gmail API</span>{" "}
            for automated user notifications.
          </li>
          <li>
            • Implemented client-ready PDF report generation using{" "}
            <span className="text-white">react-pdf</span> for health analysis reports.
          </li>
          <li>
            • Deployed and maintained the application on{" "}
            <span className="text-white">AWS EC2</span> (Linux & Windows) with{" "}
            <span className="text-white">Nginx</span> as a reverse proxy, achieving{" "}
            <span className="text-white">99.9% uptime</span>.
          </li>
          <li>
            • Followed modular architecture, validation layers, and secure API
            design practices to ensure maintainability and data safety.
          </li>
        </ul>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "React.js",
            "Next.js",
            "Spring Boot",
            "Java",
            "Virtual Threads",
            "Selenium",
            "Playwright",
            "Razorpay",
            "Gmail API",
            "react-pdf",
            "AWS EC2",
            "Nginx",
            "PostgreSQL",
            "Git",
            "CI/CD",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium rounded-full
              bg-white/5 border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
