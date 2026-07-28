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
import { getProjectCaseStudyData } from "@/lib/cms/get-project-case-study-data";

export async function generateMetadata(): Promise<Metadata> {
  const { project } = await getProjectCaseStudyData("syedos");
  const projectRecord = isObject(project) ? project : null;
  const seoValue = projectRecord?.seo;
  const seo = isObject(seoValue) ? seoValue : null;

  const title = getString(
    seo,
    "title",
    "SyedOS Project Case Study",
  );
  const description = getString(
    seo,
    "description",
    "Explore the architecture, development goals, technology stack, features, security, and roadmap of SyedOS, an intelligent career portfolio platform.",
  );

  return {
    title,
    description,
    alternates: {
      canonical: "/projects/syedos",
    },
    openGraph: {
      title: `${title} | Syed Mohiuddin`,
      description,
      url: "/projects/syedos",
      type: "article",
    },
  };
}

const fallbackTechnologies = [
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

const fallbackCurrentFeatures = [
  "Responsive global Navbar and Footer",
  "Complete reusable UI component library",
  "Advanced Interface Lab for design-system testing",
  "Professional CMS-powered homepage",
  "About, Skills, Education, Certifications, Experience, and Contact pages",
  "Projects portfolio with CMS-powered project data",
  "Payload CMS collections, drafts, versions, and structured relationships",
  "PostgreSQL database running through Docker",
  "Secure private Payload administration experience",
  "Responsive layouts, SEO metadata, and social-sharing structure",
];

const fallbackPlannedFeatures = [
  "Complete CMS integration for the remaining project case studies",
  "Project analytics and audience insights",
  "AI-powered portfolio assistant",
  "Recruiter-focused viewing mode",
  "Advanced resume and certificate management",
  "Automated testing and accessibility validation",
  "Performance monitoring and production optimization",
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
    value: 100,
    variant: "success" as const,
  },
  {
    label: "Payload CMS and PostgreSQL",
    value: 95,
    variant: "primary" as const,
  },
  {
    label: "Private Administration",
    value: 90,
    variant: "primary" as const,
  },
  {
    label: "Dynamic CMS Integration",
    value: 92,
    variant: "info" as const,
  },
  {
    label: "AI Features",
    value: 5,
    variant: "warning" as const,
  },
  {
    label: "Deployment and CI/CD",
    value: 10,
    variant: "warning" as const,
  },
]

const developmentPhases = [
  {
    phase: "Phase 1",
    title: "Foundation and Design System",
    status: "Completed",
    statusVariant: "success" as const,
    description:
      "Completed the Next.js foundation, project architecture, global styles, design tokens, reusable UI components, Interface Lab, responsive Navbar, and Footer.",
  },
  {
    phase: "Phase 2",
    title: "Public Portfolio Experience",
    status: "Completed",
    statusVariant: "success" as const,
    description:
      "Completed the homepage, About, Projects, Skills, Education, Certifications, Experience, Contact, and responsive project case-study experiences.",
  },
  {
    phase: "Phase 3",
    title: "CMS, Database, and Private Administration",
    status: "In Progress",
    statusVariant: "primary" as const,
    description:
      "Payload CMS, PostgreSQL, Docker, structured collections, drafts, versions, media, profile content, and the private administration experience are active. The remaining work is completing CMS integration for every project case study and final administration refinements.",
  },
  {
    phase: "Phase 4",
    title: "AI and Career Intelligence",
    status: "Planned",
    statusVariant: "warning" as const,
    description:
      "Add AI-assisted project explanations, recruiter support, resume intelligence, audience modes, structured tool usage, and career guidance.",
  },
  {
    phase: "Phase 5",
    title: "Testing, Analytics, and Deployment",
    status: "Planned",
    statusVariant: "warning" as const,
    description:
      "Complete automated testing, analytics, accessibility checks, performance optimization, CI/CD, monitoring, and production cloud deployment.",
  },
]

type CmsRecord = Record<string, unknown>;

type BadgeVariant =
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "outline";

function isObject(value: unknown): value is CmsRecord {
  return typeof value === "object" && value !== null;
}

function getString(
  record: CmsRecord | null | undefined,
  key: string,
  fallback = "",
): string {
  const value = record?.[key];

  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : fallback;
}

function getArray(
  record: CmsRecord | null | undefined,
  key: string,
): unknown[] {
  const value = record?.[key];
  return Array.isArray(value) ? value : [];
}

function uniqueStrings(values: string[]): string[] {
  return Array.from(
    new Set(values.map((value) => value.trim()).filter(Boolean)),
  );
}

function formatProjectType(value: string): string {
  const labels: Record<string, string> = {
    "full-stack": "Full-Stack Platform",
    ai: "Artificial Intelligence Project",
    "cloud-devops": "Cloud and DevOps Project",
    frontend: "Frontend Application",
    backend: "Backend System",
    academic: "Academic Project",
    other: "Software Project",
  };

  return labels[value] ?? "Full-Stack Platform";
}

function formatDevelopmentStatus(value: string): string {
  const labels: Record<string, string> = {
    planning: "Planning",
    "in-development": "In Development",
    completed: "Completed",
    maintained: "Maintained",
    archived: "Archived",
  };

  return labels[value] ?? "In Development";
}

function getStatusVariant(value: string): BadgeVariant {
  if (value === "completed" || value === "maintained") {
    return "success";
  }

  if (value === "planning") {
    return "info";
  }

  if (value === "archived") {
    return "outline";
  }

  return "warning";
}

