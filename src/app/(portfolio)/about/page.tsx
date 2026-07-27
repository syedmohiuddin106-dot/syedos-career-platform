import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  GraduationCap,
  Layers3,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAboutPageData } from "@/lib/cms/get-about-page-data";

type UnknownRecord = Record<string, unknown>;

type VisualVariant =
  | "primary"
  | "info"
  | "success"
  | "warning";

type FocusArea = {
  title: string;
  description: string;
  progress: number;
  variant: VisualVariant;
  icon: ReactNode;
};

type EngineeringValue = {
  title: string;
  description: string;
  variant: VisualVariant;
  icon: ReactNode;
};

const fallbackFocusAreas: FocusArea[] = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive interfaces, secure backend systems, database-driven features, and complete applications for real users.",
    progress: 82,
    variant: "primary",
    icon: <Layers3 size={22} />,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Integrating AI assistants, automation, structured prompting, and intelligent features into practical software products.",
    progress: 64,
    variant: "info",
    icon: <BrainCircuit size={22} />,
  },
  {
    title: "Cloud and DevOps",
    description:
      "Developing skills in deployment, containerization, cloud infrastructure, environment management, and reliable delivery.",
    progress: 35,
    variant: "success",
    icon: <CloudCog size={22} />,
  },
];

const fallbackProgressAreas: FocusArea[] = [
  {
    title: "Full-Stack Development",
    description: "",
    progress: 82,
    variant: "primary",
    icon: <Layers3 size={22} />,
  },
  {
    title: "PHP and MySQL",
    description: "",
    progress: 78,
    variant: "success",
    icon: <Code2 size={22} />,
  },
  {
    title: "Artificial Intelligence",
    description: "",
    progress: 64,
    variant: "info",
    icon: <BrainCircuit size={22} />,
  },
  {
    title: "Cloud and DevOps",
    description: "",
    progress: 35,
    variant: "warning",
    icon: <CloudCog size={22} />,
  },
];

const fallbackEngineeringValues: EngineeringValue[] = [
  {
    title: "Practical Problem Solving",
    description:
      "I focus on building useful systems around genuine user requirements instead of isolated technical demonstrations.",
    variant: "primary",
    icon: <Rocket size={20} />,
  },
  {
    title: "Secure Development",
    description:
      "Authentication, authorization, validation, protected routes, prepared statements, and safe configuration remain core requirements.",
    variant: "success",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Maintainable Architecture",
    description:
      "I organize applications into reusable components and clear modules that remain understandable as features grow.",
    variant: "info",
    icon: <Code2 size={20} />,
  },
  {
    title: "Continuous Learning",
    description:
      "I improve through project work, debugging, technical documentation, structured courses, and consistent practice.",
    variant: "warning",
    icon: <GraduationCap size={20} />,
  },
];

