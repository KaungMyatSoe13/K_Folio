"use client";
import { useState, useEffect, useRef } from "react";
import {
  fileSystem,
  getCurrentNode,
  listDirectory,
  readFile,
} from "../../app/lib/fileSystem";
import { portfolioItems } from "../../app/data/portfolio";
import type { PortfolioItem as PortfolioItemType } from "../../app/lib/types";
import { handleCommand } from "../../components/Terminal/CommandHandler";

const TerminalText = `Windows PowerShell Copyright (C) Microsoft Corporation.
All rights reserved. Install the latest PowerShell for new features and improvements!
https://aka.ms/PSWindows Loading personal and system profiles took 2116ms.
Press 'Enter' to start!
`;

export const useTerminal = (onMenuClick: (content: string) => void) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [output, setOutput] = useState<string[]>([]);
  const [showBoxes, setShowBoxes] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [animationDone, setAnimationDone] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string[]>(["K@Portfolio"]);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

        const currentNode = getCurrentNode(fileSystem, currentPath);

        const result = handleCommand(
          command,
          arg,
          currentNode,
          currentPath,
          portfolioItems,
          {
            setShowMenu,
            setShowBoxes,
            setOutput,
            setCurrentPath,
            output,
            currentPath,
          }
        );

        if (result.response) {
          setOutput((prev) => [
            ...prev,
            `${currentPath[currentPath.length - 1]}$ ${userInput}\n${
              result.response
            }`,
          ]);
        }

        if (result.newPath) {
          setCurrentPath(result.newPath);
        }

        if (result.showBoxes !== undefined) {
          setShowBoxes(result.showBoxes);
        }

        if (result.showMenu !== undefined) {
          setShowMenu(result.showMenu);
        }

        if (result.clearOutput) {
          setOutput([]);
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

  return {
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
    setShowMenu,
    setShowBoxes,
    setOutput,
  };
};
