import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjectsPageData } from "@/lib/cms/get-projects-page-data";

type VisualVariant =
  | "primary"
  | "info"
  | "success"
  | "warning";

type EngineeringItem = {
  label: string;
  value: string;
};

type ProjectItem = {
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  iconVariant: VisualVariant;
  status: string;
  statusVariant: VisualVariant;
  featured: boolean;
  technologies: string[];
  features: string[];
  engineering: EngineeringItem[];
  repository: string;
  caseStudy: string;
};

type ProjectPrinciple = {
  title: string;
  description: string;
  icon: ReactNode;
  variant: VisualVariant;
};

const fallbackProjects: ProjectItem[] = [
  {
    title: "SyedOS",
    slug: "syedos",
    category: "Intelligent Career Portfolio Platform",
    description:
      "A production-oriented personal career platform designed to combine portfolio storytelling, private administration, structured content, analytics, recruiter-focused presentation, and AI-assisted career intelligence.",
    longDescription:
      "SyedOS is being developed as a long-term professional platform rather than a basic portfolio website. It uses reusable architecture, a complete design system, responsive layouts, structured sections, and a roadmap for CMS, database, authentication, analytics, AI, testing, and cloud deployment.",
    icon: <Sparkles size={25} />,
    iconVariant: "primary",
    status: "In Development",
    statusVariant: "warning",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Payload CMS",
      "PostgreSQL",
      "Docker",
      "Gemini AI",
    ],
    features: [
      "Professional public portfolio experience",
      "Private administrator architecture",
      "Reusable design system and UI laboratory",
      "Recruiter and audience-focused content modes",
      "Structured CMS and database roadmap",
      "AI-powered career intelligence",
      "Analytics and project performance tracking",
      "Cloud deployment and CI/CD planning",
    ],
    engineering: [
      {
        label: "Frontend",
        value: "Next.js 16 and TypeScript",
      },
      {
        label: "Architecture",
        value: "App Router and reusable modules",
      },
      {
        label: "Content",
        value: "Payload CMS integration",
      },
      {
        label: "Database",
        value: "PostgreSQL",
      },
    ],
    repository:
      "https://github.com/syedmohiuddin106-dot",
    caseStudy: "/projects/syedos",
  },
  {
    title: "SyedAI Assistant",
    slug: "syedai-assistant",
    category: "Multi-Skill Artificial Intelligence Assistant",
    description:
      "An AI-powered assistant created to support programming, project development, database troubleshooting, technical learning, resume improvement, career preparation, and software engineering tasks.",
    longDescription:
      "SyedAI Assistant combines AI API integration with practical application features such as multiple assistant modes, conversation history, favorites, exports, profile controls, file handling, response continuation, and structured user workflows.",
    icon: <Bot size={25} />,
    iconVariant: "info",
    status: "Active Project",
    statusVariant: "primary",
    featured: true,
    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "Gemini API",
      "HTML",
      "CSS",
      "AI Agents",
      "XAMPP",
    ],
    features: [
      "Multiple specialized assistant modes",
      "AI-powered development support",
      "Conversation history and favorites",
      "Exportable assistant responses",
      "File upload and validation",
      "Inline status and error handling",
      "Responsive dashboard experience",
      "Profile and usage management",
    ],
    engineering: [
      {
        label: "Backend",
        value: "PHP application logic",
      },
      {
        label: "AI",
        value: "Gemini API integration",
      },
      {
        label: "Database",
        value: "MySQL",
      },
      {
        label: "Environment",
        value: "XAMPP local development",
      },
    ],
    repository:
      "https://github.com/syedmohiuddin106-dot/syedai-assistant",
    caseStudy: "/projects/syedai-assistant",
  },
  {
    title: "CampusHire",
    slug: "campushire",
    category: "Campus Placement Management System",
    description:
      "A complete campus placement platform with separate student, recruiter, and administrator modules for jobs, applications, profiles, approvals, interview scheduling, notifications, and reporting.",
    longDescription:
      "CampusHire was built to model real campus recruitment workflows. It includes protected role-based access, secure authentication, recruiter approval, student applications, resume handling, job management, application tracking, notifications, contact messages, and administrative reporting.",
    icon: <BriefcaseBusiness size={25} />,
    iconVariant: "success",
    status: "Completed",
    statusVariant: "success",
    featured: true,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "MySQLi",
      "XAMPP",
      "phpMyAdmin",
    ],
    features: [
      "Student registration and profile management",
      "Recruiter registration and approval",
      "Job posting and application workflows",
      "Resume upload and download",
      "Application status tracking",
      "Interview scheduling",
      "Notifications and contact messages",
      "Administrative reports and activity logs",
    ],
    engineering: [
      {
        label: "Roles",
        value: "Student, recruiter, and admin",
      },
      {
        label: "Security",
        value: "Sessions and prepared statements",
      },
      {
        label: "Backend",
        value: "PHP with MySQLi",
      },
      {
        label: "Database",
        value: "MySQL",
      },
    ],
    repository:
      "https://github.com/syedmohiuddin106-dot",
    caseStudy: "/projects/campushire",
  },
];

