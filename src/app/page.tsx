import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import WhatSetsApart from "@/components/sections/WhatSetsApart";
import HowIUseAI from "@/components/sections/HowIUseAI";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CaseStudies />
      <WhatSetsApart />
      <HowIUseAI />
      <AboutMe />
      <Contact />
    </main>
  );
}
