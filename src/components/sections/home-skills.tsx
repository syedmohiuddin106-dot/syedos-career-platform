import type { ReactNode } from "react";

import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { getPayload } from "payload";

import config from "@payload-config";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeHeroData } from "@/lib/cms/get-home-hero-data";

type IconVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type ProgressVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type SkillGroup = {
  title: string;
  description: string;
  icon: ReactNode;
  variant: IconVariant;
  skills: string[];
};

const fallbackSkillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description:
      "Creating responsive, accessible, and reusable interfaces with clear structure, consistent styling, and maintainable component architecture.",
    icon: <Layers3 aria-hidden="true" size={23} />,
    variant: "primary",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building server-side application logic, secure workflows, authentication systems, validation, sessions, APIs, and role-based functionality.",
    icon: <ServerCog aria-hidden="true" size={23} />,
    variant: "success",
    skills: [
      "PHP",
      "Node.js",
      "REST APIs",
      "Authentication",
      "Authorization",
      "Sessions",
      "Form Validation",
      "File Uploads",
    ],
  },
  {
    title: "Database Engineering",
    description:
      "Designing structured relational data, writing queries, connecting applications, and protecting database operations.",
    icon: <Database aria-hidden="true" size={23} />,
    variant: "info",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Database Design",
      "Relationships",
      "Prepared Statements",
      "CRUD Operations",
      "Data Validation",
    ],
  },
  {
    title: "Artificial Intelligence",
    description:
      "Integrating intelligent features through AI APIs, structured prompts, validation, automation, and assistant workflows.",
    icon: <BrainCircuit aria-hidden="true" size={23} />,
    variant: "warning",
    skills: [
      "Gemini API",
      "AI Agents",
      "Prompt Engineering",
      "AI Integration",
      "Response Validation",
      "Automation",
      "Context Handling",
      "Responsible AI",
    ],
  },
  {
    title: "Cloud and DevOps",
    description:
      "Developing knowledge of deployment, cloud environments, containers, continuous delivery, and reliable software release practices.",
    icon: <CloudCog aria-hidden="true" size={23} />,
    variant: "primary",
    skills: [
      "AWS Fundamentals",
      "Docker",
      "Environment Variables",
      "CI/CD",
      "Production Builds",
      "Deployment",
      "Cloud Hosting",
      "Monitoring",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Using practical engineering tools for coding, testing, databases, source control, local development, and project organization.",
    icon: <Wrench aria-hidden="true" size={23} />,
    variant: "default",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "XAMPP",
      "Chrome DevTools",
      "PowerShell",
      "npm",
      "Payload CMS",
    ],
  },
];

const engineeringStrengths = [
  {
    title: "Reusable architecture",
    description:
      "Breaking large applications into clear components, modules, configuration files, and maintainable feature areas.",
    icon: <Code2 aria-hidden="true" size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Security awareness",
    description:
      "Applying validation, protected routes, role checks, secure authentication, and responsible configuration handling.",
    icon: <ShieldCheck aria-hidden="true" size={20} />,
    variant: "success" as const,
  },
  {
    title: "Version control",
    description:
      "Using Git and GitHub to track changes, preserve stable work, and organize project development safely.",
    icon: <GitBranch aria-hidden="true" size={20} />,
    variant: "info" as const,
  },
  {
    title: "Continuous improvement",
    description:
      "Improving technical depth through projects, debugging, documentation, testing, and structured learning.",
    icon: <Sparkles aria-hidden="true" size={20} />,
    variant: "warning" as const,
  },
];

const progressVariants: ProgressVariant[] = [
  "primary",
  "success",
  "info",
  "warning",
];

function normalizeCategory(
  category: string | null | undefined,
): string {
  return category?.trim().toLowerCase() ?? "";
}

function getGroupIndex(
  category: string | null | undefined,
): number | null {
  const normalized = normalizeCategory(category);

  if (
    normalized.includes("frontend") ||
    normalized.includes("front-end") ||
    normalized.includes("ui")
  ) {
    return 0;
  }

  if (
    normalized.includes("backend") ||
    normalized.includes("back-end") ||
    normalized.includes("server")
  ) {
    return 1;
  }

  if (
    normalized.includes("database") ||
    normalized.includes("sql") ||
    normalized.includes("data")
  ) {
    return 2;
  }

  if (
    normalized.includes("artificial") ||
    normalized.includes("ai") ||
    normalized.includes("machine")
  ) {
    return 3;
  }

  if (
    normalized.includes("cloud") ||
    normalized.includes("devops") ||
    normalized.includes("deployment")
  ) {
    return 4;
  }

  if (
    normalized.includes("tool") ||
    normalized.includes("development") ||
    normalized.includes("version control")
  ) {
    return 5;
  }

  return null;
}

async function getSkillsSectionData() {
  const payload = await getPayload({
    config,
  });

  const [skillsResult, projectsResult] = await Promise.all([
    payload.find({
      collection: "skills",
      where: {
        _status: {
          equals: "published",
        },
      },
      depth: 1,
      limit: 100,
      sort: "displayOrder",
      draft: false,
    }),

    payload.find({
      collection: "projects",
      where: {
        _status: {
          equals: "published",
        },
      },
      depth: 0,
      limit: 1,
      draft: false,
    }),
  ]);

  return {
    skills: skillsResult.docs,
    projectCount: projectsResult.totalDocs,
  };
}

