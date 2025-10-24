"use client";
import React, { Suspense, lazy, memo, useMemo } from "react";
import SideNavbar from "../Navbars/SideNavbar";
import { vt323 } from "../../app/fonts/fonts";
import Kfolio from "./Kfolio";

// Import working components directly
const ShopShop = lazy(() => import("../../app/projects/ShopShop"));
const PeakFit = lazy(() => import("../../app/projects/Peakfit"));
const EmoFace = lazy(() => import("../../app/projects/EmoFace"));
const KotobaLab = lazy(() => import("../../app/projects/KotobaLab"));
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
LoadingComponent.displayName = "LoadingComponent";

// Move componentMap outside the component to prevent recreation
const COMPONENT_MAP: Record<string, React.ReactNode> = {
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

  // Memoized project component renderer
  const renderProjectComponent = useMemo(() => {
    if (!currentTab || currentTab.type !== "project") return null;

    const projectName = currentTab.name
      .replace(/\.js$/, "")
      .replace(/\s+/g, "")
      .toLowerCase();

    return (
      COMPONENT_MAP[projectName] || (
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
        </div>
      </div>
    );
  }

  // Default terminal view for K_folio.js tab with ASCII Grid Background
  return <Kfolio onMenuClick={onMenuClick} />;
}
