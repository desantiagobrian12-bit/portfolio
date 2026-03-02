import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type {
  CaseStudyData,
  CaseStudyFeature,
} from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Trust Logistics Transport Management System | Brian De Santiago",
  description:
    "Case study: Designing a Transport Management System for last-mile logistics — desktop app and mobile app for two user types.",
};

const basePath = "/images/case-studies/tms";
const imgV = ""; // bump when you replace image files
const videoV = "?v=2"; // bump when you replace Prototype-video.mp4

// ─── Narrative sections ─────────────────────────────────────────────────────
// Story-led, first person. Same structure as Healthcare Logistics and C3 Gen AI.
// Add more images to subSteps or sections when assets are ready.
// ─────────────────────────────────────────────────────────────────────────────

const narrativeSections: CaseStudyFeature[] = [
  {
    title: "What operations actually looked like",
    image: `${basePath}/Flow Diagram.png${imgV}`,
    description:
      "Before designing anything, I needed to understand how logistics actually ran, not how it was documented. I ran workshops with internal stakeholders and mapped operations from onboarding to final delivery and returns.\n\nI used journey maps and user flows to see how admins, coordinators, and operators interacted with the system and where friction was. Four patterns defined the problem:\n\n\u2022 Fragmented communication between coordinators and operators\n\u2022 Manual route creation prone to errors\n\u2022 No real-time feedback from the field\n\u2022 Limited visibility on delivery status and incidents\n\nThose insights drove early screen flows, user roles, and the logic behind key interactions and validations.",
  },
  {
    title: "Designing for coordinators and drivers",
    description:
      "We were designing for two different users. The route coordinator works from a desk. They manage KPIs, tasks, routes, vehicles, users, and clients. They need data density, route generation (manual and automatic), and real-time status so they can see what's happening across the fleet.\n\nThe driver works in the field. They need to check in, follow their route, report incidents, and resolve tasks from their phone. They need a focused flow, clear actions, and reliability in the palm of their hand.\n\nA single product would have compromised both. We designed a desktop app for coordinators and one mobile app for two user types: drivers and coordinators in the field. One backend, two apps. That split let each experience stay focused on who was using it.",
  },
  {
    title: "Straight to high-fidelity",
    video: `${basePath}/Prototype-video.mp4${videoV}`,
    image: `${basePath}/mobile-prototype.png${imgV}`,
    description:
      "The client needed to see the product to believe it was possible. I skipped wireframes and worked directly in high-fidelity in Figma, iterating with stakeholders and developers so we stayed aligned on business logic.\n\nOutcomes included a modular TMS with views for KPIs, tasks, routes, vehicles, users, and clients; internal tools for manual and automatic route generation; real-time status indicators; and task-based alerts for coordination and incident response. I created sitemaps for both the TMS and the delivery app and defined user flows by role and permissions. That kept scope aligned with business priorities while keeping the operator experience simple.",
  },
  {
    title: "What real-world testing proved",
    description:
      "We ran testing with real route uploads and route generation. Drivers did check-ins, followed routes, reported incidents, and resolved tasks in the app. The goal was to see if the system held up under real operations.\n\nIterative testing and feedback led to optimized routes and a refined product. We tuned workflows, improved UI clarity, and tightened interactions on mobile and desktop. To date, tests have confirmed that the system works reliably and meets operational needs. That wasn't a given when we started. We had to prove it in the field.",
  },
  {
    title: "Handoff and collaboration",
    description:
      "I prepared detailed handoff documentation: design specs, component libraries, and interaction guidelines so development could start from a single source of truth. Close collaboration with developers and product managers was essential to respect technical constraints and keep design integrity.\n\nDuring development I joined regular check-ins to review progress, clarify questions, and adjust designs when needed. That communication helped ship a polished product aligned with user needs and business goals. In B2B logistics, the last mile is handoff. If design doesn't make it into the build, it doesn't matter.",
  },
];

// ─── Case study data ───────────────────────────────────────────────────────

const caseStudyData: CaseStudyData = {
  layoutVariant: "flow",
  heroOverviewCompact: true,
  heroNoTopPadding: true,
  heroDottedOverview: true,
  heroLayout: "stacked",
  overview: {
    company: "Trust Logistics",
    role: "Lead Product Designer",
    timeline: "2024",
    team: "Developers\nPMs\nStakeholders",
    platform: "Desktop app + mobile app (2 user types)",
    myContribution:
      "End-to-end product design\nResearch\nDesktop + mobile app\nDesign documentation",
  },
  tags: ["B2B", "Logistics", "TMS", "Last-mile"],
  title: "Transport Management System",
  subtitle:
    "Routes were manual, events weren't logged in real time, and key metrics were nearly impossible to track.",
  heroImageLabel:
    "Transport Management System: desktop and mobile interfaces for logistics",
  heroImage: `${basePath}/Hero-case-study.png${imgV}`,
  product:
    "I led the design of a Transport Management System (TMS) for a last-mile logistics company. The platform centralizes route planning, delivery tracking, and incident reporting through a desktop app and one mobile app used by two user types: coordinators and drivers. The goal was to digitize operations, reduce delivery failures, and give the business visibility and control across the whole chain.",

  coreProblem: {
    headline: "Operations were fragmented and difficult to monitor.",
    description:
      "Delivery routes were manually assigned, events weren't logged in real time, and key metrics like fuel efficiency, delivery time, and failed attempts were nearly impossible to track. The company needed an end-to-end solution to unify planning, execution, and reporting for more efficient, transparent, and scalable logistics.",
  },

  coreImpact: {
    headline:
      "A unified TMS that digitizes planning, execution, and reporting for last-mile logistics.",
    description:
      "The platform centralizes route planning, delivery tracking, and incident reporting across a desktop app and a mobile app. Operations that once ran on spreadsheets, messaging apps, and manual processes now run in a single system built to scale with the business and support real-time visibility and control.",
    metrics: [
      {
        category: "Unified platform",
        icon: "box",
        value: "1 system",
        description:
          "Planning, execution, and reporting in one place instead of spreadsheets and messaging.",
      },
      {
        category: "Visibility",
        icon: "chart",
        value: "Real-time",
        description:
          "Delivery status and incidents visible to coordinators as they happen.",
      },
      {
        category: "Scale",
        icon: "user",
        value: "Desktop + mobile app",
        description:
          "Desktop app for coordinators, mobile app for two user types.",
      },
      {
        category: "Handoff",
        icon: "check",
        value: "Documented",
        description:
          "Design specs, component libraries, and interaction guidelines for development.",
      },
    ],
  },

  features: narrativeSections,
  featuresSectionLabel: "",
  featuresSectionTitle: "My approach to the design",
  featuresSectionDescription: "",

  designDecisions: [],
};

export default function TMSCaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
