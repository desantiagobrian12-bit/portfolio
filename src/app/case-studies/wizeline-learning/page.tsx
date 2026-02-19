import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type {
  CaseStudyData,
  CaseStudyFeature,
} from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Wizeline Learning Experience Platform | Brian De Santiago",
  description:
    "How I rethought a learning platform so people actually finished. Narrative case study on structure, motivation, and listening.",
};

const basePath = "/images/case-studies/wizeline";

// Narrative sections: insight-driven, story tone. Not process phases.
const narrativeSections: CaseStudyFeature[] = [
  {
    title: "The real problem wasn't the UI",
    description:
      "I went in assuming we'd tidy up the experience and make it clearer. What came out of research was different. People weren't dropping off because they didn't care. They were dropping off because the content felt overwhelming and there was no visible progress. Talking to LXD experts and potential learners made that obvious. So the design problem shifted: from \"improve the shell\" to \"restructure how people move through this and see that they're getting somewhere.\"",
    image: `${basePath}/Learning-experience.png`,
  },
  {
    title: "Betting on small steps",
    description:
      "That's why we went with microlearning. Not as a buzzword but because it matched what we heard. People wanted to finish something in a coffee break and feel they'd moved. So we broke content into short modules (5–10 min) with clear progress. The trade-off was more pieces to manage and a risk of feeling fragmented. We leaned on clear learning paths so it still felt like one journey. The big bet was on structure, not just UI.",
    image: `${basePath}/ideate-1.png`,
  },
  {
    title: "Motivation without the game",
    description:
      "Getting people to start was one problem. Getting them to come back and finish was another. We added progress indicators, badges, and streaks. We deliberately skipped leaderboards. In a work context, competition can twist the incentive. What we wanted was \"you're making progress\" without \"you're being ranked.\" Testing bore that out. People responded to their own progress; the NPS we got (9/10) reflected that.",
    image: `${basePath}/Prototype-3.png`,
  },
  {
    title: "One list for everyone meant for no one",
    description:
      "The old platform was a single list. A new engineer and a senior PM saw the same homepage. So we redesigned around personas and learning paths. The idea was simple: \"Here's your path, here's where you are, here's what's next.\" That made the IA harder to build and maintain, but the payoff was that the product felt built for the person in front of it.",
    images: [
      { src: `${basePath}/prototype-1.png`, alt: "Learning platform prototype" },
      { src: `${basePath}/prototype-2.png`, alt: "Module and progress UI" },
    ],
  },
  {
    title: "What testing proved",
    description:
      "We ran usability testing with 15 users before release. NPS 9. Their feedback pushed specific changes. More importantly, it confirmed that the structure and the motivation layer were doing the work. The takeaway for me: the biggest leverage wasn't a flashy UI. It was how we structured the experience and how we listened.",
  },
];

const caseStudyData: CaseStudyData = {
  layoutVariant: "flow",
  heroOverviewCompact: true,
  heroNoTopPadding: true,
  heroDottedOverview: true,
  heroLayout: "stacked",
  overview: {
    company: "Wizeline",
    role: "UX Designer",
    timeline: "Feb 2024 – Jun 2024",
    team: "Cross-functional team",
    platform: "Web application (Wizeline Academy)",
    myContribution: "UX design\nResearch\nIA\nEnd-to-end design",
  },
  tags: ["Learning", "Accessibility", "Information Architecture"],
  title: "Learning Experience Platform",
  subtitle:
    "People were starting courses. Almost nobody was finishing them.",
  heroImageLabel: "Wizeline Academy learning platform",
  heroImage: `${basePath}/cover-wizeline.png?v=3`,
  features: narrativeSections,
  featuresSectionLabel: "",
  featuresSectionTitle: "How I thought through it",
  featuresSectionDescription: "",
  product:
    "Wizeline Academy was the company's internal learning platform. I came in to help redesign it. The ask wasn't \"make it prettier.\" It was to turn a scattered set of courses into something people actually finished and came back to. That meant rethinking how content was structured, how progress showed up, and who the experience was for.",
  coreProblem: {
    headline:
      "People weren't finishing. The platform wasn't built around how people learn.",
    description:
      "When I looked at the data and talked to learners, the same pattern showed up. Courses were long and dense. There was no sense of \"I'm almost there.\" No paths tailored to role or goal. So the real question wasn't how to polish the UI. It was how to design something that matched how people learn and gave them a reason to come back.",
  },
  coreImpact: {
    headline: "We shipped a learning experience that people could follow and finish.",
    description:
      "Microlearning, selective gamification, and persona-driven paths replaced the flat course list. We tested with 15 users and landed at NPS 9. The platform became something the team could evolve instead of a pile of courses. What I took away: user feedback at every step wasn't optional. And the real design problem was structure, not pixels.",
    metrics: [
      {
        category: "User testing",
        icon: "check",
        value: "9/10",
        description: "NPS from usability testing with 15 users.",
      },
      {
        category: "Users tested",
        icon: "user",
        value: "15",
        description: "users in usability testing before release.",
      },
      {
        category: "Pillars",
        icon: "box",
        value: "3",
        description: "microlearning, selective gamification, persona-driven IA.",
      },
    ],
  },
  designDecisions: [],
};

export default function WizelineLearningCaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
