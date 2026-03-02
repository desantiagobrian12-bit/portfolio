"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CODE_LINES = [
  '<canvas id="viewport" />',
  "import { createLayout } from './grid';",
  "const dpr = window.devicePixelRatio;",
  "viewport.width = innerWidth * dpr;",
  "viewport.height = innerHeight * dpr;",
  "const shapes = composeLayers(design);",
  "canvas.getContext('2d')",
];

const LINE_INTERVAL = 250;
const INITIAL_DELAY = 400;
const HOLD_AFTER_COMPLETE = 500;
const FADE_DURATION = 600;
const PROGRESS_EXTRA = 600;
const TOTAL_DURATION =
  INITIAL_DELAY + CODE_LINES.length * LINE_INTERVAL + PROGRESS_EXTRA;

export default function CanvasEntrance() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const startTimeRef = useRef(0);
  const rafRef = useRef<number>(0);

  const totalLines = CODE_LINES.length;

  useEffect(() => {
    if (!sessionStorage.getItem("entrance_seen")) {
      setShouldRender(true);
    }
  }, []);

  const tick = useCallback(
    (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;

      // Lines appear after initial delay
      const lineElapsed = Math.max(0, elapsed - INITIAL_DELAY);
      const linesShown = Math.min(
        totalLines,
        Math.floor(lineElapsed / LINE_INTERVAL) + 1
      );
      setVisibleLines(linesShown);

      // Progress bar
      const rawProgress = Math.min(1, elapsed / TOTAL_DURATION);
      const eased =
        rawProgress < 0.5
          ? 4 * rawProgress ** 3
          : 1 - (-2 * rawProgress + 2) ** 3 / 2;
      setProgress(eased);

      if (elapsed < TOTAL_DURATION) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(1);
        setVisibleLines(totalLines);

        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            sessionStorage.setItem("entrance_seen", "1");
            document.body.style.overflow = "";
            setShouldRender(false);
          }, FADE_DURATION);
        }, HOLD_AFTER_COMPLETE);
      }
    },
    [totalLines]
  );

  useEffect(() => {
    if (!shouldRender) return;
    document.body.style.overflow = "hidden";
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, [shouldRender, tick]);

  if (!shouldRender) return null;

  const isComplete = visibleLines === totalLines && progress >= 1;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        opacity: fading ? 0 : 1,
        fontFamily:
          "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', ui-monospace, monospace",
      }}
    >
      {/* Google Font */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
      />

      <div style={{ width: "min(520px, 90vw)" }}>
        {/* macOS window control dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 0 24px 2px",
          }}
        >
          {["#FF5F57", "#FEBC2E", "#28C840"].map((color, i) => (
            <span
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: color,
              }}
            />
          ))}
        </div>

        {/* Code lines — fade in per line */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {CODE_LINES.map((text, i) => {
            const isVisible = i < visibleLines;
            const isLast = i === totalLines - 1;
            const isLatestVisible = i === visibleLines - 1;

            return (
              <div
                key={i}
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  letterSpacing: "-0.01em",
                  color: isLast ? "#000000" : "#1a1a1a",
                  fontWeight: isLast ? 700 : 400,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(4px)",
                  transition:
                    "opacity 0.18s ease-out, transform 0.22s ease-out",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {/* Line number */}
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    textAlign: "right",
                    marginRight: 20,
                    color: "#aaaaaa",
                    fontSize: 12,
                    fontWeight: 400,
                    userSelect: "none",
                  }}
                >
                  {i + 1}
                </span>
                {text}
                {/* Blinking cursor on the currently appearing line */}
                {isLatestVisible && !isComplete && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 7,
                      height: "1.1em",
                      marginLeft: 2,
                      background: isLast ? "#000000" : "#1a1a1a",
                      opacity: 0.6,
                      verticalAlign: "text-bottom",
                      animation: "entrance-blink 0.6s steps(2) infinite",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div
          style={{
            marginTop: 28,
            height: 2,
            background: "#e0e0e0",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress * 100}%`,
              background: isComplete ? "#000000" : "#1a1a1a",
              borderRadius: 1,
              transition: isComplete ? "background 0.3s ease" : "none",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes entrance-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
