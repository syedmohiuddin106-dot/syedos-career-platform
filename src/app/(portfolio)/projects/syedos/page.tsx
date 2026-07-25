import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "SyedOS Project Case Study",
  description:
    "Explore the architecture, development goals, technology stack, features, security, and roadmap of SyedOS, an intelligent career portfolio platform.",
  alternates: {
    canonical: "/projects/syedos",
  },
  openGraph: {
    title: "SyedOS Project Case Study | Syed Mohiuddin",
    description:
      "A detailed case study of SyedOS, a production-oriented intelligent career portfolio platform built with Next.js and TypeScript.",
    url: "/projects/syedos",
    type: "article",
  },
};

const technologies = [
  "Next.js 16",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Payload CMS",
  "PostgreSQL",
  "Docker",
  "Gemini AI",
  "GitHub Actions",
  "Cloud Deployment",
];

const projectGoals = [
  {
    title: "Professional presentation",
    description:
      "Present projects, skills, education, achievements, and career information through a premium recruiter-friendly experience.",
    icon: <Users size={21} />,
    variant: "primary" as const,
  },
  {
    title: "Editable content",
    description:
      "Allow portfolio information to be updated through a secure private administrator experience instead of changing code manually.",
    icon: <Settings2 size={21} />,
    variant: "info" as const,
  },
  {
    title: "Intelligent career tools",
    description:
      "Integrate AI-powered features for project explanations, recruiter assistance, resume analysis, and career intelligence.",
    icon: <BrainCircuit size={21} />,
    variant: "warning" as const,
  },
  {
    title: "Production readiness",
    description:
      "Use scalable architecture, testing, analytics, deployment workflows, security, and reliable data management.",
    icon: <Rocket size={21} />,
    variant: "success" as const,
  },
];

const currentFeatures = [
  "Responsive global Navbar and Footer",
  "Complete reusable UI component library",
  "Advanced Interface Lab for design-system testing",
  "Professional public homepage",
  "Detailed About page",
  "Complete Projects portfolio page",
  "Responsive mobile and desktop layouts",
  "SEO metadata and social-sharing structure",
];

const plannedFeatures = [
  "Private administrator dashboard",
  "Payload CMS content management",
  "PostgreSQL database integration",
  "Authentication and protected admin routes",
  "Project analytics and audience insights",
  "AI-powered portfolio assistant",
  "Recruiter-focused viewing mode",
  "Dynamic project case studies",
  "Resume and certificate management",
  "Cloud deployment and CI/CD",
];

const architectureLayers = [
  {
    title: "Presentation Layer",
    description:
      "Responsive public pages, reusable interface components, navigation, accessibility, visual consistency, and recruiter-focused experiences.",
    icon: <MonitorSmartphone size={22} />,
    variant: "primary" as const,
    items: [
      "Next.js App Router",
      "React components",
      "Tailwind CSS",
      "Responsive layouts",
      "Accessibility",
    ],
  },
  {
    title: "Application Layer",
    description:
      "Server-side logic, content workflows, validation, AI features, analytics processing, and application-level business rules.",
    icon: <Code2 size={22} />,
    variant: "info" as const,
    items: [
      "TypeScript",
      "Server Components",
      "Server Actions",
      "Validation",
      "AI services",
    ],
  },
  {
    title: "Content and Data Layer",
    description:
      "Structured portfolio content, projects, skills, education, certificates, users, analytics, and administrator-managed data.",
    icon: <Database size={22} />,
    variant: "success" as const,
    items: [
      "Payload CMS",
      "PostgreSQL",
      "Structured collections",
      "Media management",
      "Content relationships",
    ],
  },
  {
    title: "Infrastructure Layer",
    description:
      "Environment configuration, containerization, automated testing, continuous delivery, monitoring, and production hosting.",
    icon: <CloudCog size={22} />,
    variant: "warning" as const,
    items: [
      "Docker",
      "Environment variables",
      "GitHub Actions",
      "Cloud hosting",
      "Monitoring",
    ],
  },
];

const securityControls = [
  {
    title: "Protected administration",
    description:
      "Private administrator routes will require authenticated access and role-based authorization.",
    icon: <LockKeyhole size={20} />,
  },
  {
    title: "Input validation",
    description:
      "Structured validation will be applied to forms, CMS content, uploads, and server-side actions.",
    icon: <CheckCircle2 size={20} />,
  },
  {
    title: "Secure configuration",
    description:
      "Sensitive credentials and environment-specific values will remain outside the public source code.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Safe data access",
    description:
      "Database operations will use controlled server-side access and validated application workflows.",
    icon: <Database size={20} />,
  },
];

