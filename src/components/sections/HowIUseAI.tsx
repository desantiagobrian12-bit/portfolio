"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  {
    name: "V0",
    use: "Design Exploration",
    description:
      "Quickly generate and explore UI concepts — testing layout ideas, component variations, and visual directions faster than starting from scratch in Figma.",
    icon: "/images/icons/v0-logo-light.svg",
  },
  {
    name: "Cursor",
    use: "Building and Prototyping",
    description:
      "I vibecode my own tools and portfolio. It lets me go from design concept to working code faster, giving me a deeper understanding of what's feasible.",
    icon: "/images/icons/CUBE_2D_LIGHT.svg",
  },
  {
    name: "ChatGPT",
    use: "Thinking Partner",
    description:
      "I pressure-test my ideas — what am I missing? What's the trade-off I'm not seeing? Like having a sparring partner for design thinking and research synthesis.",
    icon: "/images/icons/openai-logo.svg",
  },
  {
    name: "Figma",
    use: "Design Hub",
    description:
      "The core of my workflow. Every exploration, insight, and prototype comes together in Figma as polished systems and deliverables.",
    icon: "/images/icons/figma-logo.svg",
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

export default function HowIUseAI() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary">
            My Workflow
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
            How I Use AI
          </h2>
          <p className="mt-4 max-w-2xl text-secondary">
            AI is part of how I work, not a replacement for thinking. Here is
            how it fits into my design process.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-2">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold leading-tight text-primary">
                    {tool.name}
                  </span>
                  <span className="text-xs font-medium text-accent">
                    {tool.use}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-secondary">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 border-l-2 border-accent pl-6"
        >
          <p className="text-sm font-semibold text-primary">My philosophy</p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-secondary">
            AI makes me faster, not lazier. Every AI-generated output goes
            through my judgment — I evaluate, refine, and take ownership of the
            final result. The tool doesn&apos;t make the decision; I do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
