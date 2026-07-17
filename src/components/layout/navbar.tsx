"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Download,
  ExternalLink,
  GitBranch,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/utils";

const navigationItems = [
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
    label: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="syedos-container">
        <div className="flex min-h-18 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="SyedOS home"
            onClick={closeMobileMenu}
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
                "inline-flex h-10 w-10 items-center justify-center",
                "rounded-xl border border-blue-500/30",
                "bg-blue-500/10 text-blue-300",
                "transition duration-200",
                "group-hover:border-cyan-400/50",
                "group-hover:text-cyan-300",
              )}
            >
              <Sparkles
                aria-hidden="true"
                size={19}
              />
            </span>

            <span>
              <span className="block text-sm font-semibold text-white">
                SyedOS
              </span>

              <span className="block text-xs text-slate-500">
                Career Portfolio Platform
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2",
                  "text-sm font-medium text-slate-400",
                  "transition duration-200",
                  "hover:bg-slate-900",
                  "hover:text-white",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-blue-500",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Badge
              variant="success"
              dot
            >
              Available
            </Badge>

            <LinkButton
              href="https://github.com/syedmohiuddin106-dot"
              external
              variant="secondary"
              size="small"
              leftIcon={
                <GitBranch size={16} />
              }
              rightIcon={
                <ExternalLink size={14} />
              }
              ariaLabel="Open Syed Mohiuddin's GitHub profile"
            >
              GitHub
            </LinkButton>

            <LinkButton
              href="/resume/syed-mohiuddin-resume.pdf"
              download
              size="small"
              leftIcon={
                <Download size={16} />
              }
              ariaLabel="Download Syed Mohiuddin's resume"
            >
              Resume
            </LinkButton>
          </div>

          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setMobileMenuOpen(
                (current) => !current,
              )
            }
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center",
              "rounded-xl border border-slate-700",
              "bg-slate-900 text-slate-300",
              "transition duration-200",
              "hover:border-blue-500/50",
              "hover:text-white",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-blue-500",
              "lg:hidden",
            )}
          >
            {mobileMenuOpen ? (
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

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-800 py-4 lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="grid gap-2"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "rounded-xl px-4 py-3",
                    "text-sm font-medium text-slate-300",
                    "transition duration-200",
                    "hover:bg-slate-900",
                    "hover:text-white",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-blue-500",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 grid gap-3 border-t border-slate-800 pt-4 sm:grid-cols-2">
              <LinkButton
                href="https://github.com/syedmohiuddin106-dot"
                external
                variant="secondary"
                fullWidth
                leftIcon={
                  <GitBranch size={16} />
                }
                rightIcon={
                  <ExternalLink size={14} />
                }
                ariaLabel="Open Syed Mohiuddin's GitHub profile"
              >
                GitHub
              </LinkButton>

              <LinkButton
                href="/resume/syed-mohiuddin-resume.pdf"
                download
                fullWidth
                leftIcon={
                  <Download size={16} />
                }
                ariaLabel="Download Syed Mohiuddin's resume"
              >
                Download Resume
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}