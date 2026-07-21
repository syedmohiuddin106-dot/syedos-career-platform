function normalizeUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

function resolveSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    return normalizeUrl(configuredUrl);
  }

  const vercelProductionUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (vercelProductionUrl) {
    return normalizeUrl(
      `https://${vercelProductionUrl}`,
    );
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "SyedOS",
  description:
    "The professional portfolio and intelligent career platform of Syed Mohiuddin.",
  url: resolveSiteUrl(),
  creator: "Syed Mohiuddin",
} as const;