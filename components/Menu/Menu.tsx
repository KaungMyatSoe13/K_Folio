"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    name: "AboutMe",
    content: "About",
    design: (
      <div className="flex bg-blue-500/10 h-[40vh] w-full sm:h-full items-center justify-center overflow-hidden">
        <span
          className="font-bold leading-none"
          style={{ fontSize: "clamp(2rem, min(20vh, 15vw), 25rem)" }}
        >
          Who?
        </span>
      </div>
    ),
  },
  {
    name: "Projects",
    content: "Projects",
    design: (
      <div className="flex bg-blue-500/10 h-[40vh]  w-full sm:h-full items-center justify-center overflow-hidden">
        <span
          className="font-bold leading-none"
          style={{ fontSize: "clamp(2rem, min(20vh, 15vw), 25rem)" }}
        >
          Crafts
        </span>
      </div>
    ),
  },
  {
    name: "Contact",
    content: "Contact",
    design: (
      <div className="flex bg-blue-500/10  h-[40vh] w-full sm:h-full items-center justify-center overflow-hidden">
        <span
          className="font-bold leading-none"
          style={{ fontSize: "clamp(2rem, min(20vh, 15vw), 25rem)" }}
        >
          Find
        </span>
        <span
          className="font-bold leading-none"
          style={{ fontSize: "clamp(rem, min(10vh, 5vw), 15rem)" }}
        >
          Me
        </span>
      </div>
    ),
  },
];

interface MenuProps {
  onMenuClick: (content: string) => void;
}

export default function Menu({ onMenuClick }: MenuProps) {
  const outerScrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width after mount
    setWindowWidth(window.innerWidth);

    const container = outerScrollRef.current;
    if (!container) return;

    // for the scroll bar
    const updateMaxScroll = () => {
      const max = container.scrollWidth - container.clientWidth;
      setMaxScroll(max > 0 ? max : 1);
    };

    const handleScroll = () => setScrollPosition(container.scrollLeft);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateMaxScroll();
    };

    updateMaxScroll(); // for bar

    window.addEventListener("resize", handleResize);
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Single progress calculation - clamped between 0 and 1
  const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);

  return (
    <div
      ref={outerScrollRef}
      className="h-full w-full bg-transparent overflow-x-auto overflow-y-auto sm:overflow-y-hidden scrollbar-thin scrollbar-thumb-cyan-400/30 scrollbar-track-transparent"
    >
      {/* Progress Track */}
      <div className="hidden md:block fixed top-10 left-1/2 -translate-x-1/2 w-64 h-3 bg-gray-900/80 rounded-full backdrop-blur-sm border border-gray-700/50 z-50 overflow-hidden">
        <div className="absolute inset-0 flex justify-between items-center px-2">
          {menuItems.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-500" />
          ))}
        </div>

        <motion.div
          className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"
          animate={{
            x: `${progress * 300}%`, // 300% moves it across the remaining 75% of track
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="absolute inset-0 bg-gray-500 rounded-full blur-md" />
          <div className="absolute inset-0 bg-white/20 rounded-full" />
        </motion.div>
      </div>

      <div
        className="flex h-full sm:h-full"
        style={{
          width: windowWidth >= 768 ? `${menuItems.length * 60}vw` : "100%",
        }}
      >
        <div
          className="flex flex-col md:flex-row justify-center items-center mx-auto my-auto gap-4 px-4 py-8 sm:py-0 transition-all duration-300 w-full"
          style={{
            height: windowWidth >= 640 ? `${70 - progress * 20}%` : undefined,
            width: windowWidth >= 640 ? `${100 - progress * 25}%` : undefined,
          }}
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => onMenuClick(item.content)}
              className="flex-1 min-w-0 w-full md:w-auto h-80 sm:h-full flex items-center justify-center 
                rounded-lg sm:rounded-xl 
                bg-gray-500/10 hover:bg-cyan-400/10 hover:text-cyan-200 
                transition-colors
                sm:mr-6 md:mr-10 font-semibold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.design}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
