"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Sun, Moon, X, Minimize2, Square, ChevronRight } from "lucide-react";

interface Tab {
  id: string;
  name: string;
  type: "default" | "project";
}

interface NavbarProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  onTabClose: (tabId: string) => void;
}

const Navbar = ({ tabs, activeTab, onTabClick, onTabClose }: NavbarProps) => {
  const [showOverflow, setShowOverflow] = useState(false);
  const [visibleTabCount, setVisibleTabCount] = useState(10); // Start with high number
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOverflow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Calculate how many tabs can fit
  const calculateVisibleTabs = useCallback(() => {
    if (!navbarRef.current || !tabsContainerRef.current) return;

    const navbarWidth = navbarRef.current.offsetWidth;
    const rightControlsWidth = 100; // Approximate width of right-side controls
    const overflowButtonWidth = 40; // Width of overflow button
    const tabWidth = 140; // Average tab width (min-w-[120px] + padding)

    const availableWidth = navbarWidth - rightControlsWidth;
    const maxTabsWithoutOverflow = Math.floor(availableWidth / tabWidth);
    const maxTabsWithOverflow =
      Math.floor((availableWidth - overflowButtonWidth) / tabWidth) - 1;

    // Always show K_folio tab
    const kFolioTab = tabs.find((tab) => tab.type === "default");
    const projectTabs = tabs.filter((tab) => tab.type === "project");

    if (projectTabs.length === 0) {
      setVisibleTabCount(1); // Only K_folio
      return;
    }

    // If all tabs fit without overflow button
    if (tabs.length <= maxTabsWithoutOverflow) {
      setVisibleTabCount(tabs.length);
    } else {
      // Need overflow button - show K_folio + as many project tabs as possible
      const maxProjectTabs = maxTabsWithOverflow - 1; // -1 for K_folio

      setVisibleTabCount(1 + Math.max(1, maxProjectTabs)); // At least K_folio + 1 project
      console.log(tabs);
    }
  }, [tabs]);

  // Recalculate on window resize or tab changes
  useEffect(() => {
    calculateVisibleTabs();

    const handleResize = () => calculateVisibleTabs();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [calculateVisibleTabs, tabs.length]);

  const handleTabClick = (tabId: string) => {
    onTabClick(tabId);
    setShowOverflow(false);
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onTabClose(tabId);
  };

  // Separate K_folio and project tabs
  const kFolioTab = tabs.find((tab) => tab.type === "default");
  const projectTabs = tabs.filter((tab) => tab.type === "project");

  // Always show K_folio + some project tabs
  const visibleTabs = kFolioTab ? [kFolioTab] : [];
  const visibleProjectTabs = projectTabs.slice(0, visibleTabCount - 1);
  visibleTabs.push(...visibleProjectTabs);

  // Overflow tabs are the remaining project tabs
  const overflowTabs = projectTabs.slice(visibleTabCount - 1);
  const hasOverflow = overflowTabs.length > 0;

  return (
    <div
      ref={navbarRef}
      className="w-full bg-[#282828] border-b border-gray-600 sticky top-0 z-50"
    >
      {/* Main tab bar */}
      <div className="flex items-center justify-between h-6.5">
        {/* File tabs */}
        <div
          ref={tabsContainerRef}
          className="flex items-center overflow-hidden relative flex-1"
        >
          {/* Visible tabs */}
          {visibleTabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex items-center text-[0.80rem] font-[500] font-mono cursor-pointer group min-w-[120px] max-w-[200px] transition-colors duration-150 hover:bg-[#3a3a3a] ${
                activeTab === tab.id
                  ? "bg-[#3a3a3a] text-[#eaeaea]"
                  : "bg-[#323232] text-[#eaeaea]"
              }`}
            >
              {/* File name */}
              <div className="h-6.5 pr-2  justify-center items-center flex flex-1">
                <span className="truncate w-full h-full flex items-center justify-center text-center ">
                  {tab.name}
                </span>

                {/* Close button - only show for project tabs */}
                {tab.type === "project" && (
                  <button
                    onClick={(e) => closeTab(tab.id, e)}
                    className=" p-0.5 rounded hover:bg-red-500 hover:text-white sm:opacity-0 group-hover:opacity-100 transition-all duration-150"
                    title={`Close ${tab.name}`}
                  >
                    <X size={10} />
                  </button>
                )}

                {/* Active tab indicator */}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
                )}
              </div>
            </div>
          ))}

          {/* Overflow button */}
          {hasOverflow && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowOverflow(!showOverflow)}
                className="flex items-center justify-center h-6.5 px-2 bg-[#323232] text-[#eaeaea] hover:bg-[#3a3a3a] transition-colors duration-150 border-l border-gray-600"
                title={`${overflowTabs.length} more project tabs`}
              >
                <ChevronRight
                  size={12}
                  className={`transform transition-transform duration-200 ${
                    showOverflow ? "rotate-90" : "rotate-0"
                  }`}
                />
                <span className="ml-1 text-xs">+{overflowTabs.length}</span>
              </button>

              {/* Overflow dropdown */}
              {showOverflow && (
                <div className="absolute top-full left-0 bg-[#323232] border border-gray-600 shadow-lg z-60 min-w-[200px] max-h-[300px] overflow-y-auto">
                  <div className="px-3 py-1 text-xs text-gray-400 font-mono border-b border-gray-600">
                    Project Tabs
                  </div>
                  {overflowTabs.map((tab) => (
                    <div
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`flex items-center justify-between px-3 py-2 text-[0.80rem] font-mono cursor-pointer hover:bg-[#3a3a3a] transition-colors duration-150 ${
                        activeTab === tab.id
                          ? "bg-[#3a3a3a] text-cyan-400"
                          : "text-[#eaeaea]"
                      }`}
                    >
                      <span className="truncate flex-1">{tab.name}</span>

                      {/* Close button for overflow tabs */}
                      <button
                        onClick={(e) => closeTab(tab.id, e)}
                        className="ml-2 p-1 rounded hover:bg-red-500 hover:text-white transition-colors duration-150"
                        title={`Close ${tab.name}`}
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-1 px-2 flex-shrink-0">
          {/* Theme toggle icon only */}
          <button
            className="p-1.5 rounded hover:bg-gray-600 text-[#eaeaea] transition-colors duration-150"
            title="Theme toggle"
          >
            <Sun size={16} />
          </button>

          {/* Window controls */}
          <div className="flex items-center space-x-1 ml-2">
            <button
              className="p-1 rounded hover:bg-red-500 hover:text-white text-[#eaeaea] transition-colors duration-150"
              title="Close"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
