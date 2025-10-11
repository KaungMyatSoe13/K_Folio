import React from "react";
import TypingText from "@/components/ui/TypingText";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <>
      <TypingText
        text={title}
        className="text-xl sm:text-2xl text-gray-200 mb-2 sm:mb-3"
        charDelay={0.1}
        startDelay={0}
        inView={true}
      />
      {children}
    </>
  );
}
