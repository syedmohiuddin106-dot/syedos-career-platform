import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GitBranch,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { getPayload } from "payload";

import config from "@payload-config";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";

type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

type IconVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type ProjectDisplayItem = {
  title: string;
  slug: string;
  category: string;
  description: string;
  status: string;
  statusVariant: BadgeVariant;
  technologies: string[];
  highlights: string[];
  repository: string | null;
  liveURL: string | null;
  icon: React.ReactNode;
  iconVariant: IconVariant;
};

const fallbackProjects: ProjectDisplayItem[] = [
  {
    title: "SyedOS",
    slug: "syedos",
    category: "Intelligent Career Portfolio Platform",
    description:
      "A production-grade personal career platform combining a professional portfolio, secure administration, structured CMS content, PostgreSQL, Docker, REST APIs, and publishing workflows.",
    icon: <Sparkles aria-hidden="true" size={24} />,
    iconVariant: "primary",
    status: "In Development",
    statusVariant: "warning",
    technologies: [
      "Next.js",
      "TypeScript",
      "Payload CMS",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Responsive reusable design system",
      "Secure Payload CMS administration",
      "PostgreSQL content architecture",
      "Draft and publishing workflows",
    ],
    repository:
      "https://github.com/syedmohiuddin106-dot/syedos-career-platform",
    liveURL: null,
  },
  {
    title: "SyedAI Assistant",
    slug: "syedai-assistant",
    category: "Multi-Skill Artificial Intelligence Assistant",
    description:
      "An AI-powered development and career assistant designed to support programming, database troubleshooting, project work, portfolio improvement, resume preparation, and technical learning.",
    icon: <Bot aria-hidden="true" size={24} />,
    iconVariant: "info",
    status: "Active",
    statusVariant: "primary",
    technologies: [
      "PHP",
      "JavaScript",
      "Gemini API",
      "MySQL",
      "AI Agents",
    ],
    highlights: [
      "Multiple specialized AI modes",
      "File analysis and response history",
      "Favorites and export workflows",
      "Career and project assistance",
    ],
    repository:
      "https://github.com/syedmohiuddin106-dot/syedai-assistant",
    liveURL: null,
  },
  {
    title: "CampusHire",
    slug: "campushire",
    category: "Campus Placement Management System",
    description:
      "A full-stack placement platform with dedicated student, recruiter, and administrator experiences for profiles, jobs, applications, approvals, interviews, notifications, and reports.",
    icon: <BriefcaseBusiness aria-hidden="true" size={24} />,
    iconVariant: "success",
    status: "Completed",
    statusVariant: "success",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    highlights: [
      "Student, recruiter, and admin roles",
      "Secure authentication and sessions",
      "Job application workflows",
      "Recruiter approval and reporting",
    ],
    repository:
      "https://github.com/syedmohiuddin106-dot/campushire-campus-placement-system",
    liveURL: null,
  },
];

const projectCapabilities = [
  {
    title: "End-to-end development",
    description:
      "Projects cover interface design, backend logic, database modelling, validation, authentication, APIs, and deployment planning.",
    icon: <Layers3 aria-hidden="true" size={21} />,
    variant: "primary" as const,
  },
  {
    title: "Secure engineering",
    description:
      "Authentication, role checks, prepared statements, session handling, validation, and protected administration are treated as core requirements.",
    icon: <ShieldCheck aria-hidden="true" size={21} />,
    variant: "success" as const,
  },
  {
    title: "Real user workflows",
    description:
      "Each project is designed around practical user journeys rather than disconnected technical demonstrations.",
    icon: <Users aria-hidden="true" size={21} />,
    variant: "info" as const,
  },
];

const projectIcons = [
  {
    icon: <Sparkles aria-hidden="true" size={24} />,
    variant: "primary" as const,
  },
  {
    icon: <Bot aria-hidden="true" size={24} />,
    variant: "info" as const,
  },
  {
    icon: <BriefcaseBusiness aria-hidden="true" size={24} />,
    variant: "success" as const,
  },
];

function formatProjectType(value: string | null | undefined): string {
  if (!value) {
    return "Software Development Project";
  }

  const labels: Record<string, string> = {
    "full-stack": "Full-Stack Application",
    frontend: "Frontend Application",
    backend: "Backend Application",
    mobile: "Mobile Application",
    ai: "Artificial Intelligence Project",
    cloud: "Cloud and DevOps Project",
    database: "Database Application",
    other: "Software Development Project",
  };

  return (
    labels[value] ??
    value
      .replaceAll("-", " ")
      .replace(/\b\w/g, (character) => character.toUpperCase())
  );
}

function formatDevelopmentStatus(
  value: string | null | undefined,
): {
  label: string;
  variant: BadgeVariant;
} {
  switch (value) {
    case "completed":
      return {
        label: "Completed",
        variant: "success",
      };

    case "active":
      return {
        label: "Active",
        variant: "primary",
      };

    case "in-development":
      return {
        label: "In Development",
        variant: "warning",
      };

    case "planned":
      return {
        label: "Planned",
        variant: "outline",
      };

    case "archived":
  return {
    label: "Archived",
    variant: "outline",
  };

    default:
      return {
        label: "Published",
        variant: "primary",
      };
  }
}

