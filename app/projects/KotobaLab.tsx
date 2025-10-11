import React from "react";
import { projectDetails } from "../../components/data/projectDetails";
import ProjectLayout from "../../components/projects/ProjectLayout";
import ProjectVideo from "../../components/projects/ProjectVideo";
import ProjectDetails from "../../components/projects/ProjectDetails";
import ProjectTechnologies from "../../components/projects/ProjectTechnologies";
import TypingText from "@/components/ui/TypingText";

export default function KotobaLab() {
  const project = projectDetails.kotobalab;

  const imageSections = [
    { title: "Home Page Interface", index: 0 },
    { title: "Choose Lesson", index: 1 },
    { title: "Quiz Interface", index: 2 },
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
        <ProjectTechnologies technologies={project.technologies} />
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
