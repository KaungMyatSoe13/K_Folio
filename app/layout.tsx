import type { Metadata } from "next";
import Navbar from "@/components/Navbars/Navbar";
import SideNavbar from "@/components/Navbars/SideNavbar";
import { shareTechMono } from "./fonts/fonts";
import { LanguageProvider } from "../components/ui/LanguageContext"; // Updated import path

import "./globals.css";

export const metadata: Metadata = {
  title: "K_folio",
  description: "A modern portfolio template built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={shareTechMono.className}>
      <body>
        <LanguageProvider>
          <div className="flex">
            <main className="flex-1">{children}</main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
