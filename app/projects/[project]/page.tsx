import Footer from "@/components/Footer";
import { Hero } from "@/components/Project_Hero";
import { projectDetails } from "@/data";
import type { UrlName } from "@/interfaces";
import React from "react";

interface ProjectPageProps {
  params: { project: UrlName };
  searchParams: {};
}

const Page = async (params: ProjectPageProps) => {
  const projectDetail = await getProjectDetail(params.params.project);

  if (projectDetail)
    return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        {/* <div className="border border-red-500">Hello</div> */}
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero projectDetails={projectDetail} />
        <div className="max-w-7xl w-full mt-10">
          <Footer />
        </div>
      </main>
    );
  else {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>Page not found</span>
      </div>
    );
  }
};

export default Page;

export const generateStaticParams = async () => {
  return projectDetails.map((item) => ({ project: item.urlname }));
};

const getProjectDetail = async (params: UrlName) => {
  const projectDetail = projectDetails.find((item) => item.urlname === params);

  return projectDetail;
};
