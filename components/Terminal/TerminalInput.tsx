import React from "react";

interface TerminalInputProps {
  userInput: string;
  currentPath: string[];
  inputRef: React.RefObject<HTMLInputElement | null>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  animationDone: boolean;
}

export default function TerminalInput({
  userInput,
  currentPath,
  inputRef,
  onInputChange,
  onInputSubmit,
  animationDone,
}: TerminalInputProps) {
  return (
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
          onChange={onInputChange}
          onKeyDown={onInputSubmit}
          className="bg-transparent border-none outline-none text-[#eaeaea] font-mono w-auto min-w-[50px]"
          autoFocus={animationDone}
        />
      </span>
    </pre>
  );
}
