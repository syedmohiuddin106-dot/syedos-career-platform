import type { Metadata } from "next";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Syed Mohiuddin's technical skills in full-stack development, PHP, MySQL, Next.js, TypeScript, artificial intelligence, cloud technologies, DevOps, security, and development tools.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Technical Skills | Syed Mohiuddin",
    description:
      "Explore full-stack development, artificial intelligence, cloud, DevOps, databases, security, and software engineering skills.",
    url: "/skills",
    type: "website",
  },
};

const skillGroups = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, reusable, and visually consistent interfaces using modern web technologies and component architecture.",
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
      "Accessibility",
      "Component Architecture",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing application logic, secure user workflows, authentication, authorization, validation, file handling, and role-based systems.",
    icon: <ServerCog size={23} />,
    variant: "success" as const,
    skills: [
      "PHP",
      "Node.js Fundamentals",
      "REST API Fundamentals",
      "Authentication",
      "Authorization",
      "Sessions",
      "Server Validation",
      "File Uploads",
      "Role-Based Access",
      "Error Handling",
    ],
  },
  {
    title: "Database Engineering",
    description:
      "Designing relational databases, connecting applications, writing secure queries, managing relationships, and maintaining structured data.",
    icon: <Database size={23} />,
    variant: "info" as const,
    skills: [
      "MySQL",
      "SQL",
      "MySQLi",
      "phpMyAdmin",
      "Database Design",
      "Relational Tables",
      "CRUD Operations",
      "Prepared Statements",
      "Joins",
      "Data Validation",
    ],
  },
  {
    title: "Artificial Intelligence",
    description:
      "Integrating AI services into practical software products using structured prompts, context handling, response validation, and assistant workflows.",
    icon: <BrainCircuit size={23} />,
    variant: "warning" as const,
    skills: [
      "Gemini API",
      "AI Assistants",
      "AI Agents",
      "Prompt Engineering",
      "Context Handling",
      "Response Validation",
      "AI Integration",
      "Automation",
      "Responsible AI",
      "Assistant Workflows",
    ],
  },
  {
    title: "Cloud and DevOps",
    description:
      "Developing knowledge of deployment, containerization, cloud infrastructure, environment configuration, automation, and reliable release workflows.",
    icon: <CloudCog size={23} />,
    variant: "primary" as const,
    skills: [
      "AWS Fundamentals",
      "Docker",
      "Environment Variables",
      "CI/CD Fundamentals",
      "Cloud Deployment",
      "Production Builds",
      "GitHub Actions",
      "Monitoring Fundamentals",
      "Hosting",
      "Release Workflows",
    ],
  },
  {
    title: "Security Practices",
    description:
      "Applying security awareness across accounts, sessions, forms, databases, uploads, routes, credentials, and administrator workflows.",
    icon: <ShieldCheck size={23} />,
    variant: "success" as const,
    skills: [
      "Password Hashing",
      "Prepared Statements",
      "Input Validation",
      "CSRF Awareness",
      "Session Security",
      "Protected Routes",
      "Role Checks",
      "Safe File Uploads",
      "API Key Protection",
      "Secure Configuration",
    ],
  },
  {
    title: "Programming and Problem Solving",
    description:
      "Strengthening programming logic, debugging, algorithms, data structures, code organization, and practical software problem solving.",
    icon: <Code2 size={23} />,
    variant: "info" as const,
    skills: [
      "Python",
      "JavaScript",
      "PHP",
      "SQL",
      "Programming Logic",
      "Debugging",
      "Problem Solving",
      "DSA Fundamentals",
      "Code Refactoring",
      "Error Analysis",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Using modern development, database, source-control, testing, debugging, and local-environment tools across software projects.",
    icon: <Wrench size={23} />,
    variant: "default" as const,
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "XAMPP",
      "npm",
      "PowerShell",
      "Chrome DevTools",
      "Postman Fundamentals",
      "SQL Server",
      "SSMS",
    ],
  },
];

