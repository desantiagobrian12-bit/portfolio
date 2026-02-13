"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionShapes from "@/components/SectionShapes";

type CaseStudy = {
  company: string;
  title: string;
  description: string;
  tags: string[];
  metric: string;
  href: string;
  image: string;
  mobileImage: string | null;
  bg: string;
  dark: boolean;
  imageContain?: boolean;
  imageClean?: boolean;
  imageWide?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    company: "C3 AI",
    title: "GenAI Enterprise Experience",
    description:
      "Making complex, data-heavy AI experiences feel simple for everyone.",
    tags: ["GenAI", "Enterprise"],
    metric: "~40% task reduction",
    href: "/case-studies/c3-genai",
    image: "/images/case-studies/c3-genai/cover-home.png",
    mobileImage: null,
    bg: "bg-[#171717]",
    dark: true,
  },
  {
    company: "Konfront",
    title: "Healthcare Logistics Platform",
    description:
      "Replacing paper-based medication delivery with full digital traceability.",
    tags: ["Healthcare", "B2B", "Logistics"],
    metric: "1,100+ patients",
    href: "/case-studies/konfront-healthcare",
    image: "/images/case-studies/konfront/case-studie-cover.png",
    mobileImage: null,
    bg: "bg-[#CFDEF3]",
    dark: false,
    imageContain: true,
    imageClean: true,
    imageWide: true,
  },
  {
    company: "Wizeline",
    title: "Learning Experience Platform",
    description:
      "Redesigning how people learn. From fragmented courses to structured, engaging experiences.",
    tags: ["LXD", "Accessibility", "IA"],
    metric: "NPS 9/10",
    href: "/case-studies/wizeline-learning",
    image: "/images/case-studies/wizeline/cover-wizeline.png",
    mobileImage: null,
    bg: "bg-[#152A5E]",
    dark: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="relative overflow-hidden px-6 py-28 md:py-36"
    >
      <SectionShapes section="caseStudies" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-secondary">
            Selected Work
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
            Case Studies
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 flex flex-col gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.href}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href={study.href} className="group block">
                <div
                  className={`overflow-hidden rounded-2xl ${study.bg} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <div className={`grid ${study.imageWide ? "md:grid-cols-[2fr_3fr]" : "md:grid-cols-2"}`}>
                    {/* Text content */}
                    <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
                      <div>
                        <p
                          className={`text-sm font-semibold ${study.dark ? "text-white/60" : "text-[#171717]/50"}`}
                        >
                          {study.company}
                        </p>
                        <h3
                          className={`mt-4 text-2xl font-bold leading-tight md:text-3xl ${study.dark ? "text-white" : "text-[#171717]"}`}
                        >
                          {study.title}
                        </h3>
                        <p
                          className={`mt-3 text-sm leading-relaxed ${study.dark ? "text-white/50" : "text-[#171717]/60"}`}
                        >
                          {study.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                                study.dark
                                  ? "border border-white/15 bg-white/[0.07] text-white/70"
                                  : "bg-[#171717] text-white"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Metric */}
                        <p
                          className={`mt-5 text-xs font-medium ${study.dark ? "text-white/40" : "text-[#171717]/45"}`}
                        >
                          {study.metric}
                        </p>
                      </div>

                      <div
                        className={`mt-8 flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-accent ${study.dark ? "text-white" : "text-[#171717]"}`}
                      >
                        <span>View case study</span>
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`relative flex items-end justify-center pb-0 pt-4 ${study.imageWide ? "px-3 md:px-4 md:pt-6" : "px-6 md:px-4 md:pt-8"} ${study.mobileImage ? "overflow-visible" : "overflow-hidden"}`}>
                      {study.mobileImage ? (
                        <div className="relative w-full">
                          {/* Desktop screenshot */}
                          <div className={`overflow-hidden rounded-t-xl shadow-2xl ${study.bg}`}>
                            <Image
                              src={study.image}
                              alt={`${study.title} desktop screenshot`}
                              width={800}
                              height={520}
                              className="block h-auto w-full object-cover object-top"
                              unoptimized={!study.dark}
                            />
                          </div>
                          {/* Mobile screenshot overlapping */}
                          <div className="absolute -bottom-2 -left-4 w-[28%] md:-left-6">
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                              <Image
                                src={study.mobileImage}
                                alt={`${study.title} mobile screenshot`}
                                width={300}
                                height={600}
                                className="block h-auto w-full object-cover"
                                unoptimized={!study.dark}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`relative w-full overflow-hidden ${study.bg} ${study.imageClean ? "" : "rounded-t-xl shadow-2xl"}`}
                        >
                          <Image
                            src={study.image}
                            alt={`${study.title} product screenshot`}
                            width={800}
                            height={520}
                            className={`block h-auto w-full object-top ${study.imageContain ? "object-contain" : "object-cover"}`}
                            unoptimized={!study.dark}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