const developmentProgress = [
  {
    label: "Design System",
    value: 100,
    variant: "success" as const,
  },
  {
    label: "Public Homepage",
    value: 100,
    variant: "success" as const,
  },
  {
    label: "Portfolio Pages",
    value: 45,
    variant: "primary" as const,
  },
  {
    label: "CMS and Database",
    value: 10,
    variant: "warning" as const,
  },
  {
    label: "AI Features",
    value: 5,
    variant: "info" as const,
  },
  {
    label: "Deployment and CI/CD",
    value: 5,
    variant: "warning" as const,
  },
];

const developmentPhases = [
  {
    phase: "Phase 1",
    title: "Foundation and Design System",
    status: "Completed",
    statusVariant: "success" as const,
    description:
      "Created the Next.js foundation, project architecture, global styles, design tokens, reusable UI components, Interface Lab, responsive Navbar, and Footer.",
  },
  {
    phase: "Phase 2",
    title: "Public Portfolio Experience",
    status: "In Progress",
    statusVariant: "primary" as const,
    description:
      "Building the homepage, About page, Projects page, case studies, skills, education, certificates, and contact experiences.",
  },
  {
    phase: "Phase 3",
    title: "CMS and Private Administration",
    status: "Planned",
    statusVariant: "warning" as const,
    description:
      "Integrating Payload CMS, PostgreSQL, authentication, private routes, media management, and editable portfolio content.",
  },
  {
    phase: "Phase 4",
    title: "AI and Career Intelligence",
    status: "Planned",
    statusVariant: "warning" as const,
    description:
      "Adding AI-assisted project explanations, recruiter support, resume intelligence, audience modes, and career guidance.",
  },
  {
    phase: "Phase 5",
    title: "Testing, Analytics, and Deployment",
    status: "Planned",
    statusVariant: "warning" as const,
    description:
      "Completing automated tests, analytics, accessibility checks, performance optimization, CI/CD, monitoring, and production deployment.",
  },
];

