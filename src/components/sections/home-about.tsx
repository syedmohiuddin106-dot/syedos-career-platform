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
import { getHomeHeroData } from "@/lib/cms/get-home-hero-data";

const fallbackCareerFocusAreas = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive interfaces, backend systems, secure workflows, database-driven features, and production-ready applications.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Cloud Computing and DevOps",
    description:
      "Learning cloud platforms, containerization, deployment workflows, automation, and reliable application delivery.",
    technologies: ["AWS", "Docker", "CI/CD", "Cloud Deployment"],
  },
  {
    title: "Software Engineering",
    description:
      "Designing maintainable systems using structured development, testing, documentation, version control, and clean architecture.",
    technologies: ["Architecture", "Testing", "Git", "Documentation"],
  },
] as const;

const fallbackEngineeringValues = [
  {
    title: "Practical problem solving",
    description:
      "I focus on software that addresses real user needs instead of building features without a clear purpose.",
  },
  {
    title: "Secure development",
    description:
      "Authentication, authorization, validation, safe database access, and responsible data handling are part of the design process.",
  },
  {
    title: "Scalable architecture",
    description:
      "Projects are organized into reusable components and modules so they remain maintainable as features grow.",
  },
  {
    title: "Continuous learning",
    description:
      "I actively improve my knowledge of modern frameworks, cloud technologies, testing, and software engineering practices.",
  },
] as const;

const focusVisuals = [
  {
    icon: <Layers3 aria-hidden="true" size={23} />,
    variant: "primary" as const,
  },
  {
    icon: <CloudCog aria-hidden="true" size={23} />,
    variant: "success" as const,
  },
  {
    icon: <BrainCircuit aria-hidden="true" size={23} />,
    variant: "info" as const,
  },
] as const;

const valueVisuals = [
  {
    icon: <Rocket aria-hidden="true" size={20} />,
    variant: "primary" as const,
  },
  {
    icon: <ShieldCheck aria-hidden="true" size={20} />,
    variant: "success" as const,
  },
  {
    icon: <Code2 aria-hidden="true" size={20} />,
    variant: "info" as const,
  },
  {
    icon: <GraduationCap aria-hidden="true" size={20} />,
    variant: "warning" as const,
  },
] as const;

const progressVariants = [
  "primary",
  "success",
  "info",
  "warning",
] as const;

function getCompletionYear(
  expectedCompletion: string | null | undefined,
  endYear: number | null | undefined,
): string {
  if (endYear) {
    return endYear.toString();
  }

  if (expectedCompletion) {
    const year = expectedCompletion.match(/\b\d{4}\b/);

    if (year?.[0]) {
      return year[0];
    }

    return expectedCompletion;
  }

  return "Present";
}

function getShortInstitutionName(
  institution: string | null | undefined,
): string {
  if (!institution) {
    return "KITS Warangal";
  }

  if (
    institution
      .toLowerCase()
      .includes("kakatiya institute of technology and science")
  ) {
    return "KITS Warangal";
  }

  return institution;
}

