import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { NavigationFeedback } from "@/components/navigation/navigation-feedback";
import { siteConfig } from "@/config/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Syed Mohiuddin | Full-Stack Developer & AI Builder",
    template: "%s | SyedOS",
  },

  description:
    "Professional portfolio of Syed Mohiuddin, a final-year Information Technology student building full-stack, AI-integrated, and cloud-ready software products.",

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.creator,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.creator,
  publisher: siteConfig.creator,

  keywords: [
    "Syed Mohiuddin",
    "SyedOS",
    "Full-Stack Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "PHP Developer",
    "MySQL Developer",
    "AI Developer",
    "AI Builder",
    "Software Engineering Portfolio",
    "Information Technology Student",
    "Web Developer India",
    "Cloud Computing",
    "DevOps",
  ],

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: "Syed Mohiuddin | Full-Stack Developer & AI Builder",
    description:
      "Explore Syed Mohiuddin's full-stack, AI-integrated, and cloud-ready software projects, skills, education, and professional journey.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Syed Mohiuddin | Full-Stack Developer & AI Builder",
    description:
      "Explore Syed Mohiuddin's advanced full-stack and AI software portfolio.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#020617",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-50 antialiased`}
      >
        <NavigationFeedback />

        <div className="flex min-h-screen flex-col">
          <Navbar />

          <div className="flex-1">
  {children}
</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}