import React from "react";
import { projectDetails } from "../../components/data/projectDetails";
import ProjectLayout from "../../components/projects/ProjectLayout";
import ProjectVideo from "../../components/projects/ProjectVideo";
import ProjectDetails from "../../components/projects/ProjectDetails";
import TypingText from "@/components/ui/TypingText";
import AnimatedCard from "@/components/ui/AnimatedCard";

export default function MyanglishTranslator() {
  const project = projectDetails.myanglishtranslator;

  const imageSections = [
    { title: "Home Page Interface", index: 0 },
    { title: "Burmese → Roman Translation", index: 1 },
    { title: "Roman → Burmese Translation", index: 2 },
    { title: "Live Preview Feature", index: 3 },
  ];

  return (
    <ProjectLayout projectName={project.name} columns={6}>
      {/* Main Video */}
      {project.video?.[0] && (
        <ProjectVideo videoSrc={project.video[0]} animate={true} />
      )}

      {/* Project Details Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 text-gray-300">
        <ProjectDetails
          shortDescription={project.shortDescription}
          platform={project.platform}
          role={project.role}
          year={project.year}
          links={project.links}
        />
        {/* Custom Technologies Card with Key Features */}
        <AnimatedCard className="bg-gray-400/10 rounded-lg p-3 sm:p-4 md:col-span-2 lg:col-span-1 order-2 lg:order-2">
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

            {/* Key Features */}
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
                  className="text-xl sm:text-2xl text-gray-200 mb-4 sm:mb-6 text-center"
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

        {/* Educational Impact Section */}
        <div className="bg-gray-400/10 rounded-lg p-4 sm:p-6 mt-8">
          <h2 className="text-xl sm:text-2xl text-gray-200 mb-3 sm:mb-4 font-bold text-center">
            /Educational Impact
          </h2>
          <div className="text-md sm:text-lg text-gray-300 space-y-3 text-center">
            <p>
              Bridging the gap between Myanmar script and romanized text for
              language learners
            </p>
            <p className="text-gray-400">
              Helping Myanmar diaspora communities maintain their linguistic
              heritage
            </p>
            <p className="text-gray-400">
              Supporting researchers and students working with Burmese text
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
