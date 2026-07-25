import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
  UserRound,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "CampusHire Project Case Study",
  description:
    "Explore the features, architecture, user roles, security, workflows, and development outcomes of CampusHire, a campus placement management system.",
  alternates: {
    canonical: "/projects/campushire",
  },
  openGraph: {
    title: "CampusHire Case Study | Syed Mohiuddin",
    description:
      "A detailed case study of CampusHire, a full-stack campus placement management system built with PHP and MySQL.",
    url: "/projects/campushire",
    type: "article",
  },
};

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "MySQL",
  "MySQLi",
  "XAMPP",
  "phpMyAdmin",
  "Sessions",
  "Prepared Statements",
];

const projectGoals = [
  {
    title: "Centralized placement system",
    description:
      "Bring students, recruiters, job opportunities, applications, interviews, notifications, and reports into one structured platform.",
    icon: <BriefcaseBusiness size={21} />,
    variant: "primary" as const,
  },
  {
    title: "Role-based workflows",
    description:
      "Provide dedicated experiences for students, recruiters, and administrators with protected permissions and responsibilities.",
    icon: <Users size={21} />,
    variant: "info" as const,
  },
  {
    title: "Secure data handling",
    description:
      "Use sessions, validation, prepared statements, password hashing, protected routes, and safe file handling.",
    icon: <ShieldCheck size={21} />,
    variant: "success" as const,
  },
  {
    title: "Practical placement process",
    description:
      "Model real recruitment workflows from recruiter approval and job posting to applications, status updates, and interview scheduling.",
    icon: <CheckCircle2 size={21} />,
    variant: "warning" as const,
  },
];

const userRoles = [
  {
    title: "Student",
    description:
      "Students can register, log in, manage profiles, add education and skills, upload resumes, browse jobs, save jobs, apply, and track application status.",
    icon: <GraduationCap size={22} />,
    variant: "primary" as const,
    features: [
      "Profile management",
      "Education and skills",
      "Resume upload",
      "Browse and save jobs",
      "Job applications",
      "Status tracking",
      "Notifications",
    ],
  },
  {
    title: "Recruiter",
    description:
      "Recruiters can register, create company profiles, post jobs, manage openings, review applicants, download resumes, update statuses, and schedule interviews.",
    icon: <Building2 size={22} />,
    variant: "info" as const,
    features: [
      "Recruiter registration",
      "Company profile",
      "Job posting",
      "Applicant review",
      "Resume download",
      "Status updates",
      "Interview scheduling",
    ],
  },
  {
    title: "Administrator",
    description:
      "Administrators control recruiter approval, users, companies, jobs, applications, notifications, contact messages, reports, and system activity.",
    icon: <UserCheck size={22} />,
    variant: "success" as const,
    features: [
      "Recruiter approvals",
      "User management",
      "Company management",
      "Job moderation",
      "Application oversight",
      "Reports",
      "Activity logs",
    ],
  },
];

const mainFeatures = [
  {
    title: "Authentication",
    description:
      "Secure registration and login with password hashing, session handling, role checks, and protected pages.",
    icon: <LockKeyhole size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Job management",
    description:
      "Recruiters can create, edit, publish, and manage job opportunities with structured requirements and status controls.",
    icon: <BriefcaseBusiness size={20} />,
    variant: "info" as const,
  },
  {
    title: "Application workflow",
    description:
      "Students can apply for jobs while recruiters and administrators review, update, and track application status.",
    icon: <FileText size={20} />,
    variant: "success" as const,
  },
  {
    title: "Resume handling",
    description:
      "Students can upload resumes securely and recruiters can access applicant resumes through controlled workflows.",
    icon: <UserRound size={20} />,
    variant: "warning" as const,
  },
  {
    title: "Notifications",
    description:
      "Users receive updates for recruiter approvals, job activity, applications, interview schedules, and status changes.",
    icon: <Bell size={20} />,
    variant: "primary" as const,
  },
  {
    title: "Contact messages",
    description:
      "Public contact messages can be stored, reviewed, marked as read, and managed by administrators.",
    icon: <MessageSquareText size={20} />,
    variant: "info" as const,
  },
];

