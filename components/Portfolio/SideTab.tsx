import React from "react";
import AsciiVerticalLine from "../ui/AsciiVerticalLine";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { benzinSemibold } from "../../app/fonts/fonts";

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

  // Function to get watermark text based on content
  const getWatermarkText = () => {
    switch (content) {
      case "About":
        return "AboutMe";
      case "Skills":
        return "MySkills";
      case "Projects":
        return "Projects";
      case "Contact":
        return "Contacts";
      default:
        return content; // Use the content directly for any other cases
    }
  };

  return (
    <div className="w-full bg-gray-900 flex flex-col font-mono min-h-screen relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-4 text-gray-400 z-10">
        <AsciiVerticalLine char="/" side="left" />
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-4 text-gray-400 z-10">
        <AsciiVerticalLine char="\" side="right" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 px-4 overflow-y-auto scrollbar-none">
        {/* Content area */}
        <div className="flex-1">{renderContent()}</div>

        {/* Dynamic Watermark */}
        <p
          className={`absolute right-[70px] top-1/2 -translate-y-1/2 translate-x-1/2 -rotate-90 scale-y-[1.4]
             inline-block w-fit h-fit leading-none 
             text-[18vh] text-white/10 pointer-events-none select-none ${benzinSemibold.className}`}
        >
          {getWatermarkText()}
        </p>
      </div>
    </div>
  );
}
