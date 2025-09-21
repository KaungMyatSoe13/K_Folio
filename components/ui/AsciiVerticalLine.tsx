"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface VerticalLineProps {
  char?: string;
  className?: string;
  side?: "left" | "right";
}

export default function AsciiVerticalLine({
  char = "/",
  className = "",
  side = "left",
}: VerticalLineProps) {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastHeightRef = useRef<number>(0);

  const generateLines = useCallback(() => {
    if (!containerRef.current) return;

    // Get the actual container height
    const containerHeight = containerRef.current.offsetHeight;

    // Only regenerate if height actually changed significantly
    if (
      Math.abs(containerHeight - lastHeightRef.current) < 5 ||
      containerHeight < 20
    ) {
      return;
    }

    lastHeightRef.current = containerHeight;

    // Use computed style to get actual line height
    const computedStyle = window.getComputedStyle(containerRef.current);
    const fontSize = parseFloat(computedStyle.fontSize);
    const lineHeightValue = computedStyle.lineHeight;

    let actualLineHeight = 16; // fallback
    if (lineHeightValue !== "normal") {
      actualLineHeight = lineHeightValue.includes("px")
        ? parseFloat(lineHeightValue)
        : fontSize * parseFloat(lineHeightValue);
    }

    const lineCount = Math.floor(containerHeight / actualLineHeight);

    // Generate array of characters
    const newLines = Array(Math.max(0, lineCount)).fill(char);
    setLines(newLines);
  }, [char]);

  useEffect(() => {
    // Initial generation with delay
    const initialTimeout = setTimeout(() => {
      generateLines();
    }, 100);

    // Use ResizeObserver to watch for height changes
    const resizeObserver = new ResizeObserver((entries) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        generateLines();
      }, 150);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Also listen to window resize as backup
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(generateLines, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [generateLines]);

  return (
    <div
      ref={containerRef}
      className={`font-mono text-xs leading-4 flex flex-col h-full justify-start ${
        side === "right" ? "items-end" : "items-start"
      } ${className}`}
    >
      {lines.map((line, index) => (
        <div key={index} className="h-4 flex items-center leading-4">
          {line}
        </div>
      ))}
    </div>
  );
}
