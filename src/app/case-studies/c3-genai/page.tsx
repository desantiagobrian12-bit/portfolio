import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type { CaseStudyData } from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "C3 AI GenAI Enterprise Experience — Brian De Santiago",
  description:
    "Case study on designing a complex enterprise AI experience that feels simple for everyone.",
};

const caseStudyData: CaseStudyData = {
  overview: {
    company: "C3 AI",
    role: "Associate Product Designer",
    timeline: "Aug 2025 – Feb 2026",
    team: "Collaborative with PMs, engineers, and design support",
    platform: "Enterprise web application (C3 AI Suite)",
    confidentiality: "All visuals are abstracted recreations due to confidentiality.",
  },
  tags: ["GenAI", "Enterprise", "AI UX"],
  title: "GenAI Enterprise Experience",
  subtitle:
    "Making complex, data-heavy AI experiences feel simple for everyone.",
  heroImageLabel: "Abstracted GenAI concept visual",
  product:
    "C3 AI GenAI was an enterprise-grade generative AI product. Think ChatGPT, but grounded in an organization's internal documents, data, and business context. Users could query the system in natural language to analyze information, generate reports, draft content, create workflows, and support decision-making. It served a mix of technical and non-technical users, from business analysts to data scientists to executives.",
  coreProblem: {
    headline:
      "Making a complex, data-heavy AI experience feel simple — for everyone.",
    description:
      "Enterprise AI isn't like consumer AI. When a business analyst asks a question, the answer might be a paragraph, a data table with 50 rows, a chart, or all three. When an executive asks, they want a summary they can trust. When a data scientist asks, they want to see the reasoning. The interface had to handle all of this: different response types, different user expectations, different levels of trust. Without feeling overwhelming. And some of these features already existed as engineer-built versions that were functional but not intuitive.",
  },
  designDecisions: [
    {
      number: 1,
      title: "Conversational UI with Embedded Rich Content",
      question:
        "How should the AI display answers that range from simple text to complex data tables and charts?",
      whyItMattered:
        "Users needed to interact with an AI that could return anything from a short paragraph to a 50-row data grid to a chart. The display format had to feel natural regardless of response type.",
      options: [
        {
          label: "Chat-bubble with rich content inline",
          description:
            "Keep the familiar conversational pattern but embed tables, charts, and images directly within the thread",
        },
        {
          label: "Split-pane layout",
          description:
            "Conversation on the left, data and results on the right",
        },
        {
          label: "Card-based responses",
          description:
            "Each AI response as a standalone card with its own layout",
        },
      ],
      chosen: "Option A",
      whyChosen:
        "The conversational pattern was already the mental model users had from ChatGPT and Copilot. Fighting that familiarity would create unnecessary friction. The real challenge wasn't the layout. It was making rich data feel natural inside a chat thread.",
      tradeoff:
        "Chat-bubble UI works great for text. But when you embed a 50-row data grid inside a chat bubble, it can feel cramped or break the conversational rhythm. I had to design careful transitions between text responses and rich content, making tables and charts feel like a natural part of the conversation rather than a foreign element jammed into a chat window.",
      impact:
        "Non-technical users could interact with the AI the way they'd interact with ChatGPT, with no learning curve. But they'd get enterprise-grade responses with real data, not just text.",
      imageLabel: "Conversational UI with embedded data table and chart",
    },
    {
      number: 2,
      title: "Collapsible Reasoning — Trust Without Clutter",
      question:
        "How do you build trust in AI answers when business decisions depend on them?",
      whyItMattered:
        "In consumer AI, if ChatGPT gives you a wrong answer about a recipe, nothing happens. In enterprise AI, if the system gives a wrong answer about revenue forecasts or supply chain data, real money is at stake. Users needed to trust the AI's answers. And the only way to build that trust is transparency: showing how the AI reached its conclusion.",
      options: [
        {
          label: "Always show reasoning",
          description:
            "Display sources and logic alongside every answer",
        },
        {
          label: "Collapsible reasoning panel",
          description:
            "Clean answer by default, expandable section for verification",
        },
        {
          label: "Separate audit view",
          description: "Reasoning lives on a different page or tab",
        },
      ],
      chosen: "Option B",
      whyChosen:
        "Option A created noise. Most of the time, users just want the answer. Forcing them to see reasoning every time would slow them down and clutter the interface. Option C was too disconnected. Users needed to verify in context, not navigate away. The collapsible panel gave users the clean, fast experience by default, with the depth available one click away. It respected both the business analyst who just wants the number and the data scientist who wants to see every source.",
      tradeoff:
        "Hiding reasoning by default means some users might never check it, potentially over-trusting the AI. But our research showed that the users who cared about reasoning would always expand it, and forcing it on everyone else would just create clutter that people learned to ignore (which is worse for trust than hiding it).",
      imageLabel: "Reasoning panel in collapsed and expanded states",
    },
    {
      number: 3,
      title: "Pre-Query Filters — Scoping Before Asking",
      question:
        "How should users tell the AI what context to use before they ask their question?",
      whyItMattered:
        'Unlike consumer ChatGPT where you just type a question, enterprise users often need to scope their query. "Show me revenue data, but only for Q3, only for the LATAM region, only from this dataset." Without proper scoping, the AI would either guess (unreliable) or ask clarifying questions (slow).',
      options: [
        {
          label: "Natural language parsing",
          description:
            "Users type everything in the prompt, the AI parses context",
        },
        {
          label: "Structured filters before the prompt",
          description:
            "Users select dataset, time range, and business unit, then ask their question",
        },
        {
          label: "Hybrid approach",
          description:
            "Basic natural language with optional filter chips",
        },
      ],
      chosen: "Option B",
      whyChosen:
        'Option A sounds elegant but fails in practice. Enterprise data is structured. There are specific datasets, specific time ranges, specific business units. Relying on natural language parsing introduces ambiguity ("Q3" of which year? Which revenue dataset?). Structured filters eliminate ambiguity before the query even runs, leading to more accurate and relevant responses.',
      tradeoff:
        "Structured filters add a step before asking. It's more friction than just typing. But in enterprise contexts, that friction prevents wrong answers, and wrong answers cost much more time than an extra click. Users preferred the confidence of knowing exactly what data the AI was pulling from.",
      imageLabel:
        "Pre-query filter interface with dataset and time range selectors",
    },
  ],
  coreImpact: {
    headline: "Reduced average task steps by ~40% for non-technical users.",
    description:
      "By redesigning engineer-led features into intuitive, scalable UX. Design patterns I contributed were adopted across 3+ products within the C3 AI Suite.",
  },
  learnings: [
    {
      title: "Designing for AI means designing for uncertainty.",
      description:
        "The model might give a perfect answer or a vague one, and the interface needs to handle both. Trust, transparency, and graceful degradation aren't nice-to-haves. They're the foundation.",
    },
    {
      title: "Enterprise complexity is a feature, not a bug.",
      description:
        "The constraints (stakeholder alignment, regulatory requirements, multiple user types, existing systems) are what make the design decisions interesting. Learning to move effectively within those constraints while still pushing for better UX was the biggest growth area for me.",
    },
    {
      title: "Speed over perfection.",
      description:
        "The pace at C3 AI pushed me to make decisions quickly, validate through feedback, and iterate. Some features started as rough engineer-built versions. My job was to make them intuitive and scalable without slowing down the team.",
    },
  ],
  nextStudy: {
    company: "Konfront",
    title: "Healthcare Logistics Platform",
    href: "/case-studies/konfront-healthcare",
  },
};

export default function C3GenAICaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
