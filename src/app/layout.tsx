import type {
  Metadata,
  Viewport,
} from "next";

import {
  bodyFont,
  codeFont,
  headingFont,
} from "@/config/fonts";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Syed Mohiuddin | Full-Stack and AI Developer",
    template: "%s | Syed Mohiuddin",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.creator.name,

  keywords: [
    "Syed Mohiuddin",
    "Full-Stack Developer",
    "AI Developer",
    "Information Technology Student",
    "Next.js Developer",
    "TypeScript Developer",
    "PHP Developer",
    "Python Developer",
    "Software Engineer Portfolio",
    "SyedOS",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Syed Mohiuddin | Full-Stack and AI Developer",
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Syed Mohiuddin | Full-Stack and AI Developer",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f8fafc",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#020617",
    },
  ],
  colorScheme: "dark light",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang={siteConfig.locale}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body
        className={[
          bodyFont.variable,
          headingFont.variable,
          codeFont.variable,
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}