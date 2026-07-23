import type { Metadata } from "next";

import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  ExternalLink,
  GitBranch,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Syed Mohiuddin for internships, fresher software roles, technical collaborations, full-stack development opportunities, and project discussions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Syed Mohiuddin",
    description:
      "Connect with Syed Mohiuddin for software engineering opportunities, internships, collaborations, and project discussions.",
    url: "/contact",
    type: "website",
  },
};

const contactMethods = [
  {
    title: "Email",
    value: "syedmohiuddin106@gmail.com",
    description:
      "Best for internship details, fresher roles, interview requests, project discussions, and professional communication.",
    href: "mailto:syedmohiuddin106@gmail.com",
    icon: <Mail size={22} />,
    variant: "primary" as const,
    external: false,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/syedmohiuddin106",
    description:
      "View my professional profile, project updates, learning progress, and career activity.",
    href: "https://www.linkedin.com/in/syedmohiuddin106",
    icon: <LinkIcon size={22} />,
    variant: "info" as const,
    external: true,
  },
  {
    title: "GitHub",
    value: "github.com/syedmohiuddin106-dot",
    description:
      "Explore repositories, project source code, development history, and future technical work.",
    href: "https://github.com/syedmohiuddin106-dot",
    icon: <GitBranch size={22} />,
    variant: "success" as const,
    external: true,
  },
];

const opportunityTypes = [
  {
    title: "Software Engineering Internships",
    description:
      "Remote, hybrid, or onsite internships that fit my academic schedule and help me gain real development experience.",
  },
  {
    title: "Full-Stack Development Roles",
    description:
      "Opportunities involving frontend, backend, database, authentication, APIs, and complete application workflows.",
  },
  {
    title: "AI-Integrated Projects",
    description:
      "Projects involving AI assistants, automation, Gemini integration, intelligent workflows, and user-focused applications.",
  },
  {
    title: "Technical Collaborations",
    description:
      "Student projects, open-source work, hackathons, portfolio collaborations, and practical software-development initiatives.",
  },
];

const responseExpectations = [
  {
    title: "Professional inquiries",
    description:
      "Include the role, company, project, expected responsibilities, location or work mode, and preferred communication method.",
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    title: "Project discussions",
    description:
      "Mention the project scope, current stage, required technologies, expected contribution, and proposed timeline.",
    icon: <MessageSquareText size={20} />,
  },
  {
    title: "Response timing",
    description:
      "I will review genuine professional messages and respond as soon as reasonably possible.",
    icon: <Clock3 size={20} />,
  },
];

