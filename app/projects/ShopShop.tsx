import React from "react";
import { projectDetails } from "../../components/data/projectDetails";
import ProjectLayout from "../../components/projects/ProjectLayout";
import ProjectVideo from "../../components/projects/ProjectVideo";
import ProjectDetails from "../../components/projects/ProjectDetails";
import ProjectTechnologies from "../../components/projects/ProjectTechnologies";
import ProjectSection from "../../components/projects/ProjectSection";
import TypingText from "@/components/ui/TypingText";

export default function ShopShop() {
  const project = projectDetails.shopshop;

  // Define image sections with titles
  const userSections = [
    { title: "User Authentication", index: 0 },
    { title: "Home Page", index: 1 },
    { title: "Product", index: 2 },
    { title: "Cart", index: 3 },
    { title: "Profile", index: 4 },
  ];

  const adminSections = [
    { title: "Dashboard", index: 5 },
    { title: "Track Orders", index: 6 },
    { title: "Add Products", index: 7 },
    { title: "Manage Products", index: 8 },
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

      {/* User Section */}
      <div className="flex justify-center w-full flex-col mt-10">
        <h1 className="text-2xl sm:text-4xl text-gray-200 mb-4 sm:mb-6 text-center">
          /ShopShop User
        </h1>

        {userSections.map(
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

      {/* Admin Section */}
      <div className="flex justify-center w-full flex-col mt-10">
        <h1 className="text-2xl sm:text-4xl text-gray-200 mb-4 sm:mb-6 text-center mt-30">
          /ShopShop Admin
        </h1>

        {adminSections.map(
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
