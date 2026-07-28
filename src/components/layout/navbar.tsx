import { getNavbarData } from "@/lib/cms/get-navbar-data";

import { NavbarClient } from "./navbar-client";

function getMediaURL(value: unknown): string | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  if (
    "url" in value &&
    typeof value.url === "string" &&
    value.url.trim().length > 0
  ) {
    return value.url;
  }

  if (
    "filename" in value &&
    typeof value.filename === "string" &&
    value.filename.trim().length > 0
  ) {
    return `/media/${value.filename}`;
  }

  return null;
}

export async function Navbar() {
  const { profile, siteSettings } = await getNavbarData();

  const navigationItems =
    siteSettings?.navigationItems &&
    siteSettings.navigationItems.length > 0
      ? siteSettings.navigationItems.map((item) => ({
          label: item.label,
          href: item.url,
          openInNewTab: item.openInNewTab ?? false,
          highlighted: item.highlighted ?? false,
        }))
      : [
          {
            label: "Home",
            href: "/",
            openInNewTab: false,
            highlighted: false,
          },
          {
            label: "About",
            href: "/about",
            openInNewTab: false,
            highlighted: false,
          },
          {
            label: "Projects",
            href: "/projects",
            openInNewTab: false,
            highlighted: false,
          },
          {
            label: "Skills",
            href: "/skills",
            openInNewTab: false,
            highlighted: false,
          },
          {
            label: "Education",
            href: "/education",
            openInNewTab: false,
            highlighted: false,
          },
          {
            label: "Certifications",
            href: "/certifications",
            openInNewTab: false,
            highlighted: false,
          },
          {
            label: "Contact",
            href: "/contact",
            openInNewTab: false,
            highlighted: false,
          },
        ];

  const profileSocialLinks = profile?.socialLinks ?? [];
  const globalSocialLinks = siteSettings?.socialLinks ?? [];

  const profileGitHubURL = profileSocialLinks.find(
    (link) => link.platform === "github",
  )?.url;

  const globalGitHubURL = globalSocialLinks.find(
    (link) => link.platform === "github",
  )?.url;

  const githubURL =
    profileGitHubURL ??
    globalGitHubURL ??
    "https://github.com/syedmohiuddin106-dot";

  const resumeURL =
    getMediaURL(profile?.resume) ??
    "/resume/syed-mohiuddin-resume.pdf";

  const showResumeButton =
    siteSettings?.showResumeButton !== false &&
    siteSettings?.enableResumeDownload !== false &&
    Boolean(resumeURL);

  return (
    <NavbarClient
      siteName={siteSettings?.siteName ?? "SyedOS"}
      siteTagline={
        siteSettings?.siteTagline ??
        "Career Platform"
      }
      navigationItems={navigationItems}
      githubURL={githubURL}
      resumeURL={resumeURL}
      resumeButtonLabel={
        siteSettings?.resumeButtonLabel ?? "Resume"
      }
      showResumeButton={showResumeButton}
    />
  );
}