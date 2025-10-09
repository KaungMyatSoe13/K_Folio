"use client";
import React, { Suspense, lazy, memo, useMemo } from "react";
import Menu from "../Menu/Menu";
import SideNavbar from "../Navbars/SideNavbar";
import { vt323 } from "../../app/fonts/fonts";
import Kfolio from "./Kfolio";

// Import working components directly
const ShopShop = lazy(() => import("../../app/projects/ShopShop"));
const PeakFit = lazy(() => import("../../app/projects/Peakfit"));
const EmoFace = lazy(() => import("../../app/projects/EmoFace"));
const KotobaLab = lazy(() => import("../../app/projects/KotobaLab"));
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

// Memoized Loading component
const LoadingComponent = memo(() => (
  <div className={`${vt323.className} p-4`}>
    <div className="text-orange-400 text-xl mb-4">Loading Project...</div>
  </div>
));

// Memoized Input Component

export default function Terminal({
  onMenuClick,
  tabs,
  activeTab,
  onProjectClick,
}: TerminalProps) {
  // Memoize current tab calculation
  const currentTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTab),
    [tabs, activeTab]
  );

  // Memoize mobile check with debouncing
  const isMobile = useMemo(
    () => typeof window !== "undefined" && window.innerWidth < 768,
    [] // Only check once on mount
  );

  // Memoized project component renderer
  const renderProjectComponent = useMemo(() => {
    if (!currentTab || currentTab.type !== "project") return null;

    const projectName = currentTab.name
      .replace(/\.js$/, "")
      .replace(/\s+/g, "")
      .toLowerCase();

    console.log(
      "Rendering project:",
      projectName,
      "from tab:",
      currentTab.name
    );

    const componentMap: Record<string, React.ReactNode> = {
      shopshop: (
        <Suspense fallback={<LoadingComponent />}>
          <ShopShop />
        </Suspense>
      ),
      peakfit: (
        <Suspense fallback={<LoadingComponent />}>
          <PeakFit />
        </Suspense>
      ),
      myanglish_translator: (
        <Suspense fallback={<LoadingComponent />}>
          <MyanglishTranslator />
        </Suspense>
      ),
      emoface: (
        <Suspense fallback={<LoadingComponent />}>
          <EmoFace />
        </Suspense>
      ),
      kotobalab: (
        <Suspense fallback={<LoadingComponent />}>
          <KotobaLab />
        </Suspense>
      ),
    };
    return (
      componentMap[projectName] || (
        <div className={`${vt323.className} p-4`}>
          <div className="text-red-400 text-xl mb-4">Project Not Found</div>
          <div className="text-gray-300">
            No component found for: {currentTab.name}
          </div>
          <div className="text-gray-400 text-sm mt-2">
            Normalized name: {projectName}
          </div>
        </div>
      )
    );
  }, [currentTab]);

  // If it's a project tab
  if (currentTab?.type === "project") {
    // On mobile, redirect to SideTab instead of showing content here
    if (isMobile && onProjectClick) {
      onProjectClick(currentTab.name);
      return null;
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
          {renderProjectComponent}
          {/* <Watermark
            text={currentTab.name.replace(/\.js$/, "")}
            className={`absolute right-[-650] top-75 -translate-x-1/2 -rotate-90 scale-y-[1.4] inline-block h-fit leading-none text-[20vh] text-white/10 pointer-events-none select-none ${benzinSemibold.className}`}
          /> */}
        </div>
      </div>
    );
  }

  // Default terminal view for K_folio.js tab with ASCII Grid Background
  return <Kfolio onMenuClick={onMenuClick} />;
}
