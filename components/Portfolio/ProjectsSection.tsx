import { useState } from "react";
import Image from "next/image";
import AsciiLine from "../ui/AsciiLine";
import { projects } from "../data/projects";

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

  return (
    <div className="max-h-screen ">
      <div className="text-gray-400">
        <AsciiLine char="=" />
      </div>
      {/* ASCII Header Box */}
      <div className="text-gray-400 text-center flex flex-row">
        <div className="text-white text-sm sm:text-base lg:text-lg font-bold py-2">
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
          <div className="grid grid-cols-3 gap-0 text-gray-300 font-bold text-xs sm:text-sm py-2">
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
              className="grid grid-cols-3 gap-0 text-gray-300 py-1 sm:py-2 text-xs sm:text-sm hover:bg-gray-800 transition-colors hover:cursor-pointer"
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

        {/* Preview Section */}
        <div className="mt-4 min-h-[250px] border border-gray-600 bg-gray-800/50 p-4 relative overflow-hidden">
          {hoveredProject ? (
            <div className="fade-in">
              <div className="text-gray-400 text-xs mb-2 font-mono">
                PREVIEW: {hoveredProject}
              </div>
              <div className="relative w-full h-48 bg-gray-900 border border-gray-700 rounded overflow-hidden">
                <Image
                  src="/test.png"
                  alt={`${hoveredProject} preview`}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm font-mono">
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
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
