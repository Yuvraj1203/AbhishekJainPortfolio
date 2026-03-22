import React from "react";
import ProjectCard from "./cards/ProjectCard";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const workData = [
  {
    imgUrl: "/assets/blogzine.gif",
    projectTitle: "Blogzine - Content Platform",
    projectDuration: "Jul 2023 - Mar 2024",
    aboutProject:
      "Modern content management platform with dynamic UI animations and responsive design. Used AI tools for rapid prototyping.",
    webUrl: "https://blogzine.com",
    techTags: ["Next.js", "Tailwind", "Figma", "Midjourney", "Framer Motion"],
  },
  {
    imgUrl: "/assets/gradding.gif",
    projectTitle: "Gradding - EdTech LMS",
    projectDuration: "Jan 2023 - Jun 2023",
    aboutProject:
      "Interactive learning management system dashboard with motion graphics and user-centric design.",
    webUrl: "https://gradding.com",
    techTags: ["React", "Adobe XD", "After Effects", "Photoshop", "TypeScript"],
  },
  {
    imgUrl: "/assets/mySip.gif",
    projectTitle: "MySIP - Finance Dashboard",
    projectDuration: "Apr 2024 - Present",
    aboutProject:
      "Personal finance tracker with sleek UI, charts, and AI-powered insights using DALL-E for custom illustrations.",
    webUrl: "https://mysip.app",
    techTags: ["Next.js", "Tailwind", "DALL-E", "Stable Diffusion", "Chart.js"],
  },
  {
    imgUrl: "/company/areanavfx.png",
    projectTitle: "AreaNavFX - VFX Branding",
    projectDuration: "Feb 2024 - Mar 2024",
    aboutProject:
      "Complete brand identity including logo, website UI, and promotional motion graphics.",
    webUrl: "https://areanavfx.com",
    techTags: [
      "Illustrator",
      "Premiere Pro",
      "RunwayML",
      "Photoshop",
      "Webflow",
    ],
  },
  {
    imgUrl: "/company/econnect.png",
    projectTitle: "EConnect - Business Portal",
    projectDuration: "Nov 2023 - Jan 2024",
    aboutProject:
      "Enterprise portal redesign with modern UI/UX and ChatGPT-assisted content generation.",
    webUrl: "https://econnect.io",
    techTags: ["Figma", "ChatGPT", "Next.js", "Tailwind", "Claude"],
  },
  {
    imgUrl: "/assets/gradding.png",
    projectTitle: "EliteInfo - Corporate Site",
    projectDuration: "Sep 2023 - Oct 2023",
    aboutProject:
      "Professional corporate website with custom illustrations and smooth animations.",
    webUrl: "https://eliteinfo.com",
    techTags: [
      "Illustrator",
      "After Effects",
      "GSAP",
      "WordPress",
      "Procreate",
    ],
  },
  {
    imgUrl: "/company/matrixweb.png",
    projectTitle: "MatrixWeb - Web Agency",
    projectDuration: "May 2023 - Aug 2023",
    aboutProject:
      "Multi-page agency site with portfolio showcase and generative AI backgrounds.",
    webUrl: "https://matrixweb.com",
    techTags: ["Stable Diffusion", "Photoshop", "Webflow", "Midjourney"],
  },
  {
    imgUrl: "/company/kardhar.png",
    projectTitle: "Kardhar - Ecommerce Branding",
    projectDuration: "Mar 2024 - Apr 2024",
    aboutProject:
      "Full e-commerce brand kit including packaging, web UI, and product visuals generated with AI.",
    webUrl: "https://kardhar.com",
    techTags: ["Illustrator", "DALL-E", "Lightroom", "Figma", "Canva"],
  },
  {
    imgUrl: "/company/vivosol.png",
    projectTitle: "VivoSol - Tech Startup",
    projectDuration: "Dec 2023 - Feb 2024",
    aboutProject:
      "Startup landing page with futuristic design and video backgrounds created in Premiere.",
    webUrl: "https://vivosol.ai",
    techTags: ["Premiere Pro", "After Effects", "Gemini AI", "Next.js"],
  },
];

const ProjectSection = () => {
  return (
    <div className="my-16 lg:container overflow-auto" id="project">
      <h2 className="pl-[14px] lg:pl-0 text-[32px] mb-5 sm:mb-0 md:text-[48px] font-semibold text-center text-white">
        Check out my latest work
      </h2>
      <p className="pl-[14px] lg:pl-0 text-lg text-[#fff] mt-2 mb-5 sm:mb-10 hidden sm:block text-center">
        I’ve worked on a wide range of projects, from simple designs to complex
        visual systems. Here are a few of my favorites.
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
