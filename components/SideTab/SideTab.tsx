import React from "react";

interface SideTabProps {
  content: string;
  onClose?: () => void;
}

export default function SideTab({ content, onClose }: SideTabProps) {
  return (
    <div className="w-[50%] bg-blue-500 flex flex-col">
      {/* Header with close button */}
      {onClose && (
        <div className="flex justify-between items-center p-4 bg-blue-600">
          <h2 className="text-white text-xl font-bold">{content}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-2xl font-bold"
          >
            ×
          </button>
        </div>
      )}

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center text-white text-2xl">
        {content === "About" && (
          <div className="p-8 text-center">
            <h3 className="text-3xl mb-4">About Me</h3>
            <p className="text-lg">
              Welcome to my portfolio! I'm a developer passionate about creating
              amazing web experiences.
            </p>
          </div>
        )}

        {content === "Skills" && (
          <div className="p-8 text-center">
            <h3 className="text-3xl mb-4">My Skills</h3>
            <div className="grid grid-cols-2 gap-4 text-base">
              <div>React</div>
              <div>Next.js</div>
              <div>TypeScript</div>
              <div>Tailwind CSS</div>
            </div>
          </div>
        )}

        {content === "Projects" && (
          <div className="p-8 text-center">
            <h3 className="text-3xl mb-4">My Projects</h3>
            <p className="text-lg">
              Check out my latest work and portfolio pieces.
            </p>
          </div>
        )}

        {content === "Contact" && (
          <div className="p-8 text-center">
            <h3 className="text-3xl mb-4">Contact Me</h3>
            <div className="text-lg space-y-2">
              <p>Email: your.email@example.com</p>
              <p>GitHub: @yourusername</p>
              <p>LinkedIn: /in/yourprofile</p>
            </div>
          </div>
        )}

        {!["About", "Skills", "Projects", "Contact"].includes(content) && (
          <div>{content}</div>
        )}
      </div>
    </div>
  );
}
