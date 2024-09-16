"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { useRouter } from "next/navigation";
import { ProjectDetail } from "@/interfaces";
import { GoArrowLeft } from "react-icons/go";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

interface Props {
  projectDetails: ProjectDetail;
}
export const Hero = (props: Props) => {
  const { projectDetails } = props;
  const router = useRouter();
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          onClick={() => router.back()}
          className="absolute top-5 left-5 z-10 flex border items-center space-x-3 border-purple p-2 rounded-md cursor-pointer"
        >
          <GoArrowLeft size={24} color="#CBACF9" />
          <span>Back</span>
        </div>
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words={projectDetails.heading}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {projectDetails.majorText}
          </p>
          <p className="mt-4 text-sm md:text-base lg:text-xl">
            <span className="text-sm md:text-lg lg:text-2xl underline">
              Technological Description
            </span>
            :- {projectDetails.technologicalDescription}
          </p>
          <div className="mt-20 w-full flex justify-between">
            <a
              href={projectDetails.githubLink}
              target="_blank"
              className="flex justify-center items-center border rounded-md p-2 cursor-pointer space-x-3"
            >
              <img src="/git.svg" alt="github icon" />
              <p>See Code</p>
            </a>
            <a
              href={projectDetails.siteUrl}
              target="_blank"
              className="flex justify-center items-center border rounded-md p-2 cursor-pointer"
            >
              <div className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </div>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
