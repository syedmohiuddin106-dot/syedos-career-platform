import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  GraduationCap,
  Languages,
  MapPin,
  School,
  Sparkles,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getEducationPageData } from "@/lib/cms/get-education-page-data";

type VisualVariant =
  | "primary"
  | "info"
  | "success"
  | "warning";

type TimelineItem = {
  key: string;
  educationLevel: string;
  period: string;
  level: string;
  title: string;
  institution: string;
  location: string;
  status: string;
  statusVariant: VisualVariant;
  icon: ReactNode;
  iconVariant: VisualVariant;
  description: string;
  highlights: string[];
};

type FocusArea = {
  title: string;
  description: string;
  icon: ReactNode;
  variant: VisualVariant;
  topics: string[];
};

type PracticalProject = {
  title: string;
  description: string;
  status: string;
  variant: VisualVariant;
};

type AcademicStrength = {
  title: string;
  description: string;
  icon: ReactNode;
  variant: VisualVariant;
};

type LanguageItem = {
  name: string;
  usage: string;
};

const fallbackTimeline: TimelineItem[] = [
  {
    key: "undergraduate",
    educationLevel: "undergraduate",
    period: "2023–2027",
    level: "Undergraduate Degree",
    title: "Bachelor of Technology in Information Technology",
    institution:
      "Kakatiya Institute of Technology and Science, Warangal",
    location: "Warangal, Telangana, India",
    status: "Currently Pursuing",
    statusVariant: "primary",
    icon: <GraduationCap size={23} />,
    iconVariant: "primary",
    description:
      "Pursuing a Bachelor of Technology in Information Technology with a focus on software development, databases, computer systems, web technologies, software engineering, and practical project work.",
    highlights: [
      "Information Technology",
      "Expected graduation: 2027",
      "Full-stack development",
      "Database systems",
      "Software engineering",
      "Project-based learning",
    ],
  },
  {
    key: "higher-secondary",
    educationLevel: "higher-secondary",
    period: "Completed",
    level: "Higher Secondary Education",
    title: "Intermediate Education",
    institution: "Hyderabad Institute of Excellence",
    location: "Telangana, India",
    status: "Completed",
    statusVariant: "success",
    icon: <School size={23} />,
    iconVariant: "success",
    description:
      "Completed higher secondary education with strong academic performance and preparation for engineering, analytical thinking, technology studies, and disciplined learning.",
    highlights: [
      "Academic score: 85%",
      "Engineering preparation",
      "Analytical thinking",
      "Academic discipline",
    ],
  },
  {
    key: "secondary-school",
    educationLevel: "secondary-school",
    period: "Completed in 2021",
    level: "Secondary Education",
    title: "Secondary School Education",
    institution: "SR Digi School",
    location: "Telangana, India",
    status: "Completed",
    statusVariant: "success",
    icon: <BookOpen size={23} />,
    iconVariant: "success",
    description:
      "Completed secondary education with excellent academic performance and developed an early interest in computers, technology, logical thinking, and problem solving.",
    highlights: [
      "10 CGPA",
      "Strong academic foundation",
      "Problem-solving interest",
      "Technology curiosity",
    ],
  },
];

const fallbackFocusAreas: FocusArea[] = [
  {
    title: "Programming and Development",
    description:
      "Strengthening programming logic, frontend development, backend workflows, database integration, debugging, and application design.",
    icon: <Code2 size={21} />,
    variant: "primary",
    topics: [
      "Programming fundamentals",
      "Web development",
      "Database applications",
      "Software projects",
    ],
  },
  {
    title: "Computer Systems",
    description:
      "Learning operating systems, computer networks, data structures, algorithms, and the foundations of modern computing systems.",
    icon: <BookOpen size={21} />,
    variant: "info",
    topics: [
      "Operating systems",
      "Computer networks",
      "Data structures",
      "Algorithms",
    ],
  },
  {
    title: "Software Engineering",
    description:
      "Applying planning, reusable architecture, validation, security, testing, documentation, and maintainable development practices.",
    icon: <Target size={21} />,
    variant: "success",
    topics: [
      "Project architecture",
      "Secure development",
      "Testing fundamentals",
      "Documentation",
    ],
  },
];

