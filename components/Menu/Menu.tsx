"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "About Me", content: "About" },
  { name: "Skills", content: "Skills" },
  { name: "Projects", content: "Projects" },
  { name: "Contact", content: "Contact" },
];

interface MenuProps {
  onMenuClick: (content: string) => void;
}

export default function Menu({ onMenuClick }: MenuProps) {
  const outerScrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  useEffect(() => {
    const container = outerScrollRef.current;
    if (!container) return;

    const updateMaxScroll = () => {
      const max = container.scrollWidth - container.clientWidth;
      setMaxScroll(max > 0 ? max : 1);
    };

    const handleScroll = () => setScrollPosition(container.scrollLeft);

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  // Single progress calculation
  const progress = Math.min((scrollPosition / maxScroll) * 5, 1);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth); // set after mount
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={outerScrollRef}
      className="h-full w-full bg-transparent overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent"
    >
      {/* Progress Track */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 w-64 h-3 bg-gray-900/80 rounded-full backdrop-blur-sm border border-gray-700/50 z-50">
        <div className="absolute inset-0 flex justify-between items-center px-2">
          {menuItems.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-500" />
          ))}
        </div>

        <motion.div
          className="absolute top-0 h-full w-1/4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"
          animate={{ left: `${(scrollPosition / maxScroll) * 75}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="absolute inset-0 bg-gray-500 rounded-full blur-md" />
          <div className="absolute inset-0 bg-white/20 rounded-full" />
        </motion.div>
      </div>

      <div
        className="flex h-full"
        style={{ width: `${menuItems.length * 60}vw` }}
      >
        <div
          className="flex flex-row justify-center items-center mx-auto my-auto gap-4 px-4 transition-all duration-300 w-full
                     h-[40%] sm:h-auto
                     sm:w-full"
          style={{
            height: windowWidth >= 640 ? `${70 - progress * 20}%` : undefined,
            width: windowWidth >= 640 ? `${100 - progress * 25}%` : undefined,
          }}
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => onMenuClick(item.content)}
              className="flex-1 min-w-0 h-full flex items-center justify-center 
                         text-cyan-400 text-sm sm:text-lg md:text-xl lg:text-2xl 
                         font-mono rounded-lg sm:rounded-xl 
                         bg-gray-500 hover:bg-cyan-400/10 hover:text-cyan-200 
                         transition-colors
                         mr-2 sm:mr-6 md:mr-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
