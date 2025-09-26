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
  const [verticalCharsCount, setVerticalCharsCount] = React.useState(100);
  const [isClient, setIsClient] = React.useState(false);

  // Ensure we're on the client side before rendering random content
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate vertical characters needed based on container height - run only once
  React.useEffect(() => {
    if (!isClient) return;

    const updateVerticalChars = () => {
      if (contentRef.current) {
        const containerHeight = contentRef.current.offsetHeight;
        // Each character is approximately 12px tall (based on text-xs line-height)
        const charHeight = 12;
        const neededChars = Math.ceil(containerHeight / charHeight) + 5; // Add buffer
        setVerticalCharsCount(neededChars);
      }
    };

    // Only run once when component mounts
    updateVerticalChars();

    // Optional: Update on window resize (you can remove this if you want it completely static)
    const handleResize = () => updateVerticalChars();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  // Generate random horizontal lines for each column - ONLY ONCE
  const generateHorizontalLines = React.useCallback((columnIndex: number) => {
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
        id: `${columnIndex}-${currentPosition}-${char}`,
      });

      currentPosition += spacing;
    }

    return lines;
  }, []); // Empty dependency array - this callback never changes

  // Generate lines for all columns - ONLY ONCE when component mounts
  const allColumnLines = React.useMemo(() => {
    if (!isClient) return [];

    // Generate once and cache forever
    return Array.from({ length: columns }, (_, index) =>
      generateHorizontalLines(index)
    );
  }, [isClient, columns, generateHorizontalLines]); // Only regenerate if columns change

  // Show placeholder during SSR
  if (!isClient) {
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
            {/* Content area for each column */}
            <div className="h-full relative z-10">
              {children && React.Children.toArray(children)[index]}
            </div>
          </div>
        ))}
      </div>
    );
  }

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
              {Array.from({ length: verticalCharsCount }).map((_, i) => (
                <span key={i} className="block leading-none">
                  |
                </span>
              ))}
            </div>
          )}

          {/* Horizontal ASCII lines for this column - STATIC AFTER GENERATION */}
          {allColumnLines[index]?.map((line) => (
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