export async function HomeSkills() {
  const [{ skills, projectCount }, { profile }] =
    await Promise.all([
      getSkillsSectionData(),
      getHomeHeroData(),
    ]);

  const skillGroups = fallbackSkillGroups.map((group) => ({
    ...group,
    skills: [...group.skills],
  }));

  for (const skill of skills) {
    const groupIndex = getGroupIndex(skill.category);

    if (groupIndex === null) {
      continue;
    }

    const group = skillGroups[groupIndex];

    if (!group.skills.includes(skill.name)) {
      group.skills.unshift(skill.name);
    }
  }

  const publishedSkillsWithProgress = skills
    .filter(
      (skill) =>
        typeof skill.proficiencyPercentage === "number",
    )
    .sort(
      (first, second) =>
        (second.proficiencyPercentage ?? 0) -
        (first.proficiencyPercentage ?? 0),
    )
    .slice(0, 5);

  const capabilityProgress =
    publishedSkillsWithProgress.length > 0
      ? publishedSkillsWithProgress.map((skill, index) => ({
          label: skill.name,
          value: skill.proficiencyPercentage ?? 0,
          variant:
            progressVariants[index % progressVariants.length] ??
            "primary",
        }))
      : [
          {
            label: "Frontend Development",
            value: 84,
            variant: "primary" as const,
          },
          {
            label: "PHP and Backend Logic",
            value: 79,
            variant: "success" as const,
          },
          {
            label: "Database Design",
            value: 78,
            variant: "info" as const,
          },
          {
            label: "Cloud and DevOps",
            value: 40,
            variant: "warning" as const,
          },
        ];

  const professionalStrengths =
    profile?.personalStrengths &&
    profile.personalStrengths.length > 0
      ? profile.personalStrengths
          .slice(0, 4)
          .map((strength, index) => ({
            title: strength.title,
            description:
              strength.description ??
              engineeringStrengths[index]?.description ??
              "A professional strength developed through practical software projects.",
            icon:
              engineeringStrengths[index]?.icon ??
              engineeringStrengths[0].icon,
            variant:
              engineeringStrengths[index]?.variant ??
              engineeringStrengths[0].variant,
          }))
      : engineeringStrengths;

  const publishedSkillCount = skills.length;
  const skillDomainCount = skillGroups.length;

  return (
    <section className="relative border-b border-slate-800/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-[-12rem] top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-12rem] left-[-10rem] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="syedos-container relative py-12 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrow="Skills and Technologies"
          title="A growing full-stack skill set supported by practical project experience"
          description="My technical foundation spans frontend development, backend systems, databases, artificial intelligence, cloud learning, deployment, and modern engineering tools."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              variant="elevated"
              interactive
              className="h-full"
            >
              <IconContainer
                variant={group.variant}
                size="large"
                label={group.title}
              >
                {group.icon}
              </IconContainer>

              <h3 className="mt-4 text-lg leading-tight sm:mt-5 sm:text-xl">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:leading-7">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.slice(0, 8).map((skill) => (
                  <Badge
                    key={`${group.title}-${skill}`}
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 xl:grid-cols-2">
          <Card
            variant="editorial"
            className="h-full"
          >
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Engineering Strengths
            </p>

            <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
              Skills beyond programming syntax
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:leading-7">
              Strong software development also requires architecture,
              security, debugging, version control, documentation, and
              the ability to improve systems over time.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {professionalStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="h-full rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5"
                >
                  <IconContainer
                    variant={strength.variant}
                    size="small"
                    label={strength.title}
                  >
                    {strength.icon}
                  </IconContainer>

                  <h4 className="mt-4 font-semibold text-white">
                    {strength.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card
            variant="glass"
            className="h-full"
          >
            <div className="flex items-center gap-3">
              <IconContainer
                variant="primary"
                label="Capability progress"
              >
                <Code2
                  aria-hidden="true"
                  size={20}
                />
              </IconContainer>

              <div>
                <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Current Capability
                </p>

                <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                  Practical development progress
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              These values represent current learning progress and
              practical project experience. They will be updated as
              new projects, courses, certifications, and production
              deployments are completed.
            </p>

            <div className="mt-6 space-y-5">
              {capabilityProgress.map((capability) => (
                <Progress
                  key={capability.label}
                  label={capability.label}
                  value={capability.value}
                  variant={capability.variant}
                />
              ))}
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5">
                <p className="text-2xl font-bold text-white">
                  {publishedSkillCount > 0
                    ? publishedSkillCount
                    : skillDomainCount}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  published technical skills
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5">
                <p className="text-2xl font-bold text-white">
                  {projectCount > 0 ? projectCount : 3}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  published practical projects
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 sm:p-5">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                Current Development Direction
              </p>

              <p className="mt-3 text-sm leading-6 text-blue-100/75">
                Strengthening Next.js, TypeScript, backend
                integration, PostgreSQL, Docker, deployment
                workflows, testing, and production-ready full-stack
                application development.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-sm font-semibold text-white">
                  Frontend
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  React, Next.js, TypeScript, responsive UI
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-sm font-semibold text-white">
                  Backend
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  APIs, authentication, Payload CMS, validation
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-sm font-semibold text-white">
                  Delivery
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  PostgreSQL, Docker, Git, deployment workflows
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-xl sm:mt-12 sm:rounded-[2rem] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Learning Strategy
              </p>

              <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
                Learning by building complete software systems
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:leading-7">
                I strengthen technical skills by applying them inside
                real projects, solving errors, improving architecture,
                testing features, and documenting the complete
                development process.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 sm:p-5">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {projectCount > 0 ? projectCount : 3}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  published practical projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 sm:p-5">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {publishedSkillCount > 0
                    ? publishedSkillCount
                    : skillDomainCount}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  published CMS skills
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 sm:p-5">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  Ongoing
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  continuous technical growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}