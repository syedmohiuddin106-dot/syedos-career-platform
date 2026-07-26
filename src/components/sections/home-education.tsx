import type { ReactNode } from "react";

import {
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Languages,
  MapPin,
  School,
  Sparkles,
} from "lucide-react";
import { getPayload } from "payload";

import config from "@payload-config";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeHeroData } from "@/lib/cms/get-home-hero-data";

type IconVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type EducationDisplayItem = {
  id: number | string;
  period: string;
  title: string;
  institution: string;
  description: string;
  icon: ReactNode;
  variant: IconVariant;
  highlights: string[];
  currentlyStudying: boolean;
};

const educationVisuals = [
  {
    icon: <GraduationCap aria-hidden="true" size={22} />,
    variant: "primary" as const,
  },
  {
    icon: <School aria-hidden="true" size={22} />,
    variant: "success" as const,
  },
  {
    icon: <BookOpen aria-hidden="true" size={22} />,
    variant: "warning" as const,
  },
];

const fallbackEducation: EducationDisplayItem[] = [
  {
    id: "btech",
    period: "2023 – 2027",
    title: "B.Tech in Information Technology",
    institution:
      "Kakatiya Institute of Technology and Science, Warangal",
    description:
      "Building a strong foundation in programming, databases, web development, software engineering, computer networks, and practical project work.",
    icon: <GraduationCap aria-hidden="true" size={22} />,
    variant: "primary",
    highlights: [
      "Information Technology",
      "Expected graduation: 2027",
      "Practical project development",
    ],
    currentlyStudying: true,
  },
  {
    id: "intermediate",
    period: "Completed",
    title: "Intermediate Education",
    institution: "Hyderabad Institute of Excellence",
    description:
      "Completed higher secondary education with a strong academic foundation and preparation for engineering studies.",
    icon: <School aria-hidden="true" size={22} />,
    variant: "success",
    highlights: [
      "Score: 85%",
      "Engineering preparation",
      "Academic foundation",
    ],
    currentlyStudying: false,
  },
  {
    id: "ssc",
    period: "Completed",
    title: "Secondary School Education",
    institution: "SR Digi School",
    description:
      "Completed secondary education with strong academic performance and an early interest in technology and problem solving.",
    icon: <BookOpen aria-hidden="true" size={22} />,
    variant: "warning",
    highlights: [
      "10 CGPA",
      "Strong academic performance",
      "Technology interest",
    ],
    currentlyStudying: false,
  },
];

const fallbackAchievements = [
  {
    title: "Project Development",
    description:
      "Completed and actively developing substantial software projects including CampusHire, SyedAI Assistant, and SyedOS.",
    icon: <Sparkles aria-hidden="true" size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Practical Engineering",
    description:
      "Applied authentication, role-based access, database design, validation, reusable components, APIs, and complete user workflows.",
    icon: <CheckCircle2 aria-hidden="true" size={20} />,
    variant: "success" as const,
  },
  {
    title: "Continuous Learning",
    description:
      "Expanding knowledge in advanced full-stack development, cloud computing, DevOps, databases, and software deployment.",
    icon: <Award aria-hidden="true" size={20} />,
    variant: "info" as const,
  },
];

function getYearFromText(
  value: string | null | undefined,
): string | null {
  if (!value) {
    return null;
  }

  return value.match(/\b\d{4}\b/)?.[0] ?? null;
}

function getEducationPeriod(
  startYear: number | null | undefined,
  endYear: number | null | undefined,
  expectedCompletion: string | null | undefined,
  currentlyStudying: boolean | null | undefined,
): string {
  const start = startYear?.toString();

  const completionYear =
    endYear?.toString() ??
    getYearFromText(expectedCompletion);

  if (start && completionYear) {
    return `${start} – ${completionYear}`;
  }

  if (start && currentlyStudying) {
    return `${start} – Present`;
  }

  if (completionYear) {
    return `Completed ${completionYear}`;
  }

  return currentlyStudying ? "Currently Studying" : "Completed";
}

function getQualificationTitle(
  qualification: string | null | undefined,
  fieldOfStudy: string | null | undefined,
): string {
  if (qualification && fieldOfStudy) {
    const normalizedQualification = qualification.toLowerCase();
    const normalizedField = fieldOfStudy.toLowerCase();

    if (normalizedQualification.includes(normalizedField)) {
      return qualification;
    }

    return `${qualification} in ${fieldOfStudy}`;
  }

  return qualification ?? fieldOfStudy ?? "Academic Qualification";
}

