import type { Metadata } from "next";

import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  Layers3,
  Medal,
  Sparkles,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Explore Syed Mohiuddin's professional certification roadmap, current learning pathways, completed project evidence, and planned full-stack, cloud, AI, and software engineering credentials.",
  alternates: {
    canonical: "/certificates",
  },
  openGraph: {
    title: "Certificates and Learning | Syed Mohiuddin",
    description:
      "Explore professional certification goals, current learning pathways, and verified project-based technical experience.",
    url: "/certificates",
    type: "website",
  },
};

const certificationTracks = [
  {
    title: "Full-Stack Web Development",
    provider: "Meta and recognised learning platforms",
    status: "Current Priority",
    statusVariant: "primary" as const,
    icon: <Layers3 size={23} />,
    iconVariant: "primary" as const,
    description:
      "Developing advanced frontend and backend skills through structured learning and practical portfolio projects.",
    subjects: [
      "HTML and CSS",
      "JavaScript",
      "React",
      "Backend development",
      "Databases",
      "Version control",
    ],
    progress: 35,
    progressVariant: "primary" as const,
  },
  {
    title: "Cloud Computing and DevOps",
    provider: "AWS learning pathway",
    status: "Planned",
    statusVariant: "warning" as const,
    icon: <CloudCog size={23} />,
    iconVariant: "warning" as const,
    description:
      "Building cloud, deployment, containerization, infrastructure, monitoring, and continuous-delivery knowledge.",
    subjects: [
      "AWS fundamentals",
      "Cloud infrastructure",
      "Docker",
      "CI/CD",
      "Deployment",
      "Monitoring",
    ],
    progress: 15,
    progressVariant: "warning" as const,
  },
  {
    title: "Artificial Intelligence",
    provider: "Google and recognised AI learning platforms",
    status: "Developing",
    statusVariant: "info" as const,
    icon: <BrainCircuit size={23} />,
    iconVariant: "info" as const,
    description:
      "Strengthening AI integration, prompt design, responsible usage, automation, and intelligent application development.",
    subjects: [
      "AI fundamentals",
      "Prompt engineering",
      "Gemini API",
      "AI agents",
      "Automation",
      "Responsible AI",
    ],
    progress: 30,
    progressVariant: "info" as const,
  },
];

const evidenceCategories = [
  {
    title: "Project-based evidence",
    description:
      "Complete applications demonstrate practical use of frontend, backend, database, security, AI, and architecture skills.",
    icon: <Code2 size={21} />,
    variant: "primary" as const,
  },
  {
    title: "Verified credentials",
    description:
      "Official certificates will be added only after successful completion and verification through the issuing organisation.",
    icon: <BadgeCheck size={21} />,
    variant: "success" as const,
  },
  {
    title: "Structured learning",
    description:
      "Courses are selected to support full-stack development, cloud and DevOps, artificial intelligence, and software careers.",
    icon: <BookOpenCheck size={21} />,
    variant: "info" as const,
  },
  {
    title: "Continuous improvement",
    description:
      "The learning roadmap will continue to evolve with new technologies, projects, industry requirements, and career goals.",
    icon: <Sparkles size={21} />,
    variant: "warning" as const,
  },
];

const verificationStandards = [
  {
    title: "Official issuer",
    description:
      "The credential should be issued by the recognised organisation, institution, or technology provider.",
    icon: <Medal size={20} />,
  },
  {
    title: "Credential verification",
    description:
      "Certificates should include a credential ID, verification page, or official record whenever available.",
    icon: <FileCheck2 size={20} />,
  },
  {
    title: "Relevant skills",
    description:
      "The certification should support my chosen full-stack, cloud, DevOps, AI, or software engineering career path.",
    icon: <Target size={20} />,
  },
  {
    title: "Practical application",
    description:
      "Knowledge from each course should be demonstrated through projects, exercises, documentation, or technical implementation.",
    icon: <CheckCircle2 size={20} />,
  },
];