const fallbackProjects: PracticalProject[] = [
  {
    title: "CampusHire",
    description:
      "Applied PHP, MySQL, authentication, sessions, role-based access, recruiter approval, job workflows, notifications, file uploads, and administrator controls.",
    status: "Completed",
    variant: "success",
  },
  {
    title: "SyedAI Assistant",
    description:
      "Applied AI API integration, PHP, MySQL, assistant workflows, history, favourites, exports, file handling, and response management.",
    status: "Active",
    variant: "primary",
  },
  {
    title: "SyedOS Career Platform",
    description:
      "Applying Next.js, TypeScript, Payload CMS, PostgreSQL, Docker, reusable architecture, SEO, structured content, and production planning.",
    status: "In Development",
    variant: "warning",
  },
];

const fallbackStrengths: AcademicStrength[] = [
  {
    title: "Consistent Academic Foundation",
    description:
      "Strong performance in school and intermediate education supports continued engineering growth and technical learning.",
    icon: <Award size={20} />,
    variant: "warning",
  },
  {
    title: "Practical Application",
    description:
      "Academic concepts are strengthened through complete projects, debugging, implementation, testing, and documentation.",
    icon: <CheckCircle2 size={20} />,
    variant: "success",
  },
  {
    title: "Career-Focused Learning",
    description:
      "Learning priorities are selected around software engineering, full-stack development, AI, cloud, and employability.",
    icon: <BriefcaseBusiness size={20} />,
    variant: "primary",
  },
  {
    title: "Continuous Improvement",
    description:
      "Skills are developed through coursework, online learning, project work, technical practice, and regular reflection.",
    icon: <Sparkles size={20} />,
    variant: "info",
  },
];

const fallbackLanguages: LanguageItem[] = [
  {
    name: "English",
    usage: "Professional and academic communication",
  },
  {
    name: "Hindi",
    usage: "Conversational communication",
  },
  {
    name: "Urdu",
    usage: "Fluent communication",
  },
  {
    name: "Telugu",
    usage: "Conversational communication",
  },
];

const fallbackCareerPreparation = [
  "Full-stack development",
  "Cloud and DevOps",
  "Artificial intelligence",
  "Data structures and algorithms",
  "Technical interview preparation",
  "Professional communication",
];