const capabilityProgress = [
  {
    label: "HTML, CSS and Responsive Design",
    value: 86,
    variant: "primary" as const,
  },
  {
    label: "JavaScript and TypeScript",
    value: 72,
    variant: "info" as const,
  },
  {
    label: "PHP Backend Development",
    value: 80,
    variant: "success" as const,
  },
  {
    label: "MySQL and Database Design",
    value: 78,
    variant: "success" as const,
  },
  {
    label: "Next.js and React",
    value: 66,
    variant: "primary" as const,
  },
  {
    label: "Artificial Intelligence Integration",
    value: 64,
    variant: "warning" as const,
  },
  {
    label: "Cloud and DevOps",
    value: 35,
    variant: "warning" as const,
  },
];

const engineeringStrengths = [
  {
    title: "Complete project workflows",
    description:
      "I build connected user journeys rather than isolated pages or disconnected technical demonstrations.",
    icon: <Layers3 size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Database-backed applications",
    description:
      "I connect frontend interfaces with backend logic, relational data, queries, validation, and real application workflows.",
    icon: <Database size={20} />,
    variant: "success" as const,
  },
  {
    title: "Security awareness",
    description:
      "I apply sessions, role checks, prepared statements, validation, protected routes, and safe configuration handling.",
    icon: <ShieldCheck size={20} />,
    variant: "info" as const,
  },
  {
    title: "AI-assisted products",
    description:
      "I integrate AI APIs into useful applications with structured prompts, context, validation, and user-focused features.",
    icon: <BrainCircuit size={20} />,
    variant: "warning" as const,
  },
  {
    title: "Reusable architecture",
    description:
      "I organize applications using reusable components, modules, configuration files, and clear feature boundaries.",
    icon: <Code2 size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Version control",
    description:
      "I use Git and GitHub to preserve stable progress, document changes, and organize project development.",
    icon: <GitBranch size={20} />,
    variant: "success" as const,
  },
];

const learningPriorities = [
  {
    title: "Advanced Next.js",
    description:
      "Server Components, Server Actions, caching, authentication, performance, testing, and production architecture.",
  },
  {
    title: "Cloud and AWS",
    description:
      "Cloud infrastructure, hosting, storage, databases, security, monitoring, and deployment workflows.",
  },
  {
    title: "DevOps",
    description:
      "Docker, CI/CD, automated testing, environment management, deployment, monitoring, and release reliability.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI agents, retrieval workflows, structured outputs, tool usage, evaluation, safety, and intelligent automation.",
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Improving problem-solving ability for technical interviews, placements, and software engineering roles.",
  },
  {
    title: "Software Testing",
    description:
      "Unit testing, integration testing, end-to-end testing, accessibility checks, and production quality assurance.",
  },
];

const proofPoints = [
  "Built a role-based placement management system",
  "Integrated Gemini AI into a practical assistant",
  "Created reusable Next.js UI architecture",
  "Designed relational MySQL databases",
  "Implemented authentication and sessions",
  "Used prepared statements and validation",
  "Created responsive mobile interfaces",
  "Managed project development using Git",
];

