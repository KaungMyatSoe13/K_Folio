"use client";
import React from "react";
import AsciiBackground from "./AsciiBackground";

export default function Hero() {
  return (
    <div className="bg-[#282828] text-[#eaeaea] min-h-screen overflow-hidden relative font-mono flex">
      {/* Main Content Area */}
      <div className="flex-1 relative">
        {/* ASCII Background */}
        <AsciiBackground />

        {/* Content Overlay */}
        <div className="relative z-10 p-8 flex flex-col justify-center min-h-screen">
          <div className="text-gray-300 text-lg font-mono text-center md:text-left"></div>
        </div>
      </div>
    </div>
  );
}
