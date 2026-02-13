"use client";

/**
 * Per-section background shapes — scattered across the page (left/right sides, top/bottom, between sections).
 * Kept out of the center column where content lives.
 */
import { motion } from "framer-motion";

const COLOR = "text-[#D1D5DB]";

type Section = "caseStudies" | "whatSetsApart" | "howIUseAI" | "aboutMe" | "contact";

const EFFECTS: Record<
  Section,
  (delay: number) => { initial: object; enter: object; loop: object }
> = {
  caseStudies: (delay) => ({
    initial: { opacity: 0, scale: 0.98 },
    enter: { opacity: 0.6, scale: 1, transition: { duration: 0.8, delay, ease: "easeOut" as const } },
    loop: { y: [0, -5, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 0.5 } },
  }),
  whatSetsApart: (delay) => ({
    initial: { opacity: 0 },
    enter: { opacity: 0.6, transition: { duration: 0.8, delay, ease: "easeOut" as const } },
    loop: { opacity: [0.5, 0.7, 0.5], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 0.5 } },
  }),
  howIUseAI: (delay) => ({
    initial: { opacity: 0, x: -8 },
    enter: { opacity: 0.6, x: 0, transition: { duration: 0.8, delay, ease: "easeOut" as const } },
    loop: { x: [0, 6, 0], transition: { duration: 9, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 0.5 } },
  }),
  aboutMe: (delay) => ({
    initial: { opacity: 0, scale: 0.98 },
    enter: { opacity: 0.6, scale: 1, transition: { duration: 0.8, delay, ease: "easeOut" as const } },
    loop: { scale: [1, 1.02, 1], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 0.5 } },
  }),
  contact: (delay) => ({
    initial: { opacity: 0 },
    enter: { opacity: 0.6, transition: { duration: 0.8, delay, ease: "easeOut" as const } },
    loop: { y: [0, -3, 0], transition: { duration: 10, repeat: Infinity, ease: "easeInOut" as const, delay: delay + 1 } },
  }),
};

