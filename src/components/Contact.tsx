"use client";

import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
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
          setTimeout(() => setSuccess(""), 5000);
        },
        () => {
          setSuccess("Something went wrong. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-6 py-32 z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-primary/10 pb-8">
        <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tight">
          LET'S<br/><span className="font-medium italic">COLLABORATE</span>
        </h2>
        <p className="text-sm text-secondary max-w-sm mt-6 md:mt-0 leading-relaxed font-light">
          Available for new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 luxury-panel p-10 md:p-16 relative"
        >
          <p className="text-micro text-secondary mb-8 tracking-[0.2em] font-bold border-b border-primary/10 pb-2">CONTACT DIRECTLY</p>

          <div className="space-y-8 mt-12">
            <a href="mailto:darshankshetri8@gmail.com" className="flex items-center gap-6 text-primary hover:text-secondary transition-colors group">
              <span className="font-medium text-sm md:text-base tracking-wider">darshankshetri8@gmail.com</span>
            </a>
            <div className="flex gap-6 pt-8 border-t border-primary/10">
              <a href="https://github.com/DarshanKGithub" target="_blank" className="text-primary hover:text-secondary transition-colors">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/darshan-kshetri-6a1b12253/" target="_blank" className="text-primary hover:text-secondary transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-7 luxury-panel p-10 md:p-16"
        >
          <p className="text-micro text-secondary mb-8 tracking-[0.2em] font-bold border-b border-primary/10 pb-2">SEND A MESSAGE</p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full bg-transparent border-b border-primary/20 px-0 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full bg-transparent border-b border-primary/20 px-0 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-primary/20 px-0 py-3 text-sm text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary hover:text-secondary transition-colors disabled:opacity-50 group"
            >
              {loading ? "Sending..." : "Submit Message"}
              <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
            </button>

            {success && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold uppercase tracking-widest text-primary mt-6">
                {success}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
