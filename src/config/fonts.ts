import {
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";

export const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const headingFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});