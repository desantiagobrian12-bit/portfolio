"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles, Target, Zap, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const differentiators: {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Enterprise complexity is my comfort zone",
    description:
      "Regulatory constraints, legacy systems, multiple stakeholders. I bring structure to chaos and make messy environments feel simple.",
    Icon: Building2,
  },
  {
    title: "I design for AI, not just with it",
    description:
      "I've designed GenAI experiences where trust, transparency, and uncertainty are the core UX challenges. I know how to make intelligent systems feel approachable.",
    Icon: Sparkles,
  },
  {
    title: "I think in decisions, not deliverables",
    description:
      "I measure my work by whether I made the right design decisions and can explain why. Every choice has a trade-off, and I'm intentional about which ones I accept.",
    Icon: Target,
  },
  {
    title: "I move fast without cutting corners",
    description:
      "From POCs to v1.0s in 6-month cycles. I know when to be thorough and when to ship. Speed and quality are a balance I've learned to navigate.",
    Icon: Zap,
  },
  {
    title: "I bridge design and technology",
    description:
      "I use Cursor, V0, and ChatGPT daily. I vibecode my own tools. I understand the tech well enough to have real conversations with engineers.",
    Icon: Code,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhatSetsApart() {
  return (
    <section className="relative overflow-hidden bg-card px-6 py-28 md:py-36">
      {/* Geometric background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute -right-8 -top-4 h-64 w-64 md:-right-4 md:h-80 md:w-80"
          viewBox="0 0 320 320"
          fill="none"
        >
          <circle cx="125" cy="165" r="95" stroke="#D1D5DB" strokeWidth="1" />
          <circle cx="195" cy="165" r="95" stroke="#D1D5DB" strokeWidth="1" />
          <circle cx="160" cy="100" r="95" stroke="#D1D5DB" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-10 left-4 h-14 w-14 md:left-12"
          viewBox="0 0 72 72"
          fill="none"
        >
          <polygon
            points="36,4 68,66 4,66"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute bottom-[30%] right-0 hidden w-40 md:block"
          viewBox="0 0 160 1"
          fill="none"
        >
          <line
            x1="0"
            y1="0.5"
            x2="160"
            y2="0.5"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute left-4 top-[45%] h-10 w-10 md:left-10 md:h-14 md:w-14"
          viewBox="0 0 56 56"
          fill="none"
        >
          <circle cx="28" cy="28" r="26" stroke="#D1D5DB" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-[15%] right-[10%] hidden h-28 w-28 md:block"
          viewBox="0 0 112 112"
          fill="none"
        >
          <line
            x1="0"
            y1="112"
            x2="112"
            y2="0"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary">
            Why Me
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
            What Sets Me Apart
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06]">
                  <item.Icon className="h-[20px] w-[20px] text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold leading-snug text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
