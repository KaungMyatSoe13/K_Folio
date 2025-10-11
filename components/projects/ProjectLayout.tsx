import React, { useState } from "react";
import { vt323, benzinSemibold } from "../../app/fonts/fonts";
import AsciiVerticalLine from "@/components/ui/AsciiVerticalLine";
import AsciiLine from "@/components/ui/AsciiLine";
import TypingText from "@/components/ui/TypingText";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

interface ProjectLayoutProps {
  projectName: string;
  children: React.ReactNode;
  columns?: number;
}

export default function ProjectLayout({
  projectName,
  children,
  columns = 6,
}: ProjectLayoutProps) {
  const [isHeaderComplete, setIsHeaderComplete] = useState(false);
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  return (
    <div
      className={`${vt323.className} flex flex-row justify-center sm:justify-start h-full w-full`}
    >
      <AsciiVerticalLine className="opacity-50" />
      <div className="flex flex-col w-full relative">
        <AsciiLine char="-" className="opacity-50" />
        <div className="flex flex-row">
          <TypingText
            text={projectName}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-400 pl-5`}
            charDelay={0.1}
            startDelay={0}
            onComplete={() => setIsHeaderComplete(true)}
          />
        </div>
        <AsciiLine char="-" className="opacity-50" />

        <div className="relative w-full h-full flex-1 flex-col">
          <AnimatedBackground
            columns={columns}
            isVisible={isHeaderComplete}
            onAnimationComplete={() => setIsBackgroundLoaded(true)}
            watermarkText={projectName}
            watermarkClassName={`absolute right-[80] top-65 -translate-y-1/2 translate-x-1/2 -rotate-90 scale-y-[1.4] inline-block h-fit leading-none text-[150px] text-white/10 pointer-events-none select-none z-[5] ${benzinSemibold.className}`}
          />

          {isBackgroundLoaded && (
            <div className="relative z-10 p-2 sm:p-4 h-full overflow-y-auto">
              <div className="flex flex-col gap-4 sm:gap-6 h-full">
                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
