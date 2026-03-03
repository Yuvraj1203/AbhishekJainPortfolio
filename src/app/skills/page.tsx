"use client";

import React, { useState } from "react";
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
  FiStar,
  FiCode,
  FiLayout,
  FiPenTool,
  FiCamera,
  FiVideo,
  FiGrid,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  graphicSkills,
  designCategories,
  GraphicSkill,
} from "@/data/graphicSkills";

// Category icons mapping
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "design":
      return <FiLayout className="text-xl" />;
    case "photo":
      return <FiCamera className="text-xl" />;
    case "video":
      return <FiVideo className="text-xl" />;
    case "motion":
      return <FiCode className="text-xl" />;
    case "uiux":
      return <FiPenTool className="text-xl" />;
    default:
      return <FiGrid className="text-xl" />;
  }
};

// Skill card component
const SkillCard = ({ skill }: { skill: GraphicSkill }) => {
  return (
    <div className="group relative bg-[#1a1a1a] rounded-xl p-4 border border-white/10 hover:border-[#42A5F5]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(66,165,245,0.2)]">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#42A5F5]/0 via-[#42A5F5]/5 to-[#42A5F5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-12 h-12 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.innerHTML = skill.name
                .substring(0, 2)
                .toUpperCase();
            }}
          />
        </div>

        {/* Name */}
        <h3 className="text-white font-semibold text-center text-sm mb-2 group-hover:text-[#42A5F5] transition-colors">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-[#87928f] text-xs text-center mb-3 line-clamp-2">
          {skill.description}
        </p>

        {/* Proficiency Bar */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[#87928f] text-xs">Proficiency</span>
            <span className="text-[#42A5F5] text-xs font-semibold">
              {skill.proficiency}%
            </span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#42A5F5] to-[#64B5F6] rounded-full transition-all duration-1000"
              style={{ width: `${skill.proficiency}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Category section component
const CategorySection = ({
  category,
  skills,
  isOpen,
  onToggle,
}: {
  category: string;
  skills: GraphicSkill[];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const categoryInfo = designCategories.find((c) => c.id === category);

  return (
    <div className="mb-6">
      {/* Category Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between bg-[#1a1a1a] rounded-xl p-4 border border-white/10 hover:border-[#42A5F5]/50 transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#42A5F5] to-[#64B5F6] flex items-center justify-center">
            <span className="text-xl">{categoryInfo?.icon || "🎨"}</span>
          </div>
          <div className="text-left">
            <h3 className="text-white font-semibold">
              {categoryInfo?.name || category}
            </h3>
            <p className="text-[#87928f] text-sm">{skills.length} tools</p>
          </div>
        </div>
        {isOpen ? (
          <FiChevronUp className="text-[#42A5F5]" />
        ) : (
          <FiChevronDown className="text-[#87928f]" />
        )}
      </button>

      {/* Skills Grid */}
      <div
        className={`grid gap-4 mt-4 transition-all duration-300 ${isOpen ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}
      >
        {isOpen &&
          skills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "cards">("cards");

  // Group skills by category
  const skillsByCategory = graphicSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, GraphicSkill[]>,
  );

  return (
    <main className="min-h-screen w-full pt-24 pb-10 relative bg-gradient-to-r from-[#000] to-[#2196F352] bg-[#12191b]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Graphic Design{" "}
            <span className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-[#87928f] text-lg font-semibold max-w-2xl mx-auto">
            Expert in crafting exceptional visual experiences with
            industry-leading tools and software
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-[#42A5F5] mb-1">
              {graphicSkills.length}
            </div>
            <div className="text-[#87928f] text-sm">Total Tools</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-[#42A5F5] mb-1">6+</div>
            <div className="text-[#87928f] text-sm">Years Experience</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-[#42A5F5] mb-1">500+</div>
            <div className="text-[#87928f] text-sm">Projects Done</div>
          </div>
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/10 text-center">
            <div className="text-3xl font-bold text-[#42A5F5] mb-1">100%</div>
            <div className="text-[#87928f] text-sm">Client Satisfaction</div>
          </div>
        </div>

        {/* Categories Accordion */}
        <div className="space-y-4">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <CategorySection
              key={category}
              category={category}
              skills={skills}
              isOpen={activeCategory === category}
              onToggle={() =>
                setActiveCategory(activeCategory === category ? null : category)
              }
            />
          ))}
        </div>

        {/* All Skills Grid (when nothing selected) */}
        {activeCategory === null && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              All Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {graphicSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <ShimmerButton
            className="px-8 py-4"
            borderRadius="10px"
            background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(33, 150, 243, 0.20), rgba(0, 0, 0, 0.00)), radial-gradient(42.95% 98.98% at 47.97% 100%, rgba(33, 150, 243, 0.50), rgba(0, 0, 0, 0.00)), #12191B"
          >
            <span className="text-white font-semibold">
              Let&apos;s Create Something Amazing Together!
            </span>
          </ShimmerButton>
        </div>
      </div>
    </main>
  );
};

export default SkillsPage;
