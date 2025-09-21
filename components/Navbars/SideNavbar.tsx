// components/SideNavbar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";

const SideNavbar = () => {
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerHeight(rect.height);
      }
    };

    // Use ResizeObserver for more accurate height detection
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Fallback for initial load
    updateHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const lineHeight = 20;
  const totalLines = Math.floor(containerHeight / lineHeight);

  return (
    <div
      ref={containerRef}
      className="w-7 bg-[#282828] border-r border-gray-600 h-full"
    >
      <div className="h-full flex flex-col">
        {Array.from({ length: totalLines }, (_, index) => (
          <div
            key={index + 1}
            className="h-5 flex items-start justify-end pr-2 text-[0.9rem] font-mono text-gray-500 hover:text-gray-400 cursor-default flex-shrink-0"
            style={{ lineHeight: "20px" }} // Match Terminal
          >
            {index + 1}
          </div>
        ))}
        <div />
      </div>
    </div>
  );
};

export default SideNavbar;
