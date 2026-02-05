import HeroSection from "@/ui/HeroSection";
import Footer from "@/ui/layout/Footer";
import React from "react";

const page = () => {
  return (
    <main className="max-h-full w-full relative bg-gradient-to-r from-[#000] to-[#162A3A52] bg-[#12191b]">
      <HeroSection />
      <Footer />
    </main>
  );
};

export default page;
