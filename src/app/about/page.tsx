import ContactStrip from "@/ui/common/ContactStrip";
import FloatingContact from "@/ui/common/FloatingContact";
import Experience from "@/ui/Experience";
import HeroSection from "@/ui/HeroSection";
import SkillSection from "@/ui/SkillSection";
import React from "react";

const About = () => {
  return (
    <main className="max-h-full w-full relative bg-gradient-to-r from-[#000] to-[#2196F352] bg-[#12191b]">
      <HeroSection />
      <Experience />
      <SkillSection />
      <ContactStrip />
      <FloatingContact />
    </main>
  );
};

export default About;