export default async function SyedOSCaseStudyPage() {
  const { project } = await getProjectCaseStudyData("syedos");
  const projectRecord = isObject(project) ? project : null;

  const title = getString(projectRecord, "title", "SyedOS");
  const shortDescription = getString(
    projectRecord,
    "shortDescription",
    "A production-oriented career platform designed to combine professional portfolio storytelling, private administration, structured content, analytics, AI assistance, and recruiter-focused experiences.",
  );
  const fullDescription = getString(
    projectRecord,
    "fullDescription",
    "SyedOS is designed as an editable, scalable, secure, and intelligent career platform that can continue growing beyond graduation.",
  );
  const projectType = getString(
    projectRecord,
    "projectType",
    "full-stack",
  );
  const developmentStatus = getString(
    projectRecord,
    "developmentStatus",
    "in-development",
  );
  const statusLabel = formatDevelopmentStatus(developmentStatus);
  const statusVariant = getStatusVariant(developmentStatus);
  const repositoryURL = getString(
    projectRecord,
    "githubURL",
    "https://github.com/syedmohiuddin106-dot",
  );

  const cmsTechnologies = getArray(projectRecord, "technologies")
    .filter(isObject)
    .map((technology) => getString(technology, "name"));
  const technologies = uniqueStrings([
    ...cmsTechnologies,
    ...fallbackTechnologies,
  ]).slice(0, 10);

  const cmsFeatures = getArray(projectRecord, "features")
    .filter(isObject)
    .map((feature) =>
      getString(
        feature,
        "title",
        getString(feature, "description"),
      ),
    );
  const currentFeatures = uniqueStrings([
    ...cmsFeatures,
    ...fallbackCurrentFeatures,
  ]).slice(0, 10);

  const cmsResponsibilities = getArray(
    projectRecord,
    "responsibilities",
  )
    .filter(isObject)
    .map((responsibility) =>
      getString(responsibility, "description"),
    );
  const plannedFeatures = uniqueStrings([
    ...cmsResponsibilities,
    ...fallbackPlannedFeatures,
  ]).slice(0, 10);

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

        <div className="syedos-container relative pb-14 pt-6 sm:py-14 lg:py-14 xl:pb-18 xl:pt-8">
          <LinkButton
            href="/projects"
            variant="ghost"
            size="small"
            leftIcon={<ArrowLeft size={17} />}
          >
            Back to Projects
          </LinkButton>

          <div className="mt-6 grid min-w-0 items-start gap-9 xl:grid-cols-[1.08fr_0.92fr] xl:gap-12">
            <div>
              <div className="space-y-4">
                <div className="grid w-full grid-cols-[0.9fr_1fr_1.15fr] items-center gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
                  <Badge
                    variant={statusVariant}
                    dot
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.6rem] sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {statusLabel}
                  </Badge>

                  <Badge
                    variant="primary"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.6rem] sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Featured Project
                  </Badge>

                  <Badge
                    variant="outline"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.6rem] sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {formatProjectType(projectType)}
                  </Badge>
                </div>

                <p className="syedos-code-text text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm sm:tracking-[0.2em]">
                  {formatProjectType(projectType)}
                </p>
              </div>

              <h1 className="mt-3 max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[430px]:text-[2.65rem] sm:text-5xl sm:leading-[1.07] lg:text-6xl">
                {title}
              </h1>

              <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                {shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton
                  href={repositoryURL}
                  external
                  leftIcon={<GitBranch size={18} />}
                  rightIcon={<ExternalLink size={14} />}
                  ariaLabel={`Open ${title} repository`}
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
                      Current platform status
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
                    {formatProjectType(projectType)}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Development stage
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    {statusLabel}
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
                        The public portfolio, Payload CMS, PostgreSQL database,
                        Docker environment, and private administration are
                        active. Current work is focused on completing dynamic
                        case studies before AI, analytics, testing, and deployment.
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
            <Card variant="glass" className="flex h-full flex-col">
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
                  {fullDescription}
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    label: "Content",
                    value: "Editable through Payload CMS",
                  },
                  {
                    label: "Data",
                    value: "Structured in PostgreSQL",
                  },
                  {
                    label: "Access",
                    value: "Protected private administration",
                  },
                  {
                    label: "Growth",
                    value: "Designed for long-term expansion",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="editorial" className="h-full">
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
          <div className="grid items-start gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Card variant="glass" className="h-full">
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

            <Card variant="editorial" className="h-full">
              <SectionHeading
                eyebrow="Planned Features"
                title="What will be added next"
                description="The next phases will transform SyedOS from a public portfolio into a complete intelligent career platform."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
          <div className="grid items-start gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <Card variant="glass" className="h-full">
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

            <Card variant="editorial" className="h-full">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Development Roadmap
              </p>

              <h2 className="mt-3 text-2xl">
                Planned implementation phases
              </h2>

              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                {developmentPhases.map((phase, index) => (
                  <div
                    key={phase.phase}
                    className={`relative rounded-2xl border border-slate-800 bg-slate-950/45 p-5 ${
                      index === developmentPhases.length - 1
                        ? "lg:col-span-2"
                        : ""
                    }`}
                  >
                    <Badge
                      variant={phase.statusVariant}
                      dot
                      className="absolute right-5 top-5"
                    >
                      {phase.status}
                    </Badge>

                    <div className="pr-28">
                      <p className="text-sm font-medium text-cyan-300">
                        {phase.phase}
                      </p>

                      <h3 className="mt-1 text-lg">
                        {phase.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
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
                  {title} will continue growing throughout my career.
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