export default function ContactPage() {
  return (
    <main className="min-w-0 overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-800/80" aria-label="Contact overview">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-10rem] top-8 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[40%] h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="syedos-container relative pb-14 pt-6 sm:py-14 lg:py-14 xl:pb-18 xl:pt-8">
          <div className="grid min-w-0 gap-9 xl:grid-cols-[1.08fr_0.92fr] xl:items-center xl:gap-12">
            <div className="min-w-0">
              <div className="space-y-4">
                <div className="grid grid-cols-[1.35fr_0.95fr_1fr] items-center gap-1.5 sm:flex sm:flex-wrap sm:gap-3">
                  <Badge
                    variant="success"
                    dot
                    className="w-full justify-center whitespace-nowrap px-2 py-1 text-[0.58rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Available for opportunities
                  </Badge>

                  <Badge
                    variant="primary"
                    className="w-full justify-center whitespace-nowrap px-2 py-1 text-[0.58rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Software Engineering
                  </Badge>

                  <Badge
                    variant="outline"
                    className="w-full justify-center whitespace-nowrap px-2 py-1 text-[0.58rem] tracking-tight sm:w-auto sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    Professional Contact
                  </Badge>
                </div>

                <p className="syedos-code-text text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm sm:tracking-[0.2em]">
                  Contact
                </p>
              </div>

              <h1
                id="contact-page-title"
                className="mt-3 max-w-4xl text-[2rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[430px]:text-[2.65rem] sm:text-5xl sm:leading-[1.07] lg:text-6xl"
              >
                Let&apos;s discuss software opportunities, projects, and
                technical collaborations.
              </h1>

              <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                I am open to suitable internships, fresher software roles,
                full-stack development opportunities, AI-integrated projects,
                and professional technical conversations.
              </p>

              <div className="mt-7 flex flex-col items-start gap-3 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-3">
                <span className="inline-flex items-center gap-2">
                  <MapPin
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-cyan-400"
                  />
                  Hanamkonda, Telangana, India
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-green-400"
                  />
                  Open to remote, hybrid, and suitable onsite roles
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <LinkButton
                  href="mailto:syedmohiuddin106@gmail.com"
                  leftIcon={<Send aria-hidden="true" size={18} />}
                  className="w-full justify-center sm:w-auto"
                >
                  Send an Email
                </LinkButton>

                <LinkButton
                  href="https://www.linkedin.com/in/syedmohiuddin106"
                  external
                  variant="secondary"
                  leftIcon={<LinkIcon aria-hidden="true" size={18} />}
                  rightIcon={<ExternalLink aria-hidden="true" size={14} />}
                  ariaLabel="Open Syed Mohiuddin's LinkedIn profile"
                  className="w-full justify-center sm:w-auto"
                >
                  Connect on LinkedIn
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
                      Contact Summary
                    </p>

                    <h2 className="mt-2 text-xl">
                      Best way to reach me
                    </h2>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label="Contact Syed Mohiuddin"
                  >
                    <Mail size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                  <p className="font-semibold text-white">
                    Email is preferred
                  </p>

                  <p className="mt-2 break-all text-sm text-cyan-300">
                    syedmohiuddin106@gmail.com
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Use email for detailed internship information,
                    interview requests, project proposals, recruiter
                    communication, and formal professional inquiries.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Current status
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Final-Year Student
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Career direction
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      Full-Stack Â· AI Â· Cloud
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-green-500/25 bg-green-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <span className="relative mt-1 flex h-3 w-3 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                    </span>

                    <div>
                      <p className="font-semibold text-green-200">
                        Open to suitable opportunities
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/65">
                        Internships and part-time remote opportunities
                        should remain compatible with my academic
                        attendance requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Contact methods">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Contact Methods"
            title="Choose the most suitable way to connect"
            description="Each contact method is intended for a different type of professional interaction."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                variant="elevated"
                interactive
                className="flex h-full flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconContainer
                    variant={method.variant}
                    size="large"
                    label={method.title}
                  >
                    {method.icon}
                  </IconContainer>

                  {method.external && (
                    <ExternalLink
                      aria-hidden="true"
                      size={17}
                      className="text-slate-600"
                    />
                  )}
                </div>

                <h2 className="mt-5 text-xl">
                  {method.title}
                </h2>

                <p className="mt-2 break-all text-sm font-medium text-slate-300">
                  {method.value}
                </p>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                  {method.description}
                </p>

                <div className="mt-6">
                  <LinkButton
                    href={method.href}
                    external={method.external}
                    variant="secondary"
                    size="small"
                    rightIcon={
                      method.external ? (
                        <ExternalLink size={14} />
                      ) : (
                        <ArrowRight size={15} />
                      )
                    }
                    ariaLabel={`Open ${method.title}`}
                  >
                    Open {method.title}
                  </LinkButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Professional opportunities">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Opportunity Interests"
            title="Professional opportunities I am open to discussing"
            description="My priority is gaining practical software-engineering experience while continuing to strengthen full-stack, AI, cloud, and professional skills."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {opportunityTypes.map((opportunity, index) => (
              <Card
                key={opportunity.title}
                variant="elevated"
                className="h-full"
              >
                <div className="flex items-start gap-4">
                  <IconContainer
                    variant={
                      index % 4 === 0
                        ? "primary"
                        : index % 4 === 1
                          ? "success"
                          : index % 4 === 2
                            ? "info"
                            : "warning"
                    }
                    size="large"
                    label={opportunity.title}
                  >
                    <BriefcaseBusiness size={21} />
                  </IconContainer>

                  <div>
                    <h2 className="text-xl">
                      {opportunity.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {opportunity.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80" aria-label="Response expectations">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Professional Communication"
            title="Information that helps me respond effectively"
            description="Clear professional messages make it easier to understand the opportunity, project, or collaboration."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {responseExpectations.map((item) => (
              <Card
                key={item.title}
                variant="glass"
                className="h-full"
              >
                <IconContainer
                  variant="info"
                  size="large"
                  label={item.title}
                >
                  {item.icon}
                </IconContainer>

                <h2 className="mt-5 text-xl">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8">
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Suggested Email Details
            </p>

            <h2 className="mt-3 text-2xl">
              Include these details in a professional message
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                "Your name and organisation",
                "Role or project title",
                "Opportunity description",
                "Location or work mode",
                "Expected responsibilities",
                "Required technologies",
                "Proposed timeline",
                "Preferred next step",
              ].map((detail) => (
                <div
                  key={detail}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    size={18}
                    className="mt-0.5 shrink-0 text-green-400"
                  />

                  <p className="text-sm leading-6 text-slate-400">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Contact call to action">
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <div className="rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <Badge variant="success" dot>
                  Available for professional conversations
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Have an internship, fresher role, or technical project
                  to discuss?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Send a clear professional email or connect with me on
                  LinkedIn. You can also review my projects and technical
                  skills before reaching out.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <LinkButton
                  href="mailto:syedmohiuddin106@gmail.com"
                  leftIcon={<Send size={18} />}
                >
                  Email Me
                </LinkButton>

                <LinkButton
                  href="/projects"
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  View Projects
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
