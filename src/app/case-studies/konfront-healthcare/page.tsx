import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type {
  CaseStudyData,
  CaseStudyFeature,
} from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Konfront Healthcare Logistics Platform | Brian De Santiago",
  description:
    "Case study on replacing paper-based medication delivery with a centralized digital platform.",
};

const basePath = "/images/case-studies/konfront";

const designProcessSteps: CaseStudyFeature[] = [
  {
    title: "Understanding user and business needs",
    description:
      "We ran alignment sessions with sales, logistics, marketing, and regulatory to map the current process. We identified inefficiencies (disconnected data, inconsistent validations, no traceability), mapped roles and technical limits, and defined MVP requirements.",
    descriptionAfterImage:
      "The Foundational Discovery Map created a shared understanding across teams. It made fragmentation visible and let us prioritize by business impact and feasibility, bridging the client's reality with our product direction.",
    image: `${basePath}/Foundational-discovery-map.png`,
  },
  {
    title: "Define and ideate",
    description:
      "We narrowed our focus to two main user types: distributors managing delivery batches, and operators handling the actual deliveries. From there, we defined the core functionalities:\n\n• Uploading and managing deliveries via CSV or manual input\n• Assigning delivery operators\n• Tracking status changes in real time\n• Capturing patient validation during handoff\n• Reporting incidents with supporting evidence",
    descriptionAfterImage:
      "These artifacts validated user flows and exposed edge cases early. They became a common reference for design, product, and development.",
    image: `${basePath}/define-ideate.png`,
    subSteps: [
      {
        title: "Branding",
        description:
          "We designed a visual identity rooted in trust, clarity, and accessibility. The palette and typography work from office screens to outdoor mobile use.",
        image: `${basePath}/Branding.png`,
      },
      {
        title: "Design system",
        description:
          "A lightweight design system with modular components kept desktop and mobile consistent. Buttons, forms, tables, and status indicators sped up development and supported clear, responsive interaction.",
        image: `${basePath}/Design-system.png`,
      },
    ],
  },
  {
    title: "Prototype and test",
    description:
      "High-fidelity desktop prototype for distributors (batch upload, assignment, monitoring) and mobile prototype for operators in the field (step-by-step delivery flow, evidence capture, validation at handoff). We tested with stakeholders to validate flows and gather detailed feedback.",
    video: `${basePath}/Prototype-desktop-video.mp4`,
    image: `${basePath}/Protoype-mobile.png`,
  },
  {
    title: "Iterate and finalize",
    description:
      "We conducted UX research and testing to refine the flows and validate the experience with real users. Handoff and close collaboration with engineering ensured the design held up in implementation and met regulatory and traceability requirements.",
  },
];

const caseStudyData: CaseStudyData = {
  overview: {
    company: "Konfront",
    role: "Product Designer",
    timeline: "Apr 2025 – Aug 2025",
    team: "2 designers, developers, PMs, product adoption team",
    platform: "Desktop web app + Mobile web app",
  },
  tags: ["Healthcare", "B2B", "Logistics"],
  title: "Healthcare Logistics Platform",
  subtitle:
    "Replacing paper-based medication delivery with full digital traceability.",
  heroImageLabel: "Konfront healthcare logistics case study cover",
  heroImage: `${basePath}/case-studie-cover.png`,
  features: designProcessSteps,
  featuresSectionLabel: "",
  featuresSectionTitle: "The design process",
  featuresSectionDescription: "",
  designDecisionsAsCards: true,
  designDecisionsSectionTitle: "The key decisions",
  resultsSection: {
    label: "Impact delivered",
    title: "From design decisions to real-world results",
    metrics: [
      {
        value: "90%",
        description:
          "Deliveries now managed digitally via the new platform.",
      },
      {
        value: "70% less time",
        description:
          "Spent assigning routes compared to the previous manual process.",
      },
      {
        value: "30 min",
        description: "Average onboarding time for new operators.",
      },
      {
        value: "6",
        description: "Critical usability issues resolved before dev.",
      },
      {
        value: "25+",
        description:
          "UI components developed with full documentation.",
      },
    ],
  },
  product:
    "A digital platform for managing the delivery of high-cost hemophilia medications across Mexico. Desktop interface for distributors managing batches. Mobile web app for operators delivering in the field. Over 1,100 patients depending on timely, cold-chain deliveries administered intravenously at home.",
  coreProblem: {
    headline:
      "The existing medication delivery process was manual, slow, and error-prone.",
    description:
      "We needed a digital solution to streamline operations, ensure traceability, and improve the experience for both patients and distributors.",
  },
  designDecisions: [
    {
      number: 1,
      title: "Two Products, One System: Desktop + Mobile",
      simpleFormat: true,
      whatWeDid:
        "Two purpose-built products (desktop for distributors, mobile for operators) sharing one backend, so each experience could be optimized for its context.",
      whyItMattered:
        "Distributors manage batches at a desk with data tables and dashboards. Operators deliver in the field, outdoors, on mobile, often with poor connectivity. Same system, completely different needs.",
      tradeoff:
        "Two products means more design and development work. But a single responsive product would have compromised both user types. In healthcare logistics, friction translates to delays, and delays impact patients.",
      imageLabel: "",
    },
    {
      number: 2,
      title: "Skipping Wireframes: Straight to High-Fidelity",
      simpleFormat: true,
      whatWeDid:
        "A quick POC to validate the concept, then straight to high-fidelity Figma prototypes. No wireframes in between.",
      whyItMattered:
        "The client had never used a digital tool for this workflow. They needed to see the product to believe it was possible and to give meaningful feedback.",
      tradeoff:
        "Higher cost of change if the direction was wrong. Our discovery map and stakeholder sessions had already validated the flows. The risk of losing momentum with abstract wireframes was higher.",
      imageLabel: "",
    },
    {
      number: 3,
      title: "Designing for Auditability: Every Step Traceable",
      simpleFormat: true,
      whatWeDid:
        "Every screen designed for auditability: full delivery lifecycle status, incident reporting with evidence (photos, notes), and validation at handoff. Explicit paths for exceptions (wrong address, patient not home, cold-chain issues).",
      whyItMattered:
        "High-cost medications for hemophilia patients. If a delivery fails, there must be a clear record of what happened, when, and why. Regulatory requirements demanded full traceability.",
      tradeoff:
        "More validation steps mean more friction in the flow. We made each step as fast as possible (large touch targets, smart defaults, minimal typing) without removing essential checkpoints.",
      imageLabel: "",
    },
  ],
  coreImpact: {
    headline:
      "Replaced a fully manual, paper-based medication delivery process with a centralized digital platform.",
    description:
      "Serving 1,100+ hemophilia patients across Mexico. Enabled full delivery traceability from batch upload to patient handoff, something that didn't exist before.",
  },
};

export default function KonfrontCaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
