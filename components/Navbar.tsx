"use client";
import React, { useState } from "react";
import { Sun, Moon, X, Minimize2, Square } from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("fine-thought.js");

  const tabs = [{ name: "fine-thought.js", isActive: true }];

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const closeTab = (tabName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Closing tab: ${tabName}`);
  };

  return (
    <div className="w-full bg-[#282828] border-b border-gray-600">
      {/* Main tab bar */}
      <div className="flex items-center justify-between h-6.5">
        {/* File tabs */}
        <div className="flex items-center overflow-x-auto">
          {tabs.map((tab, index) => (
            <div
              key={tab.name}
              onClick={() => handleTabClick(tab.name)}
              className="relative flex items-center text-[0.80rem] font-[500] font-mono cursor-pointer group min-w-[120px] max-w-[200px] bg-[#323232] text-[#eaeaea] transition-colors duration-150"
            >
              {/* File name */}
              <div className="h-6.5 px-3 justify-center items-center flex flex-1">
                <span className="truncate w-full h-full flex items-center justify-center text-center">
                  {tab.name}
                </span>
                {/* Active tab indicator */}
                {activeTab === tab.name && (
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