const projectPrinciples: ProjectPrinciple[] = [
  {
    title: "Complete user workflows",
    description:
      "Each project is designed around realistic user journeys, clear roles, useful actions, and meaningful outcomes.",
    icon: <Users size={21} />,
    variant: "primary",
  },
  {
    title: "Secure foundations",
    description:
      "Authentication, authorization, validation, prepared statements, protected routes, and safe data handling are treated as core requirements.",
    icon: <ShieldCheck size={21} />,
    variant: "success",
  },
  {
    title: "Structured architecture",
    description:
      "Projects are organized into reusable components, modules, configuration files, and maintainable feature areas.",
    icon: <Layers3 size={21} />,
    variant: "info",
  },
  {
    title: "Practical learning",
    description:
      "Every project is used to strengthen debugging, architecture, security, documentation, deployment, and software engineering skills.",
    icon: <Code2 size={21} />,
    variant: "warning",
  },
];

function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

function getObjectValue(
  record: object | null | undefined,
  key: string,
): unknown {
  if (!record) {
    return undefined;
  }

  return (record as Record<string, unknown>)[key];
}

function getString(
  record: object | null | undefined,
  key: string,
  fallback = "",
): string {
  const value = getObjectValue(record, key);

  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : fallback;
}

function getBoolean(
  record: object | null | undefined,
  key: string,
): boolean {
  return getObjectValue(record, key) === true;
}

function getArray(
  record: object | null | undefined,
  key: string,
): unknown[] {
  const value = getObjectValue(record, key);

  return Array.isArray(value) ? value : [];
}

function compactText(
  value: string,
  maximum = 320,
): string {
  if (value.length <= maximum) {
    return value;
  }

  const shortened = value.slice(0, maximum);
  const lastSpace = shortened.lastIndexOf(" ");

  return `${shortened.slice(
    0,
    lastSpace > 0 ? lastSpace : maximum,
  )}…`;
}

function formatProjectType(value: string): string {
  const labels: Record<string, string> = {
    "full-stack": "Full-Stack Application",
    ai: "Artificial Intelligence Project",
    "cloud-devops": "Cloud and DevOps Project",
    frontend: "Frontend Application",
    backend: "Backend System",
    academic: "Academic Project",
    other: "Software Project",
  };

  return labels[value] ?? "Software Project";
}

function formatDevelopmentStatus(
  value: string,
): string {
  const labels: Record<string, string> = {
    planning: "Planning",
    "in-development": "In Development",
    completed: "Completed",
    maintained: "Maintained",
    archived: "Archived",
  };

  return labels[value] ?? "Active Project";
}

function getStatusVariant(
  value: string,
): VisualVariant {
  if (value === "completed" || value === "maintained") {
    return "success";
  }

  if (value === "in-development") {
    return "warning";
  }

  if (value === "planning") {
    return "info";
  }

  return "primary";
}

