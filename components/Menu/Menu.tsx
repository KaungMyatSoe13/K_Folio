import React from "react";

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
        <div className="text-gray-500">|{createLine()}|</div>
        <div className="text-white">|{padText("MENU")}|</div>
        <div className="text-gray-500">|{createLine()}|</div>

        {menuItems.map((item, index) => (
          <div key={item.name}>
            <button
              onClick={() => onMenuClick(item.content)}
              className="block w-full hover:bg-gray-700 transition-colors cursor-pointer text-cyan-400 hover:text-cyan-300 text-left justify-center items-center flex"
            >
              <span className="text-gray-500">|</span>
              <span>{padText(item.name)}</span>
              <span className="text-gray-500">|</span>
            </button>
            {index < menuItems.length - 1 && (
              <div className="text-gray-600">|{createLine()}|</div>
            )}
          </div>
        ))}

        <div className="text-gray-500">|{createLine()}|</div>
      </div>
    </div>
  );
}
