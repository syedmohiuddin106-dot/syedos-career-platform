import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/projects",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/projects/syedos",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects/syedai-assistant",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects/campushire",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/skills",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/education",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/certificates",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
] as const satisfies ReadonlyArray<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}