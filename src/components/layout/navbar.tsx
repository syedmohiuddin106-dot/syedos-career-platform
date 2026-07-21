"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Download,
  GitBranch,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigationLinks = [
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
];

function isCurrentRoute(
  pathname: string,
  href: string,
): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

export function Navbar() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="syedos-container">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Go to SyedOS homepage"
            onClick={closeMobileMenu}
            className={cn(
              "group inline-flex shrink-0 items-center gap-3",
              "rounded-xl",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-blue-500",
            )}
          >
            <span
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center",
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
                size={19}
              />
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-white">
                SyedOS
              </span>

              <span className="block text-[11px] text-slate-500">
                Career Portfolio Platform
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {navigationLinks.map((item) => {
              const active = isCurrentRoute(
                pathname,
                item.href,
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={cn(
                    "relative rounded-lg px-3 py-2",
                    "text-sm font-medium",
                    "transition duration-200",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-blue-500",
                    active
                      ? "bg-blue-500/10 text-blue-200"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white",
                  )}
                >
                  {item.label}

                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-blue-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <a
              href="https://github.com/syedmohiuddin106-dot"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Syed Mohiuddin's GitHub profile"
              className={cn(
                "inline-flex h-10 items-center justify-center gap-2",
                "rounded-xl border border-slate-800",
                "bg-slate-950/60 px-4",
                "text-sm font-medium text-slate-300",
                "transition duration-200",
                "hover:border-slate-700",
                "hover:bg-slate-900",
                "hover:text-white",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-blue-500",
              )}
            >
              <GitBranch
                aria-hidden="true"
                size={17}
              />

              GitHub
            </a>

            <a
              href="/resume/syed-mohiuddin-resume.pdf"
              download
              aria-label="Download Syed Mohiuddin's resume"
              className={cn(
                "inline-flex h-10 items-center justify-center gap-2",
                "rounded-xl border border-blue-500/40",
                "bg-blue-500 px-4",
                "text-sm font-semibold text-white",
                "shadow-lg shadow-blue-500/20",
                "transition duration-200",
                "hover:border-blue-400",
                "hover:bg-blue-400",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-blue-400",
              )}
            >
              <Download
                aria-hidden="true"
                size={17}
              />

              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMobileMenuOpen((current) => !current)
            }
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center",
              "rounded-xl border border-slate-800",
              "bg-slate-950/60 text-slate-300",
              "transition duration-200",
              "hover:border-slate-700",
              "hover:bg-slate-900",
              "hover:text-white",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-blue-500",
              "xl:hidden",
            )}
          >
            {isMobileMenuOpen ? (
              <X
                aria-hidden="true"
                size={20}
              />
            ) : (
              <Menu
                aria-hidden="true"
                size={20}
              />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-800 bg-slate-950/95 xl:hidden"
        >
          <div className="syedos-container py-4">
            <nav
              aria-label="Mobile navigation"
              className="grid gap-2"
            >
              {navigationLinks.map((item) => {
                const active = isCurrentRoute(
                  pathname,
                  item.href,
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={
                      active ? "page" : undefined
                    }
                    className={cn(
                      "flex min-h-11 items-center justify-between",
                      "rounded-xl border px-4 py-3",
                      "text-sm font-medium",
                      "transition duration-200",
                      "focus-visible:outline-none",
                      "focus-visible:ring-2",
                      "focus-visible:ring-blue-500",
                      active
                        ? "border-blue-500/30 bg-blue-500/10 text-blue-200"
                        : "border-transparent text-slate-400 hover:border-slate-800 hover:bg-slate-900 hover:text-white",
                    )}
                  >
                    <span>{item.label}</span>

                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-blue-400"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-3 border-t border-slate-800 pt-4 sm:grid-cols-2">
              <a
                href="https://github.com/syedmohiuddin106-dot"
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                aria-label="Open Syed Mohiuddin's GitHub profile"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2",
                  "rounded-xl border border-slate-800",
                  "bg-slate-950 px-4",
                  "text-sm font-medium text-slate-300",
                  "transition duration-200",
                  "hover:bg-slate-900",
                  "hover:text-white",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-blue-500",
                )}
              >
                <GitBranch
                  aria-hidden="true"
                  size={17}
                />

                View GitHub
              </a>

              <a
                href="/resume/syed-mohiuddin-resume.pdf"
                download
                onClick={closeMobileMenu}
                aria-label="Download Syed Mohiuddin's resume"
                className={cn(
                  "inline-flex min-h-11 items-center justify-center gap-2",
                  "rounded-xl border border-blue-500/40",
                  "bg-blue-500 px-4",
                  "text-sm font-semibold text-white",
                  "transition duration-200",
                  "hover:bg-blue-400",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-blue-400",
                )}
              >
                <Download
                  aria-hidden="true"
                  size={17}
                />

                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}