import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  GitBranch,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconContainer } from "@/components/ui/icon-container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";

const contactOptions = [
  {
    title: "Email",
    value: "syedmohiuddin106@gmail.com",
    description:
      "For internships, fresher opportunities, technical collaborations, and project discussions.",
    href: "mailto:syedmohiuddin106@gmail.com",
    icon: <Mail size={21} />,
    variant: "primary" as const,
    external: false,
  },
  {
    title: "LinkedIn",
    value: "syedmohiuddin106",
    description:
      "View my professional profile, project updates, technical learning, and career progress.",
    href: "https://www.linkedin.com/in/syedmohiuddin106",
    icon: <LinkIcon size={21} />,
    variant: "info" as const,
    external: true,
  },
  {
    title: "GitHub",
    value: "syedmohiuddin106-dot",
    description:
      "Explore repositories, development work, project source code, and future technical contributions.",
    href: "https://github.com/syedmohiuddin106-dot",
    icon: <GitBranch size={21} />,
    variant: "success" as const,
    external: true,
  },
];

const opportunityTypes = [
  "Software Engineering Internships",
  "Full-Stack Developer Roles",
  "Fresher Software Opportunities",
  "AI-Integrated Projects",
  "Technical Collaborations",
];

export function HomeContact() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-3xl" />

        <div className="absolute bottom-[-12rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.25)_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="syedos-container relative py-12 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrow="Contact and Opportunities"
          title="Let’s connect and build meaningful software"
          description="I am open to internships, fresher software roles, project collaborations, technical discussions, and opportunities where I can contribute while continuing to grow as a software engineer."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {contactOptions.map((option) => (
            <Card
              key={option.title}
              variant="elevated"
              interactive
              className="flex h-full flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <IconContainer
                  variant={option.variant}
                  size="large"
                  label={option.title}
                >
                  {option.icon}
                </IconContainer>

                {option.external && (
                  <ExternalLink
                    aria-hidden="true"
                    size={17}
                    className="text-slate-600"
                  />
                )}
              </div>

              <h3 className="mt-4 text-lg leading-tight sm:mt-5 sm:text-xl">
                {option.title}
              </h3>

              <p className="mt-2 break-all text-sm font-medium text-slate-300">
                {option.value}
              </p>

              <p className="mt-3 flex-1 text-sm leading-6 sm:leading-7 text-slate-500">
                {option.description}
              </p>

              <div className="mt-6">
                <LinkButton
                  href={option.href}
                  external={option.external}
                  variant="secondary"
                  size="small"
                  rightIcon={
                    option.external ? (
                      <ExternalLink size={14} />
                    ) : (
                      <ArrowRight size={15} />
                    )
                  }
                  ariaLabel={`Open ${option.title}`}
                >
                  Open {option.title}
                </LinkButton>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 xl:grid-cols-[1.08fr_0.92fr]">
          <Card
            variant="glass"
            className="overflow-hidden"
          >
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <IconContainer
                    variant="primary"
                    label="Professional opportunities"
                  >
                    <BriefcaseBusiness size={20} />
                  </IconContainer>

                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Professional Opportunities
                  </p>
                </div>

                <h3 className="mt-4 text-2xl leading-tight sm:mt-5 sm:text-3xl">
                  Open to opportunities where I can learn, contribute,
                  and grow
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  I am seeking environments where I can apply full-stack
                  development, database, AI integration, and software
                  engineering skills while learning from experienced
                  developers and contributing to real products.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {opportunityTypes.map((opportunity) => (
                    <Badge
                      key={opportunity}
                      variant="outline"
                    >
                      {opportunity}
                    </Badge>
                  ))}
                </div>
              </div>

              <IconContainer
                variant="info"
                size="large"
                rounded="large"
                label="Available for opportunities"
              >
                <Sparkles size={24} />
              </IconContainer>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton
                href="mailto:syedmohiuddin106@gmail.com"
                leftIcon={<Send size={18} />}
              >
                Send an Email
              </LinkButton>

              <LinkButton
                href="/contact"
                variant="secondary"
                leftIcon={<MessageSquareText size={18} />}
                rightIcon={<ArrowRight size={16} />}
              >
                Contact Page
              </LinkButton>

              <LinkButton
                href="/resume/syed-mohiuddin-resume.pdf"
                download
                variant="ghost"
                leftIcon={<Download size={18} />}
                ariaLabel="Download Syed Mohiuddin's resume"
              >
                Download Resume
              </LinkButton>
            </div>
          </Card>

          <div className="grid gap-5">
            <Card variant="editorial">
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="success"
                  label="Availability"
                >
                  <BriefcaseBusiness size={20} />
                </IconContainer>

                <div>
                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Availability
                  </p>

                  <h3 className="mt-1 text-lg leading-tight sm:text-xl">
                    Open for professional conversations
                  </h3>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-green-500/25 bg-green-500/10 p-4 sm:mt-6 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="relative mt-1 flex h-3 w-3 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>

                  <div>
                    <p className="font-semibold text-green-200">
                      Currently available
                    </p>

                    <p className="mt-2 text-sm leading-6 text-green-100/65">
                      Open to internships, fresher opportunities,
                      technical projects, and professional networking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                <MapPin
                  aria-hidden="true"
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-300"
                />

                <div>
                  <p className="font-medium text-white">
                    Hanamkonda, Telangana, India
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Available for suitable onsite, hybrid, and remote
                    opportunities.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Response
              </p>

              <h3 className="mt-3 text-lg leading-tight sm:text-xl">
                Best way to reach me
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Email is the best option for detailed opportunities,
                internship information, interview requests, project
                discussions, and collaboration proposals.
              </p>

              <div className="mt-6">
                <LinkButton
                  href="mailto:syedmohiuddin106@gmail.com"
                  variant="secondary"
                  leftIcon={<Mail size={17} />}
                >
                  syedmohiuddin106@gmail.com
                </LinkButton>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-10 rounded-3xl sm:mt-12 sm:rounded-[2rem] border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-5 backdrop-blur-xl sm:p-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <Badge
                variant="success"
                dot
              >
                Available for opportunities
              </Badge>

              <h2 className="mt-4 text-2xl leading-tight sm:mt-5 sm:text-4xl">
                Looking for a motivated developer with practical
                full-stack and AI project experience?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Explore my project case studies, review my technical
                skills, download my resume, or contact me directly to
                discuss an opportunity.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <LinkButton
                href="mailto:syedmohiuddin106@gmail.com"
                leftIcon={<Mail size={18} />}
              >
                Contact Me
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
  );
}