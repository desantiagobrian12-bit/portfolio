"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // On the homepage, the Contact section serves as the footer
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">
            Brian De Santiago
          </p>
          <p className="mt-0.5 text-xs text-secondary">
            Product Designer / Guadalajara, Mexico
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href="mailto:desantiagobrian12@gmail.com"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/briandesantiago"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1_7a23Fo8EQWsVPf1p1fRBNPVlRcjss6R/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary transition-colors hover:text-primary"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