function isObject(value: unknown): value is object {
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

function getNumber(
  record: object | null | undefined,
  key: string,
): number | null {
  const value = getObjectValue(record, key);

  return typeof value === "number" && Number.isFinite(value)
    ? value
    : null;
}

function getBoolean(
  record: object | null | undefined,
  key: string,
): boolean {
  return getObjectValue(record, key) === true;
}

function getArray(
  record: object | null | undefined,
  key: string,
): unknown[] {
  const value = getObjectValue(record, key);

  return Array.isArray(value) ? value : [];
}

function compactText(
  value: string,
  maximum = 260,
): string {
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

function getVariant(index: number): VisualVariant {
  const variants: VisualVariant[] = [
    "primary",
    "success",
    "warning",
    "info",
  ];

  return variants[index % variants.length];
}

function formatEducationLevel(value: string): string {
  const labels: Record<string, string> = {
    "secondary-school": "Secondary Education",
    "higher-secondary": "Higher Secondary Education",
    diploma: "Diploma",
    undergraduate: "Undergraduate Degree",
    postgraduate: "Postgraduate Degree",
    doctorate: "Doctorate",
    "professional-certification":
      "Professional Certification",
    other: "Academic Qualification",
  };

  return labels[value] ?? "Academic Qualification";
}

function getEducationIcon(
  educationLevel: string,
): ReactNode {
  if (
    educationLevel === "undergraduate" ||
    educationLevel === "postgraduate" ||
    educationLevel === "doctorate"
  ) {
    return <GraduationCap size={23} />;
  }

  if (
    educationLevel === "higher-secondary" ||
    educationLevel === "diploma"
  ) {
    return <School size={23} />;
  }

  return <BookOpen size={23} />;
}

function formatProficiency(value: string): string {
  const labels: Record<string, string> = {
    basic: "Basic communication",
    conversational: "Conversational communication",
    professional:
      "Professional and academic communication",
    "native-bilingual":
      "Native or bilingual communication",
  };

  return labels[value] ?? "Communication";
}

function createTimelineItem(
  record: object,
  fallback: TimelineItem,
  index: number,
): TimelineItem {
  const educationLevel = getString(
    record,
    "educationLevel",
    fallback.educationLevel,
  );

  const startYear = getNumber(record, "startYear");
  const endYear = getNumber(record, "endYear");

  const currentlyStudying = getBoolean(
    record,
    "currentlyStudying",
  );

  const expectedCompletion = getString(
    record,
    "expectedCompletion",
  );

  const expectedYear =
    expectedCompletion.replace(/\D/g, "") ||
    (endYear ? String(endYear) : "Present");

  const period = currentlyStudying
    ? `${startYear ?? "Current"}–${expectedYear}`
    : startYear && endYear
      ? `${startYear}–${endYear}`
      : endYear
        ? `Completed ${endYear}`
        : fallback.period;

  const coursework = getArray(record, "coursework")
    .filter(isObject)
    .map((course) =>
      getString(course, "courseName"),
    )
    .filter(Boolean);

  const achievements = getArray(
    record,
    "achievements",
  )
    .filter(isObject)
    .map((achievement) =>
      getString(achievement, "title"),
    )
    .filter(Boolean);

  const relatedSkills = getArray(
    record,
    "relatedSkills",
  )
    .filter(isObject)
    .map((skill) =>
      getString(
        skill,
        "name",
        getString(skill, "title"),
      ),
    )
    .filter(Boolean);

  const result = getString(record, "result");

  const resultHighlight =
    !currentlyStudying && result
      ? [result]
      : [];

  const highlights = [
    ...resultHighlight,
    ...coursework,
    ...achievements,
    ...relatedSkills,
  ].slice(0, 6);

  return {
    key: fallback.key,
    educationLevel,
    period,
    level: formatEducationLevel(educationLevel),
    title: getString(
      record,
      "qualification",
      fallback.title,
    ),
    institution: getString(
      record,
      "institution",
      fallback.institution,
    ),
    location: getString(
      record,
      "location",
      fallback.location,
    ),
    status: currentlyStudying
      ? expectedCompletion || "Currently Pursuing"
      : "Completed",
    statusVariant: currentlyStudying
      ? "primary"
      : "success",
    icon: getEducationIcon(educationLevel),
    iconVariant: currentlyStudying
      ? "primary"
      : "success",
    description: compactText(
      getString(
        record,
        "summary",
        fallback.description,
      ),
      500,
    ),
    highlights:
      highlights.length > 0
        ? highlights
        : fallback.highlights,
  };
}

function findEducationRecord(
  records: object[],
  educationLevel: string,
): object | null {
  return (
    records.find(
      (record) =>
        getString(record, "educationLevel") ===
        educationLevel,
    ) ?? null
  );
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
  const { profile, education } =
    await getEducationPageData();

  const profileRecord = isObject(profile)
    ? profile
    : null;

  const educationRecords: object[] =
    education.filter(isObject);

  const featuredRecord =
    educationRecords.find((record) =>
      getBoolean(record, "featured"),
    ) ??
    educationRecords.find(
      (record) =>
        getString(record, "educationLevel") ===
        "undergraduate",
    ) ??
    educationRecords[0] ??
    null;

  const seoValue = getObjectValue(
    featuredRecord,
    "seo",
  );

  const seo = isObject(seoValue)
    ? seoValue
    : null;

  const fullName = getString(
    profileRecord,
    "fullName",
    "Syed Mohiuddin",
  );

  const description = getString(
    seo,
    "description",
    `Explore ${fullName}'s B.Tech Information Technology education, school background, practical learning, projects, languages, and software-engineering preparation.`,
  );

  return {
    title: getString(
      seo,
      "title",
      `Education | ${fullName}`,
    ),
    description,
    alternates: {
      canonical: "/education",
    },
    openGraph: {
      title: `Education | ${fullName}`,
      description,
      url: "/education",
      type: "website",
    },
  };
}

export default async function EducationPage() {
  const {
    profile,
    education,
    skills,
    projects,
  } = await getEducationPageData();

  const profileRecord = isObject(profile)
    ? profile
    : null;

  const educationRecords: object[] =
    education.filter(isObject);

  const undergraduateRecord =
    findEducationRecord(
      educationRecords,
      "undergraduate",
    );

  const higherSecondaryRecord =
    findEducationRecord(
      educationRecords,
      "higher-secondary",
    );

  const secondaryRecord =
    findEducationRecord(
      educationRecords,
      "secondary-school",
    );

  const educationTimeline: TimelineItem[] = [
    undergraduateRecord
      ? createTimelineItem(
          undergraduateRecord,
          fallbackTimeline[0],
          0,
        )
      : fallbackTimeline[0],

    higherSecondaryRecord
      ? createTimelineItem(
          higherSecondaryRecord,
          fallbackTimeline[1],
          1,
        )
      : fallbackTimeline[1],

    secondaryRecord
      ? createTimelineItem(
          secondaryRecord,
          fallbackTimeline[2],
          2,
        )
      : fallbackTimeline[2],
  ];

  const featuredEducation =
    undergraduateRecord ??
    educationRecords.find((record) =>
      getBoolean(record, "featured"),
    ) ??
    educationRecords[0] ??
    null;

  const institution = getString(
    featuredEducation,
    "institution",
    fallbackTimeline[0].institution,
  );

  const fieldOfStudy = getString(
    featuredEducation,
    "fieldOfStudy",
    "Information Technology",
  );

  const location = getString(
    featuredEducation,
    "location",
    fallbackTimeline[0].location,
  );

  const startYear =
    getNumber(featuredEducation, "startYear") ??
    2023;

  const endYear =
    getNumber(featuredEducation, "endYear") ??
    2027;

  const currentlyStudying = featuredEducation
    ? getBoolean(
        featuredEducation,
        "currentlyStudying",
      )
    : true;

  const expectedCompletion = getString(
    featuredEducation,
    "expectedCompletion",
    `Expected ${endYear}`,
  );

  const educationSummary = compactText(
    getString(
      featuredEducation,
      "summary",
      "I am pursuing a B.Tech in Information Technology while building real software projects that connect academic concepts with full-stack development, databases, artificial intelligence, security, cloud technologies, and software engineering.",
    ),
    340,
  );

  const profileLanguages = getArray(
    profileRecord,
    "languages",
  )
    .filter(isObject)
    .map(
      (language): LanguageItem => ({
        name: getString(
          language,
          "language",
          "Language",
        ),
        usage: formatProficiency(
          getString(
            language,
            "proficiency",
            "professional",
          ),
        ),
      }),
    );

  const languages =
    profileLanguages.length > 0
      ? profileLanguages
      : fallbackLanguages;

  const allCoursework = educationRecords
    .flatMap((record) =>
      getArray(record, "coursework"),
    )
    .filter(isObject)
    .map((course) =>
      getString(course, "courseName"),
    )
    .filter(Boolean);

  const academicFocusAreas: FocusArea[] =
    fallbackFocusAreas.map((area, index) => {
      const start = index * 4;

      const cmsTopics = allCoursework.slice(
        start,
        start + 4,
      );

      return {
        ...area,
        topics:
          cmsTopics.length > 0
            ? cmsTopics
            : area.topics,
      };
    });

  const projectRecords: object[] =
    projects.filter(isObject);

  const cmsProjects = projectRecords
    .slice(0, 3)
    .map(
      (
        project,
        index,
      ): PracticalProject => {
        const rawStatus = getString(
          project,
          "status",
        );

        const status =
          rawStatus === "completed"
            ? "Completed"
            : rawStatus === "in-progress"
              ? "In Development"
              : rawStatus === "active"
                ? "Active"
                : getBoolean(project, "featured")
                  ? "Featured"
                  : "Published";

        return {
          title: getString(
            project,
            "title",
            fallbackProjects[
              index % fallbackProjects.length
            ].title,
          ),
          description: compactText(
            getString(
              project,
              "shortDescription",
              fallbackProjects[
                index % fallbackProjects.length
              ].description,
            ),
            240,
          ),
          status,
          variant: getVariant(index + 1),
        };
      },
    );

  const practicalLearning = fillItems(
    cmsProjects,
    fallbackProjects,
    3,
  );

  const cmsStrengths = getArray(
    profileRecord,
    "personalStrengths",
  )
    .filter(isObject)
    .map(
      (
        strength,
        index,
      ): AcademicStrength => ({
        title: getString(
          strength,
          "title",
          fallbackStrengths[
            index % fallbackStrengths.length
          ].title,
        ),
        description: compactText(
          getString(
            strength,
            "description",
            fallbackStrengths[
              index % fallbackStrengths.length
            ].description,
          ),
          210,
        ),
        icon:
          fallbackStrengths[
            index % fallbackStrengths.length
          ].icon,
        variant: getVariant(index),
      }),
    );

  const academicStrengths = fillItems(
    cmsStrengths,
    fallbackStrengths,
    4,
  );

  const skillRecords: object[] =
    skills.filter(isObject);

  const cmsSkillNames = skillRecords
    .map((skill) =>
      getString(
        skill,
        "name",
        getString(skill, "title"),
      ),
    )
    .filter(Boolean);

  const careerPreparation = fillItems(
    cmsSkillNames,
    fallbackCareerPreparation,
    6,
  );

  return (
    <main className="min-w-0 overflow-hidden">
      <section
        className="relative overflow-hidden border-b border-slate-800/80"
        aria-labelledby="education-page-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-10rem] top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[40%] h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-12">
          <div className="grid items-start gap-10 xl:grid-cols-[1.04fr_0.96fr] xl:gap-16">
            <div className="min-w-0">
              <div className="space-y-5">
                <div className="flex flex-nowrap items-center gap-2.5 overflow-x-auto pb-1">
                  <Badge
                    variant="primary"
                    className="shrink-0 whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm"
                  >
                    B.Tech Information Technology
                  </Badge>

                  <Badge
                    variant="success"
                    className="shrink-0 whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm"
                  >
                    Expected Graduation 2027
                  </Badge>

                  <Badge
                    variant="info"
                    className="shrink-0 whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm"
                  >
                    Project-Based Learning
                  </Badge>
                </div>

                <p className="syedos-code-text text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Education
                </p>
              </div>

              <h1
                id="education-page-title"
                className="mt-4 max-w-2xl text-[2.25rem] font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-4xl sm:leading-[1.05] lg:text-5xl"
              >
                Academic knowledge strengthened through
                practical software development.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:mt-6 sm:text-lg">
                {educationSummary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-blue-400"
                  />

                  {institution}
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-cyan-400"
                  />

                  {startYear}–{endYear}
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-green-400"
                  />

                  {location}
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href="/projects"
                  rightIcon={<ArrowRight size={18} />}
                  className="w-full justify-center sm:w-auto"
                >
                  View Practical Projects
                </LinkButton>

                <LinkButton
                  href="/skills"
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                  className="w-full justify-center sm:w-auto"
                >
                  Explore Skills
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
                      Academic Profile
                    </p>

                    <h2 className="mt-3 text-2xl leading-tight">
                      Current education status
                    </h2>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="Education profile"
                  >
                    <GraduationCap size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Programme
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Bachelor of Technology
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Department
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    {fieldOfStudy}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Institution
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    {institution}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Graduation
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    {expectedCompletion}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 p-5 sm:p-6">
                <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <span className="relative mt-1 flex h-3 w-3 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                    </span>

                    <div>
                      <p className="font-semibold text-green-200">
                        {currentlyStudying
                          ? "Currently pursuing final-year studies"
                          : "Academic qualification completed"}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/65">
                        Continuing academic coursework while
                        developing advanced full-stack, AI,
                        cloud, database, and portfolio
                        projects.
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
        className="border-b border-slate-800/80"
        aria-label="Education timeline"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Academic Journey"
            title="Complete education timeline"
            description="My academic journey from secondary school to Information Technology engineering has built a strong foundation for technical learning and practical software development."
          />

          <div className="mt-10 space-y-7">
            {educationTimeline.map((item, index) => (
              <Card
                key={item.key}
                variant={
                  index === 0
                    ? "glass"
                    : "elevated"
                }
                className="overflow-hidden"
              >
                <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
                  <IconContainer
                    variant={item.iconVariant}
                    size="large"
                    rounded="large"
                    label={item.title}
                  >
                    {item.icon}
                  </IconContainer>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                          {item.level}
                        </p>

                        <h2 className="mt-2 text-2xl">
                          {item.title}
                        </h2>
                      </div>

                      <Badge
                        variant={item.statusVariant}
                        dot
                      >
                        {item.status}
                      </Badge>
                    </div>

                    <p className="mt-3 font-semibold text-slate-300">
                      {item.institution}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays size={15} />
                        {item.period}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <MapPin size={15} />
                        {item.location}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.highlights.map(
                        (highlight) => (
                          <Badge
                            key={highlight}
                            variant="outline"
                          >
                            {highlight}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Academic focus areas"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Academic Focus"
            title="Core areas supporting my software engineering goals"
            description="My academic and independent learning focus on the technical foundations required to build modern, secure, and maintainable software systems."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {academicFocusAreas.map((area) => (
              <Card
                key={area.title}
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

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Project-based learning"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Practical Learning"
            title="Projects that connect education with implementation"
            description="Each project transforms academic knowledge into practical experience involving real workflows, databases, security, users, and application architecture."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {practicalLearning.map(
              (project, index) => (
                <Card
                  key={`${project.title}-${index}`}
                  variant="glass"
                  className="h-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    <IconContainer
                      variant={getVariant(index)}
                      size="large"
                      label={project.title}
                    >
                      <Code2 size={22} />
                    </IconContainer>

                    <Badge
                      variant={project.variant}
                      dot
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <h2 className="mt-5 text-xl">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Academic strengths"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Academic Strengths"
            title="How education supports my professional development"
            description="My academic background is strengthened by practical implementation, career planning, disciplined learning, and continuous technical improvement."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {academicStrengths.map(
              (strength, index) => (
                <Card
                  key={`${strength.title}-${index}`}
                  variant="elevated"
                  className="h-full"
                >
                  <IconContainer
                    variant={strength.variant}
                    size="large"
                    label={strength.title}
                  >
                    {strength.icon}
                  </IconContainer>

                  <h2 className="mt-5 text-xl">
                    {strength.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {strength.description}
                  </p>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Languages and career preparation"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <Card variant="glass">
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="info"
                  label="Languages"
                >
                  <Languages size={20} />
                </IconContainer>

                <div>
                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Communication
                  </p>

                  <h2 className="mt-1 text-xl">
                    Languages
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                  >
                    <p className="font-semibold text-white">
                      {language.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {language.usage}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="editorial">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Career Preparation
              </p>

              <h2 className="mt-3 text-2xl">
                Preparing for software engineering
                opportunities
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                My current education and learning plan focus
                on developing the technical and professional
                abilities required for internships, fresher
                roles, high-growth software careers, and
                future master&apos;s studies.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {careerPreparation.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      size={18}
                      className="mt-0.5 shrink-0 text-green-400"
                    />

                    <p className="text-sm leading-6 text-slate-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section aria-label="Education call to action">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="success" dot>
                  Graduating in 2027
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Combining academic learning with practical
                  software engineering.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Explore my projects and technical skills to
                  see how my education is being applied
                  across full-stack, database, AI, cloud, and
                  software-engineering development.
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