const architectureLayers = [
  {
    title: "Presentation Layer",
    description:
      "Responsive public, student, recruiter, and administrator pages built with HTML, CSS, and JavaScript.",
    icon: <Users size={22} />,
    variant: "primary" as const,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive layouts",
      "Role-specific pages",
    ],
  },
  {
    title: "Application Layer",
    description:
      "PHP modules handle authentication, jobs, applications, profiles, approvals, notifications, interviews, and reports.",
    icon: <BriefcaseBusiness size={22} />,
    variant: "info" as const,
    items: [
      "PHP",
      "Sessions",
      "Form processing",
      "Role checks",
      "Business workflows",
    ],
  },
  {
    title: "Data Layer",
    description:
      "MySQL stores users, recruiters, companies, jobs, applications, notifications, messages, interviews, and activity records.",
    icon: <Database size={22} />,
    variant: "success" as const,
    items: [
      "MySQL",
      "MySQLi",
      "Relational tables",
      "Prepared statements",
      "phpMyAdmin",
    ],
  },
  {
    title: "Security Layer",
    description:
      "Security controls protect credentials, routes, database access, forms, sessions, and uploaded files.",
    icon: <ShieldCheck size={22} />,
    variant: "warning" as const,
    items: [
      "Password hashing",
      "Prepared statements",
      "CSRF protection",
      "Validation",
      "Safe uploads",
    ],
  },
];

const securityControls = [
  {
    title: "Password protection",
    description:
      "Passwords are stored using secure hashing and verified during login.",
    icon: <LockKeyhole size={20} />,
  },
  {
    title: "Prepared statements",
    description:
      "Database queries use parameterized MySQLi statements to reduce SQL injection risk.",
    icon: <Database size={20} />,
  },
  {
    title: "Role-based access",
    description:
      "Student, recruiter, and administrator pages verify session state and user roles before allowing access.",
    icon: <UserCheck size={20} />,
  },
  {
    title: "Validated file uploads",
    description:
      "Resume and company-logo uploads are checked for size, type, file name safety, and controlled storage.",
    icon: <FileText size={20} />,
  },
];

const developmentProgress = [
  {
    label: "Authentication and Roles",
    value: 100,
    variant: "success" as const,
  },
  {
    label: "Student Module",
    value: 100,
    variant: "success" as const,
  },
  {
    label: "Recruiter Module",
    value: 100,
    variant: "success" as const,
  },
  {
    label: "Administrator Module",
    value: 100,
    variant: "success" as const,
  },
  {
    label: "Database and Security",
    value: 92,
    variant: "primary" as const,
  },
  {
    label: "Production Deployment",
    value: 40,
    variant: "warning" as const,
  },
];

const developmentChallenges = [
  {
    title: "Managing three user roles",
    description:
      "The application required clear permissions and separate workflows for students, recruiters, and administrators.",
  },
  {
    title: "Recruiter approval process",
    description:
      "Recruiters needed to remain pending until an administrator reviewed and approved their accounts.",
  },
  {
    title: "Application status tracking",
    description:
      "Students needed clear status updates while recruiters and administrators required controlled update actions.",
  },
  {
    title: "Safe resume handling",
    description:
      "Resume uploads required type validation, file-size checks, safe names, controlled storage, and secure download access.",
  },
];

const outcomes = [
  "Built a complete role-based PHP application",
  "Implemented student, recruiter, and admin workflows",
  "Created secure authentication and session handling",
  "Used prepared statements for database operations",
  "Designed relational MySQL tables",
  "Implemented resume and company-logo uploads",
  "Added job application and status workflows",
  "Created recruiter approval and interview scheduling",
  "Added notifications, contact messages, and reports",
  "Prepared the project for local deployment using XAMPP",
];