function isRecord(value: unknown): value is UnknownRecord {
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

function getArray(
  record: object | null | undefined,
  key: string,
): unknown[] {
  const value = getObjectValue(record, key);

  return Array.isArray(value) ? value : [];
}

function getNumber(
  record: object | null | undefined,
  keys: string[],
  fallback: number,
): number {
  for (const key of keys) {
    const value = getObjectValue(record, key);

    if (typeof value === "number" && Number.isFinite(value)) {
      return Math.min(100, Math.max(0, value));
    }
  }

  return fallback;
}

function getVariant(index: number): VisualVariant {
  const variants: VisualVariant[] = [
    "primary",
    "info",
    "success",
    "warning",
  ];

  return variants[index % variants.length];
}

function getFocusIcon(index: number): ReactNode {
  const icons = [
    <Layers3 key="layers" size={22} />,
    <BrainCircuit key="brain" size={22} />,
    <CloudCog key="cloud" size={22} />,
  ];

  return icons[index % icons.length];
}

function getValueIcon(index: number): ReactNode {
  const icons = [
    <Rocket key="rocket" size={20} />,
    <ShieldCheck key="shield" size={20} />,
    <Code2 key="code" size={20} />,
    <GraduationCap key="graduation" size={20} />,
  ];

  return icons[index % icons.length];
}

function formatAvailability(value: string): string {
  const labels: Record<string, string> = {
    "open-to-internships": "Available for internships",
    "open-to-part-time": "Available for part-time roles",
    "open-to-full-time": "Available for full-time roles",
    "open-to-freelance": "Available for freelance work",
    "not-available": "Not currently available",
  };

  return labels[value] ?? "Available for opportunities";
}

function compactText(value: string, maximum = 220): string {
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

function fillItems<T>(
  cmsItems: T[],
  fallbackItems: T[],
  requiredLength: number,
): T[] {
  const combined = [...cmsItems];

  for (const fallbackItem of fallbackItems) {
    if (combined.length >= requiredLength) {
      break;
    }

    combined.push(fallbackItem);
  }

  return combined.slice(0, requiredLength);
}

export async function generateMetadata(): Promise<Metadata> {
  const { profile } = await getAboutPageData();

  const profileRecord = isRecord(profile) ? profile : null;
  const seoValue = getObjectValue(profileRecord, "seo");
  const seo = isRecord(seoValue) ? seoValue : null;

  const fullName = getString(
    profileRecord,
    "fullName",
    "Syed Mohiuddin",
  );

  const description = getString(
    seo,
    "description",
    getString(
      profileRecord,
      "shortBio",
      "Learn about Syed Mohiuddin, an Information Technology student focused on full-stack development, artificial intelligence, cloud technologies, and practical software engineering.",
    ),
  );

  return {
    title: getString(seo, "title", `About ${fullName}`),
    description,
    alternates: {
      canonical: "/about",
    },
  };
}

export default async function AboutPage() {
  const { profile, education, skills, projects } =
    await getAboutPageData();

  const profileRecord = isRecord(profile) ? profile : null;

  const fullName = getString(
    profileRecord,
    "fullName",
    "Syed Mohiuddin",
  );

  const professionalTitle = getString(
    profileRecord,
    "professionalTitle",
    "Software Developer and Full-Stack Web Developer",
  );

  const shortTitle = getString(
    profileRecord,
    "shortTitle",
    "Software Engineer",
  );

  const shortBio = compactText(
    getString(
      profileRecord,
      "shortBio",
      "I am a B.Tech Information Technology student focused on full-stack development, artificial intelligence, cloud technologies, and building practical software products that solve real problems.",
    ),
    260,
  );

  const fullBio = getString(
    profileRecord,
    "fullBio",
    "My development journey is focused on connecting academic knowledge with practical implementation, real user workflows, software security, and modern product architecture.",
  );

  const careerObjective = compactText(
    getString(
      profileRecord,
      "careerObjective",
      "Become a capable software engineer who can design, build, secure, deploy, and improve complete applications across frontend, backend, database, cloud, and AI-assisted systems.",
    ),
    330,
  );

  const location = getString(
    profileRecord,
    "location",
    "Hanamkonda, Telangana",
  );

  const availabilityValue = getString(
    profileRecord,
    "availabilityStatus",
    "open-to-internships",
  );

  const availabilityLabel =
    formatAvailability(availabilityValue);

  const heroBadge = getString(
    profileRecord,
    "heroBadge",
    availabilityLabel,
  );

  const primaryValue = getObjectValue(
    profileRecord,
    "primaryCallToAction",
  );

  const secondaryValue = getObjectValue(
    profileRecord,
    "secondaryCallToAction",
  );

  const primaryCTA = isRecord(primaryValue)
    ? primaryValue
    : null;

  const secondaryCTA = isRecord(secondaryValue)
    ? secondaryValue
    : null;

  const primaryLabel = getString(
    primaryCTA,
    "label",
    "Explore Projects",
  );

  const primaryURL = getString(
    primaryCTA,
    "url",
    "/projects",
  );

  const secondaryLabel = getString(
    secondaryCTA,
    "label",
    "Contact Me",
  );

  const secondaryURL = getString(
    secondaryCTA,
    "url",
    "/contact",
  );

  const educationRecord =
    education.length > 0 && isRecord(education[0])
      ? education[0]
      : null;

  const institution = getString(
    educationRecord,
    "institution",
    getString(
      educationRecord,
      "institutionName",
      "Kakatiya Institute of Technology and Science",
    ),
  );

  const qualification = getString(
    educationRecord,
    "degree",
    getString(
      educationRecord,
      "qualification",
      "B.Tech Information Technology",
    ),
  );

  const startYear = getString(
    educationRecord,
    "startYear",
    "2023",
  );

  const endYear = getString(
    educationRecord,
    "endYear",
    "2027",
  );

  const preferredRoles = getArray(
    profileRecord,
    "preferredRoles",
  )
    .filter(isRecord)
    .map((item) => getString(item, "role"))
    .filter(Boolean);

  const careerDirection =
    preferredRoles[0] ?? shortTitle;

  const projectRecords = projects.filter(
    (project): project is typeof project & object =>
      typeof project === "object" && project !== null,
  );

  const featuredProject =
    projectRecords.find(
      (project) =>
        getObjectValue(project, "featured") === true,
    ) ??
    projectRecords[0] ??
    null;

  const featuredProjectTitle = getString(
    featuredProject,
    "title",
    "SyedOS",
  );

  const featuredProjectDescription = compactText(
    getString(
      featuredProject,
      "shortDescription",
      "A scalable personal career platform combining portfolio storytelling, structured content, analytics, administration, and AI-assisted career intelligence.",
    ),
    210,
  );

  const cmsCareerInterests = getArray(
    profileRecord,
    "careerInterests",
  )
    .filter(isRecord)
    .map((interest, index): FocusArea => ({
      title: getString(
        interest,
        "title",
        fallbackFocusAreas[
          index % fallbackFocusAreas.length
        ].title,
      ),
      description: compactText(
        getString(
          interest,
          "description",
          fallbackFocusAreas[
            index % fallbackFocusAreas.length
          ].description,
        ),
        185,
      ),
      progress:
        fallbackFocusAreas[
          index % fallbackFocusAreas.length
        ].progress,
      variant: getVariant(index),
      icon: getFocusIcon(index),
    }));

  const focusAreas = fillItems(
    cmsCareerInterests,
    fallbackFocusAreas,
    3,
  );

  const cmsProgressAreas = skills
    .filter(
      (skill): skill is typeof skill & object =>
        typeof skill === "object" && skill !== null,
    )
    .slice(0, 4)
    .map((skill, index): FocusArea => ({
      title: getString(
        skill,
        "name",
        getString(
          skill,
          "title",
          fallbackProgressAreas[
            index % fallbackProgressAreas.length
          ].title,
        ),
      ),
      description: "",
      progress: getNumber(
        skill,
        [
          "proficiency",
          "proficiencyLevel",
          "progress",
          "percentage",
        ],
        fallbackProgressAreas[
          index % fallbackProgressAreas.length
        ].progress,
      ),
      variant: getVariant(index),
      icon: getFocusIcon(index),
    }));

  const progressAreas = fillItems(
    cmsProgressAreas,
    fallbackProgressAreas,
    4,
  );

  const cmsStrengths = getArray(
    profileRecord,
    "personalStrengths",
  )
    .filter(isRecord)
    .map(
      (strength, index): EngineeringValue => ({
        title: getString(
          strength,
          "title",
          fallbackEngineeringValues[
            index % fallbackEngineeringValues.length
          ].title,
        ),
        description: compactText(
          getString(
            strength,
            "description",
            fallbackEngineeringValues[
              index % fallbackEngineeringValues.length
            ].description,
          ),
          190,
        ),
        variant: getVariant(index),
        icon: getValueIcon(index),
      }),
    );

  const engineeringValues = fillItems(
    cmsStrengths,
    fallbackEngineeringValues,
    4,
  );

  const focusSummary = focusAreas
    .map((area) => area.title)
    .slice(0, 3)
    .join(" · ");

  const biographyParagraphs = fullBio
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="min-w-0 overflow-hidden">
      <section
        className="relative overflow-hidden border-b border-slate-800/80"
        aria-labelledby="about-page-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-44 -top-52 h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-10">
          <div className="grid items-start gap-10 xl:grid-cols-[1.04fr_0.96fr] xl:gap-16">
            <div className="min-w-0">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge
                    variant="success"
                    dot
                    className="px-4 py-2 text-sm sm:text-[0.95rem]"
                  >
                    {heroBadge}
                  </Badge>

                  <Badge
                    variant="primary"
                    className="px-4 py-2 text-sm sm:text-[0.95rem]"
                  >
                    Final-year IT student
                  </Badge>

                  <Badge
                    variant="info"
                    className="px-4 py-2 text-sm sm:text-[0.95rem]"
                  >
                    Full-Stack · AI · Cloud
                  </Badge>
                </div>

                <p className="syedos-code-text text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  About {fullName}
                </p>
              </div>

              <h1
                id="about-page-title"
                className="mt-4 max-w-3xl text-[2.5rem] font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
              >
                Building practical software for real-world
                problems.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                {shortBio}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <MapPin
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-cyan-400"
                  />

                  {location}
                </span>

                <span className="inline-flex items-center gap-2">
                  <GraduationCap
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-blue-400"
                  />

                  {qualification}
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-green-400"
                  />

                  {availabilityLabel}
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href={primaryURL}
                  rightIcon={
                    <ArrowRight
                      aria-hidden="true"
                      size={18}
                    />
                  }
                  className="w-full justify-center sm:w-auto"
                >
                  {primaryLabel}
                </LinkButton>

                <LinkButton
                  href={secondaryURL}
                  variant="secondary"
                  rightIcon={
                    <ArrowRight
                      aria-hidden="true"
                      size={17}
                    />
                  }
                  className="w-full justify-center sm:w-auto"
                >
                  {secondaryLabel}
                </LinkButton>
              </div>
            </div>

            <Card
              variant="glass"
              className="overflow-hidden p-0 xl:mt-10"
            >
              <div className="border-b border-slate-800 px-6 py-5 sm:px-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Professional Profile
                    </p>

                    <h2 className="mt-3 max-w-md text-2xl leading-tight">
                      {professionalTitle}
                    </h2>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="Professional profile"
                  >
                    <Sparkles size={23} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-white">
                    Current goal
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {careerObjective}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Education
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {institution}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {qualification}
                      <br />
                      {startYear}–{endYear}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Career direction
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {careerDirection}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {focusSummary}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                  <p className="text-sm font-semibold text-green-200">
                    Currently building {featuredProjectTitle}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-green-100/65">
                    {featuredProjectDescription}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Professional journey"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="My Story"
            title="From learning technologies to building complete systems"
            description="My development journey connects academic learning with practical implementation, real workflows, software security, and modern product architecture."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <Card
              variant="glass"
              className="h-full"
            >
              <div className="space-y-5 text-sm leading-8 text-slate-400">
                {biographyParagraphs.length > 0 ? (
                  biographyParagraphs.map(
                    (paragraph, index) => (
                      <p
                        key={`${index}-${paragraph.slice(
                          0,
                          30,
                        )}`}
                      >
                        {paragraph}
                      </p>
                    ),
                  )
                ) : (
                  <p>
                    My development journey combines academic
                    learning with practical software projects,
                    modern technologies, and continuous
                    improvement.
                  </p>
                )}
              </div>
            </Card>

            <Card
              variant="editorial"
              className="h-full"
            >
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Current Progress
              </p>

              <h2 className="mt-3 text-2xl">
                Career development priorities
              </h2>

              <div className="mt-7 space-y-6">
                {progressAreas.map((area, index) => (
                  <Progress
                    key={`${area.title}-${index}`}
                    label={area.title}
                    value={area.progress}
                    variant={area.variant}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Technical focus areas"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Career Focus"
            title="Technical areas guiding my professional growth"
            description="These areas support my goal of building intelligent, secure, scalable, and production-ready software."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <Card
                key={`${area.title}-${index}`}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={area.variant}
                  size="large"
                  label={area.title}
                >
                  {area.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {area.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Software engineering values">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Engineering Values"
            title="How I approach software development"
            description="My goal is not only to write code, but to build systems that are useful, secure, maintainable, and ready to improve."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {engineeringValues.map((value, index) => (
              <Card
                key={`${value.title}-${index}`}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={value.variant}
                  size="large"
                  label={value.title}
                >
                  {value.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {value.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge
                  variant="success"
                  dot
                >
                  {availabilityLabel}
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Looking for an internship, fresher role, or
                  technical collaboration.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Explore my projects, review my technical
                  skills, or contact me to discuss a suitable
                  opportunity.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <LinkButton
                  href={primaryURL}
                  rightIcon={<ArrowRight size={17} />}
                >
                  {primaryLabel}
                </LinkButton>

                <LinkButton
                  href={secondaryURL}
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  {secondaryLabel}
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}