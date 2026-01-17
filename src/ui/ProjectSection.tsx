import React from "react";
import ProjectCard from "./cards/ProjectCard";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const workData = [
  {
    imgUrl: "/assets/blogzine.gif",
    projectTitle: "Project Title: Platform for Anything",
    projectDuration: "Jul 2023 - Present",
    aboutProject:
      "Project simplifies the your journey. Explore programs, prepare for something, and secure everything - all on one platform.",
    webUrl: "/#javascript;",
  },
  {
    imgUrl: "/assets/blogzine.gif",
    projectTitle: "Project Title: Platform for Anything",
    projectDuration: "Jul 2023 - Present",
    aboutProject:
      "Project simplifies the your journey. Explore programs, prepare for something, and secure everything - all on one platform.",
    webUrl: "/#javascript;",
  },
  {
    imgUrl: "/assets/blogzine.gif",
    projectTitle: "Project Title: Platform for Anything",
    projectDuration: "Jul 2023 - Present",
    aboutProject:
      "Project simplifies the your journey. Explore programs, prepare for something, and secure everything - all on one platform.",
    webUrl: "/#javascript;",
  },
];

const ProjectSection = () => {
  return (
    <div className="my-16 lg:container overflow-auto" id="project">
      <h2 className="pl-[14px] lg:pl-0 text-[32px] mb-5 sm:mb-0 md:text-[48px] font-semibold text-center text-white">
        Check out my latest work
      </h2>
      <p className="pl-[14px] lg:pl-0 text-lg text-[#fff] mt-2 mb-5 sm:mb-10 hidden sm:block text-center">
        I have worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div
        className=" w-full flex items-start justify-center  mx-auto gap-5 xl:gap-16 overflow-auto"
        style={{ display: "-webkit-box" }}
      >
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
        {workData.map((item, index) => (
          <div className="ml-[24px] lg:ml-0 w-[80%] sm:w-1/2 lg:w-[35%] xl:w-[30%] 2xl:w-[26%]">
            <ProjectCard
              imgUrl={item.imgUrl}
              projectTitle={item.projectTitle}
              projectDuration={item.projectDuration}
              aboutProject={item.aboutProject}
              webUrl={item.webUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
