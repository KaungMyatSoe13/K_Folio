"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { LanguageProvider } from "../components/ui/LanguageContext";
import "./globals.css";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  // Wait a bit to ensure content is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoading && (
          <LoadingScreen onLoadComplete={() => setShowLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={
          !contentReady || showLoading
            ? "opacity-0"
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
