import React from "react";
import { pressStart2P } from "../../app/fonts/fonts"; // path to your fonts.ts
import { vt323 } from "../../app/fonts/fonts"; // path to your fonts.ts
import AsciiLine from "../ui/AsciiLine";

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
  const boxWidth = 28;

  const createLine = (char = "-") => char.repeat(boxWidth - 2);
  const createBorder = () => "+" + "-".repeat(boxWidth - 2) + "+";

  const padText = (text: string) => {
    const availableSpace = boxWidth - 2;
    if (text.length >= availableSpace) return text.substring(0, availableSpace);
    const padding = Math.floor((availableSpace - text.length) / 2);
    const extraPad = (availableSpace - text.length) % 2;
    return " ".repeat(padding) + text + " ".repeat(padding + extraPad);
  };

  return (
    <div className="text-[#eaeaea] bg-[#282828] p-2 sm:p-4 rounded-lg w-full max-w-sm mx-auto text-xs sm:text-sm">
      <div className="whitespace-pre text-center select-none">
        {/* Top border */}
        <div className="text-gray-500">{createBorder()}</div>

        {/* Title with Press Start 2P font */}
        <div className="text-white">
          <span className={`${vt323.className} text-xl`}>
            {padText("MENU")}
          </span>
        </div>

        {/* Middle border */}
        <div className="text-gray-500">{createBorder()}</div>

        {/* Menu items */}
        {menuItems.map((item, index) => (
          <div key={item.name}>
            <button
              onClick={() => onMenuClick(item.content)}
              className="block w-full transition-colors cursor-pointer text-cyan-400 hover:text-cyan-300 text-left justify-center items-center flex"
            >
              <span className={`${vt323.className} text-xl`}>
                {padText(item.name)}
              </span>
            </button>
            {index < menuItems.length - 1 && (
              <div className="text-gray-600">|{createLine()}|</div>
            )}
          </div>
        ))}

        {/* Bottom border */}
        <div className="text-gray-500">{createBorder()}</div>
      </div>
    </div>
  );
}
