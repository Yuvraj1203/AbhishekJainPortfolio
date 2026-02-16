import ContactCard from "@/ui/ContactCard";
import HeroSection from "@/ui/HeroSection";
import Footer from "@/ui/layout/Footer";
import React from "react";

const page = () => {
  return (
    <main className="max-h-full pb-10 w-full relative bg-gradient-to-r from-[#000] to-[#2196F352] bg-[#12191b]">
      <HeroSection />
      <Footer />
      <ContactCard />
    </main>
  );
};

export default page;
