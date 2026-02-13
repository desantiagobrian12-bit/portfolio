"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { motion } from "framer-motion";
import { CASE_STUDIES_NAV } from "@/lib/case-studies";
import CanvasBackgroundDots from "@/components/CanvasBackgroundDots";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DesignDecisionOption {
  label: string;
  description: string;
}

export interface DesignDecisionApproach {
  intro: string;
  items: string[];
  followUp?: string;
}

export interface DesignDecision {
  number: number;
  title: string;
  question?: string;
  whyItMattered: string;
  options?: DesignDecisionOption[];
  chosen?: string;
  whyChosen?: string;
  approach?: DesignDecisionApproach;
  /** When true, show "What we did" / "Why" / "Trade-off" only (no options). Use with whatWeDid. */
  simpleFormat?: boolean;
  whatWeDid?: string;
  tradeoff: string;
  impact?: string;
  imageLabel: string;
  /** Optional image path; when set, show real image instead of placeholder */
  image?: string;
}

export interface CaseStudyFeatureSubStep {
  title: string;
  description: string;
  image?: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
  /** Optional paragraph rendered after the image(s)/video. Use for captions or follow-up context. */
  descriptionAfterImage?: string;
  /** Single image for this feature */
  image?: string;
  /** Multiple images (e.g. popover in dashboard, canvas, RTE). Optional caption per image. */
  images?: { src: string; alt: string; caption?: string }[];
  /** Optional video URL (e.g. prototype walkthrough). Rendered with controls. */
  video?: string;
  /** Optional sub-steps (e.g. Branding, Design system inside Define and ideate). Rendered with smaller headings. */
  subSteps?: CaseStudyFeatureSubStep[];
  /** Optional NPS (Net Promoter Score) display. Rendered as a metric badge. */
  nps?: { score: number; max?: number; label?: string };
}

export interface CaseStudyData {
  overview: {
    company: string;
    role: string;
    timeline: string;
    team: string;
    platform: string;
    confidentiality?: string;
  };
  tags: string[];
  title: string;
  subtitle: string;
  heroImageLabel: string;
  product: string;
  coreProblem: {
    headline: string;
    description: string;
  };
  /** Optional hero image path (replaces placeholder when set) */
  heroImage?: string;
  /** Optional key features section with images */
  features?: CaseStudyFeature[];
  /** Optional override for Key Features section label (small uppercase, default: "Key Features") */
  featuresSectionLabel?: string;
  /** Optional override for Key Features section title (default: "Gen AI experience") */
  featuresSectionTitle?: string;
  /** Optional override for Key Features section description */
  featuresSectionDescription?: string;
  /** Optional override for Design decisions section title when using cards (default: "What I decided and why") */
  designDecisionsSectionTitle?: string;
  /** Optional results/impact section (metrics cards) shown before design decisions. */
  resultsSection?: {
    label?: string;
    title: string;
    subtitle?: string;
    summary?: string;
    metrics: { value: string; description: string }[];
  };
  designDecisions: DesignDecision[];
  /** When true, render design decisions as a grid of cards (no images). Use with simpleFormat decisions. */
  designDecisionsAsCards?: boolean;
  /** Extra cards to show after the main design decision cards (e.g. "Why having a popover in context"). */
  extraDecisionCards?: { title: string; description: string }[];
  coreImpact: {
    headline: string;
    description: string;
  };
  /** Optional video section (e.g. prototype walkthrough). Rendered after Key Features. */
  videoSection?: {
    label: string;
    src: string;
  };
  /** Optional CTA before next case study. Uses default if not set. */
  cta?: {
    /** Optional italic tagline above the heading (e.g. "Design with intention,") */
    tagline?: string;
    heading: string;
    body: string;
    buttonLabel: string;
  };
  /** @deprecated Not rendered. Kept for type compatibility. */
  learnings?: { title: string; description: string }[];
  /** @deprecated Use shared case study nav (prev/next) instead. */
  nextStudy?: {
    company: string;
    title: string;
    href: string;
  };
}

// ─── Animation helpers ────────────────────────────────────────────────────────

const viewportOnce = { once: true, margin: "-100px" };

