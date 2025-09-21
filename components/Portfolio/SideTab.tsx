import React from "react";
import AsciiVerticalLine from "../ui/AsciiVerticalLine";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import SideNavbar from "../Navbars/SideNavbar";

interface SideTabProps {
  content: string;
  onProjectClick?: (projectName: string) => void;
  projectContent?: string; // New prop for project content
  isProjectView?: boolean; // New prop to indicate if we're showing a project
}

export default function SideTab({
  content,
  onProjectClick,
  projectContent,
  isProjectView = false,
}: SideTabProps) {
  const renderContent = () => {
    // If we're in project view mode, show the project content
    if (isProjectView && projectContent) {
      return (
        <div className="flex flex-row h-full">
          <SideNavbar />
          <div className="flex-1 p-4 overflow-y-auto">
            <pre className="whitespace-pre-wrap text-sm leading-6 font-mono text-[#eaeaea]">
              {projectContent}
            </pre>
          </div>
        </div>
      );
    }

    // Regular content rendering
    switch (content) {
      case "About":
        return <AboutSection />;
      case "Skills":
        return <SkillsSection />;
      case "Projects":
        return <ProjectsSection onProjectClick={onProjectClick} />;
      case "Contact":
        return <ContactSection />;
      default:
        return (
          <div className="text-center p-4 sm:p-8">
            <div className="text-lg sm:text-xl lg:text-2xl">{content}</div>
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-gray-900 flex flex-col font-mono min-h-screen relative">
      {/* Left Vertical Line - hide when in project view */}
      {!isProjectView && (
        <div className="absolute left-0 top-0 bottom-0 w-4 text-gray-400 z-10">
          <AsciiVerticalLine char="/" side="left" />
        </div>
      )}

      {/* Right Vertical Line - hide when in project view */}
      {!isProjectView && (
        <div className="absolute right-0 top-0 bottom-0 w-4 text-gray-400 z-10">
          <AsciiVerticalLine char="\" side="right" />
        </div>
      )}

      {/* Main Content */}
      <div className={`flex flex-col flex-1 ${isProjectView ? "" : "px-4"}`}>
        {/* Content area */}
        <div className={isProjectView ? "h-full" : "max-h-[80px]"}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
