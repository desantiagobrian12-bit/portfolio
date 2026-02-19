"use client";

import { usePathname } from "next/navigation";
import SectionShapes from "@/components/SectionShapes";
import { RESUME_URL } from "@/lib/links";

export default function Footer() {
  const pathname = usePathname();

  // On the homepage, the Contact section serves as the footer
  if (pathname === "/") return null;

  const isCaseStudy = pathname?.startsWith("/case-studies");

  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-28 md:pb-14 md:pt-36">
      <SectionShapes section="contact" />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Let's work together (case studies only); email + LinkedIn are below */}
        {isCaseStudy && (
          <div className="mb-14">
            <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
              Let&apos;s work together
            </h2>
            <p className="mt-2 max-w-md text-base leading-relaxed text-secondary md:text-lg">
              Interested in collaborating? Reach out.
            </p>
          </div>
        )}

        {/* Top row — name + email (matches Contact section) */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
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
        </div>

        {/* Links row */}
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="https://www.linkedin.com/in/briandesantiago"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            Resume
          </a>
        </div>

        {/* Bottom line */}
        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-secondary/60">
            Designed and built by Brian De Santiago
          </p>
        </div>
      </div>
    </footer>
  );
}
