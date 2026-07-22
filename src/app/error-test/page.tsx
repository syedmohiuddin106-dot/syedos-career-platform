import type { Metadata } from "next";
import Link from "next/link";

type ErrorTestPageProps = Readonly<{
  searchParams: Promise<{
    crash?: string;
  }>;
}>;

export const metadata: Metadata = {
  title: "Error Boundary Test",
  description:
    "Development-only route used to verify the SyedOS error boundary.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function ErrorTestPage({
  searchParams,
}: ErrorTestPageProps) {
  const params = await searchParams;
  const isDevelopment =
    process.env.NODE_ENV === "development";

  if (isDevelopment && params.crash === "true") {
    throw new Error(
      "Intentional SyedOS development error-boundary test.",
    );
  }

  return (
    <main className="relative min-h-[75vh] overflow-hidden border-b border-slate-800/80 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative">
        <section className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/75 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="border-b border-slate-800 px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Development utility
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Error boundary test
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              This private development route safely verifies that the
              SyedOS route-level error boundary works correctly.
            </p>
          </div>

          <div className="px-6 py-7 sm:px-10">
            {isDevelopment ? (
              <>
                <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 text-left">
                  <p className="text-sm font-semibold text-amber-200">
                    Development mode detected
                  </p>

                  <p className="mt-2 text-sm leading-6 text-amber-100/70">
                    The button below intentionally throws an error. It
                    should display the custom SyedOS application-error
                    screen while keeping the Navbar and Footer visible.
                  </p>
                </div>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/error-test?crash=true"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Trigger Test Error
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Return Home
                  </Link>
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-center">
                <p className="text-sm font-semibold text-slate-200">
                  Test route disabled
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Intentional error testing is disabled outside the
                  development environment.
                </p>

                <Link
                  href="/"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Return Home
                </Link>
              </div>
            )}

            <p className="mt-7 text-center text-xs leading-6 text-slate-500">
              This route is excluded from search-engine indexing and
              should not be added to the sitemap.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}