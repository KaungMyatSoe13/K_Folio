"use client";
import React from "react";
import { useTerminal } from "../../app/hooks/useTerminal";
import Menu from "../Menu/Menu";
import SideNavbar from "../Navbars/SideNavbar";

interface Tab {
  id: string;
  name: string;
  content: string;
  type: "default" | "project";
}

interface TerminalProps {
  onMenuClick: (content: string) => void;
  tabs: Tab[];
  activeTab: string;
  onProjectClick?: (projectName: string, projectContent: string) => void;
}

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
    inputRef,
    handleInputChange,
    handleInputSubmit,
  } = useTerminal();

  // Get the current tab's content
  const currentTab = tabs.find((tab) => tab.id === activeTab);
  const isDefaultTab = currentTab?.type === "default";

  // Check if we're on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // If it's a project tab
  if (currentTab?.type === "project") {
    // On mobile, redirect to SideTab instead of showing content here
    if (isMobile && onProjectClick) {
      // Trigger the SideTab to show this project
      onProjectClick(currentTab.name, currentTab.content);
      return null; // Don't render anything here
    }

    // On desktop, show the project content as before
    return (
      <div className="flex flex-1 border-r border-t border-b border-gray-600 font-mono text-[#eaeaea] bg-[#282828] max-h-screen">
        <div
          className="h-full overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-1 flex-row">
            <pre className="whitespace-pre-wrap text-sm leading-6 flex flex-row gap-2">
              <SideNavbar />
              {currentTab.content}
            </pre>
          </div>
        </div>
      </div>
    );
  }

  // Default terminal view for K_folio.js tab
  return (
    <div className="flex-1 border-r border-t border-b border-gray-600 font-mono text-[#eaeaea] bg-[#282828] bg-blue-500 min-h-screen flex flex-row">
      <SideNavbar />
      <div className="flex flex-col flex-1">
        <pre
          className="!m-0 !p-0 whitespace-pre-wrap"
          style={{ lineHeight: "20px", margin: 0, padding: 0 }}
        >
          {displayedText}
          {output.length > 0 && "\n"}
          {output.join("\n")}
        </pre>
        {showMenu && <Menu onMenuClick={onMenuClick} />}
        {animationDone && (
          <pre
            className="!m-0 !p-0 -wrap pl-4"
            style={{ lineHeight: "20px", margin: 0, padding: 0 }}
          >
            <span className="inline-flex items-center">
              <span>K@Portfolio$ </span>
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleInputSubmit}
                className="bg-transparent border-none outline-none text-[#eaeaea] font-mono w-auto min-w-[50px]"
                autoFocus={animationDone}
              />
            </span>
          </pre>
        )}
      </div>

      {!animationDone && (
        <pre
          className="!m-0 !p-0 whitespace-pre-wrap pl-4"
          style={{ lineHeight: "20px", margin: 0, padding: 0 }}
        >
          <span className="blinking-cursor">|</span>
        </pre>
      )}
    </div>
  );
}
