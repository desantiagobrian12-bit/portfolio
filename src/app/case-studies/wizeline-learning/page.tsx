import type { Metadata } from "next";
import CaseStudyLayout from "@/components/sections/CaseStudyLayout";
import type { CaseStudyData } from "@/components/sections/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Wizeline Learning Experience Platform — Brian De Santiago",
  description:
    "Case study on redesigning a learning platform with microlearning, gamification, and persona-driven IA.",
};

const caseStudyData: CaseStudyData = {
  overview: {
    company: "Wizeline",
    role: "UX Designer",
    timeline: "Aug 2023 – Jun 2024",
    team: "Cross-functional team",
    platform: "Web application (Wizeline Academy)",
  },
  tags: ["Learning", "Accessibility", "Information Architecture"],
  title: "Learning Experience Platform",
  subtitle:
    "Redesigning how people learn. From fragmented courses to structured, engaging experiences.",
  heroImageLabel: "Learning platform concept visual",
  product:
    "Wizeline Academy was the company's online learning platform. The initiative was to redesign the experience using Learning Experience Design (LXD) methodologies, improving how courses were structured, consumed, and completed.",
  coreProblem: {
    headline:
      "People weren't finishing courses — and the platform wasn't designed around how people actually learn.",
    description:
      'The existing Wizeline Academy had fragmented and inconsistent course content, no structured learning paths tailored to different roles or skill levels, and low engagement and completion rates. It was a collection of courses, not a learning experience. The fundamental question wasn\'t "how do we make the UI prettier?" It was "how do we design a platform that respects how people actually learn, and keeps them coming back?"',
  },
  designDecisions: [
    {
      number: 1,
      title: "Microlearning Over Long-Form Modules",
      question:
        "How should course content be structured to maximize retention and completion?",
      whyItMattered:
        "The existing courses followed a traditional format: long modules, dense content, linear progression. Behavioral data showed that users dropped off consistently partway through longer modules. People were starting courses but not finishing them.",
      options: [
        {
          label: "Improve existing long-form structure",
          description:
            "Better navigation, progress tracking, and bookmarking within long modules",
        },
        {
          label: "Microlearning modules",
          description:
            "Small, digestible modules of 5-10 minutes each with clear progress markers",
        },
        {
          label: "Adaptive paths",
          description:
            "Let users choose between quick summaries and deep dives",
        },
      ],
      chosen: "Option B",
      whyChosen:
        "Our user research, interviews with LXD experts and potential learners, consistently pointed to the same insight: people learn better in small doses with a sense of progress. This aligns with established LXD principles around spaced repetition and cognitive load. Breaking content into microlearning modules addressed the completion problem directly. Each module was a small win. Users could finish something in a coffee break and feel progress, rather than staring at a 2-hour module and feeling overwhelmed.",
      tradeoff:
        "Microlearning means more modules to manage, more transitions between content, and a risk of feeling fragmented if the overall learning path isn't clear. The content itself needed restructuring, not just the UI. This was a bigger investment than just improving the existing shell, but it attacked the root cause (content structure) rather than the symptom (low completion).",
      imageLabel: "Microlearning module interface with progress indicators",
    },
    {
      number: 2,
      title: "Gamification as Motivation Architecture",
      question:
        "How do you keep people engaged across an entire learning journey, not just the first session?",
      whyItMattered:
        "Getting someone to start a course is one problem. Getting them to come back tomorrow, and the day after, and finish the whole path is a different one. The platform had no motivation system: no progress indicators, no achievements, no reason to return beyond willpower.",
      options: [
        {
          label: "Progress bars and percentages",
          description:
            "Simple, lightweight indicators with low risk",
        },
        {
          label: "Full gamification",
          description:
            "Streaks, achievements, leaderboards, and points",
        },
        {
          label: "Selective gamification",
          description:
            "Progress indicators and achievements without competitive elements",
        },
      ],
      chosen: "Option C",
      whyChosen:
        "Full gamification can feel patronizing in a professional context. Leaderboards and points work for Duolingo but can create the wrong incentives in workplace learning, with people gaming the system rather than actually learning. Minimal progress bars weren't enough to change behavior. Selective gamification (progress indicators, achievement badges for milestones, and streak tracking) created a sense of momentum without turning learning into a competition. It respected the professional context while still leveraging proven motivation patterns.",
      tradeoff:
        "Without leaderboards and competitive elements, there's less viral or social motivation. But in our testing, users responded positively to personal progress tracking. The NPS score of 9/10 confirmed the approach. Users felt motivated without feeling manipulated.",
      imageLabel:
        "Gamification elements showing progress, achievements, and streaks",
    },
    {
      number: 3,
      title: "Personas-Driven Information Architecture",
      question:
        "How do you organize content for a platform where users have fundamentally different roles, skill levels, and goals?",
      whyItMattered:
        "The existing platform used a flat structure: all courses listed the same way, no personalization, no paths. A new engineer and a senior PM would see the same homepage. This one-size-fits-all approach meant nobody felt the platform was built for them.",
      approach: {
        intro:
          "We created detailed user personas representing different learner profiles, varying in role, skill level, learning style, and goals. These personas directly informed the information architecture:",
        items: [
          "Navigation structures were redesigned around learning paths rather than course categories",
          "Content hierarchy was restructured so users could find relevant content within their context",
          "Tailored entry points guided different user types toward appropriate starting points",
        ],
        followUp:
          'Instead of "here are all the courses," the experience became "here\'s your path, here\'s where you are, here\'s what\'s next."',
      },
      tradeoff:
        "Personalized IA is more complex to build and maintain. Adding a new course means thinking about where it fits in multiple paths, not just adding it to a list. But the alternative, a flat list that works equally badly for everyone, was what we already had.",
      imageLabel: "Information architecture before and after redesign",
    },
  ],
  coreImpact: {
    headline: "NPS score of 9/10 from usability testing.",
    description:
      "Tested with 15 users. Delivered a structured learning framework with microlearning modules, selective gamification, and persona-driven IA that replaced the fragmented course collection. Created a scalable content framework that Wizeline Academy can evolve with.",
  },
  learnings: [
    {
      title:
        "User feedback at every stage isn't optional — it's the process.",
      description:
        "Continuously iterating based on real feedback ensured the final product addressed actual needs rather than assumptions. The NPS score validated this approach.",
    },
    {
      title: "Structure is the real design problem.",
      description:
        "The biggest impact didn't come from visual design. It came from restructuring how content was organized and consumed. IA and content strategy were the real levers for engagement.",
    },
    {
      title: "Design for scalability, not just the MVP.",
      description:
        "The framework we created allows Wizeline Academy to add new content and learning paths without the same fragmentation problems recurring. Thinking about the system, not just the current screens, made the solution durable.",
    },
  ],
  nextStudy: {
    company: "C3 AI",
    title: "GenAI Enterprise Experience",
    href: "/case-studies/c3-genai",
  },
};

export default function WizelineLearningCaseStudy() {
  return <CaseStudyLayout data={caseStudyData} />;
}
