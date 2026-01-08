"use client";

import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto px-6 py-28"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Featured <span className="text-indigo-500">Projects</span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          A selection of projects that demonstrate my experience in building
          scalable applications, automation frameworks, and clean backend
          systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            variants={containerVariants}
            className="group relative backdrop-blur-xl bg-white/5
            border border-white/10 rounded-2xl p-7
            hover:-translate-y-1 hover:shadow-xl
            hover:shadow-indigo-500/10 transition-all"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/5
            opacity-0 group-hover:opacity-100 transition pointer-events-none" />

            {/* Title */}
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-3 relative z-10"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-relaxed mb-5 relative z-10"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2 mb-6 relative z-10"
            >
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="px-3 py-1 text-xs rounded-full
                  border border-white/15 text-gray-300
                  bg-white/5"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 relative z-10"
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-sm
                text-gray-300 hover:text-white transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>

              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-sm
                  text-indigo-400 hover:text-indigo-300 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
