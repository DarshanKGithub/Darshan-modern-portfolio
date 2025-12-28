"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-bold">
            Darshan<span className="text-indigo-500">.</span>
          </h3>
          <p className="mt-3 text-sm text-gray-400 max-w-xs">
            Software Developer focused on building scalable, reliable, and
            maintainable web applications with modern technologies.
          </p>
        </div>

        {/* NAV LINKS */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">
            Navigation
          </h4>
          <ul className="space-x-4 flex  text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-300">
            Connect
          </h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/DarshanKGithub"
              target="_blank"
              className="p-2 rounded-lg border border-white/10 hover:border-indigo-500/50 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/darshan-kshetri-6a1b12253/"
              target="_blank"
              className="p-2 rounded-lg border border-white/10 hover:border-indigo-500/50 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:darshankshetri8@gmail.com"
              className="p-2 rounded-lg border border-white/10 hover:border-indigo-500/50 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Darshan Kshetri. All rights reserved.
      </div>
    </footer>
  );
}
