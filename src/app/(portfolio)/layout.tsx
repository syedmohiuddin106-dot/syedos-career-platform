import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { RouteProgress } from "@/components/navigation/route-progress";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),

  title: {
    default: "Syed Mohiuddin | Full-Stack Developer and AI Builder",
    template: "%s | Syed Mohiuddin",
  },

  description:
    "The professional portfolio of Syed Mohiuddin, an Information Technology student focused on full-stack development, artificial intelligence, cloud technologies, and practical software engineering.",

  applicationName: "SyedOS",

  authors: [
    {
      name: "Syed Mohiuddin",
    },
  ],

  creator: "Syed Mohiuddin",
  publisher: "Syed Mohiuddin",

  keywords: [
    "Syed Mohiuddin",
    "Full-Stack Developer",
    "Software Engineer",
    "Information Technology Student",
    "Next.js Developer",
    "TypeScript Developer",
    "PHP Developer",
    "MySQL Developer",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "SyedOS",
    "SyedAI Assistant",
    "CampusHire",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "SyedOS",
    title: "Syed Mohiuddin | Full-Stack Developer and AI Builder",
    description:
      "Explore Syed Mohiuddin's software projects, technical skills, education, certificates, AI work, and professional career journey.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SyedOS — Syed Mohiuddin's professional career platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Syed Mohiuddin | Full-Stack Developer and AI Builder",
    description:
      "Explore full-stack projects, artificial-intelligence work, technical skills, education, and career achievements.",
    images: ["/twitter-image"],
  },

  icons: {
    icon: [
      {
        url: "/icon",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon",
        type: "image/png",
      },
    ],
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

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#020617",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-50 antialiased`}
      >
        <Suspense fallback={null}>
          <RouteProgress />
        </Suspense>

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