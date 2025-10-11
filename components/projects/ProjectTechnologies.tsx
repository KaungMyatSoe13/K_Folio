import React from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";

interface ProjectTechnologiesProps {
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
}

export default function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <AnimatedCard className="bg-gray-400/10 rounded-lg p-3 sm:p-4 md:col-span-2 lg:col-span-1 order-2 lg:order-2">
      <h2 className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3 font-bold">
        /TECHNOLOGIES
      </h2>
      <div className="space-y-2 sm:space-3">
        {/* Frontend */}
        {technologies.frontend.length > 0 && (
          <div>
            <p className="text-md sm:text-lg text-gray-400 mb-1">FRONTEND</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {technologies.frontend.map((tech, index) => (
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
        {technologies.backend.length > 0 && (
          <div>
            <p className="text-md sm:text-lg text-gray-400 mb-1">BACKEND</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {technologies.backend.map((tech, index) => (
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

        {/* Database */}
        {technologies.database.length > 0 && (
          <div>
            <p className="text-md sm:text-lg text-gray-400 mb-1">DATABASE</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {technologies.database.map((tech, index) => (
                <span
                  key={index}
                  className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-orange-600/20 border border-orange-500/30 rounded text-xs sm:text-sm text-orange-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimatedCard>
  );
}
