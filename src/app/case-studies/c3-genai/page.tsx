import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type {
  CaseStudyData,
  CaseStudyFeature,
} from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "C3 AI GenAI Enterprise Experience | Brian De Santiago",
  description:
    "Case study on designing a complex enterprise AI experience that feels simple for everyone.",
};

const basePath = "/images/case-studies/c3-genai";

const features: CaseStudyFeature[] = [
  {
    title: "Reasoning",
    description:
      "Users need to trust AI answers when business decisions depend on them. I added a collapsible reasoning section so they could verify in context when they cared, and skip it when they didn't, without cluttering the main answer.",
    image: `${basePath}/reasoning.png`,
  },
  {
    title: "Call tools, skills, files and metadata",
    description:
      "The AI can invoke tools, use skills, and pull from files and metadata so answers are grounded in the organization's data. The UI makes it clear when the model is using these so power users can see what's in scope and non-technical users get confident, contextual answers.",
    image: `${basePath}/call-tools-skills-files-metadata.png`,
  },
  {
    title: "Data tables and charts in answers",
    description:
      "When the answer includes structured data or trends, tables and charts render inline inside the conversation instead of on a separate screen. I kept it that way so the flow stays natural and users can scan numbers and visuals where they read the summary.",
    image: `${basePath}/data-table-and-charts.png`,
  },
  {
    title: "Filters: scoping files and metadata",
    description:
      "Before asking a question, users can scope what the AI uses: which files, which metadata (e.g. author, doc type, date). Filtering happens up front so the answer is based on the right context instead of the AI guessing or asking follow-ups.",
    image: `${basePath}/Filters.png`,
  },
  {
    title: "AI quick actions: popover in context",
    description:
      "Where the AI meets the canvas. The popover is how users invoke Gen AI without leaving the screen: summarize, use variables, make it formal, run analysis. Same pattern on dashboards, canvas views, and inside the rich-text editor so it always feels part of the flow, not a separate tool.",
    images: [
      {
        src: `${basePath}/popover-dashboard.png`,
        alt: "Popover in dashboard, quick AI actions from dashboard context",
      },
      {
        src: `${basePath}/popover-canvas.png?v=2`,
        alt: "Popover in canvas, AI actions from a canvas view",
      },
      {
        src: `${basePath}/popover-rte.png`,
        alt: "Popover in rich text editor, quick AI actions in the document",
      },
    ],
  },
];

const caseStudyData: CaseStudyData = {
  overview: {
    company: "C3 AI",
    role: "Associate Product Designer",
    timeline: "Aug 2025 – Feb 2026",
    team: "Collaborative with PMs, engineers, and design support",
    platform: "Enterprise web application (C3 AI Suite)",
    confidentiality:
      "All visuals are abstracted recreations due to confidentiality.",
  },
  tags: ["GenAI", "Enterprise", "AI UX"],
  title: "GenAI Enterprise Experience",
  subtitle:
    "Making complex, data-heavy AI experiences feel simple for everyone.",
  heroImageLabel: "C3 Generative AI, home and ask interface",
  heroImage: `${basePath}/cover-home.png`,
  product:
    "C3 AI GenAI was an enterprise-grade generative AI product. Think ChatGPT, but grounded in an organization's internal documents, data, and business context. Users could query the system in natural language to analyze information, generate reports, draft content, create workflows, and support decision-making. It served a mix of technical and non-technical users, from business analysts to data scientists to executives.",
  coreProblem: {
    headline:
      "Making a complex, data-heavy AI experience feel simple for everyone.",
    description:
      "Enterprise AI isn't like consumer AI. When a business analyst asks a question, the answer might be a paragraph, a data table with 50 rows, a chart, or all three. When an executive asks, they want a summary they can trust. When a data scientist asks, they want to see the reasoning. The interface had to handle all of this: different response types, different user expectations, different levels of trust. Without feeling overwhelming. And some of these features already existed as engineer-built versions that were functional but not intuitive.",
  },
  features,
  designDecisionsAsCards: true,
  extraDecisionCards: [
    {
      title: "Why a popover for AI in context",
      description:
        "The popover is the main way users trigger Gen AI from where they work: summarize, formalize, use variables, run analysis. Same pattern on dashboard, canvas, and in the doc. So the AI feels built in, not a separate app.",
    },
  ],
  designDecisions: [
    {
      number: 1,
      title: "Conversational UI with embedded rich content",
      whyItMattered:
        "Users already think in chat (ChatGPT, Copilot). I kept that. The hard part was making tables and charts feel native inside the thread.",
      simpleFormat: true,
      whatWeDid:
        "Text, tables, and charts all live in the same thread. No split pane or separate results page.",
      tradeoff:
        "Big tables in a bubble can feel cramped. I tuned transitions and sizing so rich content still feels part of the conversation.",
      imageLabel: "Conversational UI with embedded data table and chart",
    },
    {
      number: 2,
      title: "Collapsible reasoning, trust without clutter",
      whyItMattered:
        "Most people want the answer fast. Power users want to see how the AI got there. Collapsible reasoning serves both.",
      simpleFormat: true,
      whatWeDid:
        "Answer is clean by default. A \"Reasoned\" section expands on demand for sources and logic.",
      tradeoff:
        "Some may never expand and over-trust. I bet that people who care will expand; forcing it on everyone added clutter they ignored.",
      imageLabel: "Reasoning panel in collapsed and expanded states",
    },
    {
      number: 3,
      title: "Pre-query filters: scoping before asking",
      whyItMattered:
        "Enterprise queries are scoped (Q3, region, dataset). Natural language alone was ambiguous. Filters removed the guesswork.",
      simpleFormat: true,
      whatWeDid:
        "Users set dataset, time range, and context before asking. The AI runs with a clear scope.",
      tradeoff:
        "One extra step. In enterprise, wrong scope costs more than a click; users preferred knowing exactly what was in play.",
      imageLabel: "Pre-query filter interface with dataset and time range selectors",
    },
  ],
  coreImpact: {
    headline: "A single place to ask, see, and act.",
    description:
      "The outcome was an experience that felt familiar (chat, reasoning when you need it, filters you can trust) while handling enterprise complexity. Non-technical users could get answers without learning a new tool. The patterns I landed on spread to other products in the suite.",
  },
};

export default function C3GenAICaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