export default function CampusHireCaseStudyPage() {
  return (
    <main className="min-w-0 overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-green-600/15 blur-3xl" />

          <div className="absolute right-[-10rem] top-8 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[40%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative py-16 sm:py-20 lg:py-28">
          <LinkButton
            href="/projects"
            variant="ghost"
            size="small"
            leftIcon={<ArrowLeft size={17} />}
          >
            Back to Projects
          </LinkButton>

          <div className="mt-8 grid gap-12 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
            <div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success" dot>
                  Completed
                </Badge>

                <Badge variant="primary">
                  Full-Stack Project
                </Badge>

                <Badge variant="outline">
                  Placement Management
                </Badge>
              </div>

              <p className="syedos-code-text mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Campus Placement Management System
              </p>

              <h1 className="mt-4 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                CampusHire
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                A full-stack campus placement platform with dedicated
                student, recruiter, and administrator experiences for
                profiles, jobs, applications, approvals, interview
                scheduling, notifications, and reports.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <LinkButton
                  href="https://github.com/syedmohiuddin106-dot"
                  external
                  leftIcon={<GitBranch size={18} />}
                  rightIcon={<ExternalLink size={14} />}
                  ariaLabel="Open Syed Mohiuddin's GitHub profile"
                >
                  View GitHub
                </LinkButton>

                <LinkButton
                  href="/contact"
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  Discuss This Project
                </LinkButton>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                  >
                    {technology}
                  </Badge>
                ))}
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
                      Project Overview
                    </p>

                    <h2 className="mt-2 text-xl">
                      Placement workflow platform
                    </h2>
                  </div>

                  <IconContainer
                    variant="success"
                    size="large"
                    rounded="large"
                    label="CampusHire project"
                  >
                    <BriefcaseBusiness size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Project type
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    Placement System
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    User roles
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    3 Roles
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Backend
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    PHP and MySQLi
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Database
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    MySQL
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 p-6">
                <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      size={20}
                      className="mt-0.5 shrink-0 text-green-300"
                    />

                    <div>
                      <p className="font-semibold text-green-200">
                        Core development completed
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/65">
                        Student, recruiter, administrator, job,
                        application, notification, and reporting
                        workflows have been implemented.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Project Purpose"
            title="A centralized platform for campus recruitment"
            description="CampusHire was created to replace disconnected placement processes with one role-based application for students, recruiters, and administrators."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projectGoals.map((goal) => (
              <Card
                key={goal.title}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={goal.variant}
                  size="large"
                  label={goal.title}
                >
                  {goal.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {goal.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {goal.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="User Roles"
            title="Three connected role-based experiences"
            description="Each role receives only the tools and permissions required for its placement responsibilities."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {userRoles.map((role) => (
              <Card
                key={role.title}
                variant="glass"
                className="h-full"
              >
                <IconContainer
                  variant={role.variant}
                  size="large"
                  label={role.title}
                >
                  {role.icon}
                </IconContainer>

                <h2 className="mt-5 text-2xl">
                  {role.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {role.description}
                </p>

                <div className="mt-6 space-y-3">
                  {role.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        size={17}
                        className="mt-0.5 shrink-0 text-green-400"
                      />

                      <p className="text-sm leading-6 text-slate-400">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Main Features"
            title="Complete features for placement operations"
            description="The platform supports authentication, job posting, applications, resume handling, notifications, contact messages, and administrative controls."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mainFeatures.map((feature) => (
              <Card
                key={feature.title}
                variant="elevated"
                interactive
                className="h-full"
              >
                <IconContainer
                  variant={feature.variant}
                  size="large"
                  label={feature.title}
                >
                  {feature.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="System Architecture"
            title="A modular PHP and MySQL application architecture"
            description="The application separates interface, business logic, database access, and security responsibilities."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {architectureLayers.map((layer) => (
              <Card
                key={layer.title}
                variant="elevated"
                className="h-full"
              >
                <div className="flex items-start gap-4">
                  <IconContainer
                    variant={layer.variant}
                    size="large"
                    label={layer.title}
                  >
                    {layer.icon}
                  </IconContainer>

                  <div>
                    <h2 className="text-xl">
                      {layer.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {layer.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Security"
            title="Security controls applied across the platform"
            description="CampusHire protects accounts, routes, database queries, forms, and uploaded files through multiple safeguards."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {securityControls.map((control) => (
              <Card
                key={control.title}
                variant="elevated"
                className="h-full"
              >
                <IconContainer
                  variant="success"
                  size="large"
                  label={control.title}
                >
                  {control.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {control.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {control.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <Card variant="glass">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Development Progress
              </p>

              <h2 className="mt-3 text-2xl">
                Current implementation status
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                The core application is complete, with future work
                focused mainly on production deployment and further
                refinement.
              </p>

              <div className="mt-8 space-y-6">
                {developmentProgress.map((progress) => (
                  <Progress
                    key={progress.label}
                    label={progress.label}
                    value={progress.value}
                    variant={progress.variant}
                  />
                ))}
              </div>
            </Card>

            <Card variant="editorial">
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Development Challenges
              </p>

              <h2 className="mt-3 text-2xl">
                Important problems solved
              </h2>

              <div className="mt-7 space-y-4">
                {developmentChallenges.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
                  >
                    <h3 className="font-semibold text-white">
                      {challenge.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Project Outcomes"
            title="Technical experience gained through CampusHire"
            description="The project strengthened my knowledge of full-stack development, authentication, databases, security, role-based architecture, and practical workflows."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/45 p-5"
              >
                <CheckCircle2
                  aria-hidden="true"
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <p className="text-sm leading-6 text-slate-400">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-green-500/25 bg-gradient-to-br from-green-500/15 via-slate-950/70 to-blue-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="success" dot>
                  Completed Full-Stack Project
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  CampusHire demonstrates complete placement workflows
                  across three user roles.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  The project demonstrates PHP development, MySQL
                  databases, secure authentication, role-based access,
                  file handling, notifications, reporting, and
                  real-world workflow design.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <LinkButton
                  href="/projects"
                  variant="secondary"
                  leftIcon={<ArrowLeft size={17} />}
                >
                  All Projects
                </LinkButton>

                <LinkButton
                  href="/contact"
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