import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { getFooterData } from "@/lib/cms/get-footer-data";

type FooterLink = {
  label: string;
  href: string;
};

type ConnectItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  external: boolean;
  showArrow: boolean;
};

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

function mergeUniqueLinks(
  primaryLinks: FooterLink[],
  fallbackLinks: FooterLink[],
): FooterLink[] {
  const links = new Map<string, FooterLink>();

  for (const link of [...primaryLinks, ...fallbackLinks]) {
    const normalizedHref = link.href.trim();

    if (!normalizedHref) {
      continue;
    }

    if (!links.has(normalizedHref)) {
      links.set(normalizedHref, {
        label: link.label,
        href: normalizedHref,
      });
    }
  }

  return Array.from(links.values());
}

function cleanTechnologyCredit(value: string): string {
  return value
    .replace(/^technology credit text:\s*/i, "")
    .trim();
}

export async function Footer() {
  const { profile, projects, siteSettings } =
    await getFooterData();

  const currentYear = new Date().getFullYear();

  const siteName =
    siteSettings?.siteName?.trim() || "SyedOS";

  const siteTagline =
    siteSettings?.siteTagline?.trim() ||
    "Career Platform and Professional Portfolio";

  const footerDescription =
    siteSettings?.footerDescription?.trim() ||
    siteSettings?.siteDescription?.trim() ||
    "A professional career platform showcasing full-stack projects, technical skills, experience, and career goals.";

  const location =
    profile?.location?.trim() ||
    "Hanamkonda, Telangana, India";

  const preferredNavigationLinks: FooterLink[] = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const preferredHrefs = new Set(
    preferredNavigationLinks.map((item) => item.href),
  );

  const cmsFooterLinks: FooterLink[] =
    siteSettings?.footerLinks
      ?.map((item) => ({
        label: item.label,
        href: item.url,
      }))
      .filter((item) =>
        preferredHrefs.has(item.href),
      ) ?? [];

  const footerLinks = mergeUniqueLinks(
    cmsFooterLinks,
    preferredNavigationLinks,
  ).slice(0, 5);

  const defaultProjectLinks: FooterLink[] = [
    {
      label: "SyedOS Career Platform",
      href: "/projects/syedos",
    },
    {
      label: "SyedAI Assistant",
      href: "/projects/syedai-assistant",
    },
    {
      label: "CampusHire",
      href: "/projects/campushire",
    },
  ];

  const cmsProjectLinks: FooterLink[] = projects.map(
    (project) => ({
      label: project.title,
      href: `/projects/${project.slug}`,
    }),
  );

  const projectLinks = mergeUniqueLinks(
    cmsProjectLinks,
    defaultProjectLinks,
  ).slice(0, 3);

  const profileSocialLinks =
    profile?.socialLinks ?? [];

  const globalSocialLinks =
    siteSettings?.socialLinks ?? [];

  const githubURL =
    profileSocialLinks.find(
      (link) => link.platform === "github",
    )?.url ??
    globalSocialLinks.find(
      (link) => link.platform === "github",
    )?.url ??
    "https://github.com/syedmohiuddin106-dot";

  const linkedinURL =
    profileSocialLinks.find(
      (link) => link.platform === "linkedin",
    )?.url ??
    globalSocialLinks.find(
      (link) => link.platform === "linkedin",
    )?.url ??
    "https://www.linkedin.com/in/syedmohiuddin106";

  const contactEmail =
    siteSettings?.contactEmail?.trim() ||
    "syedmohiuddin106@gmail.com";

  const emailURL = `mailto:${contactEmail}`;

  const resumeURL =
    getMediaURL(profile?.resume) ??
    "/resume/syed-mohiuddin-resume.pdf";

  const showResume =
    siteSettings?.enableResumeDownload !== false &&
    Boolean(resumeURL);

  const copyrightText =
    siteSettings?.copyrightText?.trim() ||
    `© ${currentYear} Syed Mohiuddin. All rights reserved.`;

  const showBuiltWith =
    siteSettings?.showBuiltWith !== false;

  const builtWithText = cleanTechnologyCredit(
    siteSettings?.builtWithText?.trim() ||
      "Built with Next.js, TypeScript, Payload CMS, PostgreSQL, and Docker.",
  );

  const connectItems: ConnectItem[] = [
    {
      label: "Email",
      href: emailURL,
      icon: (
        <Mail
          aria-hidden="true"
          size={17}
          className="shrink-0"
        />
      ),
      external: false,
      showArrow: false,
    },
    {
      label: "LinkedIn",
      href: linkedinURL,
      icon: (
        <ExternalLink
          aria-hidden="true"
          size={17}
          className="shrink-0"
        />
      ),
      external: true,
      showArrow: true,
    },
    {
      label: "GitHub",
      href: githubURL,
      icon: (
        <GitBranch
          aria-hidden="true"
          size={17}
          className="shrink-0"
        />
      ),
      external: true,
      showArrow: true,
    },
    ...(showResume
      ? [
          {
            label: "Resume",
            href: resumeURL,
            icon: (
              <Download
                aria-hidden="true"
                size={17}
                className="shrink-0"
              />
            ),
            external: true,
            showArrow: false,
          },
        ]
      : []),
  ];

  const footerRowCount = Math.max(
    footerLinks.length,
    projectLinks.length,
    connectItems.length,
  );

  return (
    <footer className="border-t border-slate-800/90 bg-slate-950">
      <div className="syedos-container py-10 sm:py-12 lg:py-14">
        <div className="grid gap-x-12 gap-y-10 xl:grid-cols-[1.15fr_2fr] xl:items-start">
          {/* SyedOS profile section */}
          <section
            aria-labelledby="footer-profile-heading"
            className="min-w-0 xl:pr-8"
          >
            <div className="flex items-start gap-5">
              <span
                aria-hidden="true"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/40 bg-blue-500/10 text-cyan-300"
              >
                <Sparkles size={23} />
              </span>

              <div className="min-w-0 pt-1">
                <p
                  id="footer-profile-heading"
                  className="text-2xl font-bold leading-none tracking-tight text-white"
                >
                  {siteName}
                </p>

                <p className="mt-3 max-w-72 text-[0.72rem] font-semibold uppercase leading-[1.55] tracking-[0.18em] text-slate-500">
                  {siteTagline}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-[31rem] text-sm leading-7 text-slate-400">
              {footerDescription}
            </p>

            <p className="mt-5 inline-flex items-start gap-3 text-sm leading-6 text-slate-500">
              <MapPin
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-cyan-400"
              />

              <span>{location}</span>
            </p>
          </section>

          {/* Desktop and tablet aligned footer columns */}
          <div className="hidden min-w-0 grid-cols-3 gap-x-10 md:grid">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Navigation
            </p>

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Projects
            </p>

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Connect
            </p>

            {Array.from({
              length: footerRowCount,
            }).map((_, index) => {
              const navigationItem =
                footerLinks[index];

              const projectItem =
                projectLinks[index];

              const connectItem =
                connectItems[index];

              return (
                <div
                  key={`footer-row-${index}`}
                  className="contents"
                >
                  <div className="mt-3 flex min-h-8 items-center">
                    {navigationItem ? (
                      <Link
                        href={navigationItem.href}
                        className="inline-flex rounded-md text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        {navigationItem.label}
                      </Link>
                    ) : null}
                  </div>

                  <div className="mt-3 flex min-h-8 items-center">
                    {projectItem ? (
                      <Link
                        href={projectItem.href}
                        className="inline-flex rounded-md text-sm leading-6 text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        {projectItem.label}
                      </Link>
                    ) : null}
                  </div>

                  <div className="mt-3 flex min-h-8 items-center">
                    {connectItem ? (
                      <a
                        href={connectItem.href}
                        target={
                          connectItem.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          connectItem.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex w-fit items-center gap-3 rounded-lg text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        {connectItem.icon}

                        {connectItem.label}

                        {connectItem.showArrow ? (
                          <ArrowUpRight
                            aria-hidden="true"
                            size={14}
                          />
                        ) : null}
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile stacked footer columns */}
          <div className="grid gap-9 md:hidden">
            <nav aria-labelledby="mobile-footer-navigation-heading">
              <p
                id="mobile-footer-navigation-heading"
                className="text-sm font-bold uppercase tracking-[0.16em] text-white"
              >
                Navigation
              </p>

              <ul className="mt-4 grid gap-3">
                {footerLinks.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="inline-flex rounded-md text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="mobile-footer-projects-heading">
              <p
                id="mobile-footer-projects-heading"
                className="text-sm font-bold uppercase tracking-[0.16em] text-white"
              >
                Projects
              </p>

              <ul className="mt-4 grid gap-3">
                {projectLinks.map((item) => (
                  <li key={`${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="inline-flex rounded-md text-sm leading-6 text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section aria-labelledby="mobile-footer-connect-heading">
              <p
                id="mobile-footer-connect-heading"
                className="text-sm font-bold uppercase tracking-[0.16em] text-white"
              >
                Connect
              </p>

              <div className="mt-4 grid gap-3">
                {connectItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex w-fit items-center gap-3 rounded-lg text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    {item.icon}

                    {item.label}

                    {item.showArrow ? (
                      <ArrowUpRight
                        aria-hidden="true"
                        size={14}
                      />
                    ) : null}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-slate-800 pt-6 text-sm leading-6 text-slate-500 sm:grid-cols-2 sm:items-center">
          <p>{copyrightText}</p>

          {showBuiltWith ? (
            <p className="sm:text-right">
              {builtWithText}
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}