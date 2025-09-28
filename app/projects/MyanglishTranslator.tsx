import React from "react";
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
} from "lucide-react";
import { projectDetails } from "../../components/data/projectDetails";

export default function MyanglishTranslator() {
  const columns = 6;
  const project = projectDetails.myanglishtranslator;

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
          </div>

          {/* Content with higher z-index */}
          <div className="relative z-10 p-2 sm:p-4 h-full overflow-y-auto">
            <div className="flex flex-col gap-4 sm:gap-6 h-full">
              {/* Video Section */}
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
                  {/* Video */}
                  <div className="relative w-full h-full flex items-center justify-center ">
                    {project.video ? (
                      <video
                        src={project.video[0]}
                        autoPlay
                        muted
                        playsInline
                        controls={false}
                        className="w-full h-full object-contain rounded-2xl"
                        style={{ maxHeight: "100%" }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="text-gray-500">No video available</div>
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
                          <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                          LIVE DEMO
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
                    {/* Frontend */}
                    {project.technologies.frontend.length > 0 && (
                      <div>
                        <p className="text-md sm:text-lg text-gray-400 mb-1">
                          FRONTEND
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.technologies.frontend.map((tech, index) => (
                            <span
                              key={index}
                              className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-600/20 border border-blue-500/30 rounded text-xs sm:text-sm text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features Highlight */}
                    <div>
                      <p className="text-md sm:text-lg text-gray-400 mb-1">
                        KEY FEATURES
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-600/20 border border-green-500/30 rounded text-xs sm:text-sm text-green-300">
                          Bidirectional
                        </span>
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-purple-600/20 border border-purple-500/30 rounded text-xs sm:text-sm text-purple-300">
                          Live Preview
                        </span>
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-orange-600/20 border border-orange-500/30 rounded text-xs sm:text-sm text-orange-300">
                          Real-time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div className="flex justify-center w-full flex-col mt-10">
                {/* Home Page Interface */}
                {project.images && project.images[0] && (
                  <>
                    <h2 className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6 ">
                      /Home Page Interface
                    </h2>
                    <div className="flex justify-center mb-8 sm:mb-12">
                      <div className="w-full max-w-2xl lg:max-w-4xl">
                        <img
                          src={project.images[0]} // HomePage.png
                          alt="Home Page Interface"
                          className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Burmese to Roman Translation */}
                {project.images && project.images[1] && (
                  <>
                    <h2 className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6 text-center">
                      /Burmese → Roman Translation
                    </h2>
                    <div className="flex justify-center mb-8 sm:mb-12">
                      <div className="w-full max-w-2xl lg:max-w-4xl">
                        <img
                          src={project.images[1]} // BurmeseToRoman.png
                          alt="Burmese to Roman Translation"
                          className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Roman to Burmese Translation */}
                {project.images && project.images[2] && (
                  <>
                    <h2 className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6 text-center">
                      /Roman → Burmese Translation
                    </h2>
                    <div className="flex justify-center mb-8 sm:mb-12">
                      <div className="w-full max-w-2xl lg:max-w-4xl">
                        <img
                          src={project.images[2]} // RomanToBurmese.png
                          alt="Roman to Burmese Translation"
                          className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Live Preview Feature */}
                {project.images && project.images[3] && (
                  <>
                    <h2 className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6 text-center">
                      /Live Preview Feature
                    </h2>
                    <div className="flex justify-center mb-8 sm:mb-12">
                      <div className="w-full max-w-2xl lg:max-w-4xl">
                        <img
                          src={project.images[3]} // LivePreview.png
                          alt="Live Preview Feature"
                          className="w-full h-auto rounded-lg shadow-lg object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Educational Impact */}
                <div className="bg-gray-400/10 rounded-lg p-4 sm:p-6 mt-8">
                  <h2 className="text-xl sm:text-2xl text-gray-200 mb-3 sm:mb-4 font-bold text-center">
                    /Educational Impact
                  </h2>
                  <div className="text-md sm:text-lg text-gray-300 space-y-3 text-center">
                    <p>
                      Bridging the gap between Myanmar script and romanized text
                      for language learners
                    </p>
                    <p className="text-gray-400">
                      Helping Myanmar diaspora communities maintain their
                      linguistic heritage
                    </p>
                    <p className="text-gray-400">
                      Supporting researchers and students working with Burmese
                      text
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