async function getFeaturedProjects(): Promise<ProjectDisplayItem[]> {
  const payload = await getPayload({
    config,
  });

  const result = await payload.find({
    collection: "projects",
    where: {
      and: [
        {
          _status: {
            equals: "published",
          },
        },
        {
          featured: {
            equals: true,
          },
        },
      ],
    },
    depth: 1,
    limit: 3,
    sort: "displayOrder",
    draft: false,
  });

  const cmsProjects: ProjectDisplayItem[] = result.docs.map(
    (project, index) => {
      const visual =
        projectIcons[index] ??
        projectIcons[0];

      const status = formatDevelopmentStatus(
        project.developmentStatus,
      );

      const technologies =
        project.technologies
          ?.map((technology) => technology.name)
          .filter(Boolean)
          .slice(0, 6) ?? [];

      const featureHighlights =
        project.features
          ?.map((feature) => feature.title)
          .filter(Boolean)
          .slice(0, 4) ?? [];

      const responsibilityHighlights =
        project.responsibilities
          ?.map((responsibility) => responsibility.description)
          .filter(Boolean)
          .slice(0, 4) ?? [];

      const highlights =
        featureHighlights.length > 0
          ? featureHighlights
          : responsibilityHighlights;

      return {
        title: project.title,
        slug: project.slug,
        category: formatProjectType(project.projectType),
        description:
          project.shortDescription ??
          "A software project designed around practical workflows, secure engineering, and maintainable architecture.",
        status: status.label,
        statusVariant: status.variant,
        technologies:
          technologies.length > 0
            ? technologies
            : ["Software Engineering"],
        highlights:
          highlights.length > 0
            ? highlights
            : [
                "Structured application architecture",
                "Practical user workflows",
                "Secure data management",
                "Production-oriented development",
              ],
        repository: project.githubURL ?? null,
        liveURL: project.liveURL ?? null,
        icon: visual.icon,
        iconVariant: visual.variant,
      };
    },
  );

  const cmsSlugs = new Set(
    cmsProjects.map((project) => project.slug),
  );

  const remainingFallbackProjects = fallbackProjects.filter(
    (project) => !cmsSlugs.has(project.slug),
  );

  return [...cmsProjects, ...remainingFallbackProjects].slice(0, 3);
}

export async function HomeProjects() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <section className="relative border-b border-slate-800/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="syedos-container relative py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Software products built around complete real-world workflows"
            description="These projects demonstrate full-stack development, database design, secure engineering, APIs, role-based systems, modern architecture, and scalable product thinking."
          />

          <div className="shrink-0">
            <LinkButton
              href="/projects"
              variant="secondary"
              rightIcon={
                <ArrowRight
                  aria-hidden="true"
                  size={17}
                />
              }
            >
              View all projects
            </LinkButton>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.slug}
              variant={
                index === 0
                  ? "glass"
                  : index === 1
                    ? "elevated"
                    : "editorial"
              }
              className="overflow-hidden p-0"
            >
              <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
                <div className="relative border-b border-slate-800 bg-slate-950/45 p-5 sm:p-8 lg:border-b-0 lg:border-r">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_45%)]"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <IconContainer
                        variant={project.iconVariant}
                        size="large"
                        rounded="large"
                        label={project.title}
                      >
                        {project.icon}
                      </IconContainer>

                      <Badge
                        variant={project.statusVariant}
                        dot
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="syedos-code-text mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl leading-tight sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          variant="outline"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="flex items-center gap-3">
                    <IconContainer
                      variant="default"
                      size="small"
                      label="Project highlights"
                    >
                      <Code2
                        aria-hidden="true"
                        size={16}
                      />
                    </IconContainer>

                    <div>
                      <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Engineering Highlights
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        What this project demonstrates
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                        <p className="text-sm leading-6 text-slate-400">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <LinkButton
                      href={`/projects/${project.slug}`}
                      rightIcon={
                        <ArrowRight
                          aria-hidden="true"
                          size={17}
                        />
                      }
                    >
                      View Case Study
                    </LinkButton>

                    {project.repository ? (
                      <LinkButton
                        href={project.repository}
                        external
                        variant="secondary"
                        leftIcon={
                          <GitBranch
                            aria-hidden="true"
                            size={17}
                          />
                        }
                        rightIcon={
                          <ExternalLink
                            aria-hidden="true"
                            size={14}
                          />
                        }
                        ariaLabel={`Open ${project.title} repository`}
                      >
                        Repository
                      </LinkButton>
                    ) : null}

                    {project.liveURL ? (
                      <LinkButton
                        href={project.liveURL}
                        external
                        variant="ghost"
                        rightIcon={
                          <ExternalLink
                            aria-hidden="true"
                            size={14}
                          />
                        }
                        ariaLabel={`Open the live ${project.title} project`}
                      >
                        Live Project
                      </LinkButton>
                    ) : null}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <SectionHeading
            eyebrow="Project Approach"
            title="Projects designed as complete systems"
            description="Each application strengthens technical depth, architecture decisions, security awareness, user experience, testing, and software-engineering discipline."
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {projectCapabilities.map((capability) => (
              <Card
                key={capability.title}
                interactive
              >
                <IconContainer
                  variant={capability.variant}
                  size="large"
                  label={capability.title}
                >
                  {capability.icon}
                </IconContainer>

                <h3 className="mt-4 text-lg leading-tight sm:mt-5 sm:text-xl">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5 sm:mt-12 sm:rounded-[2rem] sm:p-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div>
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Project Portfolio
              </p>

              <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
                Detailed case studies include architecture, security,
                challenges, testing, and outcomes.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100/70">
                Each project page explains how the system was planned,
                built, tested, improved, and prepared for recruiters,
                interviews, and technical evaluation.
              </p>
            </div>

            <LinkButton
              href="/projects"
              rightIcon={
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                />
              }
            >
              Explore Project Portfolio
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}