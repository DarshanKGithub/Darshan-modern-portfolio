"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gge8393",
        "template_f5gvqoc",
        formRef.current!,
        "ifsFuQoGSdM9ZKAdm"
      )
      .then(
        () => {
          setSuccess("Message sent successfully!");
          setLoading(false);
          formRef.current?.reset();
        },
        () => {
          setSuccess("Something went wrong. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-14"
      >
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Let’s <span className="text-indigo-500">connect</span>
          </h2>

          <p className="text-gray-400 max-w-md mb-8">
            Open to software development, backend, and automation roles.
          </p>

          <div className="space-y-4">
            <a href="mailto:darshankshetri8@gmail.com" className="flex gap-3">
              <Mail className="text-indigo-400" /> darshankshetri8@gmail.com
            </a>
            <a href="https://github.com/DarshanKGithub" target="_blank" className="flex gap-3">
              <Github  /> https://github.com/DarshanKGithub
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-kshetri-6a1b12253/"
              target="_blank"
              className="flex gap-3"
            >
              <Linkedin /> https://www.linkedin.com/in/darshan-kshetri-6a1b12253/
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6">Send a message</h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg py-3"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-sm text-green-400 mt-2">{success}</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
