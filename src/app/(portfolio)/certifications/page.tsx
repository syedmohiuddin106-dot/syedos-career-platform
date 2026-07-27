import type { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  CloudCog,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCertificationsPageData } from "@/lib/cms/get-certifications-page-data";

export const metadata: Metadata = {
  title: "Certifications | SyedOS",
  description:
    "Verified certifications, current learning pathways, professional credentials, progress, and practical project evidence by Syed Mohiuddin.",
  alternates: {
    canonical: "/certifications",
  },
  openGraph: {
    title: "Certifications | Syed Mohiuddin",
    description:
      "Explore verified credentials, current learning pathways, certification progress, and practical project evidence.",
    url: "/certifications",
    type: "website",
  },
};

const roadmapTracks = [
  {
    title: "Full-Stack Web Development",
    provider: "Meta and recognised learning platforms",
    status: "Current priority",
    statusVariant: "primary" as const,
    iconVariant: "primary" as const,
    icon: <Layers3 aria-hidden="true" size={22} />,
    description:
      "Strengthening frontend, backend, database, API, version-control, testing, and production application-development skills.",
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
    iconVariant: "warning" as const,
    icon: <CloudCog aria-hidden="true" size={22} />,
    description:
      "Developing cloud, deployment, containerisation, infrastructure, CI/CD, monitoring, and production-delivery knowledge.",
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
    iconVariant: "info" as const,
    icon: <BrainCircuit aria-hidden="true" size={22} />,
    description:
      "Improving AI integration, prompt design, automation, responsible usage, intelligent workflows, and AI-assisted products.",
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

const credentialStandards = [
  {
    title: "Official issuer",
    description:
      "Credentials should come from a recognised institution, organisation, or technology provider.",
    icon: <Award aria-hidden="true" size={20} />,
  },
  {
    title: "Public verification",
    description:
      "Completed credentials should include an official verification link, credential ID, or issuer record.",
    icon: <FileCheck2 aria-hidden="true" size={20} />,
  },
  {
    title: "Career relevance",
    description:
      "Each certification should support full-stack, cloud, DevOps, AI, or software-engineering career goals.",
    icon: <Target aria-hidden="true" size={20} />,
  },
  {
    title: "Practical application",
    description:
      "Course knowledge should be supported by projects, assessments, documentation, and technical implementation.",
    icon: <CheckCircle2 aria-hidden="true" size={20} />,
  },
];

function formatLabel(value: string): string {
  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) =>
      character.toUpperCase(),
    );
}

function formatDate(
  value: string | null | undefined,
): string | null {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}

function getStatusVariant(
  status: string,
): "success" | "primary" | "warning" | "outline" {
  if (status === "completed") {
    return "success";
  }

  if (status === "in-progress") {
    return "primary";
  }

  if (status === "planned") {
    return "warning";
  }

  return "outline";
}