const currentEvidence = [
  {
    title: "CampusHire",
    type: "Completed Project",
    description:
      "Demonstrates PHP, MySQL, secure authentication, role-based access, job workflows, resume handling, and administration.",
    href: "/projects/campushire",
    variant: "success" as const,
  },
  {
    title: "SyedAI Assistant",
    type: "Active AI Project",
    description:
      "Demonstrates Gemini API integration, PHP, MySQL, assistant workflows, file handling, history, favorites, and exports.",
    href: "/projects/syedai-assistant",
    variant: "primary" as const,
  },
  {
    title: "SyedOS",
    type: "Advanced Portfolio Project",
    description:
      "Demonstrates Next.js, TypeScript, responsive architecture, reusable UI systems, SEO, project case studies, and deployment planning.",
    href: "/projects/syedos",
    variant: "warning" as const,
  },
];

const futureCredentials = [
  {
    title: "Meta Front-End Developer",
    category: "Full-Stack Foundation",
    description:
      "A structured pathway covering frontend development, React, version control, responsive interfaces, and practical projects.",
  },
  {
    title: "Meta Back-End Developer",
    category: "Backend Development",
    description:
      "A structured pathway supporting backend programming, databases, APIs, development workflows, and application architecture.",
  },
  {
    title: "AWS Cloud Practitioner",
    category: "Cloud Fundamentals",
    description:
      "A foundational AWS credential covering cloud concepts, services, security, pricing, support, and architecture basics.",
  },
  {
    title: "AWS Developer or Solutions Architecture Path",
    category: "Advanced Cloud",
    description:
      "A future technical pathway after completing cloud fundamentals and gaining practical deployment experience.",
  },
  {
    title: "Google AI Learning Credentials",
    category: "Artificial Intelligence",
    description:
      "AI learning focused on responsible AI, generative AI, practical integration, productivity, and intelligent applications.",
  },
  {
    title: "Software Testing Credentials",
    category: "Quality Engineering",
    description:
      "Future learning in unit testing, integration testing, end-to-end testing, accessibility, and production quality assurance.",
  },
];

