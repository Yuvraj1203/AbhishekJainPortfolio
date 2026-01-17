import BoxReveal from "@/components/magicui/box-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/ui/common/Button";

const experiences = [
  {
    title: "Any Technology",
    location: "Udaipur city, India",
    date: "July 2024 - Present",
    description:
      "I build and optimize user interfaces for investment apps, dashboards, and educational platforms using Next.js and React.js. Collaborating with designers, I focus on enhancing user experience and driving conversions.",
    imageUrl: "/assets/cognus.png",
  },
  {
    title: "Any Technology",
    location: "Udaipur city, India",
    date: "Feb 2024 - Jun 2024",
    description:
      "Developed cross-browser extensions with JavaScript, HTML, and CSS. Built responsive websites with HTML5, CSS3, and React, reducing load times by 30% and increasing customer satisfaction by 20%. Integrated RESTful APIs. Improved project delivery by 15% through client meetings and secured three new projects with product demos.",
    imageUrl: "/assets/lb.png",
  },
];
const Experience = () => {
  return (
    <div className="project-section py-20">
      <div className="container ">
        <h2 className="text-[32px] sm:text-[40px] font-bold text-center">
          Code & Craft:{" "}
          <span className="bg-gradient-to-r from-[#0acf83] to-[#0dc27c] bg-clip-text text-transparent">
            The Front-End Journey
          </span>
        </h2>
        <p className="text-lg text-[#242529] mt-2 mb-5 hidden sm:block text-center">
          Passionate about clean code & user-centric design, honed my skills as
          a front-end developer. showcasing my journey and the expertise I bring
          to projects.
        </p>
        <div className=" flex flex-col-reverse lg:flex-row-reverse items-baseline justify-between m-auto p-2 xl:p-0">
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-[#2425295A]">
              {experiences.map((experience, index) => (
                <li className="relative ml-10 py-4" key={index}>
                  <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                    <span className="relative flex shrink-0 overflow-hidden rounded-lg  border size-12 m-auto">
                      <Image
                        className="w-full"
                        width={46}
                        height={46}
                        alt={experience.title}
                        src={experience.imageUrl}
                      />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <p className="text-xs text-[#242529] text-muted-foreground">
                      {experience.date}
                    </p>
                    <h2 className="font-semibold text-lg leading-none">
                      {experience.title}
                    </h2>
                    <p className="text-sm text-muted-foreground capitalize text-[#242529]">
                      {experience.location}
                    </p>
                    <span className="prose dark:prose-invert text-base text-muted-foreground text-[#242529]">
                      {experience.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-auto">
            <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
              <BoxReveal boxColor={"#0acf831a"} duration={0.5}>
                <p className="text-3xl font-semibold">
                  Front-End Developer<span className="text-[#747579]"></span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#0acf831a"} duration={0.5}>
                <h2 className="mt-[.5rem] text-lg text-[#242529]">
                  Code that isn't user-friendly fails to serve its purpose!{" "}
                  {/* <span className="text-[#5046e6] uppercase">purpose</span> */}
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#0acf831a"} duration={0.5}>
                <div className="mt-[1.5rem]">
                  <div className="my-2 flex items-center gap-2">
                    <Image
                      src="/icons/problemsolving.png"
                      width={24}
                      height={24}
                      alt="checkmark"
                    />
                    <p className="text-base text-[#242529] font-medium">
                      Problem-solving & Clean Code - My passion
                    </p>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <Image
                      src="/icons/champion.png"
                      width={24}
                      height={24}
                      alt="checkmark"
                    />
                    <p className="text-base text-[#242529] font-medium">
                      Inclusive Design Champion - Building for all
                    </p>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <Image
                      src="/icons/collboration.png"
                      width={24}
                      height={24}
                      alt="checkmark"
                    />
                    <p className="text-base text-[#242529] font-medium">
                      Design-to-Dev Bridge - Seamless collaboration
                    </p>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <Image
                      src="/icons/optimization.png"
                      width={24}
                      height={24}
                      alt="checkmark"
                    />
                    <p className="text-base text-[#242529] font-medium">
                      Performance Optimization - Fast and smooth experiences.
                    </p>
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#0acf831a"} duration={0.5} width="100%">
                <Link
                  href="https://github.com/Yuvraj1203"
                  className="w-3/4 text-center mt-[1.6rem] hidden transition-all lg:block rounded-md  text-black font-semibold text-lg"
                >
                  <Button btntext="Ready to Make a Difference?" />
                </Link>
              </BoxReveal>
            </div>
          </div>
        </div>
        <BoxReveal boxColor={"#0acf831a"} duration={0.5} width="100%">
          <Link
            href="https://github.com/Yuvraj1203"
            className="sm:hidden w-3/4 m-auto text-center mt-[1.6rem]  transition-all block rounded-md  text-black font-semibold text-lg"
          >
            <Button btntext="Ready to Make a Difference?" />
          </Link>
        </BoxReveal>
      </div>
    </div>
  );
};

export default Experience;
