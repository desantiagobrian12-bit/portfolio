"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  question: string;
  whyItMattered: string;
  options?: DesignDecisionOption[];
  chosen?: string;
  whyChosen?: string;
  approach?: DesignDecisionApproach;
  tradeoff: string;
  impact?: string;
  imageLabel: string;
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
  designDecisions: DesignDecision[];
  coreImpact: {
    headline: string;
    description: string;
  };
  learnings: {
    title: string;
    description: string;
  }[];
  nextStudy: {
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

// ─── Geometric backgrounds per section position ──────────────────────────────

function HeroGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute -right-16 -top-16 h-[280px] w-[280px] text-border/30 md:h-[360px] md:w-[360px]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="196" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg
        className="absolute bottom-16 left-8 h-12 w-12 text-border/40"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect x="1" y="1" width="46" height="46" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

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

function LearningsGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <svg
        className="absolute -left-6 bottom-16 h-14 w-14 text-border/40"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect x="1" y="1" width="54" height="54" stroke="currentColor" strokeWidth="1" />
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

// ─── Main layout component ───────────────────────────────────────────────────

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <main>
      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden bg-white px-6 pt-28 pb-16 md:pt-36 md:pb-20">
        <HeroGeometry />

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

          {/* Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <ImagePlaceholder label={data.heroImageLabel} tall />
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

      {/* ========================= DESIGN DECISIONS ========================= */}
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

            {/* The Question */}
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

            {/* Why This Mattered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                Why This Mattered
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                {dd.whyItMattered}
              </p>
            </motion.div>

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

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10"
            >
              <ImagePlaceholder label={dd.imageLabel} />
            </motion.div>
          </div>
        </section>
      ))}

      {/* ========================= CORE IMPACT ========================= */}
      <section className="relative overflow-hidden bg-white px-6 py-20 md:py-28">
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

      {/* ========================= WHAT I LEARNED ========================= */}
      <section className="relative overflow-hidden bg-card px-6 py-20 md:py-28">
        <LearningsGeometry />
        <div className="relative mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-secondary">
              What I Learned
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={`mt-8 grid gap-6 ${
              data.learnings.length <= 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {data.learnings.map((learning, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-border bg-white p-6"
              >
                <h4 className="text-sm font-semibold leading-snug text-primary">
                  {learning.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {learning.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================= NEXT CASE STUDY ========================= */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-secondary">
              Next Case Study
            </p>
            <Link
              href={data.nextStudy.href}
              className="group mt-6 block overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-accent">
                    {data.nextStudy.company}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-primary transition-colors group-hover:text-accent md:text-2xl">
                    {data.nextStudy.title}
                  </h3>
                </div>
                <svg
                  className="h-6 w-6 flex-shrink-0 text-secondary transition-all group-hover:translate-x-1 group-hover:text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
