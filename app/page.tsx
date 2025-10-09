"use client";
import { useState } from "react";
import Terminal from "@/components/Terminal/Terminal";
import SideTab from "@/components/Portfolio/SideTab";
import Navbar from "@/components/Navbars/Navbar";
import SideTabNavbar from "@/components/Navbars/SideTabNavbar";
import SlideInMenu from "@/components/Menu/SlideInMenu";

interface Tab {
  id: string;
  name: string;
  type: "default" | "project";
}

interface MenuTab {
  id: string;
  name: string;
  content: string;
}

export default function Home() {
  const [showSideTab, setShowSideTab] = useState<boolean>(false);
  const [sideTabContent, setSideTabContent] = useState<string>("");
  const [isProjectActive, setIsProjectActive] = useState<boolean>(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState<boolean>(false);

  // Tab management state
  const [activeTab, setActiveTab] = useState("K_folio.js");
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "K_folio.js",
      name: "K_folio.js",
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
      const newTab: Tab = {
        id: tabId,
        name: tabId,
        type: "project",
      };

      setTabs((prev) => [...prev, newTab]);
    }

    setActiveTab(tabId);
    setIsProjectActive(true);
    setShowSideTab(false);

    // Close SideTab on mobile
    if (window.innerWidth < 768) {
      setShowSideTab(false);
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    // Check if clicked tab is a project tab
    const clickedTab = tabs.find((tab) => tab.id === tabId);
    if (clickedTab?.type === "project") {
      setIsProjectActive(true);
      setShowSideTab(false);
    } else {
      setIsProjectActive(false);
      setShowFloatingMenu(false);
    }
  };

  const handleTabClose = (tabId: string) => {
    if (tabs.length === 1) return;

    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);

    if (activeTab === tabId) {
      const newActiveTab = newTabs[newTabs.length - 1];
      setActiveTab(newActiveTab.id);

      // Check if the new active tab is a project
      if (newActiveTab.type === "project") {
        setIsProjectActive(true);
        setShowSideTab(false);
      } else {
        setIsProjectActive(false);
        setShowFloatingMenu(false);
      }
    }
  };

  return (
    <main className="max-h-screen flex">
      {/* Desktop & larger: side by side */}
      <div className="hidden md:flex w-full flex-col">
        <div className="flex flex-row h-screen">
          {/* Left side - Terminal section */}
          <div className="flex flex-col flex-1 h-full overflow-y-auto">
            <Navbar
              tabs={tabs}
              activeTab={activeTab}
              onTabClick={handleTabClick}
              onTabClose={handleTabClose}
            />

            <div className="flex-1 flex flex-row">
              <Terminal
                onMenuClick={handleMenuClick}
                tabs={tabs}
                activeTab={activeTab}
              />
            </div>
          </div>

          {/* Right side - SideTab with its own navbar */}
          {showSideTab && !isProjectActive && (
            <div
              className={`flex flex-col h-full w-full overflow-y-hidden md:w-[50%] lg:w-[45%] ${
                sideTabContent === "Projects" ? "xl:w-[40%]" : "xl:w-[30%]"
              } ${
                sideTabContent === "About" ? "xl:w-[50%]" : "xl:w-[30%]"
              } bg-gray-900`}
            >
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

          {/* Slide-in menu when project is active */}
          {isProjectActive && (
            <SlideInMenu
              onProjectClick={handleProjectClick}
              showFloatingMenu={showFloatingMenu}
              setShowFloatingMenu={setShowFloatingMenu}
            />
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

        {/* Mobile slide-in menu when project is active */}
        {isProjectActive && (
          <SlideInMenu
            onProjectClick={handleProjectClick}
            showFloatingMenu={showFloatingMenu}
            setShowFloatingMenu={setShowFloatingMenu}
          />
        )}
      </div>
    </main>
  );
}
