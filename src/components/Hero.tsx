"use client";

import { motion } from "framer-motion";
import HeroAvatarScene from "./3d/HeroAvatarScene";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center h-full">
        {/* LEFT: Minimalist Editorial Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-left flex flex-col justify-center order-2 lg:order-1"
        >
          <p className="text-micro text-secondary mb-6 tracking-[0.2em] font-bold">
            SOFTWARE ENGINEER
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-wide text-primary leading-[1.1] mb-12">
            BUILDING <br />
            SCALABLE <br />
            <span className="text-secondary italic font-light">SYSTEMS</span>
          </h1>

          <p className="text-base sm:text-lg text-secondary max-w-md leading-relaxed mb-12 font-light">
            Designing production-ready architectures. Specializing in full-stack development, clean code, and reliable APIs.
          </p>

          {/* Minimalist CTA */}
          <div className="flex items-center gap-8">
            <a
              href="#projects"
              className="group flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary hover:text-accent-1 transition-colors"
            >
              <span className="w-8 h-[2px] bg-accent-1 group-hover:w-12 transition-all duration-300" />
              Selected Works
            </a>
            
            <a
              href="/Kshetri_Darshan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT - 3D Clay Sculpture */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="relative w-full h-[60vh] lg:h-[80vh] order-1 lg:order-2"
        >
          <HeroAvatarScene />
        </motion.div>
      </div>
    </section>
  );
}
