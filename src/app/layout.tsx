import type {
  Metadata,
  Viewport,
} from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import {
  bodyFont,
  headingFont,
} from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000",
  ),

  title: {
    default:
      "Syed Mohiuddin | Full-Stack Developer",
    template: "%s | Syed Mohiuddin",
  },

  description:
    "SyedOS is an intelligent career portfolio platform presenting projects, technical skills, education, achievements, and AI-powered career experiences.",

  keywords: [
    "Syed Mohiuddin",
    "Full-Stack Developer",
    "Information Technology Student",
    "Next.js Developer",
    "TypeScript Developer",
    "PHP Developer",
    "MySQL Developer",
    "Artificial Intelligence",
    "SyedOS",
    "SyedAI Assistant",
    "CampusHire",
  ],

  authors: [
    {
      name: "Syed Mohiuddin",
    },
  ],

  creator: "Syed Mohiuddin",
  publisher: "Syed Mohiuddin",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "SyedOS",
    title:
      "Syed Mohiuddin | Full-Stack Developer",
    description:
      "Explore Syed Mohiuddin's projects, skills, education, achievements, and intelligent career portfolio platform.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Syed Mohiuddin | Full-Stack Developer",
    description:
      "Explore projects, skills, education, achievements, and AI-powered career experiences.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "dark",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={[
          headingFont.variable,
          bodyFont.variable,
          "min-h-screen bg-slate-950",
          "text-slate-100 antialiased",
        ].join(" ")}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <div className="min-w-0 flex-1">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}