import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type { CaseStudyData } from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Konfront Healthcare Logistics Platform — Brian De Santiago",
  description:
    "Case study on replacing paper-based medication delivery with a centralized digital platform.",
};

const caseStudyData: CaseStudyData = {
  overview: {
    company: "Konfront",
    role: "Product Designer",
    timeline: "Sept 2024 – Aug 2025",
    team: "2 designers, developers, PMs, product adoption team",
    platform: "Desktop web app + Mobile web app",
  },
  tags: ["Healthcare", "B2B", "Logistics"],
  title: "Healthcare Logistics Platform",
  subtitle:
    "Replacing paper-based medication delivery with full digital traceability.",
  heroImageLabel: "Healthcare delivery logistics concept visual",
  product:
    "A digital platform for managing the delivery of high-cost hemophilia medications across Mexico. Desktop interface for distributors managing batches. Mobile web app for operators delivering in the field. Over 1,100 patients depending on timely, cold-chain deliveries administered intravenously at home.",
  coreProblem: {
    headline:
      "The entire medication delivery process was on paper — and lives depended on it.",
    description:
      "The client had recently entered the hemophilia market in Mexico, delivering cold-chain medications to 1,100+ patients through public health institutions like IMSS. But operations were still managed with spreadsheets, paper forms, and disjointed communication. This meant no delivery traceability (once a package left the warehouse, visibility dropped to zero), inconsistent validation protocols, and fragmented data across teams. Delays weren't just operational headaches. They impacted patients who needed medication on time. We needed to digitize the entire logistics chain, from batch upload to patient handoff, while meeting healthcare regulatory requirements and being usable by operators in the field.",
  },
  designDecisions: [
    {
      number: 1,
      title: "Two Products, One System — Desktop + Mobile",
      question:
        "How do you design for two completely different users in two completely different contexts, within one unified system?",
      whyItMattered:
        "Distributors manage delivery batches at a desk, uploading CSVs, assigning operators, monitoring status across dozens of deliveries. Operators handle the actual deliveries in the field, often outdoors, on mobile, sometimes in areas with poor connectivity. Same system, completely different needs.",
      options: [
        {
          label: "One responsive web app",
          description: "Same product, adapts to screen size",
        },
        {
          label: "Two separate products with shared backend",
          description: "Purpose-built for each context",
        },
        {
          label: "Desktop-first with simplified mobile",
          description:
            "Full functionality on desktop, limited mobile view",
        },
      ],
      chosen: "Option B",
      whyChosen:
        "A responsive approach sounds efficient but fails when the use cases are fundamentally different. A distributor needs data tables, bulk actions, and real-time dashboards. An operator needs a step-by-step delivery flow, camera access for evidence capture, and large touch targets for outdoor use. Trying to make one UI serve both would compromise both. Two purpose-built products sharing one backend meant each experience could be optimized for its context without the other getting in the way.",
      tradeoff:
        "Two products means more design and development work. More components, more flows, more edge cases. But the alternative, a compromised single product, would've created friction for both user types. In healthcare logistics, friction translates directly to delays, and delays impact patients.",
      imageLabel:
        "Desktop distributor dashboard and mobile operator delivery flow",
    },
    {
      number: 2,
      title: "Skipping Wireframes — Straight to High-Fidelity",
      question:
        "What's the fastest way to validate the product direction with a client who's never seen their process digitized?",
      whyItMattered:
        "The client's entire operation was on paper. They had never used a digital tool for this workflow. Showing them wireframes or low-fidelity mockups risked confusion. They needed to see the product to believe it was possible and to give meaningful feedback.",
      options: [
        {
          label: "Standard process",
          description:
            "Discovery, wireframes, mid-fi, high-fi, then testing",
        },
        {
          label: "POC then straight to high-fidelity",
          description:
            "Quick generative design POC to validate the concept, then polished Figma prototypes",
        },
      ],
      chosen: "Option B",
      whyChosen:
        "We started with a quick proof of concept using a generative design tool to validate the core idea. Once stakeholders could visualize the product in context, we skipped wireframes entirely and moved to high-fidelity prototypes in Figma. This wasn't reckless. The discovery work (stakeholder interviews, workflow mapping, ecosystem analysis) gave us enough confidence in the flows. What we needed was buy-in and detailed feedback, and high-fidelity designs delivered that faster than wireframes ever could.",
      tradeoff:
        "Skipping wireframes means higher cost of change if you're wrong about the direction. But our discovery map and stakeholder alignment sessions had already validated the flows. The risk of being fundamentally wrong was low. The risk of losing client momentum by showing abstract wireframes was much higher.",
      impact:
        'High-fidelity prototypes built trust quickly with the client and generated richer, more specific feedback. Instead of "I think this flow makes sense," we got "this status label should say X instead of Y." The kind of feedback that actually improves the product.',
      imageLabel:
        "High-fidelity prototype showing the delivery management interface",
    },
    {
      number: 3,
      title: "Designing for Auditability — Every Step Traceable",
      question:
        "How do you make a logistics platform that's not just functional, but fully auditable from batch upload to patient handoff?",
      whyItMattered:
        "This isn't a food delivery app. These are high-cost medications for hemophilia patients. If a delivery fails, there needs to be a clear record of what happened, when, and why. If a patient didn't receive their medication, someone needs to know exactly where the chain broke. Regulatory requirements demanded full traceability.",
      approach: {
        intro: "Every screen was designed with auditability in mind:",
        items: [
          'Status tracking showed the full lifecycle of each delivery, not just "delivered" or "not delivered," but every state in between',
          "Incident reporting required operators to capture evidence (photos, notes) when deliveries failed",
          "Validation at handoff ensured the right medication reached the right patient with proper confirmation",
        ],
        followUp:
          "I refined the status tracking flows after internal reviews. The initial version didn't handle failed deliveries clearly enough. Adding explicit paths for exceptions (wrong address, patient not home, cold-chain compromised) made the system more honest and more useful.",
      },
      tradeoff:
        "More states and more validation steps means more friction in the delivery flow. Every additional screen an operator has to complete in the field adds time. But in healthcare logistics, skipping validation isn't an option. The design challenge was making each step as fast and frictionless as possible (large touch targets, smart defaults, minimal typing) without removing any essential checkpoint.",
      imageLabel: "Status tracking lifecycle and incident reporting flow",
    },
  ],
  coreImpact: {
    headline:
      "Replaced a fully manual, paper-based medication delivery process with a centralized digital platform.",
    description:
      "Serving 1,100+ hemophilia patients across Mexico. Enabled full delivery traceability from batch upload to patient handoff, something that didn't exist before.",
  },
  learnings: [
    {
      title:
        "Regulatory complexity isn't the enemy of good design — it's the context.",
      description:
        "Translating a high-risk, paper-based workflow into a digital platform pushed me to focus on real-world usability and transparency. The constraints made the design decisions more meaningful, not less.",
    },
    {
      title: "Stakeholder alignment is everything in B2B.",
      description:
        "Especially when designing tools that impact not just workflows, but patient outcomes. Every design decision had to be defensible to sales, logistics, marketing, regulatory, and engineering, all at once.",
    },
    {
      title: "Show, don't tell.",
      description:
        "Going straight to high-fidelity designs built trust faster than any process diagram or wireframe deck could have. In contexts where stakeholders have never seen their process digitized, making it real is the fastest path to alignment.",
    },
  ],
  nextStudy: {
    company: "Wizeline",
    title: "Learning Experience Platform",
    href: "/case-studies/wizeline-learning",
  },
};

export default function KonfrontCaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
