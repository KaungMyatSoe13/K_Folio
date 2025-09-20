// components/Terminal.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  fileSystem,
  getCurrentNode,
  listDirectory,
  readFile,
} from "../app/lib/fileSystem";
import { portfolioItems } from "../app/data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Menu from "./Menu";
import type { PortfolioItem as PortfolioItemType } from "../app/lib/types";

const TerminalText = `Windows PowerShell Copyright (C) Microsoft Corporation.
All rights reserved. Install the latest PowerShell for new features and improvements!
https://aka.ms/PSWindows Loading personal and system profiles took 2116ms.
Press 'Enter' to start!
`;

interface TerminalProps {
  onMenuClick: (content: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onMenuClick }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [output, setOutput] = useState<string[]>([]);
  const [showBoxes, setShowBoxes] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [animationDone, setAnimationDone] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string[]>(["K@Portfolio"]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < TerminalText.length) {
        setDisplayedText((prev) => prev + TerminalText[index]);
        index++;
      } else {
        clearInterval(interval);
        setAnimationDone(true);
      }
    }, 5);
    return () => clearInterval(interval);
  }, []);

  // Focus input when animation is done
  useEffect(() => {
    if (animationDone && inputRef.current) {
      inputRef.current.focus();
    }
  }, [animationDone]);

  // Handle user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (userInput.trim()) {
        const commandParts = userInput.trim().split(" ");
        const command = commandParts[0].toLowerCase();
        const arg = commandParts[1];
        let response = "";

        const currentNode = getCurrentNode(fileSystem, currentPath);

        // Command handling
        if (command === "help") {
          response = "Available commands: help, projects, clear, ls, cd, cat";
          setShowMenu(false);
        } else if (command === "projects") {
          response = portfolioItems
            .map(
              (item: PortfolioItemType) =>
                `${item.name}: ${item.description} (${item.link})`
            )
            .join("\n");
          setShowBoxes(true);
          setShowMenu(false);
        } else if (command === "clear") {
          setOutput([]);
          setShowBoxes(false);
          setShowMenu(false);
          response = "";
        } else if (command === "ls" || command === "dir") {
          response = listDirectory(currentNode);
          setShowMenu(false);
        } else if (command === "cd") {
          if (!arg) {
            response = "cd: missing directory";
          } else if (arg === "..") {
            if (currentPath.length > 1) {
              setCurrentPath((prev) => prev.slice(0, -1));
              response = "";
            } else {
              response = "cd: already at root";
            }
            setShowMenu(false);
          } else {
            const node = getCurrentNode(fileSystem, [...currentPath, arg]);
            if (node.type === "directory") {
              setCurrentPath((prev) => [...prev, arg]);
              response = "";
            } else {
              response = `cd: ${arg}: Not a directory`;
            }
            setShowMenu(false);
          }
        } else if (command === "cat") {
          if (!arg) {
            response = "cat: missing file";
          } else {
            const node = getCurrentNode(fileSystem, [...currentPath, arg]);
            response = readFile(node);
          }
          setShowMenu(false);
        } else {
          response = `Command not recognized: ${command}`;
          setShowMenu(false);
        }

        if (response) {
          setOutput((prev) => [
            ...prev,
            `${currentPath[currentPath.length - 1]}$ ${userInput}\n${response}`,
          ]);
        }
        setUserInput("");
      } else {
        // Handle empty Enter key press
        setShowMenu(true);
        setOutput((prev) => [
          ...prev,
          `${currentPath[currentPath.length - 1]}$ \n`,
        ]);
      }
    }
  };

  return (
    <div className="flex-1 border-r border-t border-b border-gray-600 font-mono text-[#eaeaea] bg-[#282828] min-h-screen pl-4">
      <pre
        className="!m-0 !p-0 whitespace-pre-wrap"
        style={{ lineHeight: "20px", margin: 0, padding: 0 }}
      >
        {displayedText}
        {output.join("\n")}
      </pre>

      {showBoxes && (
        <div className="grid grid-cols-6 gap-4 mt-4">
          {portfolioItems.map((item: PortfolioItemType) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {showMenu && <Menu onMenuClick={onMenuClick} />}
      {animationDone && (
        <pre
          className="!m-0 !p-0 whitespace-pre-wrap pl-4"
          style={{ lineHeight: "20px", margin: 0, padding: 0 }}
        >
          <span className="inline-flex items-center">
            <span>{currentPath[currentPath.length - 1]}$ </span>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleInputSubmit}
              className="bg-transparent border-none outline-none text-[#eaeaea] font-mono w-auto min-w-[50px]"
              autoFocus={animationDone}
            />
          </span>
        </pre>
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
};

export default Terminal;
