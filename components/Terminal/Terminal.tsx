"use client";
import React, { Suspense, lazy, memo, useMemo } from "react";
import { useTerminal } from "../../app/hooks/useTerminal";
import Menu from "../Menu/Menu";
import SideNavbar from "../Navbars/SideNavbar";
import AsciiGridBackground from "../ui/AsciiGridBackground";
import { vt323 } from "../../app/fonts/fonts";
import { benzinSemibold } from "../../app/fonts/fonts";

// Import working components directly
const ShopShop = lazy(() => import("../../app/projects/ShopShop"));
const PeakFit = lazy(() => import("../../app/projects/Peakfit"));
const EmoFace = lazy(() => import("../../app/projects/EmoFace"));
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

// Memoized ASCII Background wrapper to prevent re-renders
const MemoizedAsciiBackground = memo(
  ({ columns, className }: { columns: number; className: string }) => (
    <AsciiGridBackground columns={columns} className={className} />
  )
);

// Memoized Watermark component
const Watermark = memo(
  ({ text, className }: { text: string; className: string }) => (
    <p className={className}>{text}</p>
  )
);

// Memoized Terminal Text Display
const TerminalTextDisplay = memo(
  ({
    displayedText,
    className,
    style,
  }: {
    displayedText: string;
    className: string;
    style: React.CSSProperties;
  }) => (
    <pre className={className} style={style}>
      {displayedText}
    </pre>
  )
);

// Memoized Output Display
const OutputDisplay = memo(
  ({
    output,
    className,
    style,
  }: {
    output: string[];
    className: string;
    style: React.CSSProperties;
  }) => (
    <pre className={className} style={style}>
      {"\n" + output.join("\n")}
    </pre>
  )
);

// Memoized Input Component
const TerminalInput = memo(
  ({
    userInput,
    handleInputChange,
    handleInputSubmit,
    animationDone,
    className,
  }: {
    userInput: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    animationDone: boolean;
    className: string;
  }) => (
    <pre
      className="!m-0 !p-0 -wrap pl-4"
      style={{ lineHeight: "20px", margin: 0, padding: 0 }}
    >
      <span className={className}>
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
  )
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

      k_folio: <div>K_folio Project</div>,
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

  // Memoize style objects to prevent re-creation
  const textStyles = useMemo(
    () => ({
      lineHeight: "20px",
      margin: 0,
      padding: 0,
    }),
    []
  );

  const textClassName = useMemo(
    () =>
      `!m-0 !p-0 whitespace-pre-wrap ml-4 text-md sm:text-lg lg:text-xl ${vt323.className}`,
    [vt323.className]
  );

  const inputClassName = useMemo(
    () =>
      `inline-flex items-center text-md sm:text-lg lg:text-xl ${vt323.className} h-3 sm:h-5 mt-3 sm:mt-2`,
    [vt323.className]
  );

  const watermarkClassName = useMemo(
    () =>
      `absolute right-35 top-1/2 -translate-y-1/2 translate-x-1/2 -rotate-90 scale-y-[1.4] inline-block w-fit h-fit leading-none text-[30vh] text-white/10 pointer-events-none select-none z-20 ${benzinSemibold.className}`,
    [benzinSemibold.className]
  );

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
  return (
    <div className="flex-1 font-mono text-[#eaeaea] bg-[#282828] min-h-screen flex flex-row">
      <SideNavbar />

      <div className="flex flex-col flex-1 relative overflow-hidden">
        {/* ASCII Grid Background - Only render once */}
        <div className="absolute inset-0 z-0">
          <MemoizedAsciiBackground columns={6} className="opacity-30" />
        </div>

        {/* Terminal Content with higher z-index */}
        <div className="relative z-10 flex flex-col flex-1">
          <TerminalTextDisplay
            displayedText={displayedText}
            className={textClassName}
            style={textStyles}
          />

          {/* Show menu after initial text */}
          {showMenu && <Menu onMenuClick={onMenuClick} />}

          {/* Show command history/output */}
          {output.length > 0 && (
            <OutputDisplay
              output={output}
              className={textClassName}
              style={textStyles}
            />
          )}

          {animationDone && (
            <TerminalInput
              userInput={userInput}
              handleInputChange={handleInputChange}
              handleInputSubmit={handleInputSubmit}
              animationDone={animationDone}
              className={inputClassName}
            />
          )}
        </div>

        {/* Watermark */}
        <Watermark text="Kfolio" className={watermarkClassName} />
      </div>
    </div>
  );
}
