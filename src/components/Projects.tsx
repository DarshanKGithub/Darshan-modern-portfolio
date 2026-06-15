"use client";

import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-6 py-32 z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-primary/10 pb-8">
        <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tight">
          SELECTED<br/><span className="font-medium italic">WORKS</span>
        </h2>
        <p className="text-sm text-secondary max-w-sm mt-6 md:mt-0 leading-relaxed font-light">
          A collection of production-ready applications and technical problem-solving.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative luxury-panel p-8 md:p-12 hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
              
              {/* Project Info */}
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-primary tracking-wide">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[0.65rem] font-bold uppercase tracking-widest text-secondary border border-secondary/20 px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 mt-8 md:mt-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <div className="md:col-span-8 flex items-center">
                <p className="text-sm md:text-base text-secondary leading-loose font-light border-l border-primary/10 pl-6 md:pl-12">
                  {project.description}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
