import BoxReveal from "@/components/magicui/box-reveal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/ui/common/Button";

const experiences = [
  {
    title: "VIVA Security Solutions",
    location: "Udaipur city, India",
    date: "1 month",
    description: "Android Develop Project Smart Attendence System",
    imageUrl: "/company/vivosol.png",
  },
  {
    title: "PHP Poets",
    location: "Udaipur city, India",
    date: "1 month",
    description: "Data Entry, Software Testing & PHP Core & Advance Projects",
    imageUrl: "/company/phppoets.png",
  },
  {
    title: "Kardhar Infotech Pvt. Ltd",
    location: "Udaipur city, India",
    date: "1 year",
    description: "Digital Marketing, Google Adwords & Graphic Designer",
    imageUrl: "/company/kardhar.png",
    href: "https://drive.google.com/drive/folders/1k3QHokbcgh6kfs_V8zGTnG5Pi7VTCnez?usp=drive_link",
  },
  {
    title: "Yug Technology Pvt. Ltd",
    location: "Udaipur city, India",
    date: "3 months",
    description: "Junior Graphic Designer",
    imageUrl: "/company/yugtech.png",
  },
  {
    title: "Matrix Web Infotech Pvt. Ltd",
    location: "Udaipur city, India",
    date: "1 year",
    description: "Junior Graphic Designer",
    imageUrl: "/company/matrixweb.png",
    href: "https://drive.google.com/drive/folders/1M9c-C_uuRm7hcxXUZBpcC10GaTcXyjJq?usp=drive_link",
  },
  {
    title: "E-Connect Pvt. Ltd",
    location: "Udaipur city, India",
    date: "3 months",
    description: "Executive Graphic Designer",
    imageUrl: "/company/econnect.png",
  },
  {
    title: "Zenver Technologies",
    location: "Udaipur city, India",
    date: "6 months",
    description: "Sr.Graphic Designer Executive",
    imageUrl: "/company/zenvertech.png",
    href: "https://drive.google.com/drive/folders/1sKi6nw9Y1g-w3FSgOnNlcTAwA3L0KMF_?usp=drive_link",
  },
  {
    title: "Elite Informatics Pvt. Ltd & Ayush Remedies",
    location: "Udaipur city, India",
    date: "3 months",
    description: "Sr.Graphic Designer Executive",
    imageUrl: "/company/eliteinfo.jpeg",
    href: "https://drive.google.com/drive/folders/1ufyABAMcRCRSgbkJUnsO7z3Env_FPCES?usp=drive_link",
  },
  {
    title: "Electroride By Goenka Green",
    location: "Varanasi, Uttar Pradesh, India",
    date: "3 years",
    description: "Sr. Creative Graphic Designer Executive",
    imageUrl: "/company/electroride.webp",
    href: "https://drive.google.com/drive/folders/1rXRtn0LC5MskwLtgojkq1WSqy4bZZBN2?usp=drive_link",
  },
  {
    title: "Rajendra Toyota Group",
    location: "Udaipur city, India",
    date: "3 years",
    description: "Sr.Graphic Creative Head",
    imageUrl: "/company/toyato.png",
    href: "https://drive.google.com/drive/folders/1fl7rH7Bu2_SKHZHVfOP3VKxePmcsbWPB?usp=drive_link",
  },
  {
    title: "Freelancer Designer",
    location: "Udaipur city, India",
    date: "2 years",
    description: "Various Client Projects",
    imageUrl: "/assets/behance.png",
  },
  {
    title: "Creative Director",
    location: "Udaipur city, India",
    date: "Ongoing",
    description: "Personal Projects",
    imageUrl: "/logo.png",
  },
];
const ExperiencePage = () => {
  return (
    <div className="project-section py-20">
      <div className="container ">
        <h2 className="text-[32px] sm:text-[40px] font-bold text-center">
          Visuals & Craft:{" "}
          <span className="bg-gradient-to-r from-[#64B5F6] to-[#42A5F5] bg-clip-text text-transparent">
            A Design Journey
          </span>
        </h2>
        <p className="text-lg text-[#242529] mt-2 mb-5 hidden sm:block text-center">
          Passionate about clean visuals & user-centric design, honed my skills
          as a graphic designer, showcasing my journey and the creative
          expertise I bring to projects.
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
                        width={100}
                        height={100}
                        alt={experience.title}
                        src={experience.imageUrl}
                      />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <p className="text-xs text-[#242529] text-muted-foreground">
                      {experience.date}
                    </p>
                    {experience.href ? (
                      <a
                        href={experience.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="font-semibold text-lg leading-none">
                          {experience.title}
                        </h2>
                      </a>
                    ) : (
                      <h2 className="font-semibold text-lg leading-none">
                        {experience.title}
                      </h2>
                    )}
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
              <BoxReveal boxColor={"#64B5F61a"} duration={0.5}>
                <p className="text-3xl font-semibold">
                  Graphic Designer<span className="text-[#747579]"></span>
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#64B5F61a"} duration={0.5}>
                <h2 className="mt-[.5rem] text-lg text-[#242529]">
                  Design that isn’t user-friendly fails to serve its purpose!{" "}
                  {/* <span className="text-[#5046e6] uppercase">purpose</span> */}
                </h2>
              </BoxReveal>

              <BoxReveal boxColor={"#64B5F61a"} duration={0.5}>
                <div className="mt-[1.5rem]">
                  <div className="my-2 flex items-center gap-2">
                    <Image
                      src="/icons/problemsolving.png"
                      width={24}
                      height={24}
                      alt="checkmark"
                    />
                    <p className="text-base text-[#242529] font-medium">
                      Problem-solving & Clean Design — My Passion
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
                      Inclusive Design Champion — Designing for All
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
                      Design-to-Brand Bridge — Seamless Collaboration
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
                      Visual Optimization — Clean and Smooth Experiences.
                    </p>
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#64B5F61a"} duration={0.5} width="100%">
                <Link
                  href="https://www.behance.net/abhishekjain3009"
                  className="w-3/4 text-center mt-[1.6rem] hidden transition-all lg:block rounded-md  text-black font-semibold text-lg"
                >
                  <Button btntext="Ready to Make a Difference?" />
                </Link>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