export default function SkillsPage() {
  return (
    <main className="min-w-0 overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-800/80" aria-label="Technical skills overview">
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
          <div className="grid min-w-0 items-start gap-9 xl:grid-cols-[1.08fr_0.92fr] xl:items-center xl:gap-12">
            <div className="min-w-0">
              <div className="space-y-4">
                <div className="grid grid-cols-[1.15fr_1.25fr_0.8fr] items-center gap-1.5 sm:flex sm:flex-wrap sm:gap-3">
                  <Badge
                    variant="primary"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.58rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Full-Stack Development
                  </Badge>

                  <Badge
                    variant="info"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.58rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Artificial Intelligence
                  </Badge>

                  <Badge
                    variant="success"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.58rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Cloud Learning
                  </Badge>
                </div>

                <p className="syedos-code-text text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm sm:tracking-[0.2em]">
                  Technical Skills
                </p>
              </div>

              <h1
                id="skills-page-title"
                className="mt-3 max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[430px]:text-[2.65rem] sm:text-5xl sm:leading-[1.07] lg:text-6xl"
              >
                A practical software engineering skill set built through
                complete projects.
              </h1>

              <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                My technical foundation includes frontend development,
                backend systems, databases, artificial intelligence,
                security, cloud learning, DevOps fundamentals, and
                modern software development tools.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <LinkButton
                  href="/projects"
                  rightIcon={<ArrowRight aria-hidden="true" size={18} />}
                  className="w-full justify-center sm:w-auto"
                >
                  View Project Evidence
                </LinkButton>

                <LinkButton
                  href="/contact"
                  variant="secondary"
                  rightIcon={<ArrowRight aria-hidden="true" size={17} />}
                  className="w-full justify-center sm:w-auto"
                >
                  Contact Me
                </LinkButton>
              </div>

              <div className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 backdrop-blur-sm sm:p-5">
                  <p className="text-2xl font-bold text-white">
                    8
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    technical skill areas
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 backdrop-blur-sm sm:p-5">
                  <p className="text-2xl font-bold text-white">
                    3
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    major practical projects
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 backdrop-blur-sm sm:p-5">
                  <p className="text-2xl font-bold text-white">
                    Ongoing
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    continuous learning
                  </p>
                </div>
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
                      Skill Profile
                    </p>

                    <h2 className="mt-2 text-xl">
                      Current technical direction
                    </h2>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="Technical skills"
                  >
                    <TerminalSquare size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="font-semibold text-white">
                    Primary career track
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Full-stack software development supported by
                    database engineering, artificial intelligence,
                    cloud technologies, and secure application design.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Strongest area
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Full-Stack Web
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Growing area
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Cloud and DevOps
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles
                      aria-hidden="true"
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-300"
                    />

                    <div>
                      <p className="font-semibold text-blue-200">
                        Learning through projects
                      </p>

                      <p className="mt-1 text-sm leading-6 text-blue-100/65">
                        Skills are strengthened by building, debugging,
                        testing, documenting, and improving complete
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Software development skill groups">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Technical Domains"
            title="Skills across the complete software development lifecycle"
            description="These skill areas support the design, development, security, data management, intelligence, testing, and deployment of modern applications."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
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

                <h2 className="mt-5 text-xl">
                  {group.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
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
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Practical learning progress">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <Card variant="glass">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Current Capability
              </p>

              <h2 className="mt-3 text-2xl">
                Practical learning progress
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                These values represent current experience and learning
                progress rather than permanent skill limits.
              </p>

              <div className="mt-8 space-y-6">
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
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Engineering Strengths
              </p>

              <h2 className="mt-3 text-2xl">
                Skills beyond programming syntax
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Strong software engineering also requires architecture,
                security, debugging, version control, documentation,
                and product-focused thinking.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {engineeringStrengths.map((strength) => (
                  <div
                    key={strength.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
                  >
                    <IconContainer
                      variant={strength.variant}
                      size="small"
                      label={strength.title}
                    >
                      {strength.icon}
                    </IconContainer>

                    <h3 className="mt-4 font-semibold text-white">
                      {strength.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Engineering strengths">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Project Evidence"
            title="Skills demonstrated through practical implementation"
            description="These capabilities are supported by completed and active project work rather than only course completion."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {proofPoints.map((proofPoint) => (
              <div
                key={proofPoint}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
              >
                <CheckCircle2
                  aria-hidden="true"
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <p className="text-sm leading-6 text-slate-400">
                  {proofPoint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Current learning priorities">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Learning Roadmap"
            title="Technical areas currently being strengthened"
            description="My learning roadmap prioritizes skills that improve employability, production readiness, technical interviews, and long-term software engineering growth."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {learningPriorities.map((priority, index) => (
              <Card
                key={priority.title}
                variant="elevated"
                className="h-full"
              >
                <div className="flex items-center justify-between gap-4">
                  <IconContainer
                    variant={
                      index % 3 === 0
                        ? "primary"
                        : index % 3 === 1
                          ? "info"
                          : "success"
                    }
                    size="large"
                    label={priority.title}
                  >
                    <Sparkles size={21} />
                  </IconContainer>

                  <Badge variant="outline">
                    In Progress
                  </Badge>
                </div>

                <h2 className="mt-5 text-xl">
                  {priority.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {priority.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Skills call to action">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="success" dot>
                  Continuously improving
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Looking for an opportunity to apply and expand these
                  skills.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Explore my project case studies to see how these
                  technical skills are applied across real software
                  systems.
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
