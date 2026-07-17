import {
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

const careerFocusAreas = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive interfaces, backend systems, secure workflows, database-driven features, and production-ready applications.",
    icon: <Layers3 size={23} />,
    variant: "primary" as const,
    technologies: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
  },
  {
    title: "Artificial Intelligence",
    description:
      "Integrating AI assistants, structured prompting, validation, automation, and intelligent features into practical software products.",
    icon: <BrainCircuit size={23} />,
    variant: "info" as const,
    technologies: [
      "Gemini API",
      "AI Agents",
      "Prompt Design",
      "Automation",
    ],
  },
  {
    title: "Cloud and DevOps",
    description:
      "Learning deployment, cloud infrastructure, containerization, environment management, automation, and reliable release workflows.",
    icon: <CloudCog size={23} />,
    variant: "success" as const,
    technologies: [
      "AWS",
      "Docker",
      "CI/CD",
      "Cloud Deployment",
    ],
  },
];

const engineeringValues = [
  {
    title: "Practical problem solving",
    description:
      "I focus on software that addresses real user needs instead of building features without a clear purpose.",
    icon: <Rocket size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Secure development",
    description:
      "Authentication, authorization, validation, safe database access, and responsible data handling are part of the design process.",
    icon: <ShieldCheck size={20} />,
    variant: "success" as const,
  },
  {
    title: "Scalable architecture",
    description:
      "Projects are organized into reusable components and modules so they remain maintainable as features grow.",
    icon: <Code2 size={20} />,
    variant: "info" as const,
  },
  {
    title: "Continuous learning",
    description:
      "I actively improve my knowledge of modern frameworks, AI, cloud technologies, testing, and software engineering practices.",
    icon: <GraduationCap size={20} />,
    variant: "warning" as const,
  },
];

export function HomeAbout() {
  return (
    <section className="relative border-b border-slate-800/80">
      <div className="syedos-container py-16 sm:py-20 lg:py-24">
        <SectionHeading
          eyebrow="About and Career Direction"
          title="A developer focused on practical, intelligent, and scalable software"
          description="My goal is to become a strong software engineer by combining full-stack development, artificial intelligence, cloud technologies, secure engineering, and real-world project experience."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Card
            variant="glass"
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <IconContainer
                variant="primary"
                size="large"
                rounded="large"
                label="Developer profile"
              >
                <Sparkles size={24} />
              </IconContainer>

              <div className="min-w-0">
                <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Developer Profile
                </p>

                <h3 className="mt-3 text-2xl">
                  Building a strong foundation for modern software
                  engineering
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400">
                  <p>
                    I am pursuing a B.Tech in Information Technology
                    at Kakatiya Institute of Technology and Science,
                    Warangal, with expected graduation in 2027.
                  </p>

                  <p>
                    My development journey currently focuses on
                    creating complete software systems rather than
                    isolated pages. I work across user interfaces,
                    backend logic, databases, authentication,
                    validation, project structure, deployment, and
                    intelligent AI-assisted features.
                  </p>

                  <p>
                    Through projects such as SyedOS, SyedAI Assistant,
                    and CampusHire, I am developing the technical and
                    problem-solving abilities required for full-stack
                    and software engineering roles.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="primary">
                    Software Engineering
                  </Badge>

                  <Badge variant="info">
                    AI Integration
                  </Badge>

                  <Badge variant="success">
                    Full-Stack Development
                  </Badge>

                  <Badge variant="outline">
                    Cloud Learning
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="editorial">
            <div className="flex items-center gap-3">
              <IconContainer
                variant="success"
                label="Career readiness"
              >
                <BriefcaseBusiness size={20} />
              </IconContainer>

              <div>
                <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Career Readiness
                </p>

                <h3 className="mt-1 text-xl">
                  Current development progress
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-6">
              <Progress
                label="Full-Stack Web Development"
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

            <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-950/45 p-5">
              <div className="flex items-start gap-3">
                <IconContainer
                  variant="info"
                  size="small"
                  label="Current learning"
                >
                  <GraduationCap size={16} />
                </IconContainer>

                <div>
                  <p className="font-semibold text-white">
                    Current priority
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Strengthening advanced web development while
                    building cloud, DevOps, AI integration, testing,
                    and deployment skills.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Career Focus"
            title="Three technical areas shaping my career"
            description="These areas support my goal of becoming a versatile software engineer capable of building and deploying complete intelligent applications."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {careerFocusAreas.map((area) => (
              <Card
                key={area.title}
                variant="elevated"
                interactive
              >
                <IconContainer
                  variant={area.variant}
                  size="large"
                  label={area.title}
                >
                  {area.icon}
                </IconContainer>

                <h3 className="mt-5 text-xl">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {area.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <div className="flex items-center gap-3">
              <IconContainer
                variant="warning"
                label="Academic foundation"
              >
                <GraduationCap size={20} />
              </IconContainer>

              <div>
                <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Academic Foundation
                </p>

                <h3 className="mt-1 text-xl">
                  B.Tech Information Technology
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-sm text-slate-500">
                  Institution
                </p>

                <p className="mt-1 font-semibold text-white">
                  Kakatiya Institute of Technology and Science
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-500">
                    Programme
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Information Technology
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-500">
                    Graduation
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Expected 2027
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                <Database
                  aria-hidden="true"
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-300"
                />

                <p className="text-sm leading-6 text-blue-100/75">
                  Academic learning is strengthened through practical
                  applications involving databases, web development,
                  software architecture, and project implementation.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="glass">
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Engineering Values
            </p>

            <h3 className="mt-3 text-2xl">
              How I approach software projects
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {engineeringValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
                >
                  <IconContainer
                    variant={value.variant}
                    size="small"
                    label={value.title}
                  >
                    {value.icon}
                  </IconContainer>

                  <h4 className="mt-4 font-semibold text-white">
                    {value.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}