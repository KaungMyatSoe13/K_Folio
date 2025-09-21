"use client";
import { useState, useEffect, useRef } from "react";

const TerminalText = `Press 'Enter' to start!`;

export const useTerminal = () => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [output, setOutput] = useState<string[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [animationDone, setAnimationDone] = useState<boolean>(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (userInput.trim() === "clear") {
        // Clear command - this should be checked FIRST
        setOutput([]);
        setShowMenu(false);
      } else if (userInput.trim()) {
        // Any other text - show command not found
        setOutput((prev) => [
          ...prev,
          `K@Portfolio$ ${userInput}`,
          `Command not found: ${userInput}`,
        ]);
        setShowMenu(false);
      } else {
        // Empty Enter - show menu
        setShowMenu(true);
        setOutput((prev) => [...prev, `K@Portfolio$ `]);
      }
      setUserInput("");
    }
  };

  return {
    displayedText,
    userInput,
    output,
    showMenu,
    animationDone,
    inputRef,
    handleInputChange,
    handleInputSubmit,
  };
};
