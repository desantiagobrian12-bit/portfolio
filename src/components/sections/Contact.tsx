"use client";

import { motion } from "framer-motion";
import SectionShapes from "@/components/SectionShapes";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-10 pt-28 md:pb-14 md:pt-36">
      <SectionShapes section="contact" />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Top row — name + email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <p className="text-xl font-semibold text-primary md:text-2xl">
              Brian De Santiago
            </p>
            <p className="mt-1 text-sm text-secondary">
              Guadalajara, Mexico
            </p>
          </div>
          <div className="sm:text-right">
            <a
              href="mailto:desantiagobrian12@gmail.com"
              className="text-xl font-semibold text-primary transition-colors hover:text-accent md:text-2xl"
            >
              desantiagobrian12@gmail.com
            </a>
            <p className="mt-1 text-sm text-secondary">Email</p>
          </div>
        </motion.div>

        {/* Links row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/briandesantiago"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            Resume
          </a>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-secondary/60">
            Designed and built by Brian De Santiago
          </p>
        </div>
      </div>
    </section>
  );
}
