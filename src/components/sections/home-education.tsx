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

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { SectionHeading } from "@/components/ui/section-heading";

const educationTimeline = [
  {
    period: "2023 – 2027",
    title: "B.Tech in Information Technology",
    institution:
      "Kakatiya Institute of Technology and Science, Warangal",
    description:
      "Building a strong foundation in programming, databases, web development, software engineering, operating systems, computer networks, and practical project work.",
    icon: <GraduationCap size={22} />,
    variant: "primary" as const,
    highlights: [
      "Information Technology",
      "Expected graduation: 2027",
      "Practical project development",
    ],
  },
  {
    period: "Intermediate",
    title: "Higher Secondary Education",
    institution: "Hyderabad Institute of Excellence",
    description:
      "Completed higher secondary education with a focus on academic discipline, analytical thinking, and preparation for engineering studies.",
    icon: <School size={22} />,
    variant: "success" as const,
    highlights: [
      "Score: 85%",
      "Engineering preparation",
      "Academic foundation",
    ],
  },
  {
    period: "Secondary School",
    title: "School Education",
    institution: "SR Digi School",
    description:
      "Completed secondary education with strong academic performance and early interest in technology and problem solving.",
    icon: <BookOpen size={22} />,
    variant: "warning" as const,
    highlights: [
      "10 CGPA",
      "Strong academic performance",
      "Technology interest",
    ],
  },
];

const achievementAreas = [
  {
    title: "Project Development",
    description:
      "Completed and actively developing substantial software projects including CampusHire, SyedAI Assistant, and SyedOS.",
    icon: <Sparkles size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Practical Engineering",
    description:
      "Applied authentication, role-based access, database design, validation, reusable components, and complete user workflows.",
    icon: <CheckCircle2 size={20} />,
    variant: "success" as const,
  },
  {
    title: "Continuous Learning",
    description:
      "Expanding knowledge in advanced full-stack development, artificial intelligence, cloud technologies, DevOps, and software deployment.",
    icon: <Award size={20} />,
    variant: "info" as const,
  },
];

const languages = [
  "English",
  "Hindi",
  "Urdu",
  "Telugu",
];

export function HomeEducation() {
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
          description="My education provides the theoretical base, while projects, debugging, structured learning, and technical experimentation build the practical engineering skills required for professional software roles."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <Card
            variant="glass"
            className="overflow-hidden"
          >
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Education Timeline
            </p>

            <div className="mt-6 space-y-5">
              {educationTimeline.map(
                (education, index) => (
                  <div
                    key={education.title}
                    className="relative grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5 sm:grid-cols-[auto_1fr]"
                  >
                    {index <
                      educationTimeline.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[2.3rem] top-[4.7rem] hidden h-[calc(100%+1.5rem)] w-px bg-slate-800 sm:block"
                      />
                    )}

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
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-cyan-300">
                            {education.period}
                          </p>

                          <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                            {education.title}
                          </h3>
                        </div>

                        <Badge variant="outline">
                          Academic
                        </Badge>
                      </div>

                      <p className="mt-2 font-medium text-slate-300">
                        {education.institution}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {education.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {education.highlights.map(
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
                ),
              )}
            </div>
          </Card>

          <div className="grid gap-5">
            <Card variant="editorial">
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="warning"
                  label="Academic profile"
                >
                  <GraduationCap size={20} />
                </IconContainer>

                <div>
                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Current Academic Status
                  </p>

                  <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                    B.Tech Information Technology
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                  <p className="text-sm text-slate-500">
                    Institution
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Kakatiya Institute of Technology and Science
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-sm text-slate-500">
                      Department
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Information Technology
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-sm text-slate-500">
                      Graduation
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Expected 2027
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
                      Warangal, Telangana
                    </p>

                    <p className="mt-1 text-sm leading-6 text-blue-100/65">
                      Academic learning is combined with practical development,
                      project implementation, and career preparation.
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
                  <Languages size={20} />
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

              <div className="mt-6 flex flex-wrap gap-3">
                {languages.map((language) => (
                  <Badge
                    key={language}
                    variant="outline"
                    size="medium"
                  >
                    {language}
                  </Badge>
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
            {achievementAreas.map((achievement) => (
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

        <div className="mt-10 rounded-3xl sm:mt-12 sm:rounded-[2rem] border border-green-500/20 bg-green-500/10 p-5 sm:p-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                Academic and Career Development
              </p>

              <h3 className="mt-3 text-xl leading-tight sm:text-2xl">
                Education provides the foundation; projects prove the ability.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-green-100/70">
                The final portfolio will connect academic learning with
                project evidence, technical decisions, skills, certifications,
                and professional career preparation.
              </p>
            </div>

            <Badge
              variant="success"
              size="medium"
              dot
            >
              Graduating 2027
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}