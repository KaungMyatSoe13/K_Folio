"use client";
import { useState, useEffect, useRef } from "react";

const TerminalText = `Welcome to K_folio.js - the terminal portfolio of Kaung Soe.
Type 'enter' or press Enter to access the menu.
Type 'clear' to clear the terminal.
`;

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
      setShowMenu(true);
    }
  }, [animationDone]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedInput = userInput.trim().toLowerCase();

      if (!trimmedInput || trimmedInput === "enter") {
        // Case 1 & 2: empty Enter OR typed "enter" - just show menu, no output
        setShowMenu(true);
      } else if (trimmedInput === "clear") {
        // Clear command
        setOutput([]);
        setShowMenu(false);
      } else {
        // Any other text - add to command history
        setOutput((prev) => [
          ...prev,
          `K@Portfolio$ ${trimmedInput}`,
          `Command not found: ${trimmedInput}`,
        ]);
        // Keep menu visible
        setShowMenu(true);
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
