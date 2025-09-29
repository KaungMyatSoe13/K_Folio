import React from "react";
import { Suspense, lazy, memo, useMemo } from "react";
import { vt323 } from "../fonts/fonts";
import AsciiVerticalLine from "@/components/ui/AsciiVerticalLine";
import AsciiLine from "@/components/ui/AsciiLine";
import { benzinSemibold } from "../fonts/fonts";
import AsciiGridBackground from "../../components/ui/AsciiGridBackground";
import {
  MoreHorizontal,
  ExternalLink,
  Smartphone,
  Github,
  Globe,
  Calendar,
  CheckCircle,
  Brain,
  Eye,
} from "lucide-react";
import { projectDetails } from "../../components/data/projectDetails";

export default function EmoFace() {
  const columns = 6;
  const project = projectDetails.emoface;

  return (
    <div
      className={`${vt323.className} flex flex-row justify-center sm:justify-start h-full w-full`}
    >
      <AsciiVerticalLine className="opacity-50" />
      <div className="flex flex-col w-full relative">
        <AsciiLine char="-" className="opacity-50" />
        <div className="flex flex-row">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-400 pl-5">
            {project.name}
          </h1>
        </div>
        <AsciiLine char="-" className="opacity-50" />

        {/* Content container with relative positioning and full height */}
        <div className="relative w-full h-full flex-1 flex-col">
          {/* Background positioned absolutely behind content */}
          <div className="absolute inset-0 z-0">
            <AsciiGridBackground columns={columns} className="opacity-50" />
            <p
              className={`absolute  right-[80] top-90  -translate-y-1/2 translate-x-1/2 -rotate-90 scale-y-[1.4] inline-block h-fit leading-none 
  text-[150px] text-white/10 pointer-events-none select-none z-[5] ${benzinSemibold.className}`}
            >
              {project.name}
            </p>
          </div>

          {/* Content with higher z-index */}
          <div className="relative z-10 p-2 sm:p-4 h-full overflow-y-auto">
            <div className="flex flex-col gap-4 sm:gap-6 h-full">
              {/* Image/Video Section - Using first image as hero */}
              <div className="flex justify-center w-full">
                <div
                  className="relative  
                            rounded-lg  
                            overflow-hidden  
                            shadow-lg  
                            max-h-[100vh]
                            max-w-[70vw]
                            sm:max-w-[85vw] 
                            md:max-w-2xl  
                            lg:max-w-4xl
                            sm:h-[50vh]
                            md:h-[60vh]
                            lg:h-[70vh]
                          "
                  style={{ aspectRatio: "1900/962" }}
                >
                  {/* Image as hero instead of video */}
                  <div className="relative w-full h-full flex items-center justify-center ">
                    {project.images && project.images[0] ? (
                      <img
                        src={project.images[0]} // Testing.png
                        alt="EmoFace Demo"
                        className="w-full h-full object-contain rounded-2xl"
                        style={{ maxHeight: "100%" }}
                      />
                    ) : (
                      <div className="text-gray-500 flex items-center gap-2">
                        <Brain className="w-8 h-8" />
                        AI Emotion Recognition
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 text-gray-300 ">
                {/* Description & Links Combined */}
                <div className="bg-gray-400/10 rounded-lg p-3 sm:p-4  md:col-span-2 lg:col-span-1 order-1">
                  <h2 className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3 font-bold">
                    /DESCRIPTION
                  </h2>
                  <div className="text-md sm:text-lg leading-relaxed space-y-2">
                    <p className="uppercase">{project.shortDescription}</p>
                    <p className="text-gray-400 text-md sm:text-lg">
                      PLATFORM:{" "}
                      <span className="text-gray-200">{project.platform}</span>
                    </p>
                    <p className="text-gray-400 text-md sm:text-lg">
                      ROLE:{" "}
                      <span className="text-gray-200">{project.role}</span>
                    </p>
                    <p className="text-gray-400 text-md sm:text-lg">
                      Year:{" "}
                      <span className="text-gray-200">{project.year}</span>
                    </p>
                  </div>

                  {/* Links Section */}
                  <div className="mt-4 pt-3 border-t border-gray-600">
                    <div className="space-y-2">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          GITHUB REPOSITORY
                        </a>
                      )}

                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          GITHUB
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-gray-400/10 rounded-lg p-3 sm:p-4 md:col-span-2 lg:col-span-1 order-2 lg:order-2">
                  <h2 className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3 font-bold">
                    /TECHNOLOGIES
                  </h2>
                  <div className="space-y-2 sm:space-y-3">
                    {/* Backend/AI */}
                    {project.technologies.backend.length > 0 && (
                      <div>
                        <p className="text-md sm:text-lg text-gray-400 mb-1">
                          AI/ML BACKEND
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.technologies.backend.map((tech, index) => (
                            <span
                              key={index}
                              className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-600/20 border border-green-500/30 rounded text-xs sm:text-sm text-green-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div className="flex justify-center w-full flex-col mt-10">
                {/* Data Selection */}
                {project.images && project.images[1] && (
                  <>
                    <h2 className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6 ">
                      /Dataset Selection & Preparation
                    </h2>
                    <div className="flex justify-center mb-8 sm:mb-12">
                      <div className="w-full max-w-2xl lg:max-w-4xl">
                        <img
                          src={project.images[1]} // dataSelection.png
                          alt="Dataset Selection & Preparation"
                          className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}
                {/* Model Training */}
                {project.images && project.images[2] && (
                  <>
                    <h2 className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6 ">
                      /Model Training Process
                    </h2>
                    <div className="flex justify-center mb-8 sm:mb-12">
                      <div className="w-full max-w-2xl lg:max-w-4xl">
                        <img
                          src={project.images[2]} // training.png
                          alt="Model Training Process"
                          className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}
                {/* Performance Analytics */}
                {project.images && project.images[3] && (
                  <>
                    <h2 className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6">
                      /Performance Analytics
                    </h2>
                    <div className="flex justify-center mb-8 sm:mb-12">
                      <div className="w-full max-w-2xl lg:max-w-4xl">
                        <img
                          src={project.images[3]} // chart.png
                          alt="Performance Analytics"
                          className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
