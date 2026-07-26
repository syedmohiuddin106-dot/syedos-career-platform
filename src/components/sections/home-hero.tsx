import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { getHomeHeroData } from "@/lib/cms/get-home-hero-data";

const fallbackStatistics = [
  {
    value: "3",
    label: "Major projects",
  },
  {
    value: "17",
    label: "AI assistant modes",
  },
  {
    value: "2027",
    label: "Expected graduation",
  },
] as const;

const fallbackTechnologies = [
  "Next.js",
  "TypeScript",
  "PHP",
  "MySQL",
  "Artificial Intelligence",
] as const;

function formatStatus(value: string | null | undefined): string {
  if (!value) {
    return "Open to internships";
  }

  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function getMediaURL(value: unknown): string | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  if (
    "url" in value &&
    typeof value.url === "string" &&
    value.url.trim().length > 0
  ) {
    return value.url;
  }

  if (
    "filename" in value &&
    typeof value.filename === "string" &&
    value.filename.trim().length > 0
  ) {
    return `/media/${value.filename}`;
  }

  return null;
}

function getExpectedCompletionYear(
  value: string | null | undefined,
): string | null {
  if (!value) {
    return null;
  }

  const year = value.match(/\b\d{4}\b/);

  return year?.[0] ?? value;
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

export async function HomeHero() {
  const { profile, featuredSkills, education, siteSettings } =
    await getHomeHeroData();

  const profileSocialLinks = profile?.socialLinks ?? [];
  const globalSocialLinks = siteSettings?.socialLinks ?? [];

  const profileGitHubURL = profileSocialLinks.find(
    (link) => link.platform === "github",
  )?.url;

  const globalGitHubURL = globalSocialLinks.find(
    (link) => link.platform === "github",
  )?.url;

  const githubURL =
    profileGitHubURL ??
    globalGitHubURL ??
    "https://github.com/syedmohiuddin106-dot";

  const resumeURL =
    getMediaURL(profile?.resume) ?? "/resume/syed-mohiuddin-resume.pdf";

  const primaryButtonLabel =
    profile?.primaryCallToAction?.label ?? "Explore My Projects";

  const primaryButtonURL =
    profile?.primaryCallToAction?.url ?? "/projects";

  const resumeButtonLabel =
    profile?.resumeLabel ??
    siteSettings?.resumeButtonLabel ??
    "Download Resume";

  const shouldShowResume =
    siteSettings?.enableResumeDownload !== false && Boolean(resumeURL);

  const statistics =
    profile?.professionalHighlights &&
    profile.professionalHighlights.length > 0
      ? profile.professionalHighlights.slice(0, 3).map((highlight) => ({
          value: highlight.value,
          label: highlight.title,
        }))
      : fallbackStatistics;

  const technologies =
    featuredSkills.length > 0
      ? featuredSkills.map((skill) => skill.name)
      : [...fallbackTechnologies];

  const educationEnd =
    education?.endYear?.toString() ??
    getExpectedCompletionYear(education?.expectedCompletion) ??
    "Present";

  const fullEducationQualification = education
    ? `${education.qualification}${
        education.fieldOfStudy ? ` in ${education.fieldOfStudy}` : ""
      }`
    : "B.Tech Information Technology";

  const shortEducationQualification = education?.fieldOfStudy
    ? `B.Tech ${education.fieldOfStudy}`
    : "B.Tech Information Technology";

  const educationDuration = education
    ? `${education.startYear}–${educationEnd}`
    : "2023–2027";

  const institutionName = getShortInstitutionName(
    education?.institution,
  );

  const currentFocus =
    profile?.careerInterests?.[0]?.description ??
    profile?.careerObjective ??
    "Building advanced full-stack applications, improving deployment skills, and preparing for software-engineering opportunities.";

  const careerGoalTitle =
    profile?.preferredRoles?.[0]?.role ??
    profile?.professionalTitle ??
    "Software Engineer";

  const careerGoalSubtitle =
    profile?.careerInterests
      ?.slice(0, 3)
      .map((interest) => interest.title)
      .join(" · ") || "Full-stack · Cloud · Software Engineering";

  const availabilityDescription =
    profile?.contactPreferences?.[0]?.preference ??
    "Internships, collaborations, and technical projects.";

  const heroTitle = profile?.shortTitle
    ? `Building modern software as a ${profile.shortTitle.toLowerCase()}.`
    : "Building intelligent software that solves real problems.";

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden border-b border-slate-800/80"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute right-[-12rem] top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-18rem] left-[38%] h-[34rem] w-[34rem] rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="syedos-container relative pb-14 pt-6 sm:py-14 lg:py-14 xl:pb-18 xl:pt-8">
        <div className="grid min-w-0 items-start gap-9 xl:grid-cols-[1fr_0.95fr] xl:gap-14">
          <div className="min-w-0">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="success"
                  dot
                  className="whitespace-nowrap text-[0.72rem] sm:text-sm"
                >
                  {profile?.heroBadge ?? "Available for opportunities"}
                </Badge>
                
              </div>

              <p className="syedos-code-text text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm sm:tracking-[0.2em]">
                {profile?.shortTitle ?? "Full-Stack Developer"}
              </p>
            </div>

            <h1
              id="home-hero-heading"
              className="mt-3 max-w-[15ch] text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[430px]:text-[2.65rem] sm:max-w-4xl sm:text-5xl sm:leading-[1.07] lg:text-[3.75rem] xl:text-[4rem] 2xl:text-[4.25rem]"
            >
              {heroTitle}
            </h1>

            <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              {profile?.shortBio ??
                "I’m Syed Mohiuddin, an Information Technology student focused on full-stack development, cloud technologies, and practical software products."}
            </p>

            <div className="mt-7 flex flex-col items-start gap-3 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
              <span className="inline-flex items-center gap-2">
                <MapPin
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-cyan-400"
                />

                {profile?.location ?? "Hanamkonda, Telangana"}
              </span>

              <span className="inline-flex items-center gap-2">
                <GraduationCap
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-blue-400"
                />

                {fullEducationQualification}
              </span>

              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness
                  aria-hidden="true"
                  size={17}
                  className="shrink-0 text-green-400"
                />

                {formatStatus(profile?.availabilityStatus)}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <LinkButton
                href={primaryButtonURL}
                rightIcon={
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                  />
                }
                className="w-full justify-center sm:w-auto"
              >
                {primaryButtonLabel}
              </LinkButton>

              <LinkButton
                href={githubURL}
                external
                variant="secondary"
                leftIcon={
                  <GitBranch
                    aria-hidden="true"
                    size={18}
                  />
                }
                ariaLabel="Open Syed Mohiuddin's GitHub profile"
                className="w-full justify-center sm:w-auto"
              >
                View GitHub
              </LinkButton>

              {shouldShowResume ? (
                <LinkButton
                  href={resumeURL}
                  external
                  variant="ghost"
                  leftIcon={
                    <Download
                      aria-hidden="true"
                      size={18}
                    />
                  }
                  ariaLabel="Open Syed Mohiuddin's resume PDF"
                  className="w-full justify-center sm:w-auto"
                >
                  {resumeButtonLabel}
                </LinkButton>
              ) : null}
            </div>

            <dl className="mt-9 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {statistics.map((statistic) => (
                <div
                  key={`${statistic.label}-${statistic.value}`}
                  className="rounded-2xl border border-slate-800 bg-slate-950/45 px-5 py-5 sm:px-6 sm:py-6"
                >
                  <dd className="mb-1 text-2xl font-bold text-slate-200 sm:text-3xl">
                    {statistic.value}
                  </dd>

                  <dt className="text-sm text-slate-500">
                    {statistic.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <Card
            variant="glass"
            className="min-w-0 overflow-hidden p-0 xl:sticky xl:top-24"
          >
            <div className="border-b border-slate-800 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Developer Profile
                  </p>

                  <h2 className="mt-2 truncate text-xl">
                    {profile?.fullName ?? "Syed Mohiuddin"}
                  </h2>
                </div>

                <IconContainer
                  variant="primary"
                  size="large"
                  rounded="large"
                  label="SyedOS developer profile"
                >
                  <Sparkles
                    aria-hidden="true"
                    size={23}
                  />
                </IconContainer>
              </div>
            </div>

            <div className="space-y-6 p-5 sm:p-6">
              <article className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                <div className="flex items-start gap-4">
                  <IconContainer
                    variant="primary"
                    size="medium"
                    label="Current development focus"
                  >
                    <Code2
                      aria-hidden="true"
                      size={20}
                    />
                  </IconContainer>

                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">
                      Current focus
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {currentFocus}
                    </p>
                  </div>
                </div>
              </article>

              <div>
                <h3 className="text-sm font-semibold text-slate-300">
                  Core technologies
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {technologies.map((technology, index) => (
                    <li key={technology}>
                      <Badge
                        variant={
                          index === 0
                            ? "primary"
                            : index === technologies.length - 1
                              ? "info"
                              : "outline"
                        }
                      >
                        {technology}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="min-w-0 rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Education
                  </p>

                  <h3 className="mt-2 truncate font-semibold text-white">
                    {institutionName}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">
                    {shortEducationQualification} · {educationDuration}
                  </p>
                </article>

                <article className="min-w-0 rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Career goal
                  </p>

                  <h3 className="mt-2 line-clamp-2 font-semibold text-white">
                    {careerGoalTitle}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">
                    {careerGoalSubtitle}
                  </p>
                </article>
              </div>

              <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-emerald-400"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-green-200">
                      {profile?.heroBadge ??
                        "Available for professional opportunities"}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-green-100/65">
                      {availabilityDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}