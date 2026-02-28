import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type {
  CaseStudyData,
  CaseStudyFeature,
} from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "C3 AI GenAI Enterprise Experience | Brian De Santiago",
  description:
    "How I thought through each feature of an enterprise GenAI product: reasoning, filters, inline data, and in-context actions.",
};

const basePath = "/images/case-studies/c3-genai";
const imgV = "?v=3"; // bump when you replace image files so the page shows the new ones

// Narrative sections: feature-driven but story-led. Each block = how I thought through that capability, the decision, and why it mattered.
const narrativeSections: CaseStudyFeature[] = [
  {
    title: "Trust without clutter: reasoning on demand",
    image: `${basePath}/reasoning.png${imgV}`,
    description:
      "When business decisions depend on the answer, people need to trust it. Showing reasoning by default added noise; hiding it felt like a black box. I pushed for collapsible reasoning: clean answer first, expand when you want to see how the AI got there. The trade-off was that some users might over-trust and never expand. I bet that the people who care about verification would expand, and that forcing reasoning on everyone would just create clutter they'd ignore anyway. That's worse for trust.",
  },
  {
    title: "What's in scope before you ask",
    image: `${basePath}/Filters.png${imgV}`,
    description:
      "Enterprise questions are scoped. Q3, this dataset, this region. Relying only on natural language was ambiguous. I wanted users to set scope up front so the AI wasn't guessing. That's one extra step before sending the question, but wrong scope costs more than a click. We added pre-query filters for files and metadata. The AI runs with a clear, unambiguous context. In practice, users preferred knowing exactly what was in play.",
  },
  {
    title: "When the answer is a table or a chart",
    image: `${basePath}/data-table-and-charts.png${imgV}`,
    description:
      "Answers aren't just paragraphs. They're tables, charts, summaries. Putting those on a separate screen broke the flow. I kept everything in the thread: text, tables, and charts inline so users could scan numbers and visuals where they read the summary. The hard part was making rich content feel native. Big tables in a bubble can feel cramped. I tuned transitions and sizing so it still felt like one conversation, not a report crammed into chat.",
  },
  {
    title: "Making tools and sources visible",
    image: `${basePath}/call-tools-skills-files-metadata.png${imgV}`,
    description:
      "The AI invokes tools, skills, and files so answers are grounded in the organization's data. Power users want to see what ran; everyone else just wants a confident answer. The UI had to make \"what's in scope\" clear without turning every response into a technical readout. We surfaced which sources and skills were used so verification was possible when it mattered. That way both sides got what they needed: transparency for those who look, simplicity for those who don't.",
  },
  {
    title: "AI where you work: the popover",
    description:
      "The ask screen wasn't the only place people needed AI. They were on dashboards, canvases, inside docs. I pushed for one pattern: a contextual popover. Summarize, formalize, run analysis from right there. Same interaction on every surface so the AI felt built in, not a separate app. The popover is how users invoke Gen AI without leaving the screen. That consistency was intentional. Once you learn it in one place, you have it everywhere.",
    images: [
      {
        src: `${basePath}/popover-dashboard.png${imgV}`,
        alt: "Popover in dashboard, quick AI actions from dashboard context",
      },
      {
        src: `${basePath}/popover-canvas.png${imgV}`,
        alt: "Popover in canvas, AI actions from a canvas view",
      },
      {
        src: `${basePath}/popover-rte.png${imgV}`,
        alt: "Popover in rich text editor, quick AI actions in the document",
      },
    ],
  },
];

const caseStudyData: CaseStudyData = {
  layoutVariant: "flow",
  heroOverviewCompact: true,
  heroNoTopPadding: true,
  heroDottedOverview: true,
  heroLayout: "stacked",
  overview: {
    company: "C3 AI",
    role: "Product Designer",
    timeline: "2026",
    team: "PMs, engineers, design support",
    platform: "Enterprise web application (C3 AI Suite)",
    myContribution: "UX/UI for GenAI features\nDesign decisions per capability",
    confidentiality:
      "All visuals are abstracted recreations due to confidentiality.",
  },
  tags: ["GenAI", "Enterprise", "AI UX"],
  title: "GenAI Enterprise Experience",
  subtitle:
    "One experience for analysts, executives, and data scientists. The work was feature-driven: each capability had to earn its place.",
  heroImageLabel: "C3 Generative AI, home and ask interface",
  heroImage: `${basePath}/cover-case-study.png${imgV}`,
  product:
    "C3 AI GenAI was enterprise-grade generative AI grounded in an organization's documents, data, and business context. Users could query in natural language to analyze information, generate reports, draft content, and support decision-making. I didn't own one big redesign. I owned how each capability showed up: reasoning, filters, inline data, tools visibility, and in-context actions. So the story here is how we thought through each piece, the decisions behind it, and why it mattered.",
  coreProblem: {
    headline:
      "One interface. Different users. Each feature had to serve everyone without feeling overwhelming.",
    description:
      "An analyst might want the full table. An executive wants a summary they can trust. A data scientist wants to see the reasoning. The challenge was making one experience that could do all of that. So the work was inherently feature-driven: every surface had to be intentional. My job was to take each capability and make it feel clear, trustworthy, and part of the flow.",
  },
  features: narrativeSections,
  featuresSectionLabel: "",
  featuresSectionTitle: "How I thought through each feature",
  featuresSectionDescription: "",
  designDecisions: [],
  coreImpact: {
    headline: "A single place to ask, see, and act.",
    description:
      "We shipped an experience that felt familiar (chat, reasoning when you need it, filters you can set) while handling enterprise complexity. Non-technical users could get answers without learning a new tool. The patterns I landed on spread to other products in the suite. What I took away: designing for AI means designing for uncertainty. Trust, transparency, and graceful degradation aren't nice-to-haves. They're the foundation.",
    metrics: [
      {
        category: "Efficiency",
        icon: "chart",
        value: "~40%",
        description:
          "fewer task steps for non-technical users after redesigning engineer-led features into intuitive UX.",
      },
      {
        category: "Adoption",
        icon: "box",
        value: "3+",
        description:
          "products in the C3 AI Suite adopted the design patterns from this work.",
      },
      {
        category: "Time to answer",
        icon: "calendar",
        value: "Minutes, not hours",
        description:
          "non-technical users get answers from the AI in minutes instead of waiting for manual reports or someone else to run the query.",
      },
      {
        category: "Transparency",
        icon: "check",
        value: "Visible",
        description:
          "reasoning and data sources in-context, so users could verify outputs instead of trusting blindly.",
      },
    ],
  },
};

export default function C3GenAICaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
