"use client";
import React, { Suspense, lazy } from "react";
import { useTerminal } from "../../app/hooks/useTerminal";
import Menu from "../Menu/Menu";
import SideNavbar from "../Navbars/SideNavbar";
import AsciiGridBackground from "../ui/AsciiGridBackground";
import { vt323 } from "../../app/fonts/fonts";
import { benzinSemibold } from "../../app/fonts/fonts";

// Import working components directly
import ShopShop from "../../app/projects/ShopShop";
import PeakFit from "../../app/projects/Peakfit";
import FaceRecognitionSystem from "../../app/projects/FaceRecognitionSystem";
import IJudge from "../../app/projects/iJudge";

// Use dynamic import for MyanglishTranslator to avoid the import issue
const MyanglishTranslator = lazy(
  () => import("../../app/projects/MyanglishTranslator")
);

interface Tab {
  id: string;
  name: string;
  type: "default" | "project";
}

interface TerminalProps {
  onMenuClick: (content: string) => void;
  tabs: Tab[];
  activeTab: string;
  onProjectClick?: (projectName: string) => void;
}

// Loading component for Suspense
const LoadingComponent = () => (
  <div className={`${vt323.className} p-4`}>
    <div className="text-orange-400 text-xl mb-4">Loading...</div>
    <div className="text-gray-300">
      Loading Myanglish Translator component...
    </div>
  </div>
);

export default function Terminal({
  onMenuClick,
  tabs,
  activeTab,
  onProjectClick,
}: TerminalProps) {
  const {
    displayedText,
    userInput,
    output,
    showMenu,
    animationDone,
    handleInputChange,
    handleInputSubmit,
  } = useTerminal();

  // Get the current tab's content
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  // Check if we're on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Helper function to render the correct project component
  const renderProjectComponent = (tabName: string) => {
    // Extract project name from tab name (remove .js extension and spaces)
    const projectName = tabName
      .replace(/\.js$/, "")
      .replace(/\s+/g, "")
      .toLowerCase();

    console.log("Rendering project:", projectName, "from tab:", tabName);

    switch (projectName) {
      case "shopshop":
        return <ShopShop />;

      case "peakfit":
        return <PeakFit />;

      case "myanglish_translator":
        return (
          <Suspense fallback={<LoadingComponent />}>
            <MyanglishTranslator />
          </Suspense>
        );

      case "face_recognition_system":
        return <FaceRecognitionSystem />;

      case "ijudge":
        return <IJudge />;

      case "k_folio":
        return <div>K_folio Project</div>;

      // Add more cases for your projects
      default:
        return (
          <div className={`${vt323.className} p-4`}>
            <div className="text-red-400 text-xl mb-4">Project Not Found</div>
            <div className="text-gray-300">
              No component found for: {tabName}
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Normalized name: {projectName}
            </div>
            <div className="mt-4 text-gray-400 text-sm">
              Available projects: ShopShop, PeakFit, FaceRecognitionSystem,
              MyanglishTranslator
            </div>
          </div>
        );
    }
  };

  // If it's a project tab
  if (currentTab?.type === "project") {
    // On mobile, redirect to SideTab instead of showing content here
    if (isMobile && onProjectClick) {
      // Trigger the SideTab to show this project
      onProjectClick(currentTab.name);
      return null; // Don't render anything here
    }

    // On desktop, show the project content directly
    return (
      <div className="flex flex-1 font-mono text-[#eaeaea] bg-[#282828] min-h-screen flex-row">
        <div className="hidden md:block">
          <SideNavbar />
        </div>

        <div
          className="h-full overflow-hidden flex-1 flex flex-row relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {renderProjectComponent(currentTab.name)}
          <p
            className={`absolute right-[-650] top-75 -translate-x-1/2 -rotate-90 scale-y-[1.4] inline-block h-fit leading-none text-[20vh] text-white/10 pointer-events-none select-none ${benzinSemibold.className}`}
          >
            PeakFit
          </p>
        </div>
      </div>
    );
  }

  // Default terminal view for K_folio.js tab with ASCII Grid Background
  return (
    <div className="flex-1 font-mono text-[#eaeaea] bg-[#282828] min-h-screen flex flex-row">
      <SideNavbar />

      <div className="flex flex-col flex-1 relative overflow-hidden">
        {/* ASCII Grid Background */}
        <div className="absolute inset-0 z-0">
          <AsciiGridBackground columns={6} className="opacity-30" />
        </div>

        {/* Terminal Content with higher z-index */}
        <div className="relative z-10 flex flex-col flex-1">
          <pre
            className={`!m-0 !p-0 whitespace-pre-wrap ml-4 text-md sm:text-lg lg:text-xl ${vt323.className}`}
            style={{ lineHeight: "20px", margin: 0, padding: 0 }}
          >
            {displayedText}
          </pre>

          {/* Show menu after initial text */}
          {showMenu && <Menu onMenuClick={onMenuClick} />}

          {/* Show command history/output after menu, just above the current input */}
          {output.length > 0 && (
            <pre
              className={`!m-0 !p-0 whitespace-pre-wrap ml-4 text-md sm:text-lg lg:text-xl ${vt323.className}`}
              style={{ lineHeight: "20px", margin: 0, padding: 0 }}
            >
              {"\n" + output.join("\n")}
            </pre>
          )}

          {animationDone && (
            <pre
              className="!m-0 !p-0 -wrap pl-4"
              style={{ lineHeight: "20px", margin: 0, padding: 0 }}
            >
              <span
                className={`inline-flex items-center text-md sm:text-lg lg:text-xl ${vt323.className} h-3 sm:h-5 mt-3 sm:mt-2`}
              >
                <span>K@Portfolio$ </span>
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyDown={handleInputSubmit}
                  className="bg-transparent outline-none text-[#eaeaea] w-auto min-w-[50px]"
                  autoFocus={animationDone}
                />
              </span>
            </pre>
          )}
        </div>

        {/* Watermark */}
        <p
          className={`absolute right-35 top-1/2 -translate-y-1/2 translate-x-1/2 -rotate-90 scale-y-[1.4] 
           inline-block w-fit h-fit leading-none 
           text-[30vh] text-white/10 pointer-events-none select-none z-20 ${benzinSemibold.className}`}
        >
          Kfolio
        </p>
      </div>
    </div>
  );
}
