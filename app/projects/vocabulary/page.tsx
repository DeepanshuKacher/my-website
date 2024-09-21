"use client";

import Footer from "@/components/Footer";
import { Hero } from "@/components/Project_Hero";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import type { UrlName } from "@/interfaces";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";

interface ProjectPageProps {
  params: { project: UrlName };
  searchParams: {};
}

const Page = (params: ProjectPageProps) => {
  const router = useRouter();
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* <div className="border border-red-500">Hello</div> */}
      {/* <FloatingNav navItems={navItems} /> */}
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
              words={"Increase Your Word Power"}
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Learn new words every day and revise then frequently
            </p>
            <div className="mt-4 text-sm md:text-base lg:text-xl">
              <p className="mt-4">
                In this website users can learn new words with functionality of
                frequent revisions, I have also planed to launch it's mobile
                application both for android and ios users, well the project is
                not completed yet, but I will try to make it soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full mt-10">
        <Footer />
      </div>
    </main>
  );
};

export default Page;
