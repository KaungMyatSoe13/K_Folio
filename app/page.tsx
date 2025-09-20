"use client";
import { useState } from "react";
import Terminal from "@/components/Terminal/Terminal";
import SideTab from "@/components/SideTab/SideTab";

export default function Home() {
  const [showSideTab, setShowSideTab] = useState<boolean>(false);
  const [sideTabContent, setSideTabContent] = useState<string>("hi");

  const handleMenuClick = (content: string): void => {
    setSideTabContent(content);
    setShowSideTab(true);
  };

  const handleCloseSideTab = (): void => {
    setShowSideTab(false);
    setSideTabContent("hi");
  };

  return (
    <main className="min-h-screen flex">
      <Terminal onMenuClick={handleMenuClick} />
      {showSideTab && (
        <SideTab content={sideTabContent} onClose={handleCloseSideTab} />
      )}
    </main>
  );
}