export default function CertificatesPage() {
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
          <div className="grid gap-12 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">
                  Professional Learning
                </Badge>

                <Badge variant="info">
                  Certification Roadmap
                </Badge>

                <Badge variant="success">
                  Project Evidence
                </Badge>
              </div>

              <p className="syedos-code-text mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Certificates and Credentials
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                Building verified credentials around practical
                software engineering skills.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                My certification roadmap focuses on credentials that
                strengthen full-stack development, cloud and DevOps,
                artificial intelligence, software quality, and
                long-term career growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton
                  href="#learning-pathways"
                  rightIcon={<ArrowRight size={18} />}
                >
                  View Learning Pathways
                </LinkButton>

                <LinkButton
                  href="/projects"
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  View Project Evidence
                </LinkButton>
              </div>

              <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">
                    3
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    priority learning tracks
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">
                    3
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    project evidence areas
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-5 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">
                    Ongoing
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    professional learning
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
                      Credential Status
                    </p>

                    <h2 className="mt-2 text-xl">
                      Verified-first certification approach
                    </h2>
                  </div>

                  <IconContainer
                    variant="success"
                    size="large"
                    rounded="large"
                    label="Professional certificates"
                  >
                    <Award size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="font-semibold text-white">
                    Current portfolio status
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Official certificates will be displayed here only
                    after completion and verification. Current
                    technical capability is supported by project case
                    studies and active learning pathways.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Primary track
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Full-Stack Development
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Secondary track
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Cloud and DevOps
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-500/25 bg-blue-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <BadgeCheck
                      aria-hidden="true"
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-300"
                    />

                    <div>
                      <p className="font-semibold text-blue-200">
                        No unverified claims
                      </p>

                      <p className="mt-1 text-sm leading-6 text-blue-100/65">
                        Planned and in-progress courses are kept
                        separate from credentials that have been
                        officially earned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="learning-pathways"
        className="border-b border-slate-800/80"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Learning Pathways"
            title="Three certification tracks supporting my career direction"
            description="These learning pathways support my goal of becoming a full-stack software engineer with cloud, DevOps, and artificial-intelligence capabilities."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {certificationTracks.map((track) => (
              <Card
                key={track.title}
                variant="glass"
                className="h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconContainer
                    variant={track.iconVariant}
                    size="large"
                    label={track.title}
                  >
                    {track.icon}
                  </IconContainer>

                  <Badge
                    variant={track.statusVariant}
                    dot
                  >
                    {track.status}
                  </Badge>
                </div>

                <p className="syedos-code-text mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {track.provider}
                </p>

                <h2 className="mt-2 text-xl">
                  {track.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {track.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {track.subjects.map((subject) => (
                    <Badge
                      key={subject}
                      variant="outline"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>

                <div className="mt-7">
                  <Progress
                    label="Learning progress"
                    value={track.progress}
                    variant={track.progressVariant}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Credential Standards"
            title="What makes a certificate valuable"
            description="Certificates are most useful when they are verifiable, relevant to the career path, issued by credible organisations, and supported by practical application."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {verificationStandards.map((standard) => (
              <Card
                key={standard.title}
                variant="elevated"
                className="h-full"
              >
                <IconContainer
                  variant="success"
                  size="large"
                  label={standard.title}
                >
                  {standard.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {standard.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {standard.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Current Technical Evidence"
            title="Projects supporting my learning progress"
            description="Until official credentials are completed, these project case studies provide practical evidence of current technical ability."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {currentEvidence.map((evidence) => (
              <Card
                key={evidence.title}
                variant="elevated"
                interactive
                className="flex h-full flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconContainer
                    variant={
                      evidence.variant === "success"
                        ? "success"
                        : evidence.variant === "warning"
                          ? "warning"
                          : "primary"
                    }
                    size="large"
                    label={evidence.title}
                  >
                    <Code2 size={22} />
                  </IconContainer>

                  <Badge
                    variant={evidence.variant}
                    dot
                  >
                    {evidence.type}
                  </Badge>
                </div>

                <h2 className="mt-5 text-xl">
                  {evidence.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {evidence.description}
                </p>

                <div className="mt-6">
                  <LinkButton
                    href={evidence.href}
                    variant="secondary"
                    size="small"
                    rightIcon={<ArrowRight size={16} />}
                  >
                    View Case Study
                  </LinkButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Professional Development"
            title="How credentials fit into my learning strategy"
            description="Certification is one part of a broader development process that includes coursework, projects, documentation, problem solving, and technical practice."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {evidenceCategories.map((category) => (
              <Card
                key={category.title}
                variant="elevated"
                className="h-full"
              >
                <IconContainer
                  variant={category.variant}
                  size="large"
                  label={category.title}
                >
                  {category.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {category.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Future Credentials"
            title="Credentials planned for future development"
            description="These credentials represent a roadmap. They will not be shown as completed until they have been officially earned and verified."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {futureCredentials.map((credential, index) => (
              <Card
                key={credential.title}
                variant="elevated"
                className="h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconContainer
                    variant={
                      index % 3 === 0
                        ? "primary"
                        : index % 3 === 1
                          ? "info"
                          : "success"
                    }
                    size="large"
                    label={credential.title}
                  >
                    <GraduationCap size={22} />
                  </IconContainer>

                  <Badge variant="outline">
                    Planned
                  </Badge>
                </div>

                <p className="syedos-code-text mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  {credential.category}
                </p>

                <h2 className="mt-2 text-xl">
                  {credential.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {credential.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="primary" dot>
                  Learning in progress
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Credentials will support—not replace—practical
                  project experience.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Official certificates, credential IDs, verification
                  links, issue dates, and supporting project evidence
                  will be added as each learning pathway is completed.
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
                  rightIcon={<ExternalLink size={15} />}
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