import React from "react";
import { vt323 } from "../fonts/fonts";
import AsciiVerticalLine from "@/components/ui/AsciiVerticalLine";
import AsciiLine from "@/components/ui/AsciiLine";
import { benzinSemibold } from "../fonts/fonts";
import AsciiGridBackground from "../../components/ui/AsciiGridBackground";

export default function Peakfit() {
  const columns = 6;

  return (
    <div
      className={`${vt323.className} flex flex-row justify-center sm:justify-start h-full w-full`}
    >
      <AsciiVerticalLine />
      <div className="flex flex-col w-full relative">
        <AsciiLine char="-" />
        <div className="flex flex-row">
          <h1 className="text-7xl text-gray-400">PeakFit</h1>
        </div>
        <AsciiLine char="-" />

        {/* Content container with relative positioning and full height */}
        <div className="relative w-full h-full flex-1">
          {/* Background positioned absolutely behind content */}
          <div className="absolute inset-0 z-0">
            <AsciiGridBackground columns={columns} className="opacity-50" />
          </div>

          {/* Content with higher z-index */}
          <div className="relative z-10 p-4 h-full">
            <div className="text-gray-400 text-lg">Your content goes here</div>
            <div className="text-gray-300 text-sm mt-2">
              This content appears over the ASCII grid background
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
