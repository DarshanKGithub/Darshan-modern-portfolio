"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-32">
          {/* BRAND */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="font-medium text-primary tracking-[0.2em] uppercase text-sm mb-6 flex items-center gap-4 group">
              Darshan Kshetri
              <span className="w-4 h-[1px] bg-primary/20 transition-all duration-300" />
            </h3>
            <p className="text-secondary leading-loose font-light text-sm mb-8 max-w-xs">
              Engineering scalable solutions and delivering high-performance software systems.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary/50" />
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Available for new opportunities</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-[0.65rem] font-bold mb-8 text-secondary uppercase tracking-widest border-b border-primary/10 pb-2 inline-block">INDEX</h4>
            <ul className="space-y-6">
              <li><a href="#home" className="text-primary hover:text-secondary transition-colors text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group">Home <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" /></a></li>
              <li><a href="#experience" className="text-primary hover:text-secondary transition-colors text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group">Experience <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" /></a></li>
              <li><a href="#projects" className="text-primary hover:text-secondary transition-colors text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group">Works <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" /></a></li>
              <li><a href="#about" className="text-primary hover:text-secondary transition-colors text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group">About <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" /></a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-10">
            <h4 className="text-[0.65rem] font-bold mb-8 text-secondary uppercase tracking-widest border-b border-primary/10 pb-2 inline-block">SOCIAL</h4>
            <div className="flex gap-6 mb-8">
              <a href="https://github.com/DarshanKGithub" target="_blank" className="text-primary hover:text-secondary transition-colors">
                <Github size={18} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/darshan-kshetri-6a1b12253/" target="_blank" className="text-primary hover:text-secondary transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="mailto:darshankshetri8@gmail.com" className="text-primary hover:text-secondary transition-colors">
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.65rem] text-secondary font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Darshan Kshetri.
          </p>
          <div className="flex items-center gap-6 text-[0.65rem] text-secondary font-bold uppercase tracking-widest">
            <span>Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
