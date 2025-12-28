"use client";

import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-indigo-500/40 transition-all"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full border border-white/15 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
