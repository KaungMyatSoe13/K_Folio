"use client";
import React from "react";
import { useTerminal } from "../../app/hooks/useTerminal";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import Menu from "../Menu/Menu";
import PortfolioItem from "../Portfolio/PortfolioItem";
import type { PortfolioItem as PortfolioItemType } from "../../app/lib/types";

interface TerminalProps {
  onMenuClick: (content: string) => void;
}

export default function Terminal({ onMenuClick }: TerminalProps) {
  const {
    displayedText,
    userInput,
    output,
    showBoxes,
    showMenu,
    animationDone,
    currentPath,
    inputRef,
    handleInputChange,
    handleInputSubmit,
    portfolioItems,
  } = useTerminal(onMenuClick);

  return (
    <div className="flex-1 border-r border-t border-b border-gray-600 font-mono text-[#eaeaea] bg-[#282828] min-h-screen pl-4">
      <TerminalOutput displayedText={displayedText} output={output} />

      {showBoxes && (
        <div className="grid grid-cols-6 gap-4 mt-4">
          {portfolioItems.map((item: PortfolioItemType) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {showMenu && <Menu onMenuClick={onMenuClick} />}

      {animationDone && (
        <TerminalInput
          userInput={userInput}
          currentPath={currentPath}
          inputRef={inputRef}
          onInputChange={handleInputChange}
          onInputSubmit={handleInputSubmit}
          animationDone={animationDone}
        />
      )}

      {!animationDone && (
        <pre
          className="!m-0 !p-0 whitespace-pre-wrap pl-4"
          style={{ lineHeight: "20px", margin: 0, padding: 0 }}
        >
          <span className="blinking-cursor">|</span>
        </pre>
      )}
    </div>
  );
}
