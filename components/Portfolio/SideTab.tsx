import React from "react";
import AsciiVerticalLine from "../ui/AsciiVerticalLine";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

interface SideTabProps {
  content: string;
  onProjectClick?: (projectName: string) => void;
}

export default function SideTab({ content, onProjectClick }: SideTabProps) {
  const renderContent = () => {
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
      <div className="absolute left-0 top-0 bottom-0 w-4 text-gray-400 z-10">
        <AsciiVerticalLine char="/" side="left" />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-4 text-gray-400 z-10">
        <AsciiVerticalLine char="\" side="right" />
      </div>
      {/* Main Content */}
      <div className={`flex flex-col flex-1 px-4`}>
        {/* Content area */}
        <div className={"h-full max-h-[80px]"}>{renderContent()}</div>
      </div>
    </div>
  );
}
