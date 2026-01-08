"use client";

import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
      <h2 className="text-4xl font-bold mb-14">
        Featured <span className="text-indigo-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10
            hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-gray-400">{p.description}</p>

            <div className="flex gap-4 mt-5">
              <a href={p.github} target="_blank"><Github size={18} /></a>
              {p.live && <a href={p.live} target="_blank"><ExternalLink size={18} /></a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
