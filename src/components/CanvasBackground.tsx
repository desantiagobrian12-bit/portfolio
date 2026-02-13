/**
 * Shared geometric canvas background used on the homepage hero and case study pages.
 * Renders subtle line-art shapes (circle, rect, line, polygon) for visual consistency.
 */
export default function CanvasBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 text-[#D1D5DB]"
      aria-hidden="true"
    >
      <svg
        className="absolute -right-16 -top-16 h-[360px] w-[360px] md:h-[480px] md:w-[480px]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="196" stroke="currentColor" strokeWidth="1" />
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
          stroke="currentColor"
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
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg
        className="absolute bottom-[26%] right-8 h-20 w-20 md:right-24 md:h-24 md:w-24"
        viewBox="0 0 96 96"
        fill="none"
      >
        <circle cx="48" cy="48" r="46" stroke="currentColor" strokeWidth="1" />
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
          stroke="currentColor"
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
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
