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

const primaryLinks = [
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

const secondaryLinks = [
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
    label: "Admin",
    href: "/admin",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="syedos-container relative py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label="SyedOS home"
              className={cn(
                "group inline-flex items-center gap-3",
                "rounded-xl",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-blue-500",
              )}
            >
              <span
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center",
                  "rounded-xl border border-blue-500/30",
                  "bg-blue-500/10 text-blue-300",
                  "transition duration-200",
                  "group-hover:border-cyan-400/50",
                  "group-hover:text-cyan-300",
                )}
              >
                <Sparkles
                  aria-hidden="true"
                  size={20}
                />
              </span>

              <span>
                <span className="block text-base font-semibold text-white">
                  SyedOS
                </span>

                <span className="block text-xs text-slate-500">
                  Intelligent Career Portfolio Platform
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
              A personal career platform built to present projects,
              technical skills, education, verified achievements, and
              AI-powered career intelligence through public and
              recruiter-focused experiences.
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

          <div>
            <p className="text-sm font-semibold text-white">
              Portfolio
            </p>

            <nav
              aria-label="Footer portfolio navigation"
              className="mt-5 grid gap-3"
            >
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group inline-flex w-fit items-center gap-2",
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
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Platform
            </p>

            <nav
              aria-label="Footer platform navigation"
              className="mt-5 grid gap-3"
            >
              {secondaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group inline-flex w-fit items-center gap-2",
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
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600">
              <span>
                © {currentYear} Syed Mohiuddin
              </span>

              <span className="inline-flex items-center gap-1.5">
                <MapPin
                  aria-hidden="true"
                  size={13}
                />

                Hanamkonda, Telangana
              </span>

              <span>
                Built with Next.js and TypeScript
              </span>
            </div>

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
    </footer>
  );
}