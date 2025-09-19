import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SideNavbar from "@/components/SideNavbar";

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
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <SideNavbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
