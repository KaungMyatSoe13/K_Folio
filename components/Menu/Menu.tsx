import React from "react";
import MenuItem from "./MenuItem";

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
  // Calculate box width based on available space - no horizontal scroll
  const calculateBoxWidth = () => {
    // Use a safe width that works in most containers
    return 28; // Fixed safe width
  };

  const boxWidth = calculateBoxWidth();

  const createLine = (char = "-") => char.repeat(boxWidth - 2);
  const padText = (text: string) => {
    const availableSpace = boxWidth - 2;
    if (text.length >= availableSpace) {
      return text.substring(0, availableSpace);
    }
    const padding = Math.floor((availableSpace - text.length) / 2);
    const extraPad = (availableSpace - text.length) % 2;
    return " ".repeat(padding) + text + " ".repeat(padding + extraPad);
  };

  return (
    <div className="font-mono text-[#eaeaea] bg-[#282828] p-2 sm:p-4 rounded-lg w-full max-w-sm mx-auto text-xs sm:text-sm">
      <div className="whitespace-pre text-center">
        {/* Top border */}
        <div className="text-gray-500">|{createLine()}|</div>

        {/* Header */}
        <div className="text-white">|{padText("MENU")}|</div>

        {/* Separator */}
        <div className="text-gray-500">|{createLine()}|</div>

        {/* Menu items */}
        {menuItems.map((item, index) => (
          <div key={item.name}>
            <MenuItem item={item} onMenuClick={onMenuClick} padText={padText} />

            {/* Separator line between items (not after last item) */}
            {index < menuItems.length - 1 && (
              <div className="text-gray-600">|{createLine()}|</div>
            )}
          </div>
        ))}

        {/* Bottom border */}
        <div className="text-gray-500">|{createLine()}|</div>
      </div>
    </div>
  );
}
