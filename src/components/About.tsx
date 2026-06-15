"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-6 py-32 z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-primary/10 pb-8">
        <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tight">
          BEYOND<br/><span className="font-medium italic">THE CODE</span>
        </h2>
        <p className="text-sm text-secondary max-w-sm mt-6 md:mt-0 leading-relaxed font-light">
          A software engineer who enjoys building systems that actually work well in real-world environments.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left: Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-6 luxury-panel p-10 md:p-16 relative"
        >
          <p className="text-micro text-secondary mb-8 tracking-[0.2em] font-bold border-b border-primary/10 pb-2">APPROACH</p>
          
          <div className="space-y-6 text-sm text-primary leading-loose font-medium">
            <p>
              My experience spans frontend development with React and Next.js, backend development using Spring Boot and Node.js, and test automation using Playwright.
            </p>
            <p>
              I enjoy working close to the system level—understanding how different parts connect rather than treating code as isolated pieces. Whether it’s building a REST API, automating test flows, or improving CI/CD pipelines, I aim to deliver solutions that are stable, efficient, and easy for teams to maintain.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary/10">
            <a href="#contact" className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-primary hover:text-secondary transition-colors gap-2">
              Let's Collaborate
              <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Right: Feature Grid */}
        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Clean Architecture",
              desc: "Building scalable web applications using structured design patterns and clean code principles."
            },
            {
              title: "Reliable APIs",
              desc: "Designing robust, secure, and easily extensible backend services with Spring Boot and Node."
            },
            {
              title: "Automated Testing",
              desc: "Creating comprehensive test suites with Playwright to catch real bugs and ensure stability."
            },
            {
              title: "CI/CD & Tooling",
              desc: "Streamlining developer workflows and deployment pipelines for faster, safer releases."
            }
          ].map((feature, idx) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <h4 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">{feature.title}</h4>
              <p className="text-xs text-secondary leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
