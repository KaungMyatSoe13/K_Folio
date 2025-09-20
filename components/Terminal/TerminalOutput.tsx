import React from "react";

interface TerminalOutputProps {
  displayedText: string;
  output: string[];
}

export default function TerminalOutput({
  displayedText,
  output,
}: TerminalOutputProps) {
  return (
    <pre
      className="!m-0 !p-0 whitespace-pre-wrap"
      style={{ lineHeight: "20px", margin: 0, padding: 0 }}
    >
      {displayedText}
      {output.join("\n")}
    </pre>
  );
}
