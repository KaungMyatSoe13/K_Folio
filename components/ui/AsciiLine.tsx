"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface LineProps {
  char?: string;
  className?: string;
}

export default function AsciiLine({ char = "=", className = "" }: LineProps) {
  const [line, setLine] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWidthRef = useRef<number>(0);

  const generateLine = useCallback(() => {
    if (!containerRef.current) return;

    // Get the actual container width
    const containerWidth = containerRef.current.offsetWidth;

    // Prevent infinite loops - only regenerate if width actually changed
    if (containerWidth === lastWidthRef.current || containerWidth < 50) {
      return;
    }

    lastWidthRef.current = containerWidth;

    // Dynamic calculation - test actual character width
    // Create a temporary element to measure actual character width
    const tempElement = document.createElement("span");
    tempElement.style.fontFamily = "monospace";
    tempElement.style.fontSize = "12px"; // text-xs
    tempElement.style.visibility = "hidden";
    tempElement.style.position = "absolute";
    tempElement.textContent = char;
    document.body.appendChild(tempElement);

    const actualCharWidth = tempElement.offsetWidth;
    document.body.removeChild(tempElement);

    // Calculate how many characters can fit with some safety margin
    const charCount = Math.floor(containerWidth / actualCharWidth) + 3;

    // Ensure reasonable bounds but allow dynamic scaling
    const finalCharCount = Math.max(5, Math.min(charCount, 500));

    setLine(char.repeat(finalCharCount));
  }, [char]);

  useEffect(() => {
    // Initial generation with delay
    const initialTimeout = setTimeout(() => {
      generateLine();
    }, 5);

    // Use ResizeObserver with proper debouncing
    const resizeObserver = new ResizeObserver(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        generateLine();
      }, 300); // Even longer delay
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [generateLine]);

  return (
    <div
      ref={containerRef}
      className={` font-mono text-xs leading-none overflow-hidden w-full ${className} `}
      style={{ maxWidth: "100%" }} // Force max width
    >
      {line}
    </div>
  );
}
