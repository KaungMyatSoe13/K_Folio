"use client";
import { useState } from "react";
import Terminal from "@/components/Terminal/Terminal";
import SideTab from "@/components/Portfolio/SideTab";
import Navbar from "@/components/Navbars/Navbar";
import SideTabNavbar from "@/components/Navbars/SideTabNavbar";

interface Tab {
  id: string;
  name: string;
  content: string;
  type: "default" | "project";
}

interface MenuTab {
  id: string;
  name: string;
  content: string;
}

export default function Home() {
  const [showSideTab, setShowSideTab] = useState<boolean>(false);
  const [sideTabContent, setSideTabContent] = useState<string>("Projects");

  // Tab management state
  const [activeTab, setActiveTab] = useState("K_folio.js");
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "K_folio.js",
      name: "K_folio.js",
      content: "",
      type: "default",
    },
  ]);

  // Side tab management state
  const [sideTabMenuTabs, setSideTabMenuTabs] = useState<MenuTab[]>([]);
  const [activeSideTab, setActiveSideTab] = useState<string>("");

  const handleMenuClick = (content: string): void => {
    setSideTabContent(content);
    setShowSideTab(true);

    // Create or update side tab for the menu item
    const menuItems = [
      { name: "About Me", content: "About" },
      { name: "Skills", content: "Skills" },
      { name: "Projects", content: "Projects" },
      { name: "Contact", content: "Contact" },
    ];

    const menuItem = menuItems.find((item) => item.content === content);
    if (menuItem) {
      const tabId = content.toLowerCase();
      const newSideTab: MenuTab = {
        id: tabId,
        name: menuItem.name,
        content: menuItem.content,
      };

      // Add tab if it doesn't exist
      setSideTabMenuTabs((prev) => {
        const exists = prev.find((tab) => tab.id === tabId);
        if (!exists) {
          return [...prev, newSideTab];
        }
        return prev;
      });

      // Set as active tab
      setActiveSideTab(tabId);
    }
  };

  const handleCloseSideTab = (): void => {
    setShowSideTab(false);
    // Optionally clear side tabs when closing
    // setSideTabMenuTabs([]);
    // setActiveSideTab("");
  };

  // Side tab management functions
  const handleSideTabClick = (tabId: string) => {
    setActiveSideTab(tabId);
    const tab = sideTabMenuTabs.find((t) => t.id === tabId);
    if (tab) {
      setSideTabContent(tab.content);
    }
  };

  const handleSideTabClose = (tabId: string) => {
    if (sideTabMenuTabs.length === 1) {
      // If only one tab, close the entire side panel
      setShowSideTab(false);
      setSideTabMenuTabs([]);
      setActiveSideTab("");
      return;
    }

    const newTabs = sideTabMenuTabs.filter((tab) => tab.id !== tabId);
    setSideTabMenuTabs(newTabs);

    if (activeSideTab === tabId) {
      const newActiveTab = newTabs[newTabs.length - 1];
      setActiveSideTab(newActiveTab.id);
      setSideTabContent(newActiveTab.content);
    }
  };

  // Tab management functions
  const handleProjectClick = (projectName: string) => {
    const tabId = `${projectName.replace(/\s+/g, "_")}.js`;

    // Check if tab already exists
    const existingTab = tabs.find((tab) => tab.id === tabId);

    if (!existingTab) {
      // Get project details
      const projectDetails = getProjectDetails(projectName);

      const newTab: Tab = {
        id: tabId,
        name: tabId,
        content: generateProjectContent(projectName, projectDetails),
        type: "project",
      };

      setTabs((prev) => [...prev, newTab]);
    }

    setActiveTab(tabId);

    // 🔑 Close SideTab only on mobile
    if (window.innerWidth < 768) {
      setShowSideTab(false);
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleTabClose = (tabId: string) => {
    if (tabs.length === 1) return; // Don't close if it's the only tab

    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);

    if (activeTab === tabId) {
      setActiveTab(newTabs[newTabs.length - 1].id);
    }
  };

  const getProjectDetails = (projectName: string) => {
    const projects = [{ name: "", platform: "", tech: "" }];

    return projects.find((p) => p.name === projectName);
  };

  const generateProjectContent = (projectName: string, details: any) => {
    return `// ${projectName} - Project Details`;
  };

  return (
    <main className="max-h-screen flex">
      {/* Desktop & larger: side by side */}
      <div className="hidden md:flex w-full flex-col">
        <div className="flex flex-row">
          {/* Left side - Terminal section */}
          <div className="flex flex-col flex-1">
            <Navbar
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={handleTabClick}
              onTabClose={handleTabClose}
            />
            <div className="flex flex-1 flex-row">
              <Terminal
                onMenuClick={handleMenuClick}
                tabs={tabs}
                activeTab={activeTab}
              />
            </div>
          </div>

          {/* Right side - SideTab with its own navbar */}
          {showSideTab && (
            <div className="flex flex-col w-full md:w-[50%] lg:w-[45%] xl:w-[50%] bg-gray-900">
              <SideTabNavbar
                onClose={handleCloseSideTab}
                menuTabs={sideTabMenuTabs}
                activeTab={activeSideTab}
                onTabClick={handleSideTabClick}
                onTabClose={handleSideTabClose}
              />
              <SideTab
                content={sideTabContent}
                onProjectClick={handleProjectClick}
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile: show one at a time */}
      <div className="flex md:hidden w-full flex-col">
        {/* Swap Navbar based on SideTab state */}
        {!showSideTab ? (
          <Navbar
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={handleTabClick}
            onTabClose={handleTabClose}
          />
        ) : (
          <SideTabNavbar
            onClose={handleCloseSideTab}
            menuTabs={sideTabMenuTabs}
            activeTab={activeSideTab}
            onTabClick={handleSideTabClick}
            onTabClose={handleSideTabClose}
          />
        )}

        <div className="flex flex-1 flex-row">
          {!showSideTab ? (
            <Terminal
              onMenuClick={handleMenuClick}
              tabs={tabs}
              activeTab={activeTab}
            />
          ) : (
            <SideTab
              content={sideTabContent}
              onProjectClick={handleProjectClick}
            />
          )}
        </div>
      </div>
    </main>
  );
}