function getProjectIcon(
  projectType: string,
  index: number,
): ReactNode {
  if (projectType === "ai") {
    return <Bot size={25} />;
  }

  if (
    projectType === "academic" ||
    projectType === "backend"
  ) {
    return <BriefcaseBusiness size={25} />;
  }

  if (
    projectType === "cloud-devops" ||
    projectType === "full-stack"
  ) {
    return <Sparkles size={25} />;
  }

  const fallbackIcons = [
    <Sparkles key="sparkles" size={25} />,
    <Bot key="bot" size={25} />,
    <BriefcaseBusiness
      key="briefcase"
      size={25}
    />,
  ];

  return fallbackIcons[index % fallbackIcons.length];
}

function getProjectVariant(
  projectType: string,
  index: number,
): VisualVariant {
  if (projectType === "ai") {
    return "info";
  }

  if (projectType === "academic") {
    return "success";
  }

  if (projectType === "cloud-devops") {
    return "warning";
  }

  const variants: VisualVariant[] = [
    "primary",
    "info",
    "success",
  ];

  return variants[index % variants.length];
}

function createEngineeringItems(
  record: object,
  fallback: EngineeringItem[],
): EngineeringItem[] {
  const technologies = getArray(
    record,
    "technologies",
  )
    .filter(isObject)
    .map((technology) => ({
      name: getString(technology, "name"),
      category: getString(
        technology,
        "category",
        "other",
      ),
    }))
    .filter((technology) => technology.name);

  const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    ai: "Artificial Intelligence",
    cloud: "Cloud",
    devops: "DevOps",
    testing: "Testing",
    tool: "Tools",
    other: "Technology",
  };

  const grouped = new Map<string, string[]>();

  for (const technology of technologies) {
    const label =
      categoryLabels[technology.category] ??
      "Technology";

    const existing = grouped.get(label) ?? [];
    existing.push(technology.name);
    grouped.set(label, existing);
  }

  const engineeringItems = Array.from(
    grouped.entries(),
  )
    .map(([label, values]) => ({
      label,
      value: values.join(", "),
    }))
    .slice(0, 4);

  return engineeringItems.length > 0
    ? engineeringItems
    : fallback;
}

function fillProjects(
  cmsProjects: ProjectItem[],
): ProjectItem[] {
  const result = [...cmsProjects];

  for (const fallbackProject of fallbackProjects) {
    if (result.length >= 3) {
      break;
    }

    const alreadyExists = result.some(
      (project) =>
        project.slug === fallbackProject.slug ||
        project.title.toLowerCase() ===
          fallbackProject.title.toLowerCase(),
    );

    if (!alreadyExists) {
      result.push(fallbackProject);
    }
  }

  return result.slice(0, 3);
}

export async function generateMetadata(): Promise<Metadata> {
  const { profile, projects } =
    await getProjectsPageData();

  const profileRecord = isObject(profile)
    ? profile
    : null;

  const fullName = getString(
    profileRecord,
    "fullName",
    "Syed Mohiuddin",
  );

  const firstProject =
    projects.find(isObject) ?? null;

  const seoValue = getObjectValue(
    firstProject,
    "seo",
  );

  const seo = isObject(seoValue)
    ? seoValue
    : null;

  const description = getString(
    seo,
    "description",
    `Explore ${fullName}'s full-stack, AI-integrated, database-driven, and production-oriented software projects.`,
  );

  return {
    title: getString(
      seo,
      "title",
      `Projects | ${fullName}`,
    ),
    description,
    alternates: {
      canonical: "/projects",
    },
    openGraph: {
      title: `Projects | ${fullName}`,
      description,
      url: "/projects",
      type: "website",
    },
  };
}

