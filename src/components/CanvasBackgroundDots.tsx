/**
 * Dot grid canvas background for case study pages. Subtle, keyed to homepage gray (#D1D5DB) and lightness.
 */
export default function CanvasBackgroundDots() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="canvas-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="14" cy="14" r="1" fill="#D1D5DB" fillOpacity="0.45" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#canvas-dots)" />
      </svg>
    </div>
  );
}
