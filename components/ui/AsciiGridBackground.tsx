import React from "react";

interface AsciiGridBackgroundProps {
  columns?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function AsciiGridBackground({
  columns = 6,
  className = "",
  children,
}: AsciiGridBackgroundProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Generate random horizontal lines for each column
  const generateHorizontalLines = (columnIndex: number) => {
    const chars = ["+", "-", "*", "="];
    const lines = [];
    let currentPosition = 0;

    while (currentPosition < 95) {
      // Generate lines up to 95vh to avoid overflow
      const char = chars[Math.floor(Math.random() * chars.length)];
      const spacing = Math.floor(Math.random() * 8) + 3; // Random spacing between 3-10

      lines.push({
        char,
        position: currentPosition,
        id: `${columnIndex}-${Math.random()}`,
      });

      currentPosition += spacing;
    }

    return lines;
  };

  // Generate lines for all columns
  const [allColumnLines] = React.useState(() =>
    Array.from({ length: columns }, (_, index) =>
      generateHorizontalLines(index)
    )
  );

  return (
    <div
      ref={contentRef}
      className={`w-full h-full relative ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "0",
      }}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          className="relative h-full border-r border-gray-800/30 last:border-r-0"
        >
          {/* Vertical ASCII line on the right side of border */}
          {index < columns - 1 && (
            <div
              className="absolute right-0 top-0 bottom-0 w-px flex flex-col justify-start items-center text-gray-400/40 text-xs overflow-hidden"
              style={{
                fontFamily: "monospace",
                transform: "translateX(1px)",
              }}
            >
              {Array.from({ length: 100 }).map((_, i) => (
                <span key={i} className="block leading-none">
                  |
                </span>
              ))}
            </div>
          )}

          {/* Horizontal ASCII lines for this column */}
          {allColumnLines[index].map((line) => (
            <div
              key={line.id}
              className="absolute left-0 right-0 text-gray-400/30 text-xs overflow-hidden pointer-events-none"
              style={{
                fontFamily: "monospace",
                top: `${line.position}%`,
                height: "12px",
                lineHeight: "12px",
              }}
            >
              <div className="whitespace-nowrap">
                {Array.from({ length: 100 }).map((_, i) => (
                  <span key={i}>{line.char}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Content area for each column */}
          <div className="h-full relative z-10">
            {children && React.Children.toArray(children)[index]}
          </div>
        </div>
      ))}
    </div>
  );
}
