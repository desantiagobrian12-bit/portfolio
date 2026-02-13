import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type {
  CaseStudyData,
  CaseStudyFeature,
} from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Wizeline Learning Experience Platform | Brian De Santiago",
  description:
    "Case study on redesigning a learning platform with microlearning, gamification, and persona-driven IA.",
};

const basePath = "/images/case-studies/wizeline";

const designProcessSteps: CaseStudyFeature[] = [
  {
    title: "Empathize",
    description:
      "To understand learners' needs and challenges, we ran research through multiple channels. We interviewed LXD experts for industry insights and spoke with potential users to identify common learning obstacles.",
    descriptionAfterImage:
      "We analyzed user interactions and behavioral data to see how people engaged with the platform, where they got stuck, and what they needed. Those insights guided the design of an improved learning experience.",
    image: `${basePath}/empathize.png`,
  },
  {
    title: "Define",
    description:
      "We analyzed the research and defined clear problem statements. We studied LXD principles and turned key findings into user personas: diverse learners with different needs, expectations, and learning styles. We also identified major challenges: low engagement, weak assessments, and unclear content organization. This set the foundation for the rest of the design.",
    image: `${basePath}/define.png`,
  },
  {
    title: "Ideate",
    description:
      "We explored structure, motivation, and information architecture through moodboards and sketches.",
    images: [
      {
        src: `${basePath}/ideate-1.png`,
        alt: "Visual patterns moodboard",
        caption:
          "A moodboard of visual patterns highlighted key design elements from similar products and helped us analyze best practices and gain inspiration from industry leaders.",
      },
      {
        src: `${basePath}/ideate-2.png`,
        alt: "Solutions moodboard",
        caption:
          "A moodboard of solutions showcased common features in successful learning platforms and why they work.",
      },
      {
        src: `${basePath}/ideate-3.png`,
        alt: "Design sketches",
        caption:
          "Thanks to these moodboards, we sketched potential design solutions so our ideas stayed backed by research and aligned with user needs.",
      },
    ],
  },
  {
    title: "Prototype",
    description:
      "We turned ideation into tangible prototypes. Wireframes tested the new content structure and interactive elements: quizzes, discussion forums, and video-based learning modules. We built a functional prototype to demonstrate the experience and validate design decisions before full-scale development, so user feedback could shape the product.",
    images: [
      { src: `${basePath}/prototype-1.png`, alt: "Prototype screen 1" },
      { src: `${basePath}/prototype-2.png`, alt: "Prototype screen 2" },
      { src: `${basePath}/Prototype-3.png`, alt: "Prototype screen 3" },
    ],
  },
  {
    title: "Test",
    description:
      "We ran usability testing so users could try the prototype and share feedback on intuitiveness, accessibility, and effectiveness. We measured impact with an NPS test: 15 users gave us a score of 9. Their feedback pointed to concrete improvements, which we implemented before final release.",
    nps: { score: 9, max: 10, label: "NPS" },
  },
];

const caseStudyData: CaseStudyData = {
  overview: {
    company: "Wizeline",
    role: "UX Designer",
    timeline: "Feb 2024 – Jun 2024",
    team: "Cross-functional team",
    platform: "Web application (Wizeline Academy)",
  },
  tags: ["Learning", "Accessibility", "Information Architecture"],
  title: "Learning Experience Platform",
  subtitle:
    "Redesigning how people learn. From fragmented courses to structured, engaging experiences.",
  heroImageLabel: "Wizeline Academy learning platform",
  heroImage: `${basePath}/cover-wizeline.png`,
  features: designProcessSteps,
  featuresSectionLabel: "",
  featuresSectionTitle: "The design process",
  featuresSectionDescription: "",
  designDecisionsAsCards: true,
  designDecisionsSectionTitle: "The key decisions",
  product:
    "Wizeline Academy is the company's online learning platform. We redesigned it with LXD: clearer structure, microlearning, and paths that fit how people learn.",
  coreProblem: {
    headline:
      "People weren't finishing courses. The platform wasn't built around how people learn.",
    description:
      "We needed a learning experience, not just a course list. Content was fragmented, there were no paths or sense of progress.",
  },
  designDecisions: [
    {
      number: 1,
      title: "Microlearning over long-form modules",
      simpleFormat: true,
      whatWeDid:
        "We broke content into small, digestible modules (5–10 min each) with clear progress markers instead of long, dense modules.",
      whyItMattered:
        "Users dropped off partway through long modules. Research showed people learn better in small doses with a sense of progress.",
      tradeoff:
        "More modules to manage and a risk of feeling fragmented. We invested in content structure and clear paths so it stayed coherent.",
      imageLabel: "",
    },
    {
      number: 2,
      title: "Gamification as motivation architecture",
      simpleFormat: true,
      whatWeDid:
        "We added progress indicators, achievement badges, and streak tracking. No leaderboards or competition, to keep it professional.",
      whyItMattered:
        "Getting people to start was one thing. Getting them to come back and finish required a motivation system beyond willpower.",
      tradeoff:
        "Without leaderboards we gave up some viral pull. Users responded well to personal progress; NPS 9/10 confirmed the approach.",
      imageLabel: "",
    },
    {
      number: 3,
      title: "Persona-driven information architecture",
      simpleFormat: true,
      whatWeDid:
        "We redesigned navigation around learning paths and personas. Different roles and goals got tailored entry points and content hierarchy.",
      whyItMattered:
        "A flat course list worked for nobody. A new engineer and a senior PM saw the same homepage. We made the platform feel built for each user.",
      tradeoff:
        "Personalized IA is harder to build and maintain. Adding a course means placing it in multiple paths. The payoff was relevance.",
      imageLabel: "",
    },
  ],
  coreImpact: {
    headline: "NPS 9/10 from usability testing.",
    description:
      "We delivered microlearning, selective gamification, and persona-driven IA. Tested with 15 users. The platform became a scalable learning framework instead of a fragmented course list.",
  },
};

export default function WizelineLearningCaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