// ─── Sub-components ───────────────────────────────────────────────────────────

function ImagePlaceholder({
  label,
  tall,
}: {
  label: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-white/70 ${
        tall ? "h-56 md:h-72" : "h-44 md:h-56"
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <svg
          className="h-8 w-8 text-secondary/30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-xs text-secondary/50">{label}</span>
      </div>
    </div>
  );
}

function NPSBadge({
  score,
  max = 10,
  label = "NPS",
}: {
  score: number;
  max?: number;
  label?: string;
}) {
  const size = 200;
  const strokeWidth = 20;
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const normalizedScore = Math.min(max, Math.max(0, score));
  const halfCircleLength = Math.PI * r;
  const detractorsLength = 0.6 * halfCircleLength;
  const passivesLength = 0.2 * halfCircleLength;
  const promotersLength = 0.2 * halfCircleLength;
  const pivotY = cy + r;
  const phi = Math.PI * (1 - normalizedScore / max);
  const needleX = cx + r * Math.cos(phi);
  const needleY = cy + r * Math.sin(phi);
  const arcPath = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;

  return (
    <div className="mt-10 flex justify-center">
      <div className="flex flex-col items-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="overflow-visible"
          aria-label={`NPS score: ${score} out of ${max}`}
        >
          <defs>
            <linearGradient id="nps-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="nps-yellow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
            <linearGradient id="nps-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#16A34A" />
            </linearGradient>
            <filter id="nps-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
            </filter>
          </defs>
          <path
            d={arcPath}
            fill="none"
            stroke="url(#nps-red)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${detractorsLength} ${halfCircleLength}`}
            strokeDashoffset={0}
          />
          <path
            d={arcPath}
            fill="none"
            stroke="url(#nps-yellow)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${passivesLength} ${halfCircleLength}`}
            strokeDashoffset={-detractorsLength}
          />
          <path
            d={arcPath}
            fill="none"
            stroke="url(#nps-green)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${promotersLength} ${halfCircleLength}`}
            strokeDashoffset={-(detractorsLength + passivesLength)}
          />
          <circle
            cx={cx}
            cy={pivotY}
            r={8}
            fill="#171717"
            filter="url(#nps-shadow)"
          />
          <line
            x1={cx}
            y1={pivotY}
            x2={needleX}
            y2={needleY}
            stroke="#171717"
            strokeWidth={3}
            strokeLinecap="round"
            filter="url(#nps-shadow)"
          />
        </svg>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-3xl font-bold tabular-nums tracking-tight text-primary md:text-4xl">
            {score}
          </span>
          <span className="text-sm text-secondary">
            /{max} · {label}
          </span>
        </div>
        <p className="mt-2 max-w-[220px] text-center text-xs font-medium text-secondary">
          Net Promoter Score from user testing
        </p>
      </div>
    </div>
  );
}

// ─── Geometric backgrounds per section position ──────────────────────────────

function ProblemGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute -right-4 top-10 h-20 w-20 text-border/25"
        viewBox="0 0 80 80"
        fill="none"
      >
        <polygon points="40,2 78,75 2,75" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

function DecisionGeometry({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-8 top-1/4 h-16 w-16 text-border/30"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -right-6 bottom-20 h-14 w-14 text-border/40"
          viewBox="0 0 56 56"
          fill="none"
        >
          <rect x="1" y="1" width="54" height="54" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute -left-4 bottom-16 hidden h-20 w-20 text-border/25 md:block"
        viewBox="0 0 80 80"
        fill="none"
      >
        <line x1="0" y1="80" x2="80" y2="0" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="0" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

function ImpactGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute -right-10 top-1/3 h-24 w-24 text-border/25"
        viewBox="0 0 96 96"
        fill="none"
      >
        <circle cx="48" cy="48" r="46" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

// ─── Options grid for a design decision ──────────────────────────────────────

function OptionsGrid({
  options,
  chosen,
}: {
  options: DesignDecisionOption[];
  chosen?: string;
}) {
  return (
    <div
      className={`mt-4 grid gap-4 ${
        options.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {options.map((opt, idx) => {
        const letter = String.fromCharCode(65 + idx);
        const isChosen = chosen === `Option ${letter}`;
        return (
          <div
            key={opt.label}
            className={`rounded-xl border p-4 ${
              isChosen
                ? "border-accent/40 bg-accent/5"
                : "border-border bg-white"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-semibold ${
                  isChosen ? "text-accent" : "text-secondary"
                }`}
              >
                {letter}
              </span>
              {isChosen && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                  Chosen
                </span>
              )}
            </div>
            <p className="mt-1.5 text-sm font-medium text-primary">
              {opt.label}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-secondary">
              {opt.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// ─── Case study prev/next nav ───────────────────────────────────────────────

function CaseStudyNav() {
  const pathname = usePathname();
  const index = CASE_STUDIES_NAV.findIndex((s) => s.href === pathname);
  if (index === -1) return null;
  const prev = CASE_STUDIES_NAV[(index - 1 + CASE_STUDIES_NAV.length) % CASE_STUDIES_NAV.length];
  const next = CASE_STUDIES_NAV[(index + 1) % CASE_STUDIES_NAV.length];
  return (
    <section className="border-t border-border bg-white px-6 py-10 md:py-12">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6">
        <Link
          href={prev.href}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>
            {prev.company}
            <span className="text-secondary"> · </span>
            {prev.title}
          </span>
        </Link>
        <Link
          href={next.href}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
        >
          <span>
            {next.company}
            <span className="text-secondary"> · </span>
            {next.title}
          </span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
      </div>
    </section>
  );
}

// ─── CTA section: light bg, homepage-style shapes, slider (Droply-inspired) ───

function CTASliderSection({
  tagline,
  heading,
  body,
  buttonLabel,
}: {
  tagline: string;
  heading: string;
  body: string;
  buttonLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = () => {
    const track = trackRef.current;
    const handle = handleRef.current;
    if (!track || !handle) return;
    const trackRect = track.getBoundingClientRect();
    const handleRect = handle.getBoundingClientRect();
    const handleCenter = handleRect.left + handleRect.width / 2;
    const threshold = trackRect.right - 44;
    if (handleCenter >= threshold) {
      window.open("https://www.linkedin.com/in/briandesantiago", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-6 py-12 md:py-16">
      {/* More shapes, no box: section bg only, content floats with the canvas */}
      <div
        className="pointer-events-none absolute inset-0 text-[#D1D5DB]"
        aria-hidden="true"
      >
        {/* Big circle top-right */}
        <svg
          className="absolute -right-20 -top-10 h-[320px] w-[320px] md:h-[400px] md:w-[400px]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="196" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Second large circle, lower right */}
        <svg
          className="absolute -bottom-16 right-1/4 h-[200px] w-[200px] md:h-[260px] md:w-[260px]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Rect bottom-left */}
        <svg
          className="absolute bottom-1/4 left-6 h-20 w-20 md:left-14 md:h-24 md:w-24"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect x="1" y="1" width="78" height="78" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Diagonal line */}
        <svg
          className="absolute right-[20%] top-[15%] hidden h-40 w-40 md:block"
          viewBox="0 0 176 176"
          fill="none"
        >
          <line x1="0" y1="176" x2="176" y2="0" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Small circle mid-right */}
        <svg
          className="absolute right-12 top-1/2 h-16 w-16 md:h-20 md:w-20"
          viewBox="0 0 96 96"
          fill="none"
        >
          <circle cx="48" cy="48" r="46" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Horizontal line left */}
        <svg
          className="absolute left-0 top-[45%] hidden w-32 md:block"
          viewBox="0 0 112 1"
          fill="none"
        >
          <line x1="0" y1="0.5" x2="112" y2="0.5" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Triangle */}
        <svg
          className="absolute bottom-[30%] left-[10%] h-12 w-12 md:h-14 md:w-14"
          viewBox="0 0 56 56"
          fill="none"
        >
          <polygon points="28,4 52,50 4,50" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Extra circle near content (Droply-style accent) */}
        <svg
          className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 md:h-[220px] md:w-[220px]"
          viewBox="0 0 220 220"
          fill="none"
        >
          <circle cx="110" cy="110" r="108" stroke="currentColor" strokeWidth="1" />
        </svg>
        {/* Small rect top-left */}
        <svg
          className="absolute left-12 top-1/4 h-12 w-12 md:h-14 md:w-14"
          viewBox="0 0 56 56"
          fill="none"
        >
          <rect x="1" y="1" width="54" height="54" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative text-center"
        >
          <p
            className="font-[var(--font-lora)] text-xl italic tracking-tight text-primary md:text-2xl"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            {tagline}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary md:text-3xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-secondary md:text-lg">
            {body}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <div
              ref={trackRef}
              className="relative flex h-12 w-64 cursor-grab items-center rounded-full bg-neutral-800 py-1.5 pl-1.5 pr-3 active:cursor-grabbing"
            >
              <span className="absolute left-4 right-4 top-1/2 -translate-y-1/2 text-center text-sm font-medium text-neutral-400">
                {buttonLabel}
              </span>
              <motion.div
                ref={handleRef}
                drag="x"
                dragConstraints={trackRef}
                dragElastic={0}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                className="relative z-10 flex h-9 w-9 shrink-0 cursor-grab items-center justify-center rounded-full bg-white text-primary active:cursor-grabbing"
                whileTap={{ scale: 1.05 }}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
            <p className="text-center">
              <Link
                href="/#contact"
                className="text-sm text-secondary underline decoration-border underline-offset-2 transition-colors hover:text-primary"
              >
                Or go to contact
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main layout component ───────────────────────────────────────────────────

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <main>
      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden bg-white px-6 pt-28 pb-16 md:pt-36 md:pb-20">
        <CanvasBackgroundDots />

        <div className="relative mx-auto w-full max-w-5xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all work
            </Link>
          </motion.div>

          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="mt-8 text-sm font-semibold text-accent">
              {data.overview.company}
            </p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              {data.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Overview metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 md:grid-cols-4"
          >
            {[
              { label: "Role", value: data.overview.role },
              { label: "Timeline", value: data.overview.timeline },
              { label: "Team", value: data.overview.team },
              { label: "Platform", value: data.overview.platform },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-primary">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Confidentiality note */}
          {data.overview.confidentiality && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 text-xs italic text-secondary/70"
            >
              {data.overview.confidentiality}
            </motion.p>
          )}

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            {data.heroImage ? (
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src={data.heroImage}
                  alt={data.heroImageLabel}
                  width={1200}
                  height={680}
                  className="h-auto w-full object-cover object-top"
                  priority
                />
              </div>
            ) : (
              <ImagePlaceholder label={data.heroImageLabel} tall />
            )}
          </motion.div>
        </div>
      </section>

      {/* ========================= THE PRODUCT ========================= */}
      <section className="bg-card px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-secondary">
              The Product
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
              {data.product}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================= CORE PROBLEM ========================= */}
      <section className="relative overflow-hidden bg-white px-6 py-20 md:py-28">
        <ProblemGeometry />
        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-secondary">
              The Core Problem
            </p>
            <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-primary md:text-3xl">
              {data.coreProblem.headline}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
              {data.coreProblem.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================= CORE IMPACT ========================= */}
      <section className="relative overflow-hidden bg-card px-6 py-20 md:py-28">
        <ImpactGeometry />
        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-secondary">
              The Core Impact
            </p>
            <div className="mt-6 border-l-4 border-accent pl-6">
              <h2 className="text-2xl font-semibold leading-snug text-primary md:text-3xl">
                {data.coreImpact.headline}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
                {data.coreImpact.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================= KEY FEATURES / DESIGN PROCESS (optional) ========================= */}
      {data.features && data.features.length > 0 && (
        <section className="bg-card px-6 py-20 md:py-28">
          <div className="mx-auto w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
            >
              {data.featuresSectionLabel && (
                <p className="text-sm font-medium uppercase tracking-widest text-secondary">
                  {data.featuresSectionLabel}
                </p>
              )}
              <h2 className={`text-2xl font-semibold leading-snug text-primary md:text-3xl ${data.featuresSectionLabel ? "mt-4" : "mt-0"}`}>
                {data.featuresSectionTitle ?? "Gen AI experience"}
              </h2>
              {(data.featuresSectionDescription ?? "Main Gen AI capabilities and how they show up in the product.") && (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
                  {data.featuresSectionDescription ?? "Main Gen AI capabilities and how they show up in the product."}
                </p>
              )}
            </motion.div>

            <div className="mt-12 space-y-16">
              {data.features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <h3 className="text-lg font-semibold text-primary md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-3xl whitespace-pre-line text-base leading-relaxed text-secondary">
                    {feature.description}
                  </p>
                  {feature.nps && (
                    <NPSBadge
                      score={feature.nps.score}
                      max={feature.nps.max ?? 10}
                      label={feature.nps.label ?? "NPS"}
                    />
                  )}
                  {feature.video && (
                    <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                      <video
                        src={feature.video}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-auto w-full"
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {feature.image && (
                    <div className="mt-6 overflow-hidden rounded-xl border border-border bg-white">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={1200}
                        height={680}
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  )}
                  {feature.images && feature.images.length > 0 && (
                    <div className="mt-6 space-y-6">
                      {feature.images.map((img) => (
                        <div key={img.src}>
                          <div className="overflow-hidden rounded-xl border border-border bg-white">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={1200}
                              height={680}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                          {"caption" in img && img.caption && (
                            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary">
                              {img.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {feature.descriptionAfterImage && (
                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary">
                      {feature.descriptionAfterImage}
                    </p>
                  )}
                  {feature.subSteps && feature.subSteps.length > 0 && (
                    <div className="mt-10 space-y-10 border-t border-border pt-10">
                      {feature.subSteps.map((sub) => (
                        <div key={sub.title}>
                          <h4 className="text-base font-semibold text-primary md:text-lg">
                            {sub.title}
                          </h4>
                          <p className="mt-2 max-w-3xl text-base leading-relaxed text-secondary">
                            {sub.description}
                          </p>
                          {sub.image && (
                            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white">
                              <Image
                                src={sub.image}
                                alt={sub.title}
                                width={1200}
                                height={680}
                                className="h-auto w-full object-contain"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================= VIDEO (optional) ========================= */}
      {data.videoSection && (
        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-secondary">
                Prototype walkthrough
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-snug text-primary md:text-3xl">
                {data.videoSection.label}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 overflow-hidden rounded-xl border border-border bg-card"
            >
              <video
                src={data.videoSection.src}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-full"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </section>
      )}

      {/* ========================= RESULTS / IMPACT (optional) ========================= */}
      {data.resultsSection && data.resultsSection.metrics.length > 0 && (
        <section className="relative overflow-hidden bg-card px-6 py-20 md:py-28">
          <div className="relative mx-auto w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
            >
              {data.resultsSection.label && (
                <p className="text-sm font-medium uppercase tracking-widest text-secondary">
                  {data.resultsSection.label}
                </p>
              )}
              <h2 className="mt-4 text-2xl font-semibold leading-snug text-primary md:text-3xl">
                {data.resultsSection.title}
              </h2>
              {data.resultsSection.subtitle && (
                <p className="mt-2 text-base leading-relaxed text-secondary md:text-lg">
                  {data.resultsSection.subtitle}
                </p>
              )}
              {data.resultsSection.summary && (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary md:text-lg">
                  {data.resultsSection.summary}
                </p>
              )}
            </motion.div>
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {data.resultsSection.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm"
                >
                  <span className="text-2xl font-semibold text-primary md:text-3xl">
                    {metric.value}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ========================= DESIGN DECISIONS (cards variant) ========================= */}
      {data.designDecisionsAsCards ? (
        <section className="relative overflow-hidden bg-card px-6 py-20 md:py-28">
          <div className="relative mx-auto w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-secondary">
                Design decisions
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-snug text-primary md:text-3xl">
                {data.designDecisionsSectionTitle ?? "What I decided and why"}
              </h2>
            </motion.div>

            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-12 grid gap-6 sm:grid-cols-2"
            >
              {data.designDecisions.map((dd, idx) => (
                <motion.div
                  key={dd.number}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-primary">
                      {String(dd.number).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-primary">
                      {dd.title}
                    </h3>
                  </div>
                  {dd.whatWeDid && (
                    <>
                      <p className="mt-4 text-[10px] font-medium uppercase tracking-wider text-secondary">
                        What I did
                      </p>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {dd.whatWeDid}
                      </p>
                    </>
                  )}
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-secondary">
                    Why
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">
                    {dd.whyItMattered}
                  </p>
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-secondary">
                    Trade-off
                  </p>
                  <p className="mt-1 border-l-2 border-accent/30 pl-3 text-sm leading-relaxed text-secondary">
                    {dd.tradeoff}
                  </p>
                </motion.div>
              ))}
              {data.extraDecisionCards?.map((card, idx) => (
                <motion.div
                  key={card.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-primary">
                      {String(data.designDecisions.length + idx + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>
                    <h3 className="text-lg font-semibold text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-secondary">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ) : (
        <>
          {data.designDecisions.map((dd, i) => (
            <section
              key={dd.number}
              className={`relative overflow-hidden px-6 py-20 md:py-28 ${
                i % 2 === 0 ? "bg-card" : "bg-white"
              }`}
            >
              <DecisionGeometry index={i} />

          <div className="relative mx-auto w-full max-w-5xl">
            {/* Number badge + label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-sm font-semibold text-primary">
                  {String(dd.number).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium uppercase tracking-widest text-secondary">
                  Design Decision {dd.number}
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary md:text-2xl">
                {dd.title}
              </h3>
            </motion.div>

            {/* The Question (when not simpleFormat) */}
            {!dd.simpleFormat && dd.question && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  The Question
                </p>
                <p className="mt-3 border-l-2 border-accent/30 pl-4 text-lg font-medium leading-relaxed text-primary md:text-xl">
                  {dd.question}
                </p>
              </motion.div>
            )}

            {/* What we did (simpleFormat) or Why This Mattered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                {dd.simpleFormat ? "What we did" : "Why This Mattered"}
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                {dd.simpleFormat ? dd.whatWeDid : dd.whyItMattered}
              </p>
            </motion.div>

            {/* Why (simpleFormat only) */}
            {dd.simpleFormat && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  Why
                </p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                  {dd.whyItMattered}
                </p>
              </motion.div>
            )}

            {/* Options (if option-based decision) */}
            {dd.options && dd.options.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  Options Considered
                </p>
                <OptionsGrid options={dd.options} chosen={dd.chosen} />
              </motion.div>
            )}

            {/* Why I Chose This (for option-based) */}
            {dd.whyChosen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  Why I Chose This Approach
                </p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                  {dd.whyChosen}
                </p>
              </motion.div>
            )}

            {/* Design Approach (for approach-based decisions) */}
            {dd.approach && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  The Design Approach
                </p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                  {dd.approach.intro}
                </p>
                <ul className="mt-4 space-y-3">
                  {dd.approach.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-base leading-relaxed text-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {dd.approach.followUp && (
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-secondary">
                    {dd.approach.followUp}
                  </p>
                )}
              </motion.div>
            )}

            {/* The Trade-off */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                The Trade-off
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                {dd.tradeoff}
              </p>
            </motion.div>

            {/* Impact (optional) */}
            {dd.impact && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  The Impact
                </p>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                  {dd.impact}
                </p>
              </motion.div>
            )}

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10"
            >
              {dd.image ? (
                <div className="overflow-hidden rounded-xl border border-border bg-white">
                  <Image
                    src={dd.image}
                    alt={dd.imageLabel}
                    width={1200}
                    height={680}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ) : (
                <ImagePlaceholder label={dd.imageLabel} />
              )}
            </motion.div>
          </div>
        </section>
      ))}
        </>
      )}

      {/* ========================= CTA (contact) ========================= */}
      <CTASliderSection
        tagline={data.cta?.tagline ?? "Design with intention,"}
        heading={data.cta?.heading ?? "Let's talk."}
        body={
          data.cta?.body ??
          "Walk through the details or make something together."
        }
        buttonLabel={data.cta?.buttonLabel ?? "Let's talk"}
      />

      {/* ========================= CASE STUDY NAV (prev / next) ========================= */}
      <CaseStudyNav />
    </main>
  );
}