function getResultHighlight(
  result: string | number | null | undefined,
  resultScale: string | number | null | undefined,
): string | null {
  if (result === null || result === undefined || result === "") {
    return null;
  }

  if (
    resultScale !== null &&
    resultScale !== undefined &&
    resultScale !== ""
  ) {
    return `Result: ${result}/${resultScale}`;
  }

  return `Result: ${result}`;
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

function formatProficiency(
  proficiency: string | null | undefined,
): string {
  if (!proficiency) {
    return "Professional";
  }

  return proficiency
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

async function getEducationSectionData() {
  const payload = await getPayload({
    config,
  });

  const result = await payload.find({
    collection: "education",
    where: {
      _status: {
        equals: "published",
      },
    },
    depth: 2,
    limit: 20,
    sort: "displayOrder",
    draft: false,
  });

  return result.docs;
}

export async function HomeEducation() {
  const [educationRecords, { profile, education: featuredEducation }] =
    await Promise.all([
      getEducationSectionData(),
      getHomeHeroData(),
    ]);

  const cmsEducation: EducationDisplayItem[] =
    educationRecords.map((record, index) => {
      const visual =
        educationVisuals[index] ??
        educationVisuals[educationVisuals.length - 1];

      const resultHighlight = getResultHighlight(
        record.result,
        record.resultScale,
      );

      const courseworkHighlights =
        record.coursework
          ?.map((course) => course.courseName)
          .filter(Boolean)
          .slice(0, 2) ?? [];

      const highlights = [
        record.fieldOfStudy,
        record.currentlyStudying
          ? `Expected graduation: ${
              record.endYear ??
              getYearFromText(record.expectedCompletion) ??
              "In progress"
            }`
          : null,
        resultHighlight,
        ...courseworkHighlights,
      ].filter((value): value is string => Boolean(value));

      return {
        id: record.id,
        period: getEducationPeriod(
          record.startYear,
          record.endYear,
          record.expectedCompletion,
          record.currentlyStudying,
        ),
        title: getQualificationTitle(
          record.qualification,
          record.fieldOfStudy,
        ),
        institution: record.institution,
        description:
          record.summary ??
          "Academic learning supported by practical coursework, technical projects, and continuous professional development.",
        icon: visual.icon,
        variant: visual.variant,
        highlights:
          highlights.length > 0
            ? highlights.slice(0, 4)
            : ["Academic development"],
        currentlyStudying: Boolean(record.currentlyStudying),
      };
    });

  const cmsSlugs = new Set(
    educationRecords.map((record) => record.slug),
  );

  const fallbackRecords = fallbackEducation.filter((record) => {
    if (
      record.id === "btech" &&
      cmsSlugs.has("btech-information-technology-kitsw")
    ) {
      return false;
    }

    return true;
  });

  const educationTimeline =
    cmsEducation.length > 0
      ? [...cmsEducation, ...fallbackRecords].slice(0, 3)
      : fallbackEducation;

  const currentEducation =
    educationRecords.find((record) => record.currentlyStudying) ??
    featuredEducation ??
    educationRecords[0] ??
    null;

  const currentQualification = currentEducation
    ? getQualificationTitle(
        currentEducation.qualification,
        currentEducation.fieldOfStudy,
      )
    : "B.Tech in Information Technology";

  const currentInstitution =
    currentEducation?.institution ??
    "Kakatiya Institute of Technology and Science";

  const currentDepartment =
    currentEducation?.fieldOfStudy ??
    "Information Technology";

  const currentGraduationYear =
    currentEducation?.endYear?.toString() ??
    getYearFromText(currentEducation?.expectedCompletion) ??
    "2027";

  const currentLocation =
    currentEducation?.location ??
    "Warangal, Telangana, India";

  const currentCoursework =
    currentEducation?.coursework
      ?.map((course) => course.courseName)
      .filter(Boolean)
      .slice(0, 6) ?? [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
    ];

  const languages =
    profile?.languages?.map((item) => ({
      language: item.language,
      proficiency: item.proficiency,
    })) ?? [
      {
        language: "English",
        proficiency: "professional",
      },
      {
        language: "Hindi",
        proficiency: "professional",
      },
      {
        language: "Urdu",
        proficiency: "native-bilingual",
      },
      {
        language: "Telugu",
        proficiency: "professional",
      },
    ];

  const profileAchievements =
    profile?.professionalHighlights &&
    profile.professionalHighlights.length > 0
      ? profile.professionalHighlights
          .slice(0, 3)
          .map((highlight, index) => ({
            title: highlight.title,
            description:
              highlight.description ??
              `${highlight.value} representing practical academic and professional development.`,
            icon:
              fallbackAchievements[index]?.icon ??
              fallbackAchievements[0].icon,
            variant:
              fallbackAchievements[index]?.variant ??
              fallbackAchievements[0].variant,
          }))
      : fallbackAchievements;

  return (
    <section className="relative border-b border-slate-800/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-36 top-16 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -right-36 bottom-[-8rem] h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="syedos-container relative py-12 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrow="Education and Achievements"
          title="Academic foundation strengthened through practical software development"
          description="My education provides the theoretical foundation, while projects, debugging, structured learning, and technical experimentation build practical engineering skills."
        />

        <div className="mt-8 grid items-stretch gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <Card
            variant="glass"
            className="h-full overflow-hidden"
          >
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Education Timeline
            </p>

            <div className="mt-6 space-y-5">
              {educationTimeline.map((education, index) => (
                <div
                  key={education.id}
                  className="relative grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:grid-cols-[auto_1fr] sm:p-5"
                >
                  {index < educationTimeline.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-[2.3rem] top-[4.7rem] hidden h-[calc(100%+1.5rem)] w-px bg-slate-800 sm:block"
                    />
                  ) : null}

                  <div className="relative z-10">
                    <IconContainer
                      variant={education.variant}
                      size="large"
                      rounded="full"
                      label={education.title}
                    >
                      {education.icon}
                    </IconContainer>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-cyan-300">
                          {education.currentlyStudying
                            ? education.period
                            : "Academic Record"}
                        </p>

                        <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                          {education.title}
                        </h3>
                      </div>

                      <Badge
                        variant={
                          education.currentlyStudying
                            ? "primary"
                            : "outline"
                        }
                        className="shrink-0"
                      >
                        {education.currentlyStudying
                          ? "Current"
                          : "Completed"}
                      </Badge>
                    </div>

                    <p className="mt-2 font-medium text-slate-300">
                      {education.institution}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {education.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {education.highlights.map((highlight) => (
                        <Badge
                          key={`${education.id}-${highlight}`}
                          variant="outline"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex h-full flex-col gap-5">
            <Card
              variant="editorial"
              className="flex-1"
            >
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="warning"
                  label="Academic profile"
                >
                  <GraduationCap
                    aria-hidden="true"
                    size={20}
                  />
                </IconContainer>

                <div>
                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Current Academic Status
                  </p>

                  <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                    {currentQualification}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                  <p className="text-sm text-slate-500">
                    Institution
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {getShortInstitutionName(currentInstitution)}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-sm text-slate-500">
                      Department
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      {currentDepartment}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-sm text-slate-500">
                      Graduation
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Expected {currentGraduationYear}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                  <MapPin
                    aria-hidden="true"
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-300"
                  />

                  <div>
                    <p className="font-medium text-blue-100">
                      {currentLocation}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-blue-100/65">
                      Academic learning is combined with practical
                      development, project implementation, independent
                      learning, and career preparation.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                  <p className="text-sm font-semibold text-white">
                    Current Coursework
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Key academic subjects supporting software
                    development, database engineering, networking,
                    architecture, and problem solving.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentCoursework.map((course) => (
                      <Badge
                        key={course}
                        variant="outline"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                      Study Mode
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Full-Time
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                      Status
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      In Progress
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                      Focus
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Software Development
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="info"
                  label="Languages"
                >
                  <Languages
                    aria-hidden="true"
                    size={20}
                  />
                </IconContainer>

                <div>
                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Communication
                  </p>

                  <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                    Languages
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {languages.map((item) => (
                  <div
                    key={item.language}
                    className="rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                  >
                    <p className="font-semibold text-white">
                      {item.language}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {formatProficiency(item.proficiency)}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <SectionHeading
            eyebrow="Development Achievements"
            title="Progress built through projects and consistent technical practice"
            description="My strongest achievements currently come from building substantial software systems, solving implementation problems, and continuously improving technical depth."
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {profileAchievements.map((achievement) => (
              <Card
                key={achievement.title}
                variant="elevated"
                interactive
              >
                <IconContainer
                  variant={achievement.variant}
                  size="large"
                  label={achievement.title}
                >
                  {achievement.icon}
                </IconContainer>

                <h3 className="mt-4 text-lg leading-tight sm:mt-5 sm:text-xl">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 p-5 sm:mt-12 sm:rounded-[2rem] sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                Academic and Career Development
              </p>

              <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
                Education provides the foundation; projects prove the ability.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-green-100/70">
                SyedOS connects academic learning with project
                evidence, technical decisions, skills,
                certifications, experience, and professional career
                preparation.
              </p>
            </div>

            <Badge
              variant="success"
              size="medium"
              dot
            >
              Graduating {currentGraduationYear}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}