export async function HomeAbout() {
  const { profile, featuredSkills, education } =
    await getHomeHeroData();

  const careerFocusAreas =
    profile?.careerInterests && profile.careerInterests.length > 0
      ? profile.careerInterests.slice(0, 3).map((interest, index) => ({
          title: interest.title,
          description:
            interest.description ??
            fallbackCareerFocusAreas[index]?.description ??
            "Developing practical knowledge through projects and continuous learning.",
          technologies:
            index === 0
              ? featuredSkills.map((skill) => skill.name).slice(0, 5)
              : [...(fallbackCareerFocusAreas[index]?.technologies ?? [])],
        }))
      : fallbackCareerFocusAreas.map((area) => ({
          ...area,
          technologies: [...area.technologies],
        }));

  const engineeringValues =
    profile?.personalStrengths && profile.personalStrengths.length > 0
      ? profile.personalStrengths.slice(0, 4).map((strength, index) => ({
          title: strength.title,
          description:
            strength.description ??
            fallbackEngineeringValues[index]?.description ??
            "A professional strength developed through practical software projects.",
        }))
      : fallbackEngineeringValues.map((value) => ({ ...value }));

  const progressSkills =
    featuredSkills.length > 0
      ? featuredSkills.slice(0, 4).map((skill, index) => ({
          label: skill.name,
          value: skill.proficiencyPercentage ?? 70,
          variant:
            progressVariants[index % progressVariants.length] ??
            "primary",
        }))
      : [
          {
            label: "Full-Stack Web Development",
            value: 82,
            variant: "primary" as const,
          },
          {
            label: "PHP and MySQL",
            value: 78,
            variant: "success" as const,
          },
          {
            label: "Cloud and DevOps",
            value: 40,
            variant: "info" as const,
          },
          {
            label: "Software Engineering",
            value: 65,
            variant: "warning" as const,
          },
        ];

  const educationCompletionYear = getCompletionYear(
    education?.expectedCompletion,
    education?.endYear,
  );

  const institutionName = getShortInstitutionName(
    education?.institution,
  );

  const programme =
    education?.fieldOfStudy ?? "Information Technology";

  const qualification =
    education?.qualification ?? "Bachelor of Technology";

  const aboutTitle =
    profile?.professionalTitle ??
    "A developer focused on practical and scalable software";

  const aboutDescription =
    profile?.careerObjective ??
    "My goal is to become a strong software engineer by combining full-stack development, cloud technologies, secure engineering, and practical project experience.";

  const fullBiography =
    profile?.fullBio ??
    "I am pursuing a B.Tech in Information Technology while developing practical full-stack software projects and strengthening my knowledge of databases, cloud computing, deployment, and software engineering.";

  const biographyParagraphs = fullBiography
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .slice(0, 1);

  const profileBadges =
    profile?.careerInterests
      ?.slice(0, 4)
      .map((interest) => interest.title) ??
    [
      "Software Engineering",
      "Full-Stack Development",
      "Cloud Computing",
    ];

  const currentPriority =
    profile?.higherEducationGoal ??
    profile?.careerObjective ??
    "Strengthening advanced web development while building cloud, DevOps, testing, deployment, and software-engineering skills.";

  const academicSummary =
    education?.summary ??
    "Academic learning is strengthened through practical applications involving databases, web development, software architecture, and project implementation.";

  return (
    <section className="relative border-b border-slate-800/80">
      <div className="syedos-container relative pb-14 pt-6 sm:py-14 lg:py-14 xl:pb-18 xl:pt-8">
        <SectionHeading
          eyebrow="About and Career Direction"
          title={aboutTitle}
          description={aboutDescription}
        />

        <div className="mt-8 grid items-start gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <Card
            variant="glass"
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <IconContainer
                variant="primary"
                size="large"
                rounded="large"
                label="Developer profile"
              >
                <Sparkles
                  aria-hidden="true"
                  size={24}
                />
              </IconContainer>

              <div className="min-w-0">
                <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Developer Profile
                </p>

                <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
                  {profile?.headline ??
                    "Building a strong foundation for modern software engineering"}
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400">
                  {biographyParagraphs.map((paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  {profile?.fullBio ? (
                    <a
                      href="/about"
                      className="inline-flex font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      Read the complete biography
                    </a>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {profileBadges.map((badge, index) => (
                    <Badge
                      key={badge}
                      variant={
                        index === 0
                          ? "primary"
                          : index === 1
                            ? "success"
                            : index === 2
                              ? "info"
                              : "outline"
                      }
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card
            variant="editorial"
            className="self-start"
          >
            <div className="flex items-center gap-3">
              <IconContainer
                variant="success"
                label="Career readiness"
              >
                <BriefcaseBusiness
                  aria-hidden="true"
                  size={20}
                />
              </IconContainer>

              <div>
                <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Career Readiness
                </p>

                <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                  Current development progress
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {progressSkills.map((skill) => (
                <Progress
                  key={skill.label}
                  label={skill.label}
                  value={skill.value}
                  variant={skill.variant}
                />
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <IconContainer
                  variant="info"
                  size="small"
                  label="Current learning"
                >
                  <GraduationCap
                    aria-hidden="true"
                    size={16}
                  />
                </IconContainer>

                <div>
                  <p className="font-semibold text-white">
                    Current priority
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {currentPriority}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 sm:mt-12">
          <SectionHeading
            eyebrow="Career Focus"
            title="Three technical areas shaping my career"
            description="These areas support my goal of becoming a versatile software engineer capable of building, managing, and deploying complete applications."
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {careerFocusAreas.map((area, index) => {
              const visual =
                focusVisuals[index] ?? focusVisuals[0];

              return (
                <Card
                  key={area.title}
                  variant="elevated"
                  interactive
                >
                  <IconContainer
                    variant={visual.variant}
                    size="large"
                    label={area.title}
                  >
                    {visual.icon}
                  </IconContainer>

                  <h3 className="mt-4 text-lg leading-tight sm:mt-5 sm:text-xl">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>

                  {area.technologies.length > 0 ? (
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
                  ) : null}
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <div className="flex items-center gap-3">
              <IconContainer
                variant="warning"
                label="Academic foundation"
              >
                <GraduationCap
                  aria-hidden="true"
                  size={20}
                />
              </IconContainer>

              <div>
                <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Academic Foundation
                </p>

                <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                  {qualification} in {programme}
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-sm text-slate-500">
                  Institution
                </p>

                <p className="mt-1 font-semibold text-white">
                  {institutionName}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-500">
                    Programme
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {programme}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                  <p className="text-sm text-slate-500">
                    Graduation
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Expected {educationCompletionYear}
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
                  {academicSummary}
                </p>
              </div>
            </div>
          </Card>

          <Card variant="glass">
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Engineering Values
            </p>

            <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
              How I approach software projects
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {engineeringValues.map((value, index) => {
                const visual =
                  valueVisuals[index] ?? valueVisuals[0];

                return (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5"
                  >
                    <IconContainer
                      variant={visual.variant}
                      size="small"
                      label={value.title}
                    >
                      {visual.icon}
                    </IconContainer>

                    <h4 className="mt-4 font-semibold text-white">
                      {value.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}