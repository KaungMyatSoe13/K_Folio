import React from "react";
import { projectDetails } from "../../components/data/projectDetails";
import ProjectLayout from "../../components/projects/ProjectLayout";
import ProjectVideo from "../../components/projects/ProjectVideo";
import ProjectDetails from "../../components/projects/ProjectDetails";
import ProjectTechnologies from "../../components/projects/ProjectTechnologies";
import ProjectSection from "../../components/projects/ProjectSection";
import ProjectImages from "../../components/projects/ProjectImages";

export default function Peakfit() {
  const project = projectDetails.peakfit;

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
          links={{
            demo: project.links?.demo,
            website: project.links?.website,
          }}
        />
        <ProjectTechnologies technologies={project.technologies} />
      </div>

      {/* Product Website Section */}
      {project.video?.[1] && (
        <ProjectSection title="Product Website">
          <ProjectVideo videoSrc={project.video[1]} animate={false} />
        </ProjectSection>
      )}

      {/* Admin Dashboard Section */}
      {project.images && project.images.length > 0 && (
        <ProjectSection title="Admin Dashboard">
          <ProjectImages images={project.images} altPrefix="Admin Dashboard" />
        </ProjectSection>
      )}
    </ProjectLayout>
  );
}
