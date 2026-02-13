# Case Study: Wizeline — Learning Experience Platform

## Overview

| | |
|---|---|
| **Company** | Wizeline |
| **Role** | UX Designer |
| **Timeline** | Aug 2023 – Jun 2024 |
| **Team** | Cross-functional (design, LXD, product) |
| **Platform** | Web application (Wizeline Academy — internal learning platform) |

---

## Cover

Use this as the hero / first image for the case study:

![Wizeline Learning Platform — Case study cover](/images/case-studies/wizeline/cover-wizeline.png)

---

## The Product

Wizeline Academy was the company's online learning platform. The initiative was to redesign the experience using Learning Experience Design (LXD) methodologies — improving how courses were structured, consumed, and completed.

---

## The Core Problem

**People weren't finishing courses — and the platform wasn't designed around how people actually learn.**

The existing Wizeline Academy had fragmented and inconsistent course content, no structured learning paths tailored to different roles or skill levels, and low engagement and completion rates. It was a collection of courses, not a learning experience.

The fundamental question wasn't "how do we make the UI prettier?" — it was "how do we design a platform that respects how people actually learn, and keeps them coming back?"

![Empathize — user research and learner context](/images/case-studies/wizeline/empathize.png)

![Define — problem framing and scope](/images/case-studies/wizeline/define.png)

---

## Design Decision 1: Microlearning Over Long-Form Modules

### The question
How should course content be structured to maximize retention and completion?

### Why this problem mattered
The existing courses followed a traditional format — long modules, dense content, linear progression. Behavioral data showed that users dropped off consistently partway through longer modules. People were starting courses but not finishing them.

### The options I considered
- **Option A: Improve the existing long-form structure** — better navigation, progress tracking, bookmarking within long modules
- **Option B: Break everything into microlearning** — small, digestible modules (5-10 minutes each) with clear progress markers
- **Option C: Adaptive paths** — let users choose between quick summaries and deep dives

### Why I chose Option B
Our user research — interviews with LXD experts and potential learners — consistently pointed to the same insight: people learn better in small doses with a sense of progress. This aligns with established LXD principles around spaced repetition and cognitive load.

Breaking content into microlearning modules addressed the completion problem directly. Each module was a small win. Users could finish something in a coffee break and feel progress, rather than staring at a 2-hour module and feeling overwhelmed.

### The trade-off
Microlearning means more modules to manage, more transitions between content, and a risk of feeling fragmented if the overall learning path isn't clear. The content itself needed restructuring — not just the UI. This was a bigger investment than just improving the existing shell, but it attacked the root cause (content structure) rather than the symptom (low completion).

---

## Design Decision 2: Gamification as Motivation Architecture

### The question
How do you keep people engaged across an entire learning journey — not just the first session?

### Why this problem mattered
Getting someone to start a course is one problem. Getting them to come back tomorrow, and the day after, and finish the whole path is a different one. The platform had no motivation system — no progress indicators, no achievements, no reason to return beyond willpower.

### The options I considered
- **Option A: Progress bars and completion percentages** — simple, lightweight, low risk
- **Option B: Full gamification** — streaks, achievements, leaderboards, points
- **Option C: Selective gamification** — progress indicators and achievements, but no competitive elements like leaderboards

### Why I chose Option C
Full gamification (Option B) can feel patronizing in a professional context. Leaderboards and points work for Duolingo but can create the wrong incentives in workplace learning — people gaming the system rather than actually learning. Minimal progress bars (Option A) weren't enough to change behavior.

Selective gamification — progress indicators, achievement badges for milestones, and streak tracking — created a sense of momentum without turning learning into a competition. It respected the professional context while still leveraging proven motivation patterns.

### The trade-off
Without leaderboards and competitive elements, there's less viral/social motivation. But in our testing, users responded positively to personal progress tracking. The NPS score of 9/10 confirmed the approach — users felt motivated without feeling manipulated.

---

## Design Decision 3: Personas-Driven Information Architecture

### The question
How do you organize content for a platform where users have fundamentally different roles, skill levels, and goals?

### Why this problem mattered
The existing platform used a flat structure — all courses listed the same way, no personalization, no paths. A new engineer and a senior PM would see the same homepage. This one-size-fits-all approach meant nobody felt the platform was built for them.

### The design approach
We created detailed user personas representing different learner profiles — varying in role, skill level, learning style, and goals. These personas directly informed the information architecture:

- **Navigation structures** were redesigned around learning paths rather than course categories
- **Content hierarchy** was restructured so users could find relevant content within their context
- **Tailored entry points** guided different user types toward appropriate starting points

Instead of "here are all the courses," the experience became "here's your path, here's where you are, here's what's next."

![Ideate — learning paths and structure](/images/case-studies/wizeline/ideate-1.png)

![Ideate — content and IA exploration](/images/case-studies/wizeline/ideate-2.png)

![Ideate — module and flow concepts](/images/case-studies/wizeline/ideate-3.png)

### The trade-off
Personalized IA is more complex to build and maintain. Adding a new course means thinking about where it fits in multiple paths, not just adding it to a list. But the alternative — a flat list that works equally badly for everyone — was what we already had.

---

## The Core Impact

**NPS score of 9/10** from usability testing with 15 users. Delivered a structured learning framework with microlearning modules, selective gamification, and persona-driven IA that replaced the fragmented course collection. Created a scalable content framework that Wizeline Academy can evolve with.

![Prototype — learning platform UI](/images/case-studies/wizeline/prototype-1.png)

![Prototype — module and progress UI](/images/case-studies/wizeline/prototype-2.png)

![Prototype — full experience](/images/case-studies/wizeline/Prototype-3.png)

---

## What I Learned

**User feedback at every stage isn't optional — it's the process.** Continuously iterating based on real feedback ensured the final product addressed actual needs rather than assumptions. The NPS score validated this approach.

**Structure is the real design problem.** The biggest impact didn't come from visual design — it came from restructuring how content was organized and consumed. IA and content strategy were the real levers for engagement.

**Design for scalability, not just the MVP.** The framework we created allows Wizeline Academy to add new content and learning paths without the same fragmentation problems recurring. Thinking about the system, not just the current screens, made the solution durable.

---

## Assets

All assets live in `public/images/case-studies/wizeline/`. Reference in the app with path `/images/case-studies/wizeline/<filename>`.

| Asset | Filename | Path | Notes |
|-------|----------|------|-------|
| Hero / cover | `cover-wizeline.png` | `/images/case-studies/wizeline/cover-wizeline.png` | Case study cover |
| Alternate cover | `cover.png` | `/images/case-studies/wizeline/cover.png` | Optional |
| Empathize | `empathize.png` | `/images/case-studies/wizeline/empathize.png` | User research and learner context |
| Define | `define.png` | `/images/case-studies/wizeline/define.png` | Problem framing and scope |
| Ideate | `ideate-1.png`, `ideate-2.png`, `ideate-3.png` | `/images/case-studies/wizeline/ideate-1.png` etc. | Learning paths, IA, module concepts |
| Prototype | `prototype-1.png`, `prototype-2.png`, `Prototype-3.png` | `/images/case-studies/wizeline/prototype-1.png` etc. | Platform UI and flows (note: `Prototype-3.png` has capital P) |
