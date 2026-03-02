"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Image, { type ImageProps } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

interface LightboxState {
  src: string;
  alt: string;
}

const LightboxCtx = createContext<{
  open: (state: LightboxState) => void;
}>({ open: () => {} });

/* ------------------------------------------------------------------ */
/*  Provider + Modal                                                   */
/* ------------------------------------------------------------------ */

export function ImageLightboxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState<LightboxState | null>(null);

  const open = useCallback((s: LightboxState) => setCurrent(s), []);
  const close = useCallback(() => setCurrent(null), []);

  /* Escape key */
  useEffect(() => {
    if (!current) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [current, close]);

  /* Lock body scroll while open */
  useEffect(() => {
    if (!current) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [current]);

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {current && (
              <motion.div
                key="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={close}
              >
                {/* Close button */}
                <button
                  onClick={close}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close lightbox"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Image */}
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative max-h-[90vh] max-w-[90vw]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    width={2048}
                    height={1152}
                    unoptimized
                    className="max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </LightboxCtx.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  ClickableImage — drop-in replacement for next/image               */
/*                                                                     */
/*  Usage:                                                             */
/*    <ClickableImage                                                  */
/*      src="/images/case-studies/project/image.png"                   */
/*      alt="Description"                                              */
/*      width={2048}                                                   */
/*      height={1152}                                                  */
/*      unoptimized                                                    */
/*      className="h-auto w-full object-contain"                       */
/*    />                                                               */
/*                                                                     */
/*  Must be rendered inside an <ImageLightboxProvider>.                */
/*  The component adds cursor-pointer, a hover scale + expand icon,   */
/*  and opens the lightbox modal on click.                             */
/* ------------------------------------------------------------------ */

type ClickableImageProps = ImageProps & {
  /** When provided, this alt text is shown in the lightbox instead of the regular alt */
  lightboxAlt?: string;
};

export function ClickableImage({
  lightboxAlt,
  onClick,
  className,
  ...props
}: ClickableImageProps) {
  const { open } = useContext(LightboxCtx);

  const handleClick = () => {
    open({
      src: typeof props.src === "string" ? props.src : "",
      alt: lightboxAlt ?? (typeof props.alt === "string" ? props.alt : ""),
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group relative w-full cursor-pointer"
      aria-label={`View full image: ${typeof props.alt === "string" ? props.alt : ""}`}
    >
      <Image
        {...props}
        className={`transition-transform duration-300 group-hover:scale-[1.02] ${className ?? ""}`}
      />

      {/* Hover overlay with expand icon */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </span>
      </span>
    </button>
  );
}
