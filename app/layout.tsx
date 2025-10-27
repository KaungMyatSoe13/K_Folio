"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { LanguageProvider } from "../components/ui/LanguageContext";
import "./globals.css";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);

  // Force hide loading after timeout as safety
  useEffect(() => {
    const forceHideTimer = setTimeout(() => {
      setShowLoading(false);
    }, 5000); // 5 seconds max
    return () => clearTimeout(forceHideTimer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoading && (
          <LoadingScreen onLoadComplete={() => setShowLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={
          showLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="flex">
            <main className="flex-1">
              <LayoutContent>{children}</LayoutContent>
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
