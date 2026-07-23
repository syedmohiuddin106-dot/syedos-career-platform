import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Education",
  description:
    "Explore Syed Mohiuddin's B.Tech Information Technology education, academic background, practical learning, languages, and career preparation.",
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    title: "Education | Syed Mohiuddin",
    description:
      "Explore Syed Mohiuddin's academic journey, Information Technology degree, school achievements, and practical software-development learning.",
    url: "/education",
    type: "website",
  },
};

const educationTimeline = [
  {
    period: "2023 â€“ 2027",
    level: "Undergraduate Degree",
    title: "B.Tech in Information Technology",
    institution:
      "Kakatiya Institute of Technology and Science, Warangal",
    location: "Warangal, Telangana",
    status: "Currently Pursuing",
    statusVariant: "primary" as const,
    icon: <GraduationCap size={23} />,
    iconVariant: "primary" as const,
    description:
      "Pursuing a Bachelor of Technology in Information Technology with a focus on software development, databases, computer systems, web technologies, and practical engineering projects.",
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
    period: "Completed",
    level: "Intermediate Education",
    title: "Higher Secondary Education",
    institution: "Hyderabad Institute of Excellence",
    location: "Telangana",
    status: "85%",
    statusVariant: "success" as const,
    icon: <School size={23} />,
    iconVariant: "success" as const,
    description:
      "Completed higher secondary education with strong academic performance and preparation for engineering and technology studies.",
    highlights: [
      "Academic score: 85%",
      "Analytical thinking",
      "Engineering preparation",
      "Academic discipline",
    ],
  },
  {
    period: "Completed",
    level: "Secondary Education",
    title: "School Education",
    institution: "SR Digi School",
    location: "Telangana",
    status: "10 CGPA",
    statusVariant: "warning" as const,
    icon: <BookOpen size={23} />,
    iconVariant: "warning" as const,
    description:
      "Completed secondary education with excellent academic performance and an early interest in technology, problem solving, and computers.",
    highlights: [
      "10 CGPA",
      "Strong academic foundation",
      "Problem-solving interest",
      "Technology curiosity",
    ],
  },
];

const academicFocusAreas = [
  {
    title: "Programming and Development",
    description:
      "Strengthening programming logic, web development, backend systems, databases, debugging, and application design.",
    icon: <Code2 size={21} />,
    variant: "primary" as const,
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
      "Learning the foundations of operating systems, networks, data structures, algorithms, and computer architecture.",
    icon: <BookOpen size={21} />,
    variant: "info" as const,
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
      "Applying planning, modular architecture, validation, security, testing, documentation, and maintainable development practices.",
    icon: <Target size={21} />,
    variant: "success" as const,
    topics: [
      "Project architecture",
      "Secure development",
      "Testing fundamentals",
      "Documentation",
    ],
  },
];

const practicalLearning = [
  {
    title: "CampusHire",
    description:
      "Applied PHP, MySQL, authentication, sessions, role-based access, job workflows, file uploads, and administrator controls.",
    status: "Completed",
    variant: "success" as const,
  },
  {
    title: "SyedAI Assistant",
    description:
      "Applied AI API integration, PHP, MySQL, assistant workflows, history, favorites, file handling, and response management.",
    status: "Active",
    variant: "primary" as const,
  },
  {
    title: "SyedOS",
    description:
      "Applying Next.js, TypeScript, reusable architecture, design systems, SEO, project case studies, and production planning.",
    status: "In Development",
    variant: "warning" as const,
  },
];

const academicStrengths = [
  {
    title: "Consistent academic foundation",
    description:
      "Strong performance across school and intermediate education supports continued engineering growth.",
    icon: <Award size={20} />,
    variant: "warning" as const,
  },
  {
    title: "Practical application",
    description:
      "Academic concepts are strengthened through complete projects, debugging, implementation, and documentation.",
    icon: <CheckCircle2 size={20} />,
    variant: "success" as const,
  },
  {
    title: "Career-focused learning",
    description:
      "Learning priorities are selected around software engineering, full-stack development, AI, cloud, and employability.",
    icon: <BriefcaseBusiness size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Continuous improvement",
    description:
      "Skills are developed through coursework, online learning, project work, technical practice, and reflection.",
    icon: <Sparkles size={20} />,
    variant: "info" as const,
  },
];

