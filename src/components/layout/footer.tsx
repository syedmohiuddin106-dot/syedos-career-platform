import Link from "next/link";

import {
  ArrowUpRight,
  Download,
  ExternalLink,
  GitBranch,
  Link as LinkIcon,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/utils";

type FooterLink = Readonly<{
  label: string;
  href: string;
}>;

type FooterLinkGroupProps = Readonly<{
  title: string;
  ariaLabel: string;
  links: readonly FooterLink[];
}>;

const portfolioLinks: readonly FooterLink[] = [
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
    label: "Skills",
    href: "/skills",
  },
];

const profileLinks: readonly FooterLink[] = [
  {
    label: "Education",
    href: "/education",
  },
  {
    label: "Certificates",
    href: "/certificates",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Interface Lab",
    href: "/ui-lab",
  },
];

const projectLinks: readonly FooterLink[] = [
  {
    label: "SyedOS",
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -bottom-48 left-[12%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative py-10 sm:py-12 lg:py-14">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="min-w-0 sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label="Go to SyedOS homepage"
              className={cn(
                "group inline-flex items-center gap-3 rounded-xl",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-blue-500",
              )}
            >
              <span
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center",
                  "rounded-xl border border-blue-500/30",
                  "bg-blue-500/10 text-blue-300",
                  "transition duration-200",
                  "group-hover:border-cyan-400/50",
                  "group-hover:bg-cyan-400/10",
                  "group-hover:text-cyan-300",
                )}
              >
                <Sparkles
                  aria-hidden="true"
                  size={20}
                />
              </span>

              <span className="min-w-0">
                <span className="block text-base font-semibold text-white">
                  SyedOS
                </span>

                <span className="block text-xs leading-5 text-slate-500">
                  Intelligent Career Portfolio Platform
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              A professional career platform presenting full-stack
              projects, technical skills, education, learning progress,
              and AI-assisted software-development experience.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge
                variant="success"
                dot
              >
                Available for opportunities
              </Badge>

              <Badge variant="outline">
                Hanamkonda, Telangana
              </Badge>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton
                href="mailto:syedmohiuddin106@gmail.com"
                variant="secondary"
                size="small"
                leftIcon={<Mail size={16} />}
                ariaLabel="Email Syed Mohiuddin"
              >
                Email
              </LinkButton>

              <LinkButton
                href="https://github.com/syedmohiuddin106-dot"
                external
                variant="secondary"
                size="small"
                leftIcon={<GitBranch size={16} />}
                rightIcon={<ExternalLink size={14} />}
                ariaLabel="Open Syed Mohiuddin's GitHub profile"
              >
                GitHub
              </LinkButton>

              <LinkButton
                href="https://www.linkedin.com/in/syedmohiuddin106"
                external
                variant="secondary"
                size="small"
                leftIcon={<LinkIcon size={16} />}
                rightIcon={<ExternalLink size={14} />}
                ariaLabel="Open Syed Mohiuddin's LinkedIn profile"
              >
                LinkedIn
              </LinkButton>
            </div>
          </div>

          <FooterLinkGroup
            title="Portfolio"
            ariaLabel="Footer portfolio navigation"
            links={portfolioLinks}
          />

          <FooterLinkGroup
            title="Profile"
            ariaLabel="Footer profile navigation"
            links={profileLinks}
          />

          <FooterLinkGroup
            title="Projects"
            ariaLabel="Footer project navigation"
            links={projectLinks}
          />
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 sm:mt-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
              <span>
                © {currentYear} Syed Mohiuddin
              </span>

              <span className="inline-flex items-center gap-1.5">
                <MapPin
                  aria-hidden="true"
                  size={13}
                />

                Hanamkonda, Telangana, India
              </span>

              <span>
                Built with Next.js and TypeScript
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex min-h-10 items-center justify-center gap-2",
                  "rounded-xl border border-slate-800 px-4",
                  "text-sm font-medium text-slate-400",
                  "transition duration-200",
                  "hover:border-slate-700",
                  "hover:bg-slate-900",
                  "hover:text-white",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-blue-500",
                )}
              >
                Contact

                <ArrowUpRight
                  aria-hidden="true"
                  size={15}
                />
              </Link>

              <LinkButton
                href="/resume/syed-mohiuddin-resume.pdf"
                download
                variant="ghost"
                size="small"
                leftIcon={<Download size={15} />}
                ariaLabel="Download Syed Mohiuddin's resume"
              >
                Download Resume
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  ariaLabel,
  links,
}: FooterLinkGroupProps) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-semibold text-slate-300">
        {title}
      </p>

      <nav
        aria-label={ariaLabel}
        className="mt-4 grid gap-3"
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group inline-flex w-fit items-center gap-2 rounded-md",
              "text-sm text-slate-500",
              "transition duration-200",
              "hover:text-white",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-blue-500",
            )}
          >
            <span>{item.label}</span>

            <ArrowUpRight
              aria-hidden="true"
              size={14}
              className="opacity-0 transition duration-200 group-hover:opacity-100"
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}