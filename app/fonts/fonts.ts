// app/fonts.ts
import { VT323 } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import localFont from "next/font/local";

export const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
});

export const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
});

export const shareTechMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
});

export const benzinSemibold = localFont({
  src: "./benzin-semibold.ttf", // your TTF file
  weight: "600", // semibold
  style: "normal",
  variable: "--font-benzin-semibold",
});

export const alansans = localFont({
  src: "./AlanSans-VariableFont_wght.ttf", // your TTF file
  weight: "600", // semibold
  style: "normal",
  variable: "--font-alan-sans",
});

export const playwrite = localFont({
  src: "./PlaywriteDEGrundGuides-Regular.ttf", // your TTF file
  weight: "400", // regular
  style: "normal",
  variable: "--font-playwrite",
});
