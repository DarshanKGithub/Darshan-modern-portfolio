"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative max-w-7xl mx-auto px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-14 items-start"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-indigo-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-5">
            I’m a software developer who enjoys building things that actually
            work well in real world environments. I focus on writing clean,
            maintainable code and designing systems that are easy to scale,
            test, and improve over time.
          </p>

          <p className="text-gray-400 leading-relaxed mb-5">
            My experience spans frontend development with React and Next.js,
            backend development using Spring Boot and Node.js, and test
            automation using Playwright. I enjoy working close to
            the system level understanding how different parts connect rather
            than treating code as isolated pieces.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I care deeply about code quality, performance, and reliability.
            Whether it’s building a REST API, automating test flows, or
            improving CI/CD pipelines, I aim to deliver solutions that are
            stable, efficient, and easy for teams to maintain.
          </p>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6">
            What I focus on
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>
              • Building scalable web applications with clean architecture
            </li>
            <li>
              • Designing backend APIs that are reliable and easy to extend
            </li>
            <li>
              • Writing automated tests that catch real bugs, not false alarms
            </li>
            <li>
              • Improving developer experience through tooling and CI/CD
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
