"use client";
import React from "react";
import { Sun, Moon, X, Minimize2, Square } from "lucide-react";

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
  const handleTabClick = (tabId: string) => {
    onTabClick(tabId);
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onTabClose(tabId);
  };

  return (
    <div className="w-full bg-[#282828] border-b border-gray-600 sticky top-0 z-50">
      {/* Main tab bar */}
      <div className="flex items-center justify-between h-6.5">
        {/* File tabs */}
        <div className="flex items-center overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="relative flex items-center text-[0.80rem] font-[500] font-mono cursor-pointer group min-w-[120px] max-w-[200px] bg-[#323232] text-[#eaeaea] transition-colors duration-150 hover:bg-[#3a3a3a]"
            >
              {/* File name */}
              <div className="h-6.5 px-3 justify-center items-center flex flex-1">
                <span className="truncate w-full h-full flex items-center justify-center text-center">
                  {tab.name}
                </span>

                {/* Close button - show on hover or if it's a project tab */}
                {(tab.type === "project" || tabs.length > 1) && (
                  <button
                    onClick={(e) => closeTab(tab.id, e)}
                    className="ml-1 p-0.5 rounded hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-150"
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
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-1 px-2">
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
              className="p-1 rounded hover:bg-gray-600 text-[#eaeaea] transition-colors duration-150"
              title="Minimize"
            >
              <Minimize2 size={12} />
            </button>
            <button
              className="p-1 rounded hover:bg-gray-600 text-[#eaeaea] transition-colors duration-150"
              title="Maximize"
            >
              <Square size={12} />
            </button>
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
