import type { Metadata } from "next";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  MapPin,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { getExperiencePageData } from "@/lib/cms/get-experience-page-data";

export const metadata: Metadata = {
  title: "Experience | SyedOS",
  description:
    "Professional experience, internships, academic project work, responsibilities, and practical development experience by Syed Mohiuddin.",
};

function formatExperienceType(value: string): string {
  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function formatWorkMode(
  value: string | null | undefined,
): string | null {
  if (!value) {
    return null;
  }

  const labels: Record<string, string> = {
    onsite: "On-site",
    remote: "Remote",
    hybrid: "Hybrid",
  };

  return labels[value] ?? value;
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

function getDurationLabel(
  startDate: string,
  endDate: string | null | undefined,
  currentlyWorking: boolean | null | undefined,
  durationLabel: string | null | undefined,
): string {
  if (durationLabel?.trim()) {
    return durationLabel;
  }

  const start = formatDate(startDate) ?? "Start date";

  const end = currentlyWorking
    ? "Present"
    : formatDate(endDate) ?? "Present";

  return `${start} – ${end}`;
}

export default async function ExperiencePage() {
  const { experiences } = await getExperiencePageData();

  const totalResponsibilities = experiences.reduce(
    (total, experience) =>
      total + (experience.responsibilities?.length ?? 0),
    0,
  );

  const totalAchievements = experiences.reduce(
    (total, experience) =>
      total + (experience.achievements?.length ?? 0),
    0,
  );

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-44 -top-60 h-[32rem] w-[32rem] rounded-full bg-blue-600/15 blur-3xl" />

          <div className="absolute right-[-12rem] top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="syedos-container relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr]">
            <div className="max-w-3xl">
              <p className="syedos-code-text text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Professional Journey
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Experience
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Practical experience gained through internships, academic
                development, real-world projects, secure application
                engineering, and collaborative software delivery.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <p className="text-2xl font-bold text-white">
                  {experiences.length}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Experience record
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <p className="text-2xl font-bold text-white">
                  {totalResponsibilities}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Responsibilities
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                <p className="text-2xl font-bold text-white">
                  {totalAchievements}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Key achievement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="syedos-container py-12 sm:py-16">
        {experiences.length > 0 ? (
          <div className="space-y-8">
            {experiences.map((experience) => {
              const duration = getDurationLabel(
                experience.startDate,
                experience.endDate,
                experience.currentlyWorking,
                experience.durationLabel,
              );

              const workMode = formatWorkMode(
                experience.workMode,
              );

              const technologies = (
                experience.technologies ?? []
              ).filter(
                (
                  technology,
                ): technology is Exclude<
                  typeof technology,
                  number
                > =>
                  typeof technology === "object" &&
                  technology !== null,
              );

              return (
                <Card
                  key={experience.id}
                  variant="glass"
                  className="overflow-hidden p-0"
                >
                  <article>
                    <header className="border-b border-slate-800 bg-slate-950/35 p-6 sm:p-7">
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="primary">
                              {experience.badgeLabel ??
                                formatExperienceType(
                                  experience.experienceType,
                                )}
                            </Badge>

                            {experience.featured ? (
                              <Badge variant="success">
                                Featured
                              </Badge>
                            ) : null}

                            {workMode ? (
                              <Badge variant="outline">
                                {workMode}
                              </Badge>
                            ) : null}
                          </div>

                          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                            {experience.role}
                          </h2>

                          <p className="mt-2 text-base font-medium text-cyan-300">
                            {experience.organization}
                          </p>
                        </div>

                        <div className="grid gap-2 text-sm text-slate-400 sm:grid-cols-2 lg:min-w-[21rem] lg:grid-cols-1">
                          <p className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/45 px-4 py-3">
                            <CalendarDays
                              aria-hidden="true"
                              size={17}
                              className="shrink-0 text-blue-400"
                            />

                            {duration}
                          </p>

                          {experience.location ? (
                            <p className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/45 px-4 py-3">
                              <MapPin
                                aria-hidden="true"
                                size={17}
                                className="shrink-0 text-cyan-400"
                              />

                              {experience.location}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </header>

                    <div className="grid items-start gap-8 p-6 sm:p-7 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="space-y-7">
                        <section>
                          <div className="flex items-center gap-3">
                            <IconContainer
                              variant="primary"
                              size="medium"
                              label="Experience overview"
                            >
                              <BriefcaseBusiness
                                aria-hidden="true"
                                size={19}
                              />
                            </IconContainer>

                            <h3 className="text-xl font-semibold text-white">
                              Overview
                            </h3>
                          </div>

                          <p className="mt-4 leading-7 text-slate-400">
                            {experience.summary}
                          </p>
                        </section>

                        {experience.achievements &&
                        experience.achievements.length > 0 ? (
                          <section>
                            <div className="flex items-center gap-3">
                              <IconContainer
                                variant="success"
                                size="medium"
                                label="Achievements and impact"
                              >
                                <Award
                                  aria-hidden="true"
                                  size={19}
                                />
                              </IconContainer>

                              <h3 className="text-xl font-semibold text-white">
                                Achievements and impact
                              </h3>
                            </div>

                            <div className="mt-4 grid gap-3">
                              {experience.achievements.map(
                                (achievement) => (
                                  <article
                                    key={
                                      achievement.id ??
                                      achievement.title
                                    }
                                    className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4"
                                  >
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                      <p className="font-medium text-emerald-100">
                                        {achievement.title}
                                      </p>

                                      {achievement.metric ? (
                                        <Badge variant="success">
                                          {achievement.metric}
                                        </Badge>
                                      ) : null}
                                    </div>

                                    {achievement.description ? (
                                      <p className="mt-2 text-sm leading-6 text-emerald-100/60">
                                        {achievement.description}
                                      </p>
                                    ) : null}
                                  </article>
                                ),
                              )}
                            </div>
                          </section>
                        ) : null}

                        {technologies.length > 0 ? (
                          <section>
                            <div className="flex items-center gap-3">
                              <IconContainer
                                variant="primary"
                                size="medium"
                                label="Technologies used"
                              >
                                <Code2
                                  aria-hidden="true"
                                  size={19}
                                />
                              </IconContainer>

                              <h3 className="text-lg font-semibold text-white">
                                Technologies used
                              </h3>
                            </div>

                            <ul className="mt-4 flex flex-wrap gap-2">
                              {technologies.map(
                                (technology) => (
                                  <li key={technology.id}>
                                    <Badge variant="outline">
                                      {technology.name}
                                    </Badge>
                                  </li>
                                ),
                              )}
                            </ul>
                          </section>
                        ) : null}

                        {experience.teamSize ? (
                          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4">
                            <Users
                              aria-hidden="true"
                              size={19}
                              className="text-violet-400"
                            />

                            <div>
                              <p className="text-sm font-semibold text-white">
                                Team collaboration
                              </p>

                              <p className="mt-1 text-sm text-slate-500">
                                Worked in a team of{" "}
                                {experience.teamSize}
                              </p>
                            </div>
                          </div>
                        ) : null}

                        <div className="flex flex-wrap gap-4">
                          {experience.organizationWebsite ? (
                            <a
                              href={
                                experience.organizationWebsite
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                            >
                              Organization

                              <ExternalLink
                                aria-hidden="true"
                                size={15}
                              />
                            </a>
                          ) : null}

                          {experience.projectURL ? (
                            <a
                              href={experience.projectURL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                            >
                              View project

                              <ExternalLink
                                aria-hidden="true"
                                size={15}
                              />
                            </a>
                          ) : null}

                          {experience.certificateURL ? (
                            <a
                              href={
                                experience.certificateURL
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                            >
                              Certificate

                              <ExternalLink
                                aria-hidden="true"
                                size={15}
                              />
                            </a>
                          ) : null}
                        </div>
                      </div>

                      <div className="space-y-7">
                        {experience.responsibilities &&
                        experience.responsibilities.length > 0 ? (
                          <section>
                            <div className="flex items-center gap-3">
                              <IconContainer
                                variant="primary"
                                size="medium"
                                label="Key responsibilities"
                              >
                                <CheckCircle2
                                  aria-hidden="true"
                                  size={19}
                                />
                              </IconContainer>

                              <h3 className="text-xl font-semibold text-white">
                                Key responsibilities
                              </h3>
                            </div>

                            <div className="mt-4 grid gap-3">
                              {experience.responsibilities.map(
                                (responsibility) => (
                                  <article
                                    key={
                                      responsibility.id ??
                                      responsibility.title
                                    }
                                    className="rounded-xl border border-slate-800 bg-slate-950/40 p-4"
                                  >
                                    <p className="font-medium text-slate-200">
                                      {responsibility.title}
                                    </p>

                                    {responsibility.description ? (
                                      <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {
                                          responsibility.description
                                        }
                                      </p>
                                    ) : null}
                                  </article>
                                ),
                              )}
                            </div>
                          </section>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card
            variant="glass"
            className="mx-auto max-w-3xl"
          >
            <div className="text-center">
              <BriefcaseBusiness
                aria-hidden="true"
                size={34}
                className="mx-auto text-cyan-400"
              />

              <h2 className="mt-5 text-2xl font-semibold text-white">
                Experience records are being prepared
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Published internships, project experience, training,
                and professional responsibilities will appear here
                after they are added through Payload CMS.
              </p>
            </div>
          </Card>
        )}
      </section>
    </main>
  );
}