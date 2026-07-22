export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="relative min-h-[75vh] overflow-hidden border-b border-slate-800/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <div className="h-8 w-48 animate-pulse rounded-full bg-slate-800" />
              <div className="h-8 w-40 animate-pulse rounded-full bg-slate-800" />
            </div>

            <div className="space-y-4">
              <div className="h-6 w-72 animate-pulse rounded-lg bg-slate-800" />
              <div className="h-16 w-full max-w-3xl animate-pulse rounded-2xl bg-slate-800" />
              <div className="h-16 w-5/6 max-w-2xl animate-pulse rounded-2xl bg-slate-800" />
            </div>

            <div className="space-y-3">
              <div className="h-5 w-full max-w-2xl animate-pulse rounded-lg bg-slate-800/80" />
              <div className="h-5 w-11/12 max-w-xl animate-pulse rounded-lg bg-slate-800/80" />
              <div className="h-5 w-3/4 max-w-lg animate-pulse rounded-lg bg-slate-800/80" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="h-12 w-48 animate-pulse rounded-xl bg-blue-900/60" />
              <div className="h-12 w-40 animate-pulse rounded-xl bg-slate-800" />
              <div className="h-12 w-44 animate-pulse rounded-xl bg-slate-800" />
            </div>

            <div className="grid gap-4 pt-5 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-28 animate-pulse rounded-2xl border border-slate-800 bg-slate-900/60"
                />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6">
              <div className="space-y-3">
                <div className="h-4 w-32 animate-pulse rounded bg-slate-800" />
                <div className="h-6 w-44 animate-pulse rounded bg-slate-800" />
              </div>

              <div className="h-14 w-14 animate-pulse rounded-2xl bg-slate-800" />
            </div>

            <div className="mt-7 space-y-5">
              <div className="h-32 animate-pulse rounded-2xl border border-slate-800 bg-slate-950/50" />

              <div className="space-y-3">
                <div className="h-4 w-36 animate-pulse rounded bg-slate-800" />

                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-8 w-24 animate-pulse rounded-full bg-slate-800"
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="h-28 animate-pulse rounded-2xl border border-slate-800 bg-slate-950/50" />
                <div className="h-28 animate-pulse rounded-2xl border border-slate-800 bg-slate-950/50" />
              </div>

              <div className="h-20 animate-pulse rounded-2xl bg-emerald-950/40" />
            </div>
          </section>
        </div>

        <p className="sr-only">
          SyedOS is loading. Please wait.
        </p>
      </div>
    </main>
  );
}