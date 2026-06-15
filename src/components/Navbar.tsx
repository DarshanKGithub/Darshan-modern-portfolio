"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { name: "HOME", href: "#home", id: "home" },
  { name: "EXPERIENCE", href: "#experience", id: "experience" },
  { name: "WORKS", href: "#projects", id: "projects" },
  { name: "ABOUT", href: "#about", id: "about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection(
    navLinks.map((link) => link.id).concat(["contact"])
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b
        ${scrolled ? "bg-background/90 backdrop-blur-md border-primary/10" : "bg-transparent border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-4 group">
          <span className="font-medium text-primary tracking-[0.2em] uppercase text-sm">Darshan Kshetri</span>
          <span className="w-4 h-[1px] bg-primary/20 group-hover:w-8 group-hover:bg-primary transition-all duration-300 hidden sm:block" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition-colors py-2
                  ${isActive ? "text-primary" : "text-secondary hover:text-primary"}
                `}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-4 bg-primary"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary hover:text-secondary transition"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b border-primary/10 overflow-hidden"
        >
          <div className="flex flex-col px-6 py-8 space-y-6 text-sm font-semibold tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition-colors
                    ${isActive ? "text-primary border-l-2 border-primary pl-4" : "text-secondary pl-4 hover:text-primary"}
                  `}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-6 mt-4 border-t border-primary/10 pl-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-primary hover:text-secondary transition-colors"
              >
                LET'S TALK
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