// Scattered: left/right sides (avoid center ~35–65%), various top/bottom, some at section edges (between sections)
const SECTION_SHAPES: Record<Section, Array<{ className: string; delay: number; svg: React.ReactNode }>> = {
  caseStudies: [
    { className: "absolute left-[6%] top-[8%] h-14 w-14 md:h-20 md:w-20", delay: 0.1, svg: <svg viewBox="0 0 80 80" fill="none" className="h-full w-full"><circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[8%] top-[28%] hidden h-24 w-24 md:block", delay: 0.12, svg: <svg viewBox="0 0 96 96" fill="none" className="h-full w-full"><rect x="1" y="1" width="94" height="94" stroke="currentColor" strokeWidth="1" /><line x1="1" y1="1" x2="95" y2="95" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[12%] bottom-[22%] h-14 w-14 md:h-18 md:w-18", delay: 0.14, svg: <svg viewBox="0 0 72 72" fill="none" className="h-full w-full"><polygon points="36,4 68,66 4,66" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[5%] bottom-[10%] h-8 w-8 md:h-10 md:w-10", delay: 0.16, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] bottom-[42%] hidden w-24 md:block", delay: 0.18, svg: <svg viewBox="0 0 96 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="96" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[15%] top-[68%] hidden h-20 w-20 md:block", delay: 0.2, svg: <svg viewBox="0 0 80 80" fill="none" className="h-full w-full"><circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[18%] top-[52%] hidden h-12 w-12 md:block", delay: 0.22, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[22%] top-[6%] hidden h-10 w-10 md:block", delay: 0.24, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] top-[18%] hidden w-16 md:block", delay: 0.26, svg: <svg viewBox="0 0 64 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="64" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[12%] bottom-[52%] hidden h-14 w-14 rotate-45 md:block", delay: 0.28, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><rect x="2" y="2" width="52" height="52" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[10%] top-[78%] h-8 w-8 md:h-10 md:w-10", delay: 0.3, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[6%] bottom-[28%] hidden h-16 w-16 md:block", delay: 0.32, svg: <svg viewBox="0 0 64 64" fill="none" className="h-full w-full"><circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] top-[92%] h-10 w-10 md:h-12 md:w-12", delay: 0.34, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[18%] top-[48%] hidden h-8 w-8 md:block", delay: 0.36, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><line x1="0" y1="32" x2="32" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[14%] bottom-[8%] hidden h-14 w-14 md:block", delay: 0.38, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[4%] top-[12%] hidden w-20 md:block", delay: 0.4, svg: <svg viewBox="0 0 80 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="80" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[20%] bottom-[58%] hidden h-10 w-10 rotate-45 md:block", delay: 0.42, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[10%] top-[58%] h-8 w-8 md:h-10 md:w-10", delay: 0.44, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] bottom-[72%] hidden w-14 md:block", delay: 0.46, svg: <svg viewBox="0 0 56 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="56" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[16%] bottom-[38%] h-10 w-10 md:h-12 md:w-12", delay: 0.48, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[14%] top-[82%] hidden h-12 w-12 md:block", delay: 0.5, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><polygon points="24,2 46,46 2,46" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] top-[42%] hidden h-8 w-8 md:block", delay: 0.52, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[20%] bottom-[38%] hidden h-10 w-10 rotate-45 md:block", delay: 0.54, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[12%] top-[38%] h-8 w-8 md:h-10 md:w-10", delay: 0.56, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><line x1="0" y1="32" x2="32" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
  ],
  whatSetsApart: [
    { className: "absolute right-[10%] top-[4%] h-40 w-40 md:right-[6%] md:h-56 md:w-56", delay: 0.1, svg: <svg viewBox="0 0 256 256" fill="none" className="h-full w-full"><circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] bottom-[14%] h-12 w-12 md:h-14 md:w-14", delay: 0.12, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><polygon points="28,4 52,50 4,50" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[5%] bottom-[38%] hidden w-32 md:block", delay: 0.14, svg: <svg viewBox="0 0 128 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="128" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[12%] top-[16%] h-10 w-10 md:h-12 md:w-12", delay: 0.16, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[18%] bottom-[20%] hidden h-24 w-24 md:block", delay: 0.18, svg: <svg viewBox="0 0 96 96" fill="none" className="h-full w-full"><line x1="0" y1="96" x2="96" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] top-[82%] hidden w-20 md:block", delay: 0.2, svg: <svg viewBox="0 0 80 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="80" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[12%] top-[44%] hidden h-14 w-14 md:block", delay: 0.22, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><rect x="1" y="1" width="54" height="54" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] bottom-[28%] hidden h-12 w-12 rotate-45 md:block", delay: 0.24, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[22%] top-[62%] h-8 w-8 md:h-10 md:w-10", delay: 0.26, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[10%] top-[34%] hidden w-20 md:block", delay: 0.28, svg: <svg viewBox="0 0 80 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="80" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[8%] bottom-[12%] h-10 w-10 md:h-12 md:w-12", delay: 0.3, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><polygon points="20,2 38,38 2,38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[14%] bottom-[6%] h-8 w-8 md:h-10 md:w-10", delay: 0.32, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[6%] top-[88%] hidden h-16 w-16 md:block", delay: 0.34, svg: <svg viewBox="0 0 64 64" fill="none" className="h-full w-full"><circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[18%] top-[52%] h-8 w-8 md:h-10 md:w-10", delay: 0.36, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><line x1="0" y1="32" x2="32" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[4%] top-[10%] hidden w-24 md:block", delay: 0.38, svg: <svg viewBox="0 0 96 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="96" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] bottom-[52%] hidden h-10 w-10 md:block", delay: 0.4, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[16%] top-[36%] hidden h-8 w-8 rotate-45 md:block", delay: 0.42, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[12%] top-[64%] hidden h-12 w-12 md:block", delay: 0.44, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[14%] bottom-[46%] hidden w-16 md:block", delay: 0.46, svg: <svg viewBox="0 0 64 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="64" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[20%] top-[38%] h-8 w-8 md:h-10 md:w-10", delay: 0.48, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[10%] bottom-[6%] hidden h-10 w-10 md:block", delay: 0.5, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] top-[96%] hidden h-14 w-14 md:block", delay: 0.52, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[16%] top-[28%] h-10 w-10 md:h-12 md:w-12", delay: 0.54, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[20%] top-[52%] hidden h-8 w-8 rotate-45 md:block", delay: 0.56, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1" /></svg> },
  ],
  howIUseAI: [
    { className: "absolute left-[5%] top-[12%] h-12 w-12 md:h-16 md:w-16", delay: 0.1, svg: <svg viewBox="0 0 64 64" fill="none" className="h-full w-full"><circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[10%] top-[6%] hidden h-18 w-18 md:block", delay: 0.12, svg: <svg viewBox="0 0 72 72" fill="none" className="h-full w-full"><rect x="1" y="1" width="70" height="70" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[14%] bottom-[18%] h-10 w-10 md:h-12 md:w-12", delay: 0.14, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><polygon points="20,2 38,38 2,38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[6%] bottom-[32%] hidden w-20 md:block", delay: 0.16, svg: <svg viewBox="0 0 80 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="80" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] top-[54%] hidden h-14 w-14 md:block", delay: 0.18, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><rect x="1" y="1" width="54" height="54" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[18%] bottom-[8%] h-8 w-8 md:h-10 md:w-10", delay: 0.2, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] top-[72%] h-10 w-10 md:h-12 md:w-12", delay: 0.22, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[12%] top-[42%] hidden h-12 w-12 md:block", delay: 0.24, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><line x1="0" y1="48" x2="48" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] bottom-[6%] hidden w-24 md:block", delay: 0.26, svg: <svg viewBox="0 0 96 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="96" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[20%] bottom-[54%] h-8 w-8 md:h-10 md:w-10", delay: 0.28, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[10%] top-[28%] hidden h-16 w-16 rotate-45 md:block", delay: 0.3, svg: <svg viewBox="0 0 64 64" fill="none" className="h-full w-full"><rect x="2" y="2" width="60" height="60" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[18%] top-[4%] h-8 w-8 md:h-10 md:w-10", delay: 0.32, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[8%] bottom-[14%] hidden h-14 w-14 md:block", delay: 0.34, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[12%] top-[62%] hidden w-16 md:block", delay: 0.36, svg: <svg viewBox="0 0 64 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="64" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[4%] top-[78%] hidden h-10 w-10 md:block", delay: 0.38, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[16%] top-[22%] h-10 w-10 md:h-12 md:w-12", delay: 0.4, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><polygon points="20,2 38,38 2,38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[16%] bottom-[48%] hidden h-10 w-10 md:block", delay: 0.42, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[14%] top-[86%] hidden w-18 md:block", delay: 0.44, svg: <svg viewBox="0 0 72 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="72" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[20%] bottom-[52%] h-8 w-8 md:h-10 md:w-10", delay: 0.46, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[22%] bottom-[8%] hidden h-12 w-12 md:block", delay: 0.48, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><polygon points="24,2 46,46 2,46" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] top-[92%] hidden h-8 w-8 md:block", delay: 0.5, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[8%] bottom-[20%] h-10 w-10 md:h-12 md:w-12", delay: 0.52, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><line x1="0" y1="40" x2="40" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] top-[82%] hidden h-10 w-10 rotate-45 md:block", delay: 0.54, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1" /></svg> },
  ],
  aboutMe: [
    { className: "absolute right-[6%] top-[10%] h-14 w-14 md:h-20 md:w-20", delay: 0.1, svg: <svg viewBox="0 0 80 80" fill="none" className="h-full w-full"><circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[10%] bottom-[36%] h-12 w-12 md:h-16 md:w-16", delay: 0.12, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><rect x="1" y="1" width="46" height="46" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] top-[22%] hidden h-10 w-10 rotate-45 md:block", delay: 0.14, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[12%] bottom-[14%] h-8 w-8 md:h-10 md:w-10", delay: 0.16, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] top-[72%] hidden w-24 md:block", delay: 0.18, svg: <svg viewBox="0 0 96 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="96" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[18%] top-[44%] hidden h-12 w-12 md:block", delay: 0.2, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><polygon points="24,2 46,46 2,46" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[8%] bottom-[30%] hidden h-14 w-14 md:block", delay: 0.22, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[14%] top-[6%] h-10 w-10 md:h-12 md:w-12", delay: 0.24, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[20%] top-[66%] h-8 w-8 md:h-10 md:w-10", delay: 0.26, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><line x1="0" y1="32" x2="32" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] bottom-[8%] hidden w-20 md:block", delay: 0.28, svg: <svg viewBox="0 0 80 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="80" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[12%] bottom-[20%] hidden h-12 w-12 rotate-45 md:block", delay: 0.3, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[4%] top-[18%] hidden h-10 w-10 md:block", delay: 0.32, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><polygon points="20,2 38,38 2,38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[18%] top-[54%] h-8 w-8 md:h-10 md:w-10", delay: 0.34, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[14%] bottom-[54%] hidden h-10 w-10 md:block", delay: 0.36, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] top-[42%] hidden w-16 md:block", delay: 0.38, svg: <svg viewBox="0 0 64 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="64" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[20%] bottom-[6%] h-8 w-8 md:h-10 md:w-10", delay: 0.4, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[10%] top-[32%] hidden h-10 w-10 md:block", delay: 0.42, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] bottom-[48%] hidden w-14 md:block", delay: 0.44, svg: <svg viewBox="0 0 56 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="56" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[16%] top-[58%] h-8 w-8 md:h-10 md:w-10", delay: 0.46, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[16%] top-[58%] hidden h-12 w-12 rotate-45 md:block", delay: 0.48, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[10%] bottom-[26%] h-10 w-10 md:h-12 md:w-12", delay: 0.5, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[22%] top-[38%] hidden h-8 w-8 md:block", delay: 0.52, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><line x1="0" y1="32" x2="32" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] top-[92%] hidden h-8 w-8 md:block", delay: 0.54, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
  ],
  contact: [
    { className: "absolute left-[8%] top-[14%] h-10 w-10 md:h-12 md:w-12", delay: 0.1, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[10%] bottom-[42%] hidden h-14 w-14 md:block", delay: 0.12, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><rect x="1" y="1" width="54" height="54" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[14%] top-[24%] h-8 w-8 md:h-10 md:w-10", delay: 0.14, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] bottom-[14%] hidden w-20 md:block", delay: 0.16, svg: <svg viewBox="0 0 80 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="80" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[6%] top-[62%] hidden h-12 w-12 md:block", delay: 0.18, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[12%] bottom-[8%] h-8 w-8 md:h-10 md:w-10", delay: 0.2, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] top-[36%] hidden h-12 w-12 md:block", delay: 0.22, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[4%] bottom-[8%] hidden w-24 md:block", delay: 0.24, svg: <svg viewBox="0 0 96 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="96" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[16%] top-[48%] hidden h-10 w-10 rotate-45 md:block", delay: 0.26, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[18%] top-[10%] h-8 w-8 md:h-10 md:w-10", delay: 0.28, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[10%] bottom-[36%] h-10 w-10 md:h-12 md:w-12", delay: 0.3, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[8%] bottom-[18%] hidden h-14 w-14 md:block", delay: 0.32, svg: <svg viewBox="0 0 56 56" fill="none" className="h-full w-full"><line x1="0" y1="56" x2="56" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[18%] top-[72%] h-8 w-8 md:h-10 md:w-10", delay: 0.34, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[12%] bottom-[24%] hidden h-10 w-10 md:block", delay: 0.36, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><polygon points="20,2 38,38 2,38" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[4%] top-[6%] hidden w-20 md:block", delay: 0.38, svg: <svg viewBox="0 0 80 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="80" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[20%] top-[78%] hidden h-12 w-12 md:block", delay: 0.4, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><rect x="1" y="1" width="46" height="46" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[14%] bottom-[58%] hidden h-10 w-10 md:block", delay: 0.42, svg: <svg viewBox="0 0 40 40" fill="none" className="h-full w-full"><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[16%] top-[42%] h-8 w-8 md:h-10 md:w-10", delay: 0.44, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><line x1="0" y1="32" x2="32" y2="0" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[6%] top-[22%] hidden w-16 md:block", delay: 0.46, svg: <svg viewBox="0 0 64 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="64" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[4%] top-[92%] hidden h-12 w-12 rotate-45 md:block", delay: 0.48, svg: <svg viewBox="0 0 48 48" fill="none" className="h-full w-full"><rect x="2" y="2" width="44" height="44" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[20%] top-[62%] h-8 w-8 md:h-10 md:w-10", delay: 0.5, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><polygon points="16,2 30,30 2,30" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute right-[14%] bottom-[52%] hidden h-8 w-8 md:block", delay: 0.52, svg: <svg viewBox="0 0 32 32" fill="none" className="h-full w-full"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" /></svg> },
    { className: "absolute left-[8%] bottom-[44%] hidden w-12 md:block", delay: 0.54, svg: <svg viewBox="0 0 48 1" fill="none" className="h-full w-full"><line x1="0" y1="0.5" x2="48" y2="0.5" stroke="currentColor" strokeWidth="1" /></svg> },
  ],
};

type Props = { section: Section };

export default function SectionShapes({ section }: Props) {
  const shapes = SECTION_SHAPES[section];
  const getVariants = EFFECTS[section];

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 ${COLOR}`} aria-hidden="true">
      {shapes.map((item, i) => (
        <motion.div
          key={i}
          className={item.className}
          initial="initial"
          animate={["enter", "loop"]}
          variants={getVariants(item.delay)}
        >
          {item.svg}
        </motion.div>
      ))}
    </div>
  );
}
