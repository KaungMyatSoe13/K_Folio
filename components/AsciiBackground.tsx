"use client";
import React, { useEffect, useState } from "react";

export default function AsciiBackground() {
  const [asciiLines, setAsciiLines] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ cols: 80, rows: 10 });

  const generateColumnPattern = (cols: number, rows: number) => {
    const grid = Array.from({ length: rows }, () => Array(cols).fill(" "));

    // Place sidebar at leftmost position (columns 0 and 1)
    for (let row = 0; row < rows; row++) {
      grid[row][0] = "/";
      grid[row][1] = "/";
    }

    // Determine number of columns based on screen width
    const isLargeScreen = window.innerWidth >= 768;
    const numColumns = isLargeScreen ? 6 : 5;

    // Calculate equal spacing for vertical lines in remaining space after sidebar
    const sidebarWidth = 2;
    const remainingCols = cols - sidebarWidth;
    const sectionWidth = remainingCols / (numColumns + 1); // +1 to place lines between sections

    // Calculate positions for vertical lines
    const verticalLinePositions = [];
    for (let i = 1; i <= numColumns; i++) {
      const linePos = Math.round(sidebarWidth + i * sectionWidth);
      verticalLinePositions.push(linePos);
    }

    // Define column boundaries for horizontal lines
    const columnBoundaries = [];
    for (let i = 0; i < numColumns; i++) {
      const startX = i === 0 ? sidebarWidth : verticalLinePositions[i - 1] + 1;
      const endX =
        i === numColumns - 1 ? cols - 1 : verticalLinePositions[i] - 1;
      columnBoundaries.push({ startX, endX });
    }

    // Add random horizontal lines in each column section - INCREASED FREQUENCY
    const lineChars = ["-", "=", "*", "+", "#", "~"];
    columnBoundaries.forEach((column) => {
      let currentRow = Math.floor(Math.random() * 3) + 1; // Start earlier (1-3 instead of 2-6)

      while (currentRow < rows - 1) {
        // Go closer to bottom (rows-1 instead of rows-2)
        if (Math.random() < 0.8) {
          // Increased from 0.5 to 0.8 (80% chance instead of 50%)
          const lineChar =
            lineChars[Math.floor(Math.random() * lineChars.length)];
          const numLines = Math.random() < 0.4 ? 2 : 1; // Slightly more double lines (40% vs 30%)

          for (
            let lineOffset = 0;
            lineOffset < numLines && currentRow + lineOffset < rows;
            lineOffset++
          ) {
            const rowIndex = currentRow + lineOffset;
            for (let col = column.startX; col <= column.endX; col++) {
              grid[rowIndex][col] = lineChar;
            }
          }
          currentRow += numLines;
        }
        const spacing = Math.floor(Math.random() * 3) + 1; // Reduced spacing from (0-5)+1 to (0-2)+1
        currentRow += spacing;
      }
    });

    // Place vertical column barriers
    verticalLinePositions.forEach((col) => {
      for (let row = 0; row < rows; row++) {
        if (col < cols) {
          grid[row][col] = "/";
        }
      }
    });

    return grid.map((row) => row.join(""));
  };

  const calculateDimensions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const charWidth = 6;
    const lineHeight = 20;
    const sidebarWidth = 28;
    const navbarHeight = 26;

    const cols = Math.floor((screenWidth - sidebarWidth) / charWidth);
    const rows = Math.floor((screenHeight - navbarHeight) / lineHeight);

    setDimensions({
      cols: Math.max(cols, 100),
      rows: Math.max(rows, 20),
    });
  };

  useEffect(() => {
    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  useEffect(() => {
    const lines = generateColumnPattern(dimensions.cols, dimensions.rows);
    setAsciiLines(lines);
  }, [dimensions]);

  return (
    <div
      className="absolute font-mono text-xs select-none pointer-events-none"
      style={{
        left: 0,
        top: 0,
        lineHeight: "20px",
        width: "100%",
        height: "100%",
      }}
    >
      {asciiLines.map((line, idx) => (
        <div
          key={idx}
          className="whitespace-pre h-5 flex items-center"
          style={{
            color: "#888",
            paddingLeft: "8px",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}
