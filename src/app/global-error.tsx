"use client";

import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

type GlobalErrorProps = Readonly<{
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}>;

export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-red-600/15 blur-3xl" />

            <div className="absolute -bottom-44 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-600/15 blur-3xl" />

            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          <section className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="border-b border-slate-800 px-6 py-8 text-center sm:px-10 sm:py-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/30 bg-red-500/10 text-red-300 shadow-lg shadow-red-950/20">
                <AlertTriangle
                  aria-hidden="true"
                  size={30}
                />
              </div>

              <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
                System error
              </p>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                SyedOS encountered an unexpected problem.
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                The application could not complete this request. You can
                retry the operation or safely return to the homepage.
              </p>
            </div>

            <div className="px-6 py-7 sm:px-10">
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <RefreshCw
                    aria-hidden="true"
                    size={17}
                  />

                  Try Again
                </button>

                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <Home
                    aria-hidden="true"
                    size={17}
                  />

                  Return Home
                </Link>
              </div>

              {error.digest && (
                <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Error reference
                  </p>

                  <code className="mt-2 block break-all font-mono text-sm text-slate-300">
                    {error.digest}
                  </code>
                </div>
              )}

              <p className="mt-7 text-center text-xs leading-6 text-slate-500">
                Technical details are intentionally hidden to protect
                application security.
              </p>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}