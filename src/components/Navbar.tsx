"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection(
    navLinks.map((link) => link.id)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all
        ${scrolled ? "bg-black/80 shadow-lg border-b border-white/10" : "bg-black/60"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="font-mono font-bold text-lg">
          <span className="text-gray-400">&lt;</span>
          Darshan
          <span className="text-indigo-500">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative transition
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
                `}
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-500 transition-all
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-6 space-y-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition
                    ${isActive ? "text-white" : "text-gray-300"}
                  `}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
