"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Photo — left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-secondary/10"
          >
            <Image
              src="/images/profile.png"
              alt="Brian De Santiago"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              priority
            />
          </motion.div>

          {/* Bio — right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-2xl font-semibold leading-tight text-primary md:text-3xl">
              Hey, I&apos;m Brian.
            </h2>

            <p className="mt-6 leading-relaxed text-secondary">
              I studied Industrial Design at Tec de Monterrey. I was never the
              &quot;creative kid.&quot; I was more of a formula person, following
              structures and systems. But at some point I realized that felt too
              easy, and I started forcing my mind to think differently. That
              shift changed everything. That tension between structure and
              creativity is what makes me the designer I am today.
            </p>
            <p className="mt-4 leading-relaxed text-secondary">
              I believe small things can have a big impact. In design, a tiny UX
              fix can change how thousands of people experience a product. In
              life, small decisions compound into something much bigger than
              you&apos;d expect. That idea drives most of what I do.
            </p>
            <p className="mt-4 leading-relaxed text-secondary">
              I&apos;m based in Guadalajara, Mexico. Great food, great culture,
              great people, and a growing tech scene that still has soul.
              I&apos;m open to remote work worldwide, or to packing my bags and
              moving somewhere new.
            </p>
            <p className="mt-4 leading-relaxed text-secondary">
              Outside of work, I&apos;m probably at a concert, at the gym,
              gaming, watching anime, or hunting for good food. I&apos;m chill,
              easy to talk to, and I don&apos;t take myself too seriously.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              <span>More about me</span>
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
