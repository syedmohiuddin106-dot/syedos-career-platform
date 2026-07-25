import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  History,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Star,
  Upload,
  UserRoundCog,
  WandSparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "SyedAI Assistant Project Case Study",
  description:
    "Explore the features, architecture, AI integration, security, development process, and future roadmap of SyedAI Assistant.",
  alternates: {
    canonical: "/projects/syedai-assistant",
  },
  openGraph: {
    title: "SyedAI Assistant Case Study | Syed Mohiuddin",
    description:
      "A detailed case study of SyedAI Assistant, a multi-skill AI-powered development and career assistant.",
    url: "/projects/syedai-assistant",
    type: "article",
  },
};

const technologies = [
  "PHP",
  "JavaScript",
  "MySQL",
  "Gemini API",
  "HTML5",
  "CSS3",
  "MySQLi",
  "XAMPP",
  "AI Agents",
  "Prompt Engineering",
];

const projectGoals = [
  {
    title: "Technical assistance",
    description:
      "Help users solve programming, database, web development, API, and software-project problems through AI-powered guidance.",
    icon: <Code2 size={21} />,
    variant: "primary" as const,
  },
  {
    title: "Career support",
    description:
      "Provide assistance for resumes, LinkedIn, GitHub, internships, placement preparation, and career development.",
    icon: <UserRoundCog size={21} />,
    variant: "info" as const,
  },
  {
    title: "Multi-skill intelligence",
    description:
      "Organize AI behavior into specialized assistant modes for different technical and professional requirements.",
    icon: <BrainCircuit size={21} />,
    variant: "warning" as const,
  },
  {
    title: "Practical usability",
    description:
      "Include history, favorites, exports, file handling, profile controls, and response continuation for complete workflows.",
    icon: <WandSparkles size={21} />,
    variant: "success" as const,
  },
];

const assistantCapabilities = [
  {
    title: "Programming Assistant",
    description:
      "Supports PHP, JavaScript, Python, HTML, CSS, SQL, APIs, debugging, and general programming tasks.",
    icon: <Code2 size={20} />,
  },
  {
    title: "Database Assistant",
    description:
      "Helps with MySQL queries, database design, phpMyAdmin, SQL errors, relationships, and CRUD operations.",
    icon: <Database size={20} />,
  },
  {
    title: "Project Assistant",
    description:
      "Supports project planning, folder structures, feature development, documentation, testing, and troubleshooting.",
    icon: <FileText size={20} />,
  },
  {
    title: "Career Assistant",
    description:
      "Provides guidance for resumes, LinkedIn profiles, GitHub repositories, internships, placements, and learning plans.",
    icon: <UserRoundCog size={20} />,
  },
];

const mainFeatures = [
  {
    title: "AI conversation interface",
    description:
      "A responsive assistant screen with structured input, character counting, response status, and formatted AI output.",
    icon: <MessageSquareText size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Conversation history",
    description:
      "Stores previous prompts and responses so users can review and reuse earlier AI conversations.",
    icon: <History size={20} />,
    variant: "info" as const,
  },
  {
    title: "Favorites",
    description:
      "Allows important AI responses to be saved separately for faster access and future reference.",
    icon: <Star size={20} />,
    variant: "warning" as const,
  },
  {
    title: "Response export",
    description:
      "Supports exporting useful assistant responses from History and Favorites for documentation and reuse.",
    icon: <Download size={20} />,
    variant: "success" as const,
  },
  {
    title: "File upload",
    description:
      "Accepts supported user files with size validation and controlled upload handling for AI-assisted analysis.",
    icon: <Upload size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Response continuation",
    description:
      "Allows incomplete AI responses to continue without requiring users to rewrite the original request.",
    icon: <Sparkles size={20} />,
    variant: "info" as const,
  },
];

const architectureLayers = [
  {
    title: "User Interface",
    description:
      "Responsive dashboard, assistant input, navigation, history, favorites, profile, file controls, and formatted responses.",
    icon: <MessageSquareText size={22} />,
    variant: "primary" as const,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive layout",
      "Inline feedback",
    ],
  },
  {
    title: "Application Logic",
    description:
      "Handles user sessions, assistant requests, validation, history, favorites, exports, profiles, and response continuation.",
    icon: <Code2 size={22} />,
    variant: "info" as const,
    items: [
      "PHP",
      "Session handling",
      "Form processing",
      "Validation",
      "Application modules",
    ],
  },
  {
    title: "AI Integration",
    description:
      "Connects the application to Gemini and applies structured prompts, assistant modes, context, and response handling.",
    icon: <BrainCircuit size={22} />,
    variant: "warning" as const,
    items: [
      "Gemini API",
      "Prompt templates",
      "AI modes",
      "Response parsing",
      "Context handling",
    ],
  },
  {
    title: "Data Layer",
    description:
      "Stores users, conversations, favorites, profile information, assistant activity, and application data.",
    icon: <Database size={22} />,
    variant: "success" as const,
    items: [
      "MySQL",
      "MySQLi",
      "Prepared statements",
      "Relational data",
      "phpMyAdmin",
    ],
  },
];

const securityControls = [
  {
    title: "Protected sessions",
    description:
      "Authenticated user sessions control access to dashboard, history, favorites, and profile features.",
    icon: <LockKeyhole size={20} />,
  },
  {
    title: "Prepared statements",
    description:
      "Database operations use parameterized queries to reduce SQL injection risk.",
    icon: <Database size={20} />,
  },
  {
    title: "Upload validation",
    description:
      "Files are checked for allowed types, size limits, and controlled storage before processing.",
    icon: <Upload size={20} />,
  },
  {
    title: "API-key protection",
    description:
      "Gemini credentials remain inside configuration files and are excluded from public project sharing.",
    icon: <ShieldCheck size={20} />,
  },
];

