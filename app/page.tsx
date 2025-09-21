"use client";
import { useState } from "react";
import Terminal from "@/components/Terminal/Terminal";
import SideTab from "@/components/Portfolio/SideTab";
import Navbar from "@/components/Navbars/Navbar";
import SideNavbar from "@/components/Navbars/SideNavbar";
import SideTabNavbar from "@/components/Navbars/SideTabNavbar";

interface Tab {
  id: string;
  name: string;
  content: string;
  type: "default" | "project";
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

  const handleMenuClick = (content: string): void => {
    setSideTabContent(content);
    setShowSideTab(true);
  };

  const handleCloseSideTab = (): void => {
    setShowSideTab(false);
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
    const projects = [
      { name: "Arthur G", platform: "WooCommerce", tech: "Next.js + PHP" },
      {
        name: "Assembly Talent",
        platform: "WordPress + JobAdder",
        tech: "Next.js + PHP",
      },
      {
        name: "Black Fridye",
        platform: "Shopify",
        tech: "HTML/SCSS/JS + Liquid",
      },
      {
        name: "Bloomingdales",
        platform: "WooCommerce + MYOB",
        tech: "React + PHP",
      },
      { name: "Junglefy", platform: "Craft", tech: "Next.js" },
    ];

    return projects.find((p) => p.name === projectName);
  };

  const generateProjectContent = (projectName: string, details: any) => {
    return `// ${projectName} - Project Details
// ================================

const project = {
  name: "${projectName}",
  platform: "${details?.platform || "N/A"}",
  technologies: "${details?.tech || "N/A"}",
  status: "Completed",
  
  description: \`
    ${projectName} is a modern web application built with cutting-edge 
    technologies and best practices. This project showcases advanced 
    development techniques and user experience design.
  \`,
  
  features: [
    "Responsive Design",
    "Performance Optimized", 
    "Modern UI/UX",
    "Cross-browser Compatible",
    "SEO Optimized"
  ],
  
  technical_highlights: {
    frontend: "${details?.tech?.split(" + ")[0] || "Modern Framework"}",
    backend: "${details?.tech?.split(" + ")[1] || "Server Technology"}",
    platform: "${details?.platform || "Custom Platform"}"
  },
  
  deployment: {
    status: "Live",
    environment: "Production",
    last_updated: new Date().toISOString().split('T')[0]
  }
};

// Project initialization
console.log(\`🚀 Loading \${project.name}...\`);
console.log(\`📋 Platform: \${project.platform}\`);
console.log(\`⚡ Tech Stack: \${project.technologies}\`);
console.log(\`✅ Status: \${project.status}\`);

`;
  };

  return (
    <main className="max-h-screen flex">
      {/* Desktop & larger: side by side */}
      <div className="hidden md:flex w-full flex-col">
        <div className="flex flex-row">
          {/* Left side - SideNavbar + Terminal section */}
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
            <div className="flex flex-col w-full md:w-[50%] lg:w-[45%] xl:w-[40%]">
              <SideTabNavbar onClose={handleCloseSideTab} />
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
          <SideTabNavbar onClose={handleCloseSideTab} />
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
