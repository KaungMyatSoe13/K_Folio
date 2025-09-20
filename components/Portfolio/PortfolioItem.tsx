import React from "react";
import type { PortfolioItem as PortfolioItemType } from "../../app/lib/types";

interface PortfolioItemProps {
  item: PortfolioItemType;
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 hover:border-gray-400 transition-colors">
      <h3 className="text-cyan-400 font-bold mb-2">{item.name}</h3>
      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 text-sm underline"
      >
        View Project
      </a>
    </div>
  );
}
