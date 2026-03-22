"use client";
import BlurIn from "@/components/magicui/blur-in";
import DotPattern from "@/components/magicui/dot-pattern";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
const Skills = [
  {
    skillImg: "/skills/adbobe_xd.svg",
    className:
      "z-10 animate-floatleft absolute top-[5%] left-[45%] drop-shadow-md",
  },
  {
    skillImg: "/skills/adobe_cc.svg",
    className:
      "z-10 animate-floatright absolute top-[30%] left-[20%] xl:left-[25%] drop-shadow-md",
  },
  {
    skillImg: "/skills/aftereffects.png",
    className:
      "z-10 animate-floatleft absolute top-[8%] left-[10%] drop-shadow-md",
  },
  {
    skillImg: "/skills/illustrator.png",
    className:
      "z-10 animate-floatleft absolute top-[50%] left-[12%] drop-shadow-md",
  },
  {
    skillImg: "/skills/indesign.png",
    className:
      "z-10 animate-floatleft absolute top-[5%] right-[10%] drop-shadow-md",
  },
  {
    skillImg: "/skills/lightroom.png",
    className:
      "z-10 animate-floatright absolute top-[40%] xl:top-[35%] right-[15%] xl:right-[22%] drop-shadow-md",
  },
  {
    skillImg: "/skills/photoshop.svg",
    className:
      "z-10 animate-floatleft absolute bottom-[10%] xl:bottom-[20%] left-[25%] xl:left-[30%] drop-shadow-md",
  },
  {
    skillImg: "/icons/bootstrap.png",
    className:
      "z-10 animate-floatleft absolute bottom-[10%] xl:bottom-[20%] right-[15%] xl:right-[25%] drop-shadow-md",
  },
  {
    skillImg: "/icons/figma.png",
    className:
      "z-10 animate-floatleft absolute top-[55%] right-[2%] xl:right-[5%] drop-shadow-md",
  },
  {
    skillImg: "/skills/premiere.png",
    className:
      "z-10 animate-floatright absolute bottom-0 xl:bottom-[5%] right-[45%] drop-shadow-md",
  },
  // AI Tools (add corresponding icons to public/skills/)
  {
    skillImg: "/icons/chatgpt.png",
    className:
      "z-10 animate-floatleft absolute top-[20%] left-[5%] drop-shadow-md",
  },
  {
    skillImg: "/icons/midjourney.png",
    className:
      "z-10 animate-floatright absolute top-[65%] left-[35%] drop-shadow-md",
  },
  {
    skillImg: "/icons/dalle.png",
    className:
      "z-10 animate-floatleft absolute top-[75%] right-[10%] drop-shadow-md",
  },
  {
    skillImg: "/icons/copilot.png",
    className:
      "z-10 animate-floatright absolute bottom-[15%] left-[40%] drop-shadow-md",
  },
  {
    skillImg: "/icons/claude.png",
    className:
      "z-10 animate-floatleft absolute top-[40%] right-[30%] drop-shadow-md",
  },
];

const SkillSection = () => {
  return (
    <div className="relative  lg:h-[80vh] w-full  mb-16">
      <div className="h-full">
        <div className="flex items-center justify-center w-full lg:w-[40%] m-auto h-full">
          <BlurIn
            word="Expert in crafting exceptional visual experiences. Proven ability to design intricate user journeys."
            className="text-base font-medium text-white dark:text-white mt-10 sm:mt-20 mb-10 sm:my-20"
          />
          {/* <TextRevealByWord text="Crafted and steward a vast library of interfaces, demonstrating expertise in designing and managing intricate user flows." /> */}
        </div>
        <div className="hidden lg:block">
          {Skills.map((skill) => (
            <Image
              src={skill.skillImg}
              width={85}
              height={85}
              alt="icons"
              className={skill.className}
            />
          ))}
        </div>
      </div>
      <DotPattern
        width={15}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      <div className="relative sm:hidden flex h-[90px] w-full flex-col items-center justify-center overflow-hidden   md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {Skills.map((Skill) => (
            <Image
              src={Skill.skillImg}
              width={65}
              height={65}
              alt={Skill.skillImg}
              key={Skill.skillImg}
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default SkillSection;