export default async function ProjectsPage() {
  const { profile, projects: cmsProjectDocs } =
    await getProjectsPageData();

  const profileRecord = isObject(profile)
    ? profile
    : null;

  const socialLinks = getArray(
    profileRecord,
    "socialLinks",
  ).filter(isObject);

  const githubLink =
    socialLinks.find(
      (link) =>
        getString(link, "platform") === "github",
    ) ?? null;

  const githubURL = getString(
    githubLink,
    "url",
    "https://github.com/syedmohiuddin106-dot",
  );

  const cmsProjects = cmsProjectDocs
    .filter(isObject)
    .map((record, index): ProjectItem => {
      const fallback =
        fallbackProjects[
          index % fallbackProjects.length
        ];

      const projectType = getString(
        record,
        "projectType",
        "full-stack",
      );

      const developmentStatus = getString(
        record,
        "developmentStatus",
        "completed",
      );

      const technologies = getArray(
        record,
        "technologies",
      )
        .filter(isObject)
        .map((technology) =>
          getString(technology, "name"),
        )
        .filter(Boolean);

      const features = getArray(
        record,
        "features",
      )
        .filter(isObject)
        .map((feature) =>
          getString(
            feature,
            "title",
            getString(feature, "description"),
          ),
        )
        .filter(Boolean);

      const responsibilities = getArray(
        record,
        "responsibilities",
      )
        .filter(isObject)
        .map((responsibility) =>
          getString(
            responsibility,
            "description",
          ),
        )
        .filter(Boolean);

      const slug = getString(
        record,
        "slug",
        fallback.slug,
      );

      const repository = getString(
        record,
        "githubURL",
        fallback.repository,
      );

      const documentationURL = getString(
        record,
        "documentationURL",
      );

      const caseStudy =
        documentationURL.startsWith("/")
          ? documentationURL
          : `/projects/${slug}`;

      return {
        title: getString(
          record,
          "title",
          fallback.title,
        ),
        slug,
        category: formatProjectType(projectType),
        description: compactText(
          getString(
            record,
            "shortDescription",
            fallback.description,
          ),
          300,
        ),
        longDescription: compactText(
          getString(
            record,
            "fullDescription",
            fallback.longDescription,
          ),
          900,
        ),
        icon: getProjectIcon(projectType, index),
        iconVariant: getProjectVariant(
          projectType,
          index,
        ),
        status: formatDevelopmentStatus(
          developmentStatus,
        ),
        statusVariant: getStatusVariant(
          developmentStatus,
        ),
        featured: getBoolean(record, "featured"),
        technologies:
          technologies.length > 0
            ? technologies.slice(0, 10)
            : fallback.technologies,
        features:
          features.length > 0
            ? features.slice(0, 8)
            : responsibilities.length > 0
              ? responsibilities.slice(0, 8)
              : fallback.features,
        engineering: createEngineeringItems(
          record,
          fallback.engineering,
        ),
        repository,
        caseStudy,
      };
    });

  const projects = fillProjects(cmsProjects);

  const projectCount = projects.length;

  const architectureCount = new Set(
    projects.flatMap((project) =>
      project.engineering.map(
        (item) => `${item.label}:${item.value}`,
      ),
    ),
  ).size;

  return (
    <main className="min-w-0 overflow-hidden">
      <section
        className="relative overflow-hidden border-b border-slate-800/80"
        aria-labelledby="projects-page-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-40 -top-52 h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-12rem] top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[38%] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative pb-14 pt-6 sm:py-14 lg:py-14 xl:pb-18 xl:pt-8">
          <div className="min-w-0 max-w-4xl">
            <div className="space-y-4">
              <div className="grid w-full grid-cols-[1.16fr_0.86fr_1.2fr] items-center gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
                <Badge
                  variant="primary"
                  className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.6rem] tracking-[-0.02em] sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm sm:tracking-normal"
                >
                  Full-Stack Projects
                </Badge>

                <Badge
                  variant="info"
                  className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.6rem] tracking-[-0.02em] sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm sm:tracking-normal"
                >
                  AI Integration
                </Badge>

                <Badge
                  variant="success"
                  className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.6rem] tracking-[-0.02em] sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm sm:tracking-normal"
                >
                  Real User Workflows
                </Badge>
              </div>

              <p className="syedos-code-text text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm sm:tracking-[0.2em]">
                Project Portfolio
              </p>
            </div>

            <h1
              id="projects-page-title"
              className="mt-3 max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[430px]:text-[2.65rem] sm:text-5xl sm:leading-[1.07] lg:text-6xl"
            >
              Software projects built to solve practical
              problems.
            </h1>

            <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              These projects demonstrate full-stack
              development, database design, artificial
              intelligence integration, authentication,
              role-based systems, secure engineering,
              reusable architecture, and complete user
              workflows.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <LinkButton
                href="#featured-projects"
                rightIcon={<ArrowRight size={18} />}
              >
                Explore Projects
              </LinkButton>

              <LinkButton
                href={githubURL}
                external
                variant="secondary"
                leftIcon={<GitBranch size={18} />}
                rightIcon={<ExternalLink size={14} />}
                ariaLabel="Open Syed Mohiuddin's GitHub profile"
              >
                View GitHub
              </LinkButton>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">
                  {projectCount}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  major software projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">
                  {Math.min(
                    architectureCount,
                    projectCount,
                  )}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  project architectures
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-sm">
                <p className="text-2xl font-bold text-white">
                  Full-Stack
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  practical development focus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured-projects"
        className="relative border-b border-slate-800/80"
        aria-label="Featured software projects"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Featured Work"
            title="Three projects representing my development journey"
            description="Each project demonstrates a different stage of my growth, from PHP and MySQL applications to AI integration and production-oriented Next.js architecture."
          />

          <div className="mt-10 grid gap-8">
            {projects.map((project, index) => (
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
                <div className="grid xl:grid-cols-[0.72fr_1.28fr]">
                  <div className="relative border-b border-slate-800 bg-slate-950/45 p-6 sm:p-8 xl:border-b-0 xl:border-r">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_48%)]"
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

                      <h2 className="mt-3 text-3xl">
                        {project.title}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map(
                          (technology) => (
                            <Badge
                              key={technology}
                              variant="outline"
                            >
                              {technology}
                            </Badge>
                          ),
                        )}
                      </div>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <LinkButton
                          href={project.caseStudy}
                          rightIcon={
                            <ArrowRight size={17} />
                          }
                        >
                          View Case Study
                        </LinkButton>

                        <LinkButton
                          href={project.repository}
                          external
                          variant="secondary"
                          leftIcon={
                            <GitBranch size={17} />
                          }
                          rightIcon={
                            <ExternalLink size={14} />
                          }
                          ariaLabel={`Open ${project.title} repository`}
                        >
                          Repository
                        </LinkButton>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-sm leading-7 text-slate-400">
                      {project.longDescription}
                    </p>

                    <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                      <div>
                        <div className="flex items-center gap-3">
                          <IconContainer
                            variant="default"
                            size="small"
                            label="Project features"
                          >
                            <CheckCircle2 size={16} />
                          </IconContainer>

                          <div>
                            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                              Main Features
                            </p>

                            <p className="mt-1 font-semibold text-white">
                              What the project includes
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {project.features.map(
                            (feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                              >
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-400" />

                                <p className="text-sm leading-6 text-slate-400">
                                  {feature}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <IconContainer
                            variant="info"
                            size="small"
                            label="Engineering architecture"
                          >
                            <Database size={16} />
                          </IconContainer>

                          <div>
                            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                              Architecture
                            </p>

                            <p className="mt-1 font-semibold text-white">
                              Technical foundation
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 space-y-3">
                          {project.engineering.map(
                            (item) => (
                              <div
                                key={`${item.label}-${item.value}`}
                                className="rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                              >
                                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                                  {item.label}
                                </p>

                                <p className="mt-2 font-medium text-white">
                                  {item.value}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Project engineering principles"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Engineering Approach"
            title="Principles used across my software projects"
            description="The projects are designed as complete systems with clear users, secure workflows, maintainable architecture, and practical learning outcomes."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projectPrinciples.map((principle) => (
              <Card
                key={principle.title}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={principle.variant}
                  size="large"
                  label={principle.title}
                >
                  {principle.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {principle.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Projects call to action">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="success" dot>
                  Open to software opportunities
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Interested in discussing one of these
                  projects?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Contact me for internships, fresher
                  software roles, project discussions,
                  technical collaborations, or detailed
                  project demonstrations.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <LinkButton
                  href="/contact"
                  rightIcon={<ArrowRight size={17} />}
                >
                  Contact Me
                </LinkButton>

                <LinkButton
                  href={githubURL}
                  external
                  variant="secondary"
                  leftIcon={<GitBranch size={17} />}
                  rightIcon={
                    <ExternalLink size={14} />
                  }
                  ariaLabel="Open Syed Mohiuddin's GitHub profile"
                >
                  Visit GitHub
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}