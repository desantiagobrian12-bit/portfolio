import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type {
  CaseStudyData,
  CaseStudyFeature,
} from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Konfront Healthcare Logistics Platform | Brian De Santiago",
  description:
    "Case study: Designing a digital platform to replace paper-based medication delivery for 1,100+ hemophilia patients across Mexico.",
};

const basePath = "/images/case-studies/konfront";
const imgV = "?v=16"; // bump when you replace image files so the page shows the new ones

// ─── Narrative sections ─────────────────────────────────────────────────────
//
// IMAGE PROPOSALS (replace placeholders once assets are ready):
//
// Section 1 – "What the field actually looked like"
//   → Simplified workflow diagram showing the actual delivery chain
//     (not the raw discovery map, but a clean, designed version of it)
//   → Or: a before/after showing paper process vs. digital process
//
// Section 2 – "Designing for two different realities"
//   → Side-by-side: desktop dashboard (coordinator view) + mobile delivery
//     screen (operator view). One frame, two products.
//   → Branding sub-step: color palette, typography, logo lockup (like the
//     allUP reference: clean grid of tokens, not a full brand guidelines page)
//   → Design system sub-step: component grid (buttons, inputs, status badges,
//     cards) with short captions. Visual-heavy, minimal text.
//
// Section 3 – "Building trust by making it real"
//   → Before/after: quick v0 POC screenshot next to the final hi-fi Figma
//     prototype. Shows the jump in fidelity and why it worked.
//
// Section 4 – "What testing changed"
//   → Before/after of a specific UI change from testing (e.g. the incident
//     reporting screen, or the language simplification). Concrete proof
//     that testing shaped the product.
//
// ─────────────────────────────────────────────────────────────────────────────

const narrativeSections: CaseStudyFeature[] = [
  {
    title: "What the field actually looked like",
    image: `${basePath}/Foundational-discovery-map.png${imgV}`,
    description:
      "Before designing anything, I needed to understand how deliveries actually worked, not how they were documented. We ran stakeholder interviews and mapped the real operational workflow end to end.\n\nWhat we found was messier than expected. Four patterns defined the problem:\n\n\u2022 No standardization across clinics\n\u2022 Heavy reliance on paper forms and verbal handoffs\n\u2022 Zero traceability after a package left the warehouse\n\u2022 High cognitive load for operators who memorized every step",
  },
  {
    title: "Designing for two different realities",
    image: `${basePath}/mobile-desktop-prototype.png${imgV}`,
    description:
      "We were designing for two completely different users. The route coordinator works from a desk, managing dozens of deliveries at once. They need data density, bulk actions, and dashboards. The last-mile operator works outdoors on a phone, making one delivery at a time. They need a step-by-step flow, large touch targets, and camera access.\n\nA single responsive app would have compromised both. We built two purpose-built products sharing one backend: desktop for coordinators, mobile web for operators.",
    subSteps: [
      {
        title: "Creating a congruent design system",
        description:
          "We defined a single visual language for both products: base and brand colors, grayscale, and Inter for typography. Design tokens (background-color-tertiary, surface-text-primary, card-surface, border-radius-md, bg-primary) map consistently from Figma variables into the app, so delivery cards and buttons look and behave the same on desktop and mobile. The component library covers buttons in multiple states, calendar inputs, dropdowns with validation states, and shared patterns for forms and tables.",
        images: [
          { src: `${basePath}/Branding.png${imgV}`, alt: "Color palette and typography", caption: "Brand colors, base colors, grayscale and typeface." },
          { src: `${basePath}/Tokens.png${imgV}`, alt: "Tokens applied in mobile UI", caption: "Tokens for color, padding, and borders." },
          { src: `${basePath}/Color variables in figma.png${imgV}`, alt: "Color variables in Figma", caption: "Color variables in Figma for consistent theming." },
          { src: `${basePath}/Design system.png${imgV}`, alt: "Components and documentation", caption: "Components, spacing, icons and other documentation." },
        ],
      },
    ],
  },
  {
    title: "What testing changed",
    description:
      "We ran usability sessions with 5 last-mile operators (~25 min each) to validate the mobile experience before development. Three things came back clearly:\n\n\u2022 Language wasn't landing. We rewrote in-app copy using simpler, field-friendly terms.\n\u2022 Patients asked operators questions they couldn't answer. We added an FAQ with suggested responses.\n\u2022 Incident reporting felt incomplete. We added comments and a direct-call-to-nurse option.\n\nThese weren't cosmetic changes. They were the difference between a tool that technically works and one people actually trust in the field.",
  },
  {
    title: "Building trust by making it real",
    video: `${basePath}/Prototype-desktop-video.mp4`,
    image: `${basePath}/Protoype-mobile.png${imgV}`,
    description:
      "The client had never used a digital tool for this workflow. Showing wireframes risked confusion. They needed to see the product to believe it was possible.\n\nWe built a quick proof of concept with v0 to validate the idea, then skipped wireframes and went straight to high-fidelity Figma prototypes. Discovery had already validated the flows. What we needed was buy-in and specific feedback, and polished prototypes delivered that faster than abstractions could.",
  },
];

