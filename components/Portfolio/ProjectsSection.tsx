import { useState } from "react";
import Image from "next/image";
import AsciiLine from "../ui/AsciiLine";
import { projects } from "../data/projects";
import { vt323 } from "../../app/fonts/fonts";
import styles from "../PortfolioCSS/ProjectsSection.module.css";
import { projectDetails } from "../data/projectDetails";
import { Video } from "lucide-react";

interface ProjectsSectionProps {
  onProjectClick?: (projectName: string) => void;
}

export default function ProjectsSection({
  onProjectClick,
}: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleProjectClick = (projectName: string) => {
    if (onProjectClick) {
      onProjectClick(projectName);
    }
  };

  // Get the current project details based on hoveredProject
  const getCurrentProject = () => {
    if (!hoveredProject) return null;
    // Convert project name to key format (e.g., "PeakFit" -> "peakfit")
    const projectKey = hoveredProject.toLowerCase().replace(/\s+/g, "");
    return projectDetails[projectKey as keyof typeof projectDetails] || null;
  };

  const currentProject = getCurrentProject();

  return (
    <div className="max-h-screen">
      <div className="text-gray-400">
        <AsciiLine char="=" />
      </div>
      {/* ASCII Header Box */}
      <div className="text-gray-400 text-center flex flex-row">
        <div
          className={`text-white text-lg sm:text-xl lg:text-2xl font-bold py-2 ${vt323.className}`}
        >
          SELECTED PROJECTS
        </div>
      </div>
      <div className="text-gray-400">
        <AsciiLine char="=" />
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block">
        {/* Table Header */}
        <div className="mb-2">
          <div
            className={`grid grid-cols-3 gap-0 text-gray-300 font-bold text-md sm:text-lg lg:text-xl py-2 ${vt323.className}`}
          >
            <div className="border-gray-600 px-1 sm:px-2">WEBSITE</div>
            <div className="border-gray-600 px-1 sm:px-2">/PLATFORM</div>
            <div className="px-1 sm:px-2">/TECH</div>
          </div>
          <div className="text-gray-400">
            <AsciiLine char="=" />
          </div>
        </div>

        {/* Project Rows */}
        {projects.map((project, index) => (
          <div key={index}>
            <div
              className={`grid grid-cols-3 gap-0 text-gray-300 py-1 sm:py-2 text-sm sm:text-md lg:text-lg hover:bg-gray-800 transition-colors hover:cursor-pointer ${vt323.className}`}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.name)}
            >
              <div className="border-gray-600 px-1 sm:px-2 text-cyan-400 truncate">
                → {project.name}
              </div>
              <div className="border-gray-600 px-1 sm:px-2 truncate">
                /{project.platform}
              </div>
              <div className="px-1 sm:px-2 truncate">/{project.tech}</div>
            </div>
            <div className="text-gray-400">
              <AsciiLine char="-" />
            </div>
          </div>
        ))}

        {/* Preview Section - Now Responsive */}
        <div className="mt-4 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] border border-gray-600 bg-gray-800/50 p-2 sm:p-4 relative overflow-hidden">
          {hoveredProject && currentProject ? (
            <div className={`${styles.fadeIn}`}>
              <div className="text-gray-400 text-xs mb-2 font-mono">
                PREVIEW: {hoveredProject}
              </div>

              <div className="flex justify-center w-full">
                <div className="relative w-full max-w-4xl">
                  {/* Responsive container that maintains aspect ratio */}
                  <div
                    className="relative w-full rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-700"
                    style={{
                      aspectRatio: "16/9", // More standard aspect ratio
                      maxHeight: "60vh", // Prevent it from being too tall
                    }}
                  >
                    {/* Media Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {currentProject.video && currentProject.video[0] ? (
                        <video
                          src={currentProject.video[0]}
                          autoPlay
                          muted
                          playsInline
                          loop
                          controls={false}
                          className="w-full h-full object-contain"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : currentProject.images && currentProject.images[0] ? (
                        <Image
                          src={currentProject.images[0]}
                          alt={`${hoveredProject} preview`}
                          fill
                          className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          <Video className="w-8 h-8 mr-2" />
                          No media available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-xs sm:text-sm font-mono text-center px-4">
              Hover over a project to see preview • Click to open in terminal
            </div>
          )}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="block sm:hidden space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-600 p-3 hover:bg-gray-800 transition-colors cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
            onTouchStart={() => setHoveredProject(project.name)}
            onTouchEnd={() => setTimeout(() => setHoveredProject(null), 2000)}
            onClick={() => handleProjectClick(project.name)}
          >
            <div className="text-cyan-400 font-bold mb-2 text-sm">
              → {project.name}
            </div>
            <div className="text-gray-300 text-xs space-y-1">
              <div>
                <span className="text-gray-400">Platform:</span>{" "}
                {project.platform}
              </div>
              <div>
                <span className="text-gray-400">Tech:</span> {project.tech}
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Preview Section */}
        {hoveredProject && currentProject && (
          <div className="mt-4 border border-gray-600 bg-gray-800/50 p-3">
            <div className="text-gray-400 text-xs mb-2 font-mono">
              PREVIEW: {hoveredProject}
            </div>
            <div
              className="relative w-full rounded-lg overflow-hidden bg-gray-900 border border-gray-700"
              style={{ aspectRatio: "16/9" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {currentProject.video && currentProject.video[0] ? (
                  <video
                    src={currentProject.video[0]}
                    autoPlay
                    muted
                    playsInline
                    loop
                    controls={false}
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : currentProject.images && currentProject.images[0] ? (
                  <Image
                    src={currentProject.images[0]}
                    alt={`${hoveredProject} preview`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <Video className="w-6 h-6 mr-2" />
                    No media available
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
