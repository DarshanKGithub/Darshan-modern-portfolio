"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-auto px-6 py-28"
    >
      {/* Background glow */}
      <div className="absolute -top-32 right-0 h-96 w-96 bg-indigo-600/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative grid md:grid-cols-2 gap-14 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Let’s <span className="text-indigo-500">connect</span>
          </h2>

          <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
            I’m open to software development, backend, and automation roles.
            If you’re looking for someone who values clean code and scalable
            systems, let’s talk.
          </p>

          {/* Contact Links */}
          <div className="space-y-4">
            <a
              href="mailto:darshankshetri8@example.com"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition"
            >
              <Mail className="w-5 h-5 text-indigo-400" />
              darshankshetri8@gmail.com
            </a>

            <a
              href="https://github.com/DarshanKGithub"
              target="_blank"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition"
            >
              <Github className="w-5 h-5 text-indigo-400" />
              https://github.com/DarshanKGithub
            </a>

            <a
              href="https://www.linkedin.com/in/darshan-kshetri-6a1b12253/"
              target="_blank"
              className="flex items-center gap-4 text-gray-300 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5 text-indigo-400" />
            https://www.linkedin.com/in/darshan-kshetri-6a1b12253/
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-6">
            Send a message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-500"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-500 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-lg py-3 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
