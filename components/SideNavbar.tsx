// components/SideNavbar.tsx
"use client";
import React, { useState, useEffect } from "react";

const SideNavbar = () => {
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      const screenHeight = window.innerHeight;
      const navbarHeight = 26; // h-6.5 = 26px
      setContainerHeight(screenHeight - navbarHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const lineHeight = 20;
  const totalLines = Math.floor(containerHeight / lineHeight);

  return (
    <div
      className="w-7 bg-[#282828] border-r border-gray-600"
      style={{ height: `${containerHeight}px` }}
    >
      <div className="h-full flex flex-col">
        {Array.from({ length: totalLines }, (_, index) => (
          <div
            key={index + 1}
            className="h-5 flex items-center justify-end pr-2 text-[0.9rem] font-mono text-gray-500 hover:text-gray-400 cursor-default"
            style={{ lineHeight: "20px" }} // Match Terminal
          >
            {index + 1}
          </div>
        ))}
        <div className="flex-1" />
      </div>
    </div>
  );
};

export default SideNavbar;