const languages = [
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

export default function EducationPage() {
  return (
    <main className="min-w-0 overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-800/80" aria-label="Education overview">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-10rem] top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[40%] h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative pb-14 pt-6 sm:py-14 lg:py-14 xl:pb-18 xl:pt-8">
          <div className="grid min-w-0 items-start gap-9 xl:grid-cols-[1.08fr_0.92fr] xl:items-center xl:gap-12">
            <div className="min-w-0">
              <div className="space-y-4">
                <div className="grid grid-cols-[1.28fr_1.15fr_1fr] items-center gap-1 sm:flex sm:flex-wrap sm:gap-3">
                  <Badge
                    variant="primary"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.54rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    B.Tech Information Technology
                  </Badge>

                  <Badge
                    variant="success"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.54rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Expected Graduation 2027
                  </Badge>

                  <Badge
                    variant="outline"
                    className="w-full justify-center whitespace-nowrap px-1.5 py-1 text-[0.54rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Project-Based Learning
                  </Badge>
                </div>

                <p className="syedos-code-text text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm sm:tracking-[0.2em]">
                  Education
                </p>
              </div>

              <h1
                id="education-page-title"
                className="mt-3 max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[430px]:text-[2.65rem] sm:text-5xl sm:leading-[1.07] lg:text-6xl"
              >
                Academic knowledge strengthened through practical
                software development.
              </h1>

              <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                I am pursuing a B.Tech in Information Technology while
                building real software projects that connect academic
                concepts with full-stack development, databases,
                artificial intelligence, security, and cloud learning.
              </p>

              <div className="mt-7 flex flex-col items-start gap-3 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
                <span className="inline-flex items-center gap-2">
                  <GraduationCap
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-blue-400"
                  />
                  KITS Warangal
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-cyan-400"
                  />
                  2023â€“2027
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-green-400"
                  />
                  Warangal, Telangana
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <LinkButton
                  href="/projects"
                  rightIcon={<ArrowRight aria-hidden="true" size={18} />}
                  className="w-full justify-center sm:w-auto"
                >
                  View Practical Projects
                </LinkButton>

                <LinkButton
                  href="/skills"
                  variant="secondary"
                  rightIcon={<ArrowRight aria-hidden="true" size={17} />}
                  className="w-full justify-center sm:w-auto"
                >
                  Explore Skills
                </LinkButton>
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
                      Academic Profile
                    </p>

                    <h2 className="mt-2 text-xl">
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

              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Programme
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    B.Tech
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Department
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Information Technology
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Institution
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    KITS Warangal
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Graduation
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Expected 2027
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 p-6">
                <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <span className="relative mt-1 flex h-3 w-3 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                    </span>

                    <div>
                      <p className="font-semibold text-green-200">
                        Currently pursuing final-year studies
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/65">
                        Continuing academic coursework while developing
                        advanced portfolio, AI, cloud, and full-stack
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

      <section className="border-b border-slate-800/80" aria-label="Education timeline">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Academic Journey"
            title="Education timeline"
            description="My academic journey has built a strong foundation for engineering, technical learning, and practical software development."
          />

          <div className="mt-10 space-y-7">
            {educationTimeline.map((education, index) => (
              <Card
                key={education.title}
                variant={
                  index === 0
                    ? "glass"
                    : index === 1
                      ? "elevated"
                      : "editorial"
                }
                className="overflow-hidden"
              >
                <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
                  <div>
                    <IconContainer
                      variant={education.iconVariant}
                      size="large"
                      rounded="large"
                      label={education.title}
                    >
                      {education.icon}
                    </IconContainer>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                          {education.level}
                        </p>

                        <h2 className="mt-2 text-2xl">
                          {education.title}
                        </h2>
                      </div>

                      <Badge
                        variant={education.statusVariant}
                        dot
                      >
                        {education.status}
                      </Badge>
                    </div>

                    <p className="mt-3 font-semibold text-slate-300">
                      {education.institution}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays size={15} />
                        {education.period}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <MapPin size={15} />
                        {education.location}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {education.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {education.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="outline"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Academic focus areas">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Academic Focus"
            title="Core areas supporting my software engineering goals"
            description="My academic and independent learning focus on the technical foundations required to build modern software systems."
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

      <section className="border-b border-slate-800/80" aria-label="Project-based learning">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Practical Learning"
            title="Projects that connect education with implementation"
            description="Each project transforms academic knowledge into practical experience with real users, workflows, databases, security, and application architecture."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {practicalLearning.map((project) => (
              <Card
                key={project.title}
                variant="glass"
                className="h-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconContainer
                    variant={
                      project.variant === "success"
                        ? "success"
                        : project.variant === "primary"
                          ? "info"
                          : "primary"
                    }
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
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Academic strengths">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Academic Strengths"
            title="How education supports my professional development"
            description="My academic background is strengthened by practical implementation, career planning, and continuous technical learning."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {academicStrengths.map((strength) => (
              <Card
                key={strength.title}
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
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Languages">
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
                Preparing for software engineering opportunities
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                My current education and learning plan are focused on
                developing the technical and professional abilities
                required for internships, fresher roles, high-growth
                software careers, and future master&apos;s studies.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Full-stack development",
                  "Cloud and DevOps",
                  "Artificial intelligence",
                  "Data structures and algorithms",
                  "Technical interview preparation",
                  "Professional communication",
                ].map((item) => (
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
                  Combining academic learning with practical software
                  engineering.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Explore my projects and skills to see how my education
                  is being applied across full-stack, database, AI, and
                  cloud-focused development.
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
