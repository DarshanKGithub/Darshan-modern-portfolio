"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-7xl mx-auto px-6 py-32 z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-primary/10 pb-8">
        <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tight">
          PROFESSIONAL<br/><span className="font-medium italic">EXPERIENCE</span>
        </h2>
        <p className="text-sm text-secondary max-w-sm mt-6 md:mt-0 leading-relaxed font-light">
          Delivering production-grade systems, automation, and scalable backend services.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Core Role Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-8 luxury-panel p-10 md:p-16 relative"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12">
            <div>
              <p className="text-micro text-secondary mb-4 tracking-[0.2em]">RemoSys Infosystems</p>
              <h3 className="text-3xl md:text-4xl font-medium text-primary">FULL STACK & SDET INTERN</h3>
            </div>
            <div className="text-left sm:text-right mt-4 sm:mt-0">
              <p className="text-xs text-secondary font-medium tracking-widest uppercase">Apr 2025 – Sep 2025</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-micro text-primary font-bold mb-4 border-b border-primary/10 pb-2">BACKEND ENGINEERING</p>
              <p className="text-sm text-secondary leading-relaxed font-light">
                Migrated encrypted legacy Java JAR logic into scalable Spring Boot REST APIs. Implemented Java virtual threads for high concurrent traffic.
              </p>
            </div>
            <div>
              <p className="text-micro text-primary font-bold mb-4 border-b border-primary/10 pb-2">FRONTEND & INTEGRATIONS</p>
              <p className="text-sm text-secondary leading-relaxed font-light">
                Built real-time React/Next.js UI. Integrated Razorpay, Gmail API, and deployed on AWS EC2 with Nginx.
              </p>
            </div>
          </div>

          <p className="text-sm text-primary leading-loose font-medium max-w-2xl">
            Worked on a live production health monitoring application, contributing across frontend development, backend API design, performance optimization, and automated testing.
          </p>
        </motion.div>

        {/* Right Side Stack & Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-micro text-secondary font-bold mb-6 tracking-[0.2em]">KEY IMPACT</p>
            <div className="space-y-8">
              <div className="border-l border-primary/20 pl-6">
                <span className="text-4xl md:text-5xl font-light text-primary block mb-2">40%</span>
                <p className="text-xs text-secondary leading-relaxed font-medium uppercase tracking-widest">Reduction in QA effort<br/>via Playwright</p>
              </div>
              <div className="border-l border-primary/20 pl-6">
                <span className="text-4xl md:text-5xl font-light text-primary block mb-2">99.9%</span>
                <p className="text-xs text-secondary leading-relaxed font-medium uppercase tracking-widest">Uptime achieved<br/>on AWS EC2</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-micro text-secondary font-bold mb-6 tracking-[0.2em]">CORE STACK</p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Spring Boot", "Java", "Playwright", "AWS", "PostgreSQL", "Nginx"].map(tech => (
                <span key={tech} className="px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-primary border border-primary/20 hover:bg-primary hover:text-background transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
