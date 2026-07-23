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

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

const skillGroups = [
  {
    title: "Frontend Engineering",
    description:
      "Creating responsive, accessible, and reusable interfaces with clear structure, consistent styling, and maintainable component architecture.",
    icon: <Layers3 size={23} />,
    variant: "primary" as const,
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
      "Building server-side application logic, secure workflows, authentication systems, validation, sessions, and role-based functionality.",
    icon: <ServerCog size={23} />,
    variant: "success" as const,
    skills: [
      "PHP",
      "Node.js Fundamentals",
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
    icon: <Database size={23} />,
    variant: "info" as const,
    skills: [
      "MySQL",
      "SQL",
      "phpMyAdmin",
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
      "Integrating intelligent features into software through AI APIs, structured prompts, validation, automation, and assistant workflows.",
    icon: <BrainCircuit size={23} />,
    variant: "warning" as const,
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
      "Developing knowledge of deployment, cloud environments, containerization, continuous delivery, and reliable software release practices.",
    icon: <CloudCog size={23} />,
    variant: "primary" as const,
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
      "Using practical engineering tools for coding, testing, database work, source control, local development, and project organization.",
    icon: <Wrench size={23} />,
    variant: "default" as const,
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "XAMPP",
      "Postman Fundamentals",
      "Chrome DevTools",
      "PowerShell",
      "npm",
    ],
  },
];

const capabilityProgress = [
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
    label: "MySQL and Database Design",
    value: 78,
    variant: "info" as const,
  },
  {
    label: "AI Integration",
    value: 64,
    variant: "warning" as const,
  },
  {
    label: "Cloud and DevOps",
    value: 35,
    variant: "primary" as const,
  },
];

const engineeringStrengths = [
  {
    title: "Reusable architecture",
    description:
      "Breaking large applications into clear components, modules, configuration files, and maintainable feature areas.",
    icon: <Code2 size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Security awareness",
    description:
      "Applying prepared statements, validation, protected routes, sessions, role checks, and safe configuration handling.",
    icon: <ShieldCheck size={20} />,
    variant: "success" as const,
  },
  {
    title: "Version control",
    description:
      "Using Git and GitHub to track changes, preserve stable work, and organize project development safely.",
    icon: <GitBranch size={20} />,
    variant: "info" as const,
  },
  {
    title: "Continuous improvement",
    description:
      "Improving technical depth through projects, debugging, documentation, testing, and structured learning.",
    icon: <Sparkles size={20} />,
    variant: "warning" as const,
  },
];

export function HomeSkills() {
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
          description="My current technical foundation spans frontend development, backend systems, databases, artificial intelligence, cloud learning, deployment, and modern engineering tools."
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

              <p className="mt-3 text-sm leading-6 sm:leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 xl:grid-cols-[0.92fr_1.08fr]">
          <Card variant="glass">
            <div className="flex items-center gap-3">
              <IconContainer
                variant="primary"
                label="Capability progress"
              >
                <Code2 size={20} />
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
              project experience rather than permanent limits. They
              will be updated as new projects, courses, and production
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
          </Card>

          <Card variant="editorial">
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Engineering Strengths
            </p>

            <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
              Skills beyond programming syntax
            </h3>

            <p className="mt-3 text-sm leading-6 sm:leading-7 text-slate-400">
              Strong software development also requires architecture,
              security, debugging, version control, documentation, and
              the ability to improve systems over time.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {engineeringStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5"
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
        </div>

        <div className="mt-10 rounded-3xl sm:mt-12 sm:rounded-[2rem] border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-xl sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Learning Strategy
              </p>

              <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
                Learning by building complete software systems
              </h3>

              <p className="mt-3 text-sm leading-6 sm:leading-7 text-slate-400">
                I strengthen technical skills by applying them inside
                real projects, solving errors, improving architecture,
                testing features, and documenting the complete
                development process.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 sm:p-5">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  3
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  major practical projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4 sm:p-5">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  6
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  technical skill domains
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