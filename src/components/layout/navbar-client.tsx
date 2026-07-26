"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Download,
  GitBranch,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

type NavigationItem = {
  label: string;
  href: string;
  openInNewTab: boolean;
  highlighted: boolean;
};

type NavbarClientProps = {
  siteName: string;
  siteTagline: string;
  navigationItems: NavigationItem[];
  githubURL: string;
  resumeURL: string;
  resumeButtonLabel: string;
  showResumeButton: boolean;
};

function isActiveRoute(
  pathname: string,
  href: string,
): boolean {
  if (!href.startsWith("/")) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

function getLinkTarget(openInNewTab: boolean) {
  return openInNewTab ? "_blank" : undefined;
}

function getLinkRel(openInNewTab: boolean) {
  return openInNewTab
    ? "noopener noreferrer"
    : undefined;
}

export function NavbarClient({
  siteName,
  siteTagline,
  navigationItems,
  githubURL,
  resumeURL,
  resumeButtonLabel,
  showResumeButton,
}: NavbarClientProps) {
  const pathname = usePathname();
  const mobileNavigationId = useId();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-slate-950/85 backdrop-blur-xl">
      <div className="syedos-container">
        <div className="flex min-h-16 items-center justify-between gap-3">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label={`${siteName} homepage`}
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-500/10 text-cyan-300 transition group-hover:border-cyan-400/60 group-hover:bg-cyan-400/10"
            >
              <Sparkles size={21} />
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-bold tracking-tight text-white">
                {siteName}
              </span>

              <span className="block max-w-40 truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {siteTagline}
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigationItems.map((item) => {
              const isActive = isActiveRoute(
                pathname,
                item.href,
              );

              const sharedClassName = `rounded-lg px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                item.highlighted
                  ? "border border-blue-500/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20"
                  : isActive
                    ? "bg-slate-800/80 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`;

              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    target={getLinkTarget(
                      item.openInNewTab,
                    )}
                    rel={getLinkRel(
                      item.openInNewTab,
                    )}
                    aria-current={
                      isActive ? "page" : undefined
                    }
                    className={sharedClassName}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  target={getLinkTarget(
                    item.openInNewTab,
                  )}
                  rel={getLinkRel(
                    item.openInNewTab,
                  )}
                  className={sharedClassName}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in a new tab"
              className="hidden min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:inline-flex"
            >
              <GitBranch
                aria-hidden="true"
                size={17}
              />

              GitHub
            </a>

            {showResumeButton ? (
              <a
                href={resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume PDF in a new tab"
                className="hidden min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:inline-flex"
              >
                <Download
                  aria-hidden="true"
                  size={17}
                />

                {resumeButtonLabel}
              </a>
            ) : null}

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls={mobileNavigationId}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-200 transition hover:border-slate-700 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"
            >
              {isMenuOpen ? (
                <X
                  aria-hidden="true"
                  size={22}
                />
              ) : (
                <Menu
                  aria-hidden="true"
                  size={22}
                />
              )}
            </button>
          </div>
        </div>

        <div
          id={mobileNavigationId}
          hidden={!isMenuOpen}
          className="lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-800 py-3 overscroll-contain"
          >
            <div className="grid gap-1">
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(
                  pathname,
                  item.href,
                );

                const sharedClassName = `rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  item.highlighted
                    ? "border border-blue-500/30 bg-blue-500/10 text-blue-200"
                    : isActive
                      ? "border border-blue-500/30 bg-blue-500/10 text-blue-200"
                      : "border border-transparent text-slate-300 hover:border-slate-800 hover:bg-slate-900 hover:text-white"
                }`;

                if (item.href.startsWith("/")) {
                  return (
                    <Link
                      key={`${item.label}-${item.href}`}
                      href={item.href}
                      target={getLinkTarget(
                        item.openInNewTab,
                      )}
                      rel={getLinkRel(
                        item.openInNewTab,
                      )}
                      onClick={closeMenu}
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={sharedClassName}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    target={getLinkTarget(
                      item.openInNewTab,
                    )}
                    rel={getLinkRel(
                      item.openInNewTab,
                    )}
                    onClick={closeMenu}
                    className={sharedClassName}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div
              className={`mt-3 grid gap-2.5 border-t border-slate-800 pt-3 ${
                showResumeButton
                  ? "sm:grid-cols-2"
                  : ""
              }`}
            >
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                aria-label="Open GitHub profile in a new tab"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <GitBranch
                  aria-hidden="true"
                  size={17}
                />

                View GitHub
              </a>

              {showResumeButton ? (
                <a
                  href={resumeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  aria-label="Open resume PDF in a new tab"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Download
                    aria-hidden="true"
                    size={17}
                  />

                  {resumeButtonLabel}
                </a>
              ) : null}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}