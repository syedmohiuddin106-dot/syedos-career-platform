export const siteConfig = {
  name: "SyedOS",

  fullName: "SyedOS — Intelligent Career Portfolio Platform",

  description:
    "An AI-powered, audience-adaptive, CMS-driven personal career platform.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en",

  creator: {
    name: "Syed Mohiuddin",
    email: "syedmohiuddin106@gmail.com",
    location: "Hanamkonda, Telangana",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/syedmohiuddin106",
    github: "https://github.com/syedmohiuddin106-dot",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  audienceModes: [
    {
      name: "Public",
      slug: "public",
    },
    {
      name: "Recruiter",
      slug: "recruiter",
    },
    {
      name: "Developer",
      slug: "developer",
    },
    {
      name: "Master’s",
      slug: "masters",
    },
    {
      name: "Research",
      slug: "research",
    },
    {
      name: "Client",
      slug: "client",
    },
  ],

  defaultFeatures: {
    aiAssistant: false,
    analytics: false,
    blog: false,
    contactForm: false,
    developerMode: true,
    githubIntegration: false,
    mastersMode: true,
    recruiterMode: true,
    research: false,
    threeDimensionalHero: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;