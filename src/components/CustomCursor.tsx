"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const pathname = usePathname();

  // Reset hover state on route change
  useEffect(() => {
    setIsHovering(false);
  }, [pathname]);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth trailing for the outer ring
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Detect touch devices — hide custom cursor entirely
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };
    const handlePointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* Inner dot — follows mouse exactly */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div className="h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      </motion.div>

      {/* Outer ring — trails behind with spring physics */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-200 ${
            isHovering
              ? "h-10 w-10 border-primary/40 bg-primary/5"
              : "h-8 w-8 border-primary/25"
          }`}
        />
      </motion.div>
    </>
  );
}
