import React from "react";

interface MenuItemProps {
  item: {
    name: string;
    content: string;
  };
  onMenuClick: (content: string) => void;
  padText: (text: string) => string;
}

export default function MenuItem({
  item,
  onMenuClick,
  padText,
}: MenuItemProps) {
  return (
    <button
      onClick={() => onMenuClick(item.content)}
      className="block w-full hover:bg-gray-700 transition-colors cursor-pointer text-cyan-400 hover:text-cyan-300 text-left justify-center items-center flex"
    >
      <span className="text-gray-500">|</span>
      <span>{padText(item.name)}</span>
      <span className="text-gray-500">|</span>
    </button>
  );
}
