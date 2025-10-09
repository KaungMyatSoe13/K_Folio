import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Peakfit() {
  const columns = 6;
  const project = projectDetails.peakfit;

  // State management for loading sequence
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Simulate background loading
    const timer = setTimeout(() => {
      setIsBackgroundLoaded(true);
      // After background loads, wait a bit then show video
      setTimeout(() => {
        setShowVideo(true);
      }, 300);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
          {/* Background positioned absolutely behind content - with fade in animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isBackgroundLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <AsciiGridBackground columns={columns} className="opacity-50" />
            <p
              className={`absolute  right-[80] top-65  -translate-y-1/2 translate-x-1/2 -rotate-90 scale-y-[1.4] inline-block h-fit leading-none 
              text-[150px] text-white/10 pointer-events-none select-none z-[5] ${benzinSemibold.className}`}
            >
              {project.name}
            </p>
          </motion.div>

          {/* Content with higher z-index */}
          <div className="relative z-10 p-2 sm:p-4 h-full overflow-y-auto">
            <div className="flex flex-col gap-4 sm:gap-6 h-full">
              {/* Video Section - with motion animation */}
              <div className="flex justify-center w-full">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  animate={
                    showVideo
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1], // Custom easing for smooth effect
                  }}
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
                </motion.div>
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

                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          WEBSITE
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

                    {/* Backend */}
                    {project.technologies.backend.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-400 mb-1 text-md sm:text-lg">
                          BACKEND
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.technologies.backend.map((tech, index) => (
                            <span
                              key={index}
                              className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-600/20 border border-green-500/30 rounded text-xs text-green-300 text-xs sm:text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Database */}
                    {project.technologies.database.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-400 mb-1 text-md sm:text-lg">
                          DATABASE
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.technologies.database.map((tech, index) => (
                            <span
                              key={index}
                              className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-orange-600/20 border border-orange-500/30 rounded text-xs text-orange-300 text-xs sm:text-sm"
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
              <h2 className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3 ">
                /Product Website
              </h2>

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

                  <div className="relative w-full h-full flex items-center justify-center">
                    {project.video ? (
                      <video
                        src={project.video[1]}
                        autoPlay
                        muted
                        playsInline
                        controls={false}
                        className="w-full h-full object-contain"
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
              <div className="flex justify-center w-full flex-col mt-10">
                {" "}
                <h2 className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3 ">
                  /Admin Dashboard
                </h2>
                <br />
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.images?.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      className="w-3xl h-full sm:w-4xl sm:h-4xl object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
