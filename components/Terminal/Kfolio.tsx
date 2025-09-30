// components/Terminal/Kfolio.tsx
import React, { memo, useMemo } from "react";
import Menu from "../Menu/Menu";
import SideNavbar from "../Navbars/SideNavbar";
import AsciiGridBackground from "../ui/AsciiGridBackground";
import { benzinSemibold } from "../../app/fonts/fonts";

// Memoized ASCII Background wrapper
const MemoizedAsciiBackground = memo(
  ({ columns, className }: { columns: number; className: string }) => (
    <AsciiGridBackground columns={columns} className={className} />
  )
);

// Memoized Watermark component
const Watermark = memo(
  ({ text, className }: { text: string; className: string }) => (
    <p className={className}>{text}</p>
  )
);

interface KfolioProps {
  onMenuClick: (content: string) => void;
}

export default function Kfolio({ onMenuClick }: KfolioProps) {
  const watermarkClassName = useMemo(
    () =>
      `absolute right-35 top-1/2 -translate-y-1/2 translate-x-1/2 -rotate-90 scale-y-[1.4] 
       inline-block w-fit h-fit leading-none text-[30vh] text-white/10 
       pointer-events-none select-none z-20 ${benzinSemibold.className}`,
    []
  );

  return (
    <div className="flex-1 font-mono text-[#eaeaea] bg-[#282828] min-h-screen flex flex-row">
      {/* Side Navbar */}
      <SideNavbar />

      <div className="flex flex-col flex-1 relative overflow-hidden">
        {/* ASCII Grid Background */}
        <div className="absolute inset-0 z-0">
          <MemoizedAsciiBackground columns={6} className="opacity-30" />
        </div>

        {/* Menu Container - Absolutely positioned to not affect layout */}
        <div className="absolute inset-0 z-10">
          <Menu onMenuClick={onMenuClick} />
        </div>

        {/* Watermark */}
        <Watermark text="Kfolio" className={watermarkClassName} />
      </div>
    </div>
  );
}
