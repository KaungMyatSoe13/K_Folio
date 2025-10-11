import React from "react";
import { projectDetails } from "../../components/data/projectDetails";
import ProjectLayout from "../../components/projects/ProjectLayout";
import ProjectDetails from "../../components/projects/ProjectDetails";
import TypingText from "@/components/ui/TypingText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Brain } from "lucide-react";

export default function EmoFace() {
  const project = projectDetails.emoface;

  const imageSections = [
    { title: "Dataset Selection & Preparation", index: 1 },
    { title: "Model Training Process", index: 2 },
    { title: "Performance Analytics", index: 3 },
  ];

  return (
    <ProjectLayout projectName={project.name} columns={6}>
      {/* Hero Image */}
      <div className="flex justify-center w-full">
        <div
          className="relative rounded-lg overflow-hidden shadow-lg max-h-[100vh] max-w-[70vw] sm:max-w-[85vw] md:max-w-2xl lg:max-w-4xl sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
          style={{ aspectRatio: "1900/962" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {project.images?.[0] ? (
              <img
                src={project.images[0]}
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

      {/* Project Details Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 text-gray-300">
        <ProjectDetails
          shortDescription={project.shortDescription}
          platform={project.platform}
          role={project.role}
          year={project.year}
          links={project.links}
        />

        {/* Custom Technologies Card for AI/ML */}
        <AnimatedCard className="bg-gray-400/10 rounded-lg p-3 sm:p-4 md:col-span-2 lg:col-span-1 order-2 lg:order-2">
          <h2 className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3 font-bold">
            /TECHNOLOGIES
          </h2>
          <div className="space-y-2 sm:space-y-3">
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
        </AnimatedCard>
      </div>

      {/* Images Section */}
      <div className="flex justify-center w-full flex-col mt-10">
        {imageSections.map(
          (section) =>
            project.images?.[section.index] && (
              <div key={section.index}>
                <TypingText
                  text={section.title}
                  className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6"
                  charDelay={0.1}
                  startDelay={0}
                  inView={true}
                />
                <div className="flex justify-center mb-8 sm:mb-12">
                  <div className="w-full max-w-2xl lg:max-w-4xl">
                    <img
                      src={project.images[section.index]}
                      alt={section.title}
                      className="w-full h-auto rounded-lg shadow-lg object-contain"
                    />
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </ProjectLayout>
  );
}