export default async function CertificationsPage() {
  const { certifications, projects } =
    await getCertificationsPageData();

  const completedCount = certifications.filter(
    (certification) =>
      certification.credentialStatus === "completed",
  ).length;

  const inProgressCount = certifications.filter(
    (certification) =>
      certification.credentialStatus ===
      "in-progress",
  ).length;

  const plannedCount = certifications.filter(
    (certification) =>
      certification.credentialStatus === "planned",
  ).length;

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

        <div className="syedos-container relative pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-12">
          <div className="grid items-end gap-10 xl:grid-cols-[1fr_0.72fr] xl:gap-14">
            <div className="max-w-4xl">
              <div className="space-y-5">
  <div className="flex flex-wrap items-center gap-3">
    <Badge
      variant="primary"
      className="px-4 py-2 text-sm sm:text-[0.95rem]"
    >
      Professional Learning
    </Badge>

    <Badge
      variant="info"
      className="px-4 py-2 text-sm sm:text-[0.95rem]"
    >
      Verified Credentials
    </Badge>

    <Badge
      variant="success"
      className="px-4 py-2 text-sm sm:text-[0.95rem]"
    >
      Project Evidence
    </Badge>
  </div>

  <p className="syedos-code-text text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
    Certifications and Credentials
  </p>
</div>

              <h1 className="mt-5 max-w-[15ch] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Verified credentials supported by practical
                software work.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                My certification strategy combines recognised
                learning pathways, official verification,
                practical projects, assessments, and continuous
                technical development.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href="#certification-records"
                  rightIcon={
                    <BookOpenCheck
                      aria-hidden="true"
                      size={17}
                    />
                  }
                  className="w-full justify-center sm:w-auto"
                >
                  View credentials
                </LinkButton>

                <LinkButton
                  href="#learning-roadmap"
                  variant="secondary"
                  rightIcon={
                    <GraduationCap
                      aria-hidden="true"
                      size={17}
                    />
                  }
                  className="w-full justify-center sm:w-auto"
                >
                  View learning roadmap
                </LinkButton>
              </div>
            </div>

            {certifications.length > 0 ? (
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">
                    {completedCount}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Completed
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">
                    {inProgressCount}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    In progress
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">
                    {plannedCount}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Planned
                  </p>
                </div>
              </div>
            ) : (
              <Card
                variant="glass"
                className="overflow-hidden p-0"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <IconContainer
                      variant="primary"
                      size="large"
                      rounded="large"
                      label="Certification roadmap status"
                    >
                      <GraduationCap
                        aria-hidden="true"
                        size={23}
                      />
                    </IconContainer>

                    <div className="min-w-0">
                      <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                        Current status
                      </p>

                      <h2 className="mt-2 text-xl font-semibold text-white">
                        Certification roadmap in progress
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        Official completed credentials will
                        appear here after they are earned,
                        verified, and published through Payload
                        CMS.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section
        id="certification-records"
        className="border-b border-slate-800/80"
      >
        <div className="syedos-container py-14 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow="Official Records"
            title="Professional certifications and learning credentials"
            description="Completed, in-progress, and planned credentials are managed through Payload CMS and displayed with verification, learning outcomes, progress, skills, and related projects."
          />

          {certifications.length > 0 ? (
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {certifications.map((certification) => {
                const statusVariant =
                  getStatusVariant(
                    certification.credentialStatus,
                  );

                const issueDate = formatDate(
                  certification.issueDate,
                );

                const expiryDate =
                  certification.doesNotExpire
                    ? "Does not expire"
                    : formatDate(
                        certification.expiryDate,
                      );

                const skills = (
                  certification.skillsCovered ?? []
                ).filter(
                  (
                    skill,
                  ): skill is Exclude<
                    typeof skill,
                    number
                  > =>
                    typeof skill === "object" &&
                    skill !== null,
                );

                const relatedProjects = (
                  certification.relatedProjects ?? []
                ).filter(
                  (
                    project,
                  ): project is Exclude<
                    typeof project,
                    number
                  > =>
                    typeof project === "object" &&
                    project !== null,
                );

                return (
                  <Card
                    key={certification.id}
                    variant="glass"
                    className="flex h-full flex-col overflow-hidden p-0"
                  >
                    <article className="flex h-full flex-col">
                      <header className="border-b border-slate-800 bg-slate-950/40 p-6">
                        <div className="flex items-start justify-between gap-4">
                          <IconContainer
                            variant={
                              certification.credentialStatus ===
                              "completed"
                                ? "success"
                                : certification.credentialStatus ===
                                    "in-progress"
                                  ? "primary"
                                  : "warning"
                            }
                            size="large"
                            label={certification.title}
                          >
                            <Award
                              aria-hidden="true"
                              size={22}
                            />
                          </IconContainer>

                          <Badge
                            variant={statusVariant}
                            dot
                          >
                            {formatLabel(
                              certification.credentialStatus,
                            )}
                          </Badge>
                        </div>

                        <p className="syedos-code-text mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                          {certification.issuer}
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold text-white">
                          {certification.title}
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                          {certification.badgeLabel ??
                            formatLabel(
                              certification.certificationType,
                            )}
                        </p>
                      </header>

                      <div className="flex flex-1 flex-col space-y-6 p-6">
                        <p className="leading-7 text-slate-400">
                          {certification.description}
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <CalendarDays
                                aria-hidden="true"
                                size={16}
                                className="text-blue-400"
                              />

                              Issue date
                            </div>

                            <p className="mt-2 font-medium text-slate-200">
                              {issueDate ??
                                "Not specified"}
                            </p>
                          </div>

                          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <FileCheck2
                                aria-hidden="true"
                                size={16}
                                className="text-emerald-400"
                              />

                              Validity
                            </div>

                            <p className="mt-2 font-medium text-slate-200">
                              {expiryDate ??
                                "Not specified"}
                            </p>
                          </div>
                        </div>

                        {certification.credentialStatus ===
                          "in-progress" &&
                        certification.completionProgress !==
                          null &&
                        certification.completionProgress !==
                          undefined ? (
                          <Progress
                            label="Completion progress"
                            value={
                              certification.completionProgress
                            }
                            variant="primary"
                          />
                        ) : null}

                        {certification.learningOutcomes &&
                        certification.learningOutcomes.length >
                          0 ? (
                          <section>
                            <h3 className="flex items-center gap-2 font-semibold text-white">
                              <CheckCircle2
                                aria-hidden="true"
                                size={18}
                                className="text-cyan-400"
                              />

                              Learning outcomes
                            </h3>

                            <div className="mt-4 grid gap-3">
                              {certification.learningOutcomes.map(
                                (outcome) => (
                                  <div
                                    key={
                                      outcome.id ??
                                      outcome.title
                                    }
                                    className="rounded-xl border border-slate-800 bg-slate-950/35 p-4"
                                  >
                                    <p className="font-medium text-slate-200">
                                      {outcome.title}
                                    </p>

                                    {outcome.description ? (
                                      <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {
                                          outcome.description
                                        }
                                      </p>
                                    ) : null}
                                  </div>
                                ),
                              )}
                            </div>
                          </section>
                        ) : null}

                        {skills.length > 0 ? (
                          <section>
                            <h3 className="font-semibold text-white">
                              Skills covered
                            </h3>

                            <ul className="mt-4 flex flex-wrap gap-2">
                              {skills.map((skill) => (
                                <li key={skill.id}>
                                  <Badge variant="outline">
                                    {skill.name}
                                  </Badge>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ) : null}

                        {relatedProjects.length > 0 ? (
                          <section>
                            <h3 className="font-semibold text-white">
                              Related project evidence
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-3">
                              {relatedProjects.map(
                                (project) => (
                                  <LinkButton
                                    key={project.id}
                                    href={`/projects/${project.slug}`}
                                    variant="secondary"
                                    size="small"
                                  >
                                    {project.title}
                                  </LinkButton>
                                ),
                              )}
                            </div>
                          </section>
                        ) : null}

                        <div className="mt-auto flex flex-wrap gap-3 pt-2">
                          {certification.credentialURL ? (
                            <LinkButton
                              href={
                                certification.credentialURL
                              }
                              external
                              rightIcon={
                                <ExternalLink
                                  aria-hidden="true"
                                  size={15}
                                />
                              }
                            >
                              Verify credential
                            </LinkButton>
                          ) : null}

                          {certification.issuerWebsite ? (
                            <LinkButton
                              href={
                                certification.issuerWebsite
                              }
                              external
                              variant="secondary"
                              rightIcon={
                                <ExternalLink
                                  aria-hidden="true"
                                  size={15}
                                />
                              }
                            >
                              Visit issuer
                            </LinkButton>
                          ) : null}
                        </div>

                        {certification.credentialID ? (
                          <p className="text-xs text-slate-600">
                            Credential ID:{" "}
                            {
                              certification.credentialID
                            }
                          </p>
                        ) : null}
                      </div>
                    </article>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card
              variant="glass"
              className="mt-10 overflow-hidden p-0"
            >
              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                <div className="border-b border-slate-800 bg-slate-950/45 p-7 lg:border-b-0 lg:border-r">
                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="Certification roadmap"
                  >
                    <GraduationCap
                      aria-hidden="true"
                      size={23}
                    />
                  </IconContainer>

                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    Official certification records are being
                    prepared
                  </h2>

                  <p className="mt-4 leading-7 text-slate-400">
                    No certification is displayed as
                    completed until it has been officially
                    earned, verified, and published through
                    Payload CMS.
                  </p>
                </div>

                <div className="grid gap-4 p-7 sm:grid-cols-2">
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                    <BadgeCheck
                      aria-hidden="true"
                      size={22}
                      className="text-blue-300"
                    />

                    <h3 className="mt-4 font-semibold text-white">
                      Verified-first approach
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Credential IDs, issuer links, dates,
                      and official evidence will be shown
                      whenever available.
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <ShieldCheck
                      aria-hidden="true"
                      size={22}
                      className="text-emerald-300"
                    />

                    <h3 className="mt-4 font-semibold text-white">
                      No unverified claims
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Planned and in-progress learning
                      remains clearly separated from completed
                      credentials.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {certifications.length === 0 ? (
        <section
          id="learning-roadmap"
          className="border-b border-slate-800/80"
        >
          <div className="syedos-container py-14 sm:py-16 lg:py-20">
            <SectionHeading
              eyebrow="Learning Roadmap"
              title="Three professional learning tracks supporting my career direction"
              description="These pathways strengthen my goal of becoming a full-stack software engineer with cloud, DevOps, and artificial-intelligence capabilities."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {roadmapTracks.map((track) => (
                <Card
                  key={track.title}
                  variant="glass"
                  className="flex h-full flex-col"
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

                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {track.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
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
      ) : null}

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-14 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow="Credential Standards"
            title="What makes a professional certificate valuable"
            description="A useful credential should be verifiable, relevant to the career path, issued by a credible organisation, and supported by practical application."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {credentialStandards.map((standard) => (
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

                <h2 className="mt-5 text-xl font-semibold text-white">
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

      {projects.length > 0 ? (
        <section className="border-b border-slate-800/80">
          <div className="syedos-container py-14 sm:py-16 lg:py-20">
            <SectionHeading
              eyebrow="Practical Evidence"
              title="Projects supporting technical learning"
              description="Project case studies demonstrate the practical application of software-engineering, database, security, AI, cloud, and full-stack development skills."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  variant="elevated"
                  interactive
                  className="flex h-full flex-col"
                >
                  <div className="flex items-start justify-between gap-4">
                    <IconContainer
                      variant="primary"
                      size="large"
                      label={project.title}
                    >
                      <Layers3
                        aria-hidden="true"
                        size={21}
                      />
                    </IconContainer>

                    <Badge variant="primary">
                      Project evidence
                    </Badge>
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.shortDescription ??
                      "Explore this project’s architecture, technologies, implementation, and practical outcomes."}
                  </p>

                  <div className="mt-6">
                    <LinkButton
                      href={`/projects/${project.slug}`}
                      variant="secondary"
                      size="small"
                    >
                      View project
                    </LinkButton>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section>
        <div className="syedos-container py-14 sm:py-16 lg:py-20">
          <div className="rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="primary" dot>
                  Continuous professional development
                </Badge>

                <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                  Credentials support—not replace—practical
                  project experience.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Official certificates, credential IDs,
                  verification links, dates, learning
                  outcomes, and supporting project evidence
                  will be added as each pathway is completed.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <LinkButton href="/projects">
                  View Projects
                </LinkButton>

                <LinkButton
                  href="/contact"
                  variant="secondary"
                  rightIcon={
                    <ExternalLink
                      aria-hidden="true"
                      size={15}
                    />
                  }
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