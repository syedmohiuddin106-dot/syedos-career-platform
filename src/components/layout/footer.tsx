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

const quickLinks = [
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
] as const;

const projectLinks = [
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
] as const;

const githubUrl =
  "https://github.com/syedmohiuddin106-dot";

const linkedinUrl =
  "https://www.linkedin.com/in/syedmohiuddin106";

const emailUrl =
  "mailto:syedmohiuddin106@gmail.com";

const resumeUrl =
  "/resume/syed-mohiuddin-resume.pdf";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/90 bg-slate-950">
      <div className="syedos-container py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <section
            aria-labelledby="footer-profile-heading"
            className="sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-500/10 text-cyan-300"
              >
                <Sparkles size={20} />
              </span>

              <div>
                <h2
                  id="footer-profile-heading"
                  className="text-base font-bold text-white"
                >
                  SyedOS
                </h2>

                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Career Platform
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              The professional portfolio and intelligent career platform
              of Syed Mohiuddin, focused on full-stack development,
              artificial intelligence, cloud technologies, and practical
              software engineering.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500">
              <MapPin
                aria-hidden="true"
                size={16}
                className="text-cyan-400"
              />

              Hanamkonda, Telangana, India
            </p>
          </section>

          <nav aria-labelledby="footer-navigation-heading">
            <h2
              id="footer-navigation-heading"
              className="text-sm font-bold uppercase tracking-[0.16em] text-white"
            >
              Navigation
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
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

          <nav aria-labelledby="footer-projects-heading">
            <h2
              id="footer-projects-heading"
              className="text-sm font-bold uppercase tracking-[0.16em] text-white"
            >
              Projects
            </h2>

            <ul className="mt-5 space-y-3">
              {projectLinks.map((item) => (
                <li key={item.href}>
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

          <section aria-labelledby="footer-connect-heading">
            <h2
              id="footer-connect-heading"
              className="text-sm font-bold uppercase tracking-[0.16em] text-white"
            >
              Connect
            </h2>

            <div className="mt-5 space-y-3">
              <a
                href={emailUrl}
                aria-label="Send an email to Syed Mohiuddin"
                className="flex items-center gap-3 rounded-lg text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Mail
                  aria-hidden="true"
                  size={17}
                />

                Email
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Syed Mohiuddin's LinkedIn profile in a new tab"
                className="flex items-center gap-3 rounded-lg text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <ExternalLink
                  aria-hidden="true"
                  size={17}
                />

                LinkedIn

                <ArrowUpRight
                  aria-hidden="true"
                  size={14}
                />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Syed Mohiuddin's GitHub profile in a new tab"
                className="flex items-center gap-3 rounded-lg text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <GitBranch
                  aria-hidden="true"
                  size={17}
                />

                GitHub

                <ArrowUpRight
                  aria-hidden="true"
                  size={14}
                />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Syed Mohiuddin's resume PDF in a new tab"
                className="flex items-center gap-3 rounded-lg text-sm text-slate-400 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Download
                  aria-hidden="true"
                  size={17}
                />

                Resume
              </a>
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Syed Mohiuddin. All rights reserved.
          </p>

          <p>
            Designed and engineered as a scalable professional career
            platform.
          </p>
        </div>
      </div>
    </footer>
  );
}