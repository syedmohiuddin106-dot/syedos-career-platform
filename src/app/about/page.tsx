import type { Metadata } from "next";

import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  GraduationCap,
  Layers3,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Syed Mohiuddin, an Information Technology student focused on full-stack development, artificial intelligence, cloud technologies, and practical software engineering.",
  alternates: {
    canonical: "/about",
  },
};

const focusAreas = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive interfaces, secure backend workflows, database-driven features, and complete applications for real users.",
    icon: <Layers3 size={22} />,
    variant: "primary" as const,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Integrating AI assistants, automation, structured prompting, and intelligent features into practical software products.",
    icon: <BrainCircuit size={22} />,
    variant: "info" as const,
  },
  {
    title: "Cloud and DevOps",
    description:
      "Learning deployment, containerization, cloud infrastructure, environment management, and reliable release workflows.",
    icon: <CloudCog size={22} />,
    variant: "success" as const,
  },
];

const engineeringValues = [
  {
    title: "Practical problem solving",
    description:
      "I prefer building useful systems around real user needs rather than isolated technical demonstrations.",
    icon: <Rocket size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Secure development",
    description:
      "Authentication, authorization, validation, protected routes, prepared statements, and safe configuration are core requirements.",
    icon: <ShieldCheck size={20} />,
    variant: "success" as const,
  },
  {
    title: "Maintainable architecture",
    description:
      "I organize projects into reusable components and clear modules so they remain understandable as features grow.",
    icon: <Code2 size={20} />,
    variant: "info" as const,
  },
  {
    title: "Continuous learning",
    description:
      "I improve through project work, debugging, documentation, modern courses, and regular technical practice.",
    icon: <GraduationCap size={20} />,
    variant: "warning" as const,
  },
];

export default function AboutPage() {
  return (
    <main className="min-w-0 overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute right-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-10 xl:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success" dot>
                  Available for opportunities
                </Badge>

                <Badge variant="outline">
                  Final-year IT student
                </Badge>
              </div>

              <p className="syedos-code-text mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                About Syed Mohiuddin
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
                Building the skills and experience required for modern
                software engineering.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                I am a B.Tech Information Technology student focused on
                full-stack development, artificial intelligence, cloud
                technologies, and building practical software products
                that solve real problems.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
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
                  Explore Projects
                </LinkButton>

                <LinkButton
                  href="/contact"
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  Contact Me
                </LinkButton>
              </div>
            </div>

            <Card variant="glass" className="overflow-hidden p-0">
              <div className="border-b border-slate-800 px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Professional Profile
                    </p>

                    <h2 className="mt-2 text-xl">
                      Software engineering direction
                    </h2>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="Developer profile"
                  >
                    <Sparkles size={23} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-6 p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="text-sm font-semibold text-white">
                    Current goal
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Become a capable software engineer who can design,
                    build, secure, deploy, and improve complete
                    applications across frontend, backend, database,
                    cloud, and AI-assisted systems.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
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

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Career direction
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
                  <p className="text-sm font-semibold text-green-200">
                    Currently building SyedOS
                  </p>

                  <p className="mt-2 text-sm leading-6 text-green-100/65">
                    A scalable personal career platform combining
                    portfolio storytelling, structured content,
                    analytics, administration, and AI-assisted career
                    intelligence.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="My Story"
            title="From learning individual technologies to building complete systems"
            description="My development journey is focused on connecting academic knowledge with practical implementation, real user workflows, software security, and modern product architecture."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <Card variant="glass">
              <div className="space-y-5 text-sm leading-8 text-slate-400">
                <p>
                  I started by learning the foundations of web
                  development and gradually moved toward complete
                  database-driven applications using HTML, CSS,
                  JavaScript, PHP, and MySQL.
                </p>

                <p>
                  Building CampusHire helped me understand role-based
                  systems, authentication, sessions, recruiter
                  approvals, job applications, notifications, file
                  uploads, and administrator workflows.
                </p>

                <p>
                  SyedAI Assistant expanded my interest in artificial
                  intelligence by combining AI APIs with practical
                  development, history, favorites, exports, file
                  handling, and career-focused assistant features.
                </p>

                <p>
                  SyedOS now brings these lessons together inside a
                  production-oriented Next.js and TypeScript
                  architecture designed for long-term growth,
                  structured content, analytics, AI, cloud deployment,
                  and professional presentation.
                </p>
              </div>
            </Card>

            <Card variant="editorial">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Current Progress
              </p>

              <h2 className="mt-3 text-2xl">
                Career development priorities
              </h2>

              <div className="mt-7 space-y-6">
                <Progress
                  label="Full-Stack Development"
                  value={82}
                  variant="primary"
                />

                <Progress
                  label="PHP and MySQL"
                  value={78}
                  variant="success"
                />

                <Progress
                  label="Artificial Intelligence"
                  value={64}
                  variant="info"
                />

                <Progress
                  label="Cloud and DevOps"
                  value={35}
                  variant="warning"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Career Focus"
            title="Three technical areas guiding my professional growth"
            description="These focus areas support my goal of building intelligent, secure, scalable, and production-ready software."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <Card
                key={area.title}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={area.variant}
                  size="large"
                  label={area.title}
                >
                  {area.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {area.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Engineering Values"
            title="How I approach software development"
            description="My goal is not only to write code, but to build systems that are useful, secure, maintainable, and ready to improve over time."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {engineeringValues.map((value) => (
              <Card
                key={value.title}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={value.variant}
                  size="large"
                  label={value.title}
                >
                  {value.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {value.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="success" dot>
                  Open to professional opportunities
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Looking for an internship, fresher role, or technical
                  collaboration.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Explore my projects, review my technical skills, or
                  contact me directly to discuss an opportunity.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <LinkButton
                  href="/projects"
                  rightIcon={<ArrowRight size={17} />}
                >
                  View Projects
                </LinkButton>

                <LinkButton
                  href="/contact"
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  Contact Me
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}