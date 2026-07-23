import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";

const statistics = [
  {
    value: "3",
    label: "Major projects",
  },
  {
    value: "17",
    label: "AI assistant modes",
  },
  {
    value: "2027",
    label: "Expected graduation",
  },
] as const;

const technologies = [
  "Next.js",
  "TypeScript",
  "PHP",
  "MySQL",
  "Artificial Intelligence",
] as const;

export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden border-b border-slate-800/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute right-[-12rem] top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-18rem] left-[38%] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative pb-14 pt-6 sm:py-14 lg:py-14 xl:pb-18 xl:pt-8">
        <div className="grid min-w-0 items-start gap-9 xl:grid-cols-[1fr_0.95fr] xl:gap-14">
          <div className="min-w-0">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="success"
                  dot
                  className="whitespace-nowrap text-[0.72rem] sm:text-sm"
                >
                  Available for opportunities
                </Badge>

                <Badge
                  variant="outline"
                  className="whitespace-nowrap text-[0.72rem] sm:text-sm"
                >
                  Final-year IT student
                </Badge>
              </div>

              <p className="syedos-code-text text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm sm:tracking-[0.2em]">
                Full-Stack Developer · AI Builder
              </p>
            </div>

            <h1
              id="home-hero-heading"
              className="mt-3 max-w-[13ch] text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[430px]:text-[2.65rem] sm:max-w-4xl sm:text-5xl sm:leading-[1.07] lg:text-[3.75rem] xl:text-[4rem] 2xl:text-[4.25rem]"
            >
              Building intelligent software that solves real problems.
            </h1>

            <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              I&apos;m Syed Mohiuddin, an Information Technology student
              focused on full-stack web development, artificial intelligence,
              cloud technologies, and building practical software products for
              real users.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <span className="inline-flex items-center gap-2">
                <MapPin
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-cyan-400"
                />

                Hanamkonda, Telangana
              </span>

              <span className="inline-flex items-center gap-2">
                <GraduationCap
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-blue-400"
                />

                B.Tech Information Technology
              </span>

              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-green-400"
                />

                Open to internships and fresher roles
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <LinkButton
                href="/projects"
                rightIcon={
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                  />
                }
                className="w-full justify-center sm:w-auto"
              >
                Explore My Projects
              </LinkButton>

              <LinkButton
                href="https://github.com/syedmohiuddin106-dot"
                external
                variant="secondary"
                leftIcon={
                  <GitBranch
                    aria-hidden="true"
                    size={18}
                  />
                }
                ariaLabel="Open Syed Mohiuddin's GitHub profile"
                className="w-full justify-center sm:w-auto"
              >
                View GitHub
              </LinkButton>

              <LinkButton
                href="/resume/syed-mohiuddin-resume.pdf"
                external
                variant="ghost"
                leftIcon={
                  <Download
                    aria-hidden="true"
                    size={18}
                  />
                }
                ariaLabel="Open Syed Mohiuddin's resume PDF"
                className="w-full justify-center sm:w-auto"
              >
                Download Resume
              </LinkButton>
            </div>

            <dl className="mt-9 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {statistics.map((statistic) => (
                <div
                  key={statistic.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/45 px-5 py-5 sm:px-6 sm:py-6"
                >
                  <dd className="mb-1 text-2xl font-bold text-slate-200 sm:text-3xl">
                    {statistic.value}
                  </dd>

                  <dt className="text-sm text-slate-500">
                    {statistic.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <Card
            variant="glass"
            className="min-w-0 overflow-hidden p-0 xl:sticky xl:top-24"
          >
            <div className="border-b border-slate-800 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Developer Profile
                  </p>

                  <h2 className="mt-2 truncate text-xl">
                    Syed Mohiuddin
                  </h2>
                </div>

                <IconContainer
                  variant="primary"
                  size="large"
                  rounded="large"
                  label="SyedOS developer profile"
                >
                  <Sparkles
                    aria-hidden="true"
                    size={23}
                  />
                </IconContainer>
              </div>
            </div>

            <div className="space-y-6 p-5 sm:p-6">
              <article className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                <div className="flex items-start gap-4">
                  <IconContainer
                    variant="primary"
                    size="medium"
                    label="Current development focus"
                  >
                    <Code2
                      aria-hidden="true"
                      size={20}
                    />
                  </IconContainer>

                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">
                      Current focus
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Building advanced full-stack applications, integrating AI
                      services, improving deployment skills, and preparing for
                      high-growth software-engineering roles.
                    </p>
                  </div>
                </div>
              </article>

              <div>
                <h3 className="text-sm font-semibold text-slate-300">
                  Core technologies
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {technologies.map((technology, index) => (
                    <li key={technology}>
                      <Badge
                        variant={
                          index === 0
                            ? "primary"
                            : index === technologies.length - 1
                              ? "info"
                              : "outline"
                        }
                      >
                        {technology}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Education
                  </p>

                  <h3 className="mt-2 font-semibold text-white">
                    KITS Warangal
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    B.Tech IT · 2023–2027
                  </p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Career goal
                  </p>

                  <h3 className="mt-2 font-semibold text-white">
                    Software Engineer
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Full-stack · AI · Cloud
                  </p>
                </article>
              </div>

              <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-emerald-400"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-green-200">
                      Available for professional opportunities
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-green-100/65">
                      Internships, fresher roles, collaborations, and technical
                      projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}