// ─── Case study data ───────────────────────────────────────────────────────

const caseStudyData: CaseStudyData = {
  layoutVariant: "flow",
  heroOverviewCompact: true,
  overview: {
    company: "Logistics Platform",
    role: "Product Designer",
    timeline: "2025",
    team: "2 Designers\nDev team\nPM\nProduct adoption",
    platform: "Desktop web app + Mobile web app",
    myContribution: "UX/UI Design\nUX Research\nVisual system",
  },
  tags: ["Healthcare", "B2B", "Logistics"],
  title: "Healthcare Logistics Platform",
  subtitle:
    "1,100 patients depend on medication delivered to their door. When I joined, every delivery was tracked on paper.",
  heroImageLabel: "Konfront healthcare logistics platform: mobile and desktop interfaces",
  heroImage: `${basePath}/Cover-hero-konfront.png${imgV}`,
  heroNoTopPadding: true,
  heroDottedOverview: true,
  heroLayout: "stacked",

  product:
    "A digital platform for managing the delivery of high-cost hemophilia medications across Mexico. Desktop interface for coordinators managing batches. Mobile web app for operators delivering in the field. Over 1,100 patients depending on timely, cold-chain deliveries administered intravenously at home.",

  coreProblem: {
    headline:
      "The existing medication delivery process was manual, slow, and error-prone.",
    description:
      "Once a package left the warehouse, nobody knew where it was. We needed a digital solution to streamline operations, ensure traceability, and improve the experience for both patients and distributors.",
  },

  coreImpact: {
    headline:
      "A fully manual, paper-based process replaced with end-to-end digital traceability.",
    description:
      "1,100+ hemophilia patients across Mexico now receive medication through a documented, visible, and accountable workflow. From batch upload to patient handoff, every step is tracked.",
    metrics: [
      {
        category: "Digital Adoption",
        icon: "chart",
        value: "90%",
        description:
          "of deliveries now managed digitally through the platform.",
      },
      {
        category: "Efficiency",
        icon: "calendar",
        value: "70% less",
        description:
          "time spent assigning routes compared to the previous manual process.",
      },
      {
        category: "Onboarding",
        icon: "user",
        value: "30 min",
        description:
          "average onboarding time for new operators, most with limited tech experience.",
      },
      {
        category: "Quality Assurance",
        icon: "check",
        value: "6",
        description:
          "critical usability issues caught and resolved before a single line of code was written.",
      },
      {
        category: "Design System",
        icon: "box",
        value: "25+",
        description:
          "UI components built, documented, and shared across both products.",
      },
    ],
  },

  features: narrativeSections,
  featuresSectionLabel: "",
  featuresSectionTitle: "My approach to the design",
  featuresSectionDescription: "",

  designDecisions: [],
};

export default function KonfrontCaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
