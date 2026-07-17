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

const highlights = [
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
];

const technologies = [
  "Next.js",
  "TypeScript",
  "PHP",
  "MySQL",
  "Artificial Intelligence",
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-52 h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute right-[-12rem] top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-16rem] left-[38%] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 xl:grid-cols-[1.12fr_0.88fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="success"
                dot
              >
                Available for opportunities
              </Badge>

              <Badge variant="outline">
                Final-year IT student
              </Badge>
            </div>

            <p className="syedos-code-text mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Full-Stack Developer · AI Builder
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
              Building intelligent software that solves real problems.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m Syed Mohiuddin, an Information Technology
              student focused on full-stack web development,
              artificial intelligence, cloud technologies, and
              building practical software products for real users.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <MapPin
                  aria-hidden="true"
                  size={17}
                  className="text-cyan-400"
                />

                Hanamkonda, Telangana
              </span>

              <span className="inline-flex items-center gap-2">
                <GraduationCap
                  aria-hidden="true"
                  size={17}
                  className="text-blue-400"
                />

                B.Tech Information Technology
              </span>

              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness
                  aria-hidden="true"
                  size={17}
                  className="text-green-400"
                />

                Open to internships and fresher roles
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton
                href="/projects"
                rightIcon={<ArrowRight size={18} />}
              >
                Explore My Projects
              </LinkButton>

              <LinkButton
                href="https://github.com/syedmohiuddin106-dot"
                external
                variant="secondary"
                leftIcon={<GitBranch size={18} />}
                ariaLabel="Open Syed Mohiuddin's GitHub profile"
              >
                View GitHub
              </LinkButton>

              <LinkButton
                href="/resume/syed-mohiuddin-resume.pdf"
                download
                variant="ghost"
                leftIcon={<Download size={18} />}
                ariaLabel="Download Syed Mohiuddin's resume"
              >
                Download Resume
              </LinkButton>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-white">
                    {highlight.value}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-blue-600/10 blur-3xl" />

            <Card
              variant="glass"
              className="relative overflow-hidden p-0"
            >
              <div className="border-b border-slate-800 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Developer Profile
                    </p>

                    <p className="mt-2 text-lg font-semibold text-white">
                      Syed Mohiuddin
                    </p>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="Software developer"
                  >
                    <Sparkles size={23} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-6 p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5">
                  <div className="flex items-start gap-4">
                    <IconContainer
                      variant="primary"
                      label="Development"
                    >
                      <Code2 size={20} />
                    </IconContainer>

                    <div>
                      <p className="font-semibold text-white">
                        Current focus
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Building advanced full-stack applications,
                        integrating AI services, improving deployment
                        skills, and preparing for high-growth software
                        engineering roles.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Core technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {technologies.map((technology, index) => (
                      <Badge
                        key={technology}
                        variant={
                          index === 0
                            ? "primary"
                            : index === 4
                              ? "info"
                              : "outline"
                        }
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Education
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      KITS Warangal
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      B.Tech IT · 2023–2027
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Career goal
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Software Engineer
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Full-stack · AI · Cloud
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-green-200">
                        Available for professional opportunities
                      </p>

                      <p className="mt-1 text-xs text-green-200/65">
                        Internships, fresher roles, collaborations, and
                        technical projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}