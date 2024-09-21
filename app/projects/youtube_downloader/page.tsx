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
              words={"Youtube Video Downloader"}
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Youtube Video Downloader which can download videos in HD qualities
              videos
            </p>
            <div className="mt-4 text-sm md:text-base lg:text-xl">
              <p className="text-red-500">
                Due to youtube internal changes we are unable to download video,
                working on it.
              </p>
              <p className="mt-4">
                <span className="underline text-lg">
                  Technology description
                </span>
                :- Frontend is made in next.js and backend is in nest.js, for
                fetching youtube video info library used ytdl-core, I also used
                ffmpeg in linux vps to merge high quality audio with HD video
              </p>
              <div className="flex mt-4">
                <a
                  href="https://github.com/DeepanshuKacher/youtubedownloader_front"
                  target="_blank"
                  className="flex flex-1 justify-center items-center border rounded-md p-2 cursor-pointer"
                >
                  <div className="flex text-sm md:text-xs text-purple">
                    Front-end code
                  </div>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
                <a
                  href="https://github.com/DeepanshuKacher/youtubedownloader_backend"
                  target="_blank"
                  className="flex flex-1 justify-center items-center border rounded-md p-2 cursor-pointer"
                >
                  <div className="flex text-sm md:text-xs text-purple">
                    Back-end code
                  </div>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </div>
            <div className="mt-20 w-full flex justify-between">
              <a
                href="http://youtubedownloader.deepanshu.techresonance.com"
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
      <div className="max-w-7xl w-full mt-10">
        <Footer />
      </div>
    </main>
  );
};

export default Page;
