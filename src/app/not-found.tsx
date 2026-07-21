import {
  ArrowLeft,
  Home,
  SearchX,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-[75vh] items-center overflow-hidden border-b border-slate-800/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-40 bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Card
            variant="glass"
            className="overflow-hidden p-0 text-center"
          >
            <div className="border-b border-slate-800 px-6 py-8 sm:px-10">
              <div className="flex justify-center">
                <IconContainer
                  variant="primary"
                  size="large"
                  rounded="large"
                  label="Page not found"
                >
                  <SearchX size={26} />
                </IconContainer>
              </div>

              <div className="mt-6 flex justify-center">
                <Badge variant="warning">
                  Error 404
                </Badge>
              </div>

              <p className="syedos-code-text mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Page Not Found
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl">
                This route does not exist in SyedOS.
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                The page may have been moved, renamed, deleted, or the
                address may have been entered incorrectly. Use one of
                the options below to continue exploring the portfolio.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <LinkButton
                  href="/"
                  leftIcon={<Home size={18} />}
                >
                  Return Home
                </LinkButton>

                <LinkButton
                  href="/projects"
                  variant="secondary"
                  leftIcon={<Sparkles size={18} />}
                >
                  Explore Projects
                </LinkButton>

                <LinkButton
                  href="/contact"
                  variant="ghost"
                  leftIcon={<ArrowLeft size={17} />}
                >
                  Contact Me
                </LinkButton>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/45 p-5">
                <p className="text-sm text-slate-500">
                  Try visiting:
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm text-slate-300">
                  <span>/about</span>
                  <span>•</span>
                  <span>/projects</span>
                  <span>•</span>
                  <span>/skills</span>
                  <span>•</span>
                  <span>/education</span>
                  <span>•</span>
                  <span>/contact</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}