export default function SyedOSCaseStudyPage() {
  return (
    <main className="min-w-0 overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-10rem] top-8 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[40%] h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative py-16 sm:py-20 lg:py-28">
          <LinkButton
            href="/projects"
            variant="ghost"
            size="small"
            leftIcon={<ArrowLeft size={17} />}
          >
            Back to Projects
          </LinkButton>

          <div className="mt-8 grid gap-12 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="warning" dot>
                  In Development
                </Badge>

                <Badge variant="primary">
                  Featured Project
                </Badge>

                <Badge variant="outline">
                  Full-Stack Platform
                </Badge>
              </div>

              <p className="syedos-code-text mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Intelligent Career Portfolio Platform
              </p>

              <h1 className="mt-4 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                SyedOS
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                A production-oriented career platform designed to
                combine professional portfolio storytelling, private
                administration, structured content, analytics, AI
                assistance, and recruiter-focused experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton
                  href="https://github.com/syedmohiuddin106-dot"
                  external
                  leftIcon={<GitBranch size={18} />}
                  rightIcon={<ExternalLink size={14} />}
                  ariaLabel="Open Syed Mohiuddin's GitHub profile"
                >
                  View GitHub
                </LinkButton>

                <LinkButton
                  href="/contact"
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  Discuss This Project
                </LinkButton>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>

            <Card
              variant="glass"
              className="overflow-hidden p-0"
            >
              <div className="border-b border-slate-800 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Project Overview
                    </p>

                    <h2 className="mt-2 text-xl">
                      Current development status
                    </h2>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="SyedOS project"
                  >
                    <Sparkles size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Project type
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Career Platform
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Development stage
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Public Portfolio
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Frontend
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Next.js and TypeScript
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Planned database
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    PostgreSQL
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 p-6">
                <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <span className="relative mt-1 flex h-3 w-3 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                    </span>

                    <div>
                      <p className="font-semibold text-green-200">
                        Active development
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/65">
                        The public portfolio experience is currently
                        being built before CMS, database, AI, and
                        deployment integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Project Challenge"
            title="More than a basic personal portfolio"
            description="The goal is to create a long-term professional platform that can evolve with new projects, skills, certifications, career stages, and intelligent features."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <Card variant="glass">
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="warning"
                  label="Project problem"
                >
                  <Target size={20} />
                </IconContainer>

                <h2 className="text-xl">
                  The problem being addressed
                </h2>
              </div>

              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-400">
                <p>
                  Traditional student portfolios often contain only a
                  few static pages and require code changes whenever a
                  project, skill, certificate, or career detail needs
                  to be updated.
                </p>

                <p>
                  They may look attractive but usually lack structured
                  content management, private administration,
                  analytics, audience-specific presentation, detailed
                  case studies, and intelligent recruiter support.
                </p>

                <p>
                  SyedOS is designed to solve this by becoming an
                  editable, scalable, secure, and intelligent career
                  platform that can continue growing beyond
                  graduation.
                </p>
              </div>
            </Card>

            <Card variant="editorial">
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="primary"
                  label="Project solution"
                >
                  <Layers3 size={20} />
                </IconContainer>

                <h2 className="text-xl">
                  The proposed solution
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Reusable public portfolio pages",
                  "Secure private administration",
                  "Structured CMS-managed content",
                  "Database-backed project information",
                  "Recruiter and audience modes",
                  "AI-assisted career intelligence",
                  "Analytics and performance tracking",
                  "Production deployment workflow",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      size={18}
                      className="mt-0.5 shrink-0 text-green-400"
                    />

                    <p className="text-sm leading-6 text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Project Goals"
            title="What SyedOS is designed to achieve"
            description="The platform combines professional presentation, content management, intelligent tools, and production-focused engineering."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projectGoals.map((goal) => (
              <Card
                key={goal.title}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={goal.variant}
                  size="large"
                  label={goal.title}
                >
                  {goal.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {goal.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {goal.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="System Architecture"
            title="A layered architecture designed for long-term growth"
            description="Each layer has a clear responsibility so the platform remains maintainable as public pages, administration, data, AI, analytics, and deployment features expand."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {architectureLayers.map((layer) => (
              <Card
                key={layer.title}
                variant="elevated"
                className="h-full"
              >
                <div className="flex items-start gap-4">
                  <IconContainer
                    variant={layer.variant}
                    size="large"
                    label={layer.title}
                  >
                    {layer.icon}
                  </IconContainer>

                  <div>
                    <h2 className="text-xl">
                      {layer.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {layer.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Card variant="glass">
              <SectionHeading
                eyebrow="Current Features"
                title="What has already been completed"
                description="The current phase establishes the public design system and core portfolio experience."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {currentFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      size={18}
                      className="mt-0.5 shrink-0 text-green-400"
                    />

                    <p className="text-sm leading-6 text-slate-400">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="editorial">
              <SectionHeading
                eyebrow="Planned Features"
                title="What will be added next"
                description="The next phases will transform SyedOS from a public portfolio into a complete intelligent career platform."
              />

              <div className="mt-8 grid gap-3">
                {plannedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                    <p className="text-sm leading-6 text-slate-400">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Security"
            title="Security planned as part of the architecture"
            description="Private administration, editable content, uploads, user data, and AI features require controlled access and validated workflows."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {securityControls.map((control) => (
              <Card
                key={control.title}
                variant="elevated"
                className="h-full"
              >
                <IconContainer
                  variant="success"
                  size="large"
                  label={control.title}
                >
                  {control.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {control.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {control.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <Card variant="glass">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Development Progress
              </p>

              <h2 className="mt-3 text-2xl">
                Current implementation status
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Progress values represent the current state of the
                project and will be updated as development continues.
              </p>

              <div className="mt-8 space-y-6">
                {developmentProgress.map((progress) => (
                  <Progress
                    key={progress.label}
                    label={progress.label}
                    value={progress.value}
                    variant={progress.variant}
                  />
                ))}
              </div>
            </Card>

            <Card variant="editorial">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Development Roadmap
              </p>

              <h2 className="mt-3 text-2xl">
                Planned implementation phases
              </h2>

              <div className="mt-7 space-y-4">
                {developmentPhases.map((phase) => (
                  <div
                    key={phase.phase}
                    className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-cyan-300">
                          {phase.phase}
                        </p>

                        <h3 className="mt-1 text-lg">
                          {phase.title}
                        </h3>
                      </div>

                      <Badge
                        variant={phase.statusVariant}
                        dot
                      >
                        {phase.status}
                      </Badge>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="success" dot>
                  Active Project
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  SyedOS will continue growing throughout my career.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  The platform is designed to evolve with new projects,
                  skills, certifications, professional experience, AI
                  capabilities, and future career opportunities.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <LinkButton
                  href="/projects"
                  variant="secondary"
                  leftIcon={<ArrowLeft size={17} />}
                >
                  All Projects
                </LinkButton>

                <LinkButton
                  href="/contact"
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