const developmentProgress = [
  {
    label: "Application Interface",
    value: 92,
    variant: "success" as const,
  },
  {
    label: "AI Integration",
    value: 82,
    variant: "primary" as const,
  },
  {
    label: "History and Favorites",
    value: 90,
    variant: "success" as const,
  },
  {
    label: "File Handling",
    value: 75,
    variant: "info" as const,
  },
  {
    label: "Security and Validation",
    value: 72,
    variant: "warning" as const,
  },
  {
    label: "Production Deployment",
    value: 30,
    variant: "warning" as const,
  },
];

const challenges = [
  {
    title: "API usage limits",
    description:
      "Free Gemini API quotas can interrupt responses, so the application requires clear error handling and future provider flexibility.",
  },
  {
    title: "Long AI responses",
    description:
      "Large programming and project answers can be interrupted, requiring response continuation and reliable formatting.",
  },
  {
    title: "Secure key management",
    description:
      "Real API keys must never be included in shared ZIP files, repositories, screenshots, or public deployment code.",
  },
  {
    title: "Formatted technical output",
    description:
      "Code blocks, headings, lists, and long explanations must remain readable across desktop and mobile screens.",
  },
];

const futureImprovements = [
  "Multiple AI-provider support",
  "Stronger rate-limit recovery",
  "Streaming AI responses",
  "Advanced document analysis",
  "Conversation search and filters",
  "User usage analytics",
  "Cloud file storage",
  "Admin dashboard",
  "Automated testing",
  "Production cloud deployment",
];

export default function SyedAIAssistantCaseStudyPage() {
  return (
    <main className="min-w-0 overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-violet-600/20 blur-3xl" />

          <div className="absolute right-[-10rem] top-8 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[40%] h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-3xl" />

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
                <Badge variant="primary" dot>
                  Active Project
                </Badge>

                <Badge variant="info">
                  Artificial Intelligence
                </Badge>

                <Badge variant="outline">
                  Full-Stack Application
                </Badge>
              </div>

              <p className="syedos-code-text mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Multi-Skill Artificial Intelligence Assistant
              </p>

              <h1 className="mt-4 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                SyedAI Assistant
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                An AI-powered assistant designed to support programming,
                project development, database troubleshooting, technical
                learning, portfolio improvement, and career preparation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton
                  href="https://github.com/syedmohiuddin106-dot/syedai-assistant"
                  external
                  leftIcon={<GitBranch size={18} />}
                  rightIcon={<ExternalLink size={14} />}
                  ariaLabel="Open SyedAI Assistant GitHub repository"
                >
                  View Repository
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
                      AI development assistant
                    </h2>
                  </div>

                  <IconContainer
                    variant="info"
                    size="large"
                    rounded="large"
                    label="SyedAI Assistant"
                  >
                    <Bot size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Project type
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    AI Web Application
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    AI provider
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Google Gemini
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Backend
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    PHP
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Database
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    MySQL
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 p-6">
                <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles
                      aria-hidden="true"
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-300"
                    />

                    <div>
                      <p className="font-semibold text-blue-200">
                        Multi-purpose AI assistance
                      </p>

                      <p className="mt-1 text-sm leading-6 text-blue-100/65">
                        The application combines programming, project,
                        database, learning, and career support inside one
                        structured assistant experience.
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
            eyebrow="Project Purpose"
            title="One assistant for technical development and career growth"
            description="The project was designed to reduce the need for multiple disconnected tools by combining software support, AI guidance, project workflows, and career assistance."
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
            eyebrow="Assistant Capabilities"
            title="Specialized support across multiple domains"
            description="SyedAI Assistant is designed as a multi-skill platform rather than a single-purpose chatbot."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {assistantCapabilities.map((capability) => (
              <Card
                key={capability.title}
                variant="glass"
                className="h-full"
              >
                <div className="flex items-start gap-4">
                  <IconContainer
                    variant="info"
                    size="large"
                    label={capability.title}
                  >
                    {capability.icon}
                  </IconContainer>

                  <div>
                    <h2 className="text-xl">
                      {capability.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Main Features"
            title="Features designed for complete AI-assisted workflows"
            description="The project includes practical tools that allow users to ask, save, continue, organize, and export useful AI responses."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mainFeatures.map((feature) => (
              <Card
                key={feature.title}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={feature.variant}
                  size="large"
                  label={feature.title}
                >
                  {feature.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
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
            title="A practical PHP, MySQL, and Gemini architecture"
            description="The system separates user interface, application logic, AI integration, and database responsibilities."
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
          <SectionHeading
            eyebrow="Security"
            title="Protecting users, data, uploads, and API credentials"
            description="Security controls are applied across authentication, database access, file handling, and Gemini API configuration."
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
                These values represent the current practical state of
                the project and its remaining production work.
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
                Technical Challenges
              </p>

              <h2 className="mt-3 text-2xl">
                Problems solved during development
              </h2>

              <div className="mt-7 space-y-4">
                {challenges.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
                  >
                    <h3 className="font-semibold text-white">
                      {challenge.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {challenge.description}
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
            eyebrow="Future Roadmap"
            title="Planned improvements for a stronger production platform"
            description="Future development will improve reliability, intelligence, analytics, scalability, and deployment readiness."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {futureImprovements.map((improvement) => (
              <div
                key={improvement}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
              >
                <CheckCircle2
                  aria-hidden="true"
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <p className="text-sm leading-6 text-slate-400">
                  {improvement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-violet-500/25 bg-gradient-to-br from-violet-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="primary" dot>
                  Active AI Project
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  SyedAI Assistant connects technical learning with
                  practical software development.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  The project demonstrates AI integration, backend
                  development, databases, user workflows, file handling,
                  security, and product-focused thinking.
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