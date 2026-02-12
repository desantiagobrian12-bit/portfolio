"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen flex-col overflow-hidden px-6"
    >
      {/* Geometric background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute -right-16 -top-16 h-[360px] w-[360px] md:h-[480px] md:w-[480px]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="196" stroke="#D1D5DB" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-[38%] left-6 h-16 w-16 md:left-14 md:h-20 md:w-20"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect
            x="1"
            y="1"
            width="78"
            height="78"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute right-[16%] top-[24%] hidden h-44 w-44 md:block"
          viewBox="0 0 176 176"
          fill="none"
        >
          <line
            x1="0"
            y1="176"
            x2="176"
            y2="0"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute bottom-[26%] right-8 h-20 w-20 md:right-24 md:h-24 md:w-24"
          viewBox="0 0 96 96"
          fill="none"
        >
          <circle cx="48" cy="48" r="46" stroke="#D1D5DB" strokeWidth="1" />
        </svg>
        <svg
          className="absolute left-0 top-[55%] hidden w-28 md:block"
          viewBox="0 0 112 1"
          fill="none"
        >
          <line
            x1="0"
            y1="0.5"
            x2="112"
            y2="0.5"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute bottom-[16%] left-[12%] h-10 w-10 md:h-14 md:w-14"
          viewBox="0 0 56 56"
          fill="none"
        >
          <polygon
            points="28,4 52,50 4,50"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-4 text-sm font-medium tracking-wide text-secondary md:mb-6 md:text-base"
        >
          I&apos;m Brian.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-[2.75rem] font-bold leading-[1.05] tracking-tight text-primary sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]"
        >
          I design clarity
          <br />
          within complexity.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-relaxed text-secondary md:mt-8 md:text-lg"
        >
          Product Designer turning intricate business and operational challenges
          into seamless user experiences.
        </motion.p>
      </div>

      {/* FAB — scroll to work */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-10 left-1/2 z-40 -translate-x-1/2"
          >
            <a
              href="#work"
              className="group flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95"
              aria-label="Scroll to work section"
            >
              <span className="text-sm font-medium">See my work</span>
              <motion.svg
                animate={{ y: [0, 3, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </motion.svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
