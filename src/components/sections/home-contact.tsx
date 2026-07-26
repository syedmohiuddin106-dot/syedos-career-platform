import type { ReactNode } from "react";

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
import { getHomeHeroData } from "@/lib/cms/get-home-hero-data";

type IconVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type ContactOption = {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: ReactNode;
  variant: IconVariant;
  external: boolean;
};

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

function getSocialURL(
  links:
    | {
        platform?: string | null;
        url?: string | null;
      }[]
    | null
    | undefined,
  platform: string,
): string | null {
  return (
    links?.find((link) => link.platform === platform)?.url ??
    null
  );
}

function getUsernameFromURL(
  url: string,
  fallback: string,
): string {
  try {
    const parsedURL = new URL(url);

    const username = parsedURL.pathname
      .split("/")
      .filter(Boolean)
      .at(-1);

    return username ?? fallback;
  } catch {
    return fallback;
  }
}

function formatAvailability(
  value: string | null | undefined,
): string {
  if (!value) {
    return "Open to Internships";
  }

  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (character) =>
      character.toUpperCase(),
    );
}

export async function HomeContact() {
  const { profile, siteSettings } =
    await getHomeHeroData();

  const profileSocialLinks = profile?.socialLinks ?? [];
  const globalSocialLinks = siteSettings?.socialLinks ?? [];

  const contactEmail =
  siteSettings?.contactEmail ??
  "syedmohiuddin106@gmail.com";

  const linkedInURL =
    getSocialURL(profileSocialLinks, "linkedin") ??
    getSocialURL(globalSocialLinks, "linkedin") ??
    "https://www.linkedin.com/in/syedmohiuddin106";

  const githubURL =
    getSocialURL(profileSocialLinks, "github") ??
    getSocialURL(globalSocialLinks, "github") ??
    "https://github.com/syedmohiuddin106-dot";

  const linkedInUsername = getUsernameFromURL(
    linkedInURL,
    "syedmohiuddin106",
  );

  const githubUsername = getUsernameFromURL(
    githubURL,
    "syedmohiuddin106-dot",
  );

  const resumeURL =
    getMediaURL(profile?.resume) ??
    "/resume/syed-mohiuddin-resume.pdf";

  const resumeLabel =
    profile?.resumeLabel ??
    siteSettings?.resumeButtonLabel ??
    "Download Resume";

  const showResume =
    siteSettings?.enableResumeDownload !== false &&
    Boolean(resumeURL);

  const contactHeading =
    siteSettings?.contactHeading ??
    "Let’s connect and build meaningful software";

  const contactDescription =
    siteSettings?.contactDescription ??
    "I am open to internships, software-development opportunities, technical collaborations, and projects where I can contribute while continuing to grow as a software engineer.";

  const responseTime =
    siteSettings?.responseTime ??
    "Usually responds within 24–48 hours";

  const opportunityTypes =
    siteSettings?.acceptedInquiryTypes &&
    siteSettings.acceptedInquiryTypes.length > 0
      ? siteSettings.acceptedInquiryTypes.map(
          (item) => item.label,
        )
      : [
          "Software Engineering Internships",
          "Full-Stack Developer Roles",
          "Remote or Part-Time Opportunities",
          "Technical Collaborations",
          "Project Discussions",
        ];

  const location =
    profile?.location ??
    "Hanamkonda, Telangana, India";

  const preferredLocations =
    profile?.preferredLocations
      ?.map((item) => item.location)
      .filter(Boolean) ?? [];

  const locationDescription =
    preferredLocations.length > 0
      ? `Preferred opportunities: ${preferredLocations.join(
          ", ",
        )}.`
      : "Available for suitable onsite, hybrid, and remote opportunities.";

  const availability =
    formatAvailability(profile?.availabilityStatus);

  const availabilityDescription =
    profile?.contactPreferences?.[0]?.preference ??
    "Open to internships, remote or part-time roles, project collaborations, and professional networking.";

  const profileTitle =
    profile?.professionalTitle ??
    "Software Developer and Full-Stack Web Developer";

  const contactOptions: ContactOption[] = [
    {
      title: "Email",
      value: contactEmail,
      description:
        "Best for internships, technical opportunities, project discussions, and detailed professional communication.",
      href: `mailto:${contactEmail}`,
      icon: <Mail aria-hidden="true" size={21} />,
      variant: "primary",
      external: false,
    },
    {
      title: "LinkedIn",
      value: linkedInUsername,
      description:
        "View my professional profile, project updates, technical learning, and career development.",
      href: linkedInURL,
      icon: <LinkIcon aria-hidden="true" size={21} />,
      variant: "info",
      external: true,
    },
    {
      title: "GitHub",
      value: githubUsername,
      description:
        "Explore repositories, source code, project development, documentation, and technical contributions.",
      href: githubURL,
      icon: <GitBranch aria-hidden="true" size={21} />,
      variant: "success",
      external: true,
    },
  ];

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
          title={contactHeading}
          description={contactDescription}
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

                {option.external ? (
                  <ExternalLink
                    aria-hidden="true"
                    size={17}
                    className="text-slate-600"
                  />
                ) : null}
              </div>

              <h3 className="mt-4 text-lg leading-tight sm:mt-5 sm:text-xl">
                {option.title}
              </h3>

              <p className="mt-2 break-all text-sm font-medium text-slate-300">
                {option.value}
              </p>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500 sm:leading-7">
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
                      <ExternalLink
                        aria-hidden="true"
                        size={14}
                      />
                    ) : (
                      <ArrowRight
                        aria-hidden="true"
                        size={15}
                      />
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

        <div className="mt-10 grid items-stretch gap-5 sm:mt-12 xl:grid-cols-[1.08fr_0.92fr]">
          <Card
            variant="glass"
            className="h-full overflow-hidden"
          >
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <IconContainer
                    variant="primary"
                    label="Professional opportunities"
                  >
                    <BriefcaseBusiness
                      aria-hidden="true"
                      size={20}
                    />
                  </IconContainer>

                  <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    Professional Opportunities
                  </p>
                </div>

                <h3 className="mt-4 text-2xl leading-tight sm:mt-5 sm:text-3xl">
                  Open to opportunities where I can learn,
                  contribute, and grow
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  I am seeking opportunities where I can apply
                  full-stack development, database, cloud, and
                  software-engineering skills while learning from
                  experienced professionals and contributing to real
                  products.
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
                label={availability}
              >
                <Sparkles
                  aria-hidden="true"
                  size={24}
                />
              </IconContainer>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Professional Focus
                </p>

                <p className="mt-2 font-semibold text-white">
                  {profileTitle}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Response Time
                </p>

                <p className="mt-2 font-semibold text-white">
                  {responseTime}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Work Preference
                </p>

                <p className="mt-2 font-semibold text-white">
                  Remote, Part-Time or Suitable Onsite
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton
                href={`mailto:${contactEmail}`}
                leftIcon={
                  <Send
                    aria-hidden="true"
                    size={18}
                  />
                }
              >
                Send an Email
              </LinkButton>

              {siteSettings?.enableContactForm !== false ? (
                <LinkButton
                  href="/contact"
                  variant="secondary"
                  leftIcon={
                    <MessageSquareText
                      aria-hidden="true"
                      size={18}
                    />
                  }
                  rightIcon={
                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                    />
                  }
                >
                  Contact Page
                </LinkButton>
              ) : null}

              {showResume ? (
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
                  ariaLabel="Open Syed Mohiuddin's resume"
                >
                  {resumeLabel}
                </LinkButton>
              ) : null}
            </div>
          </Card>

          <div className="flex h-full flex-col gap-5">
            <Card
              variant="editorial"
              className="flex-1"
            >
              <div className="flex items-center gap-3">
                <IconContainer
                  variant="success"
                  label="Availability"
                >
                  <BriefcaseBusiness
                    aria-hidden="true"
                    size={20}
                  />
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

              <div className="mt-6 rounded-2xl border border-green-500/25 bg-green-500/10 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="relative mt-1 flex h-3 w-3 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>

                  <div>
                    <p className="font-semibold text-green-200">
                      {availability}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-green-100/65">
                      {availabilityDescription}
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
                    {location}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {locationDescription}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
                <p className="text-sm font-semibold text-blue-100">
                  Suitable Opportunities
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-100/70">
                  Full-stack development, software engineering,
                  backend development, cloud-oriented projects,
                  internships, and graduate-level opportunities.
                </p>
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
                interview requests, internship information, project
                discussions, and professional collaboration proposals.
              </p>

              <div className="mt-6">
                <LinkButton
                  href={`mailto:${contactEmail}`}
                  variant="secondary"
                  leftIcon={
                    <Mail
                      aria-hidden="true"
                      size={17}
                    />
                  }
                >
                  {contactEmail}
                </LinkButton>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-blue-500/25 bg-gradient-to-br from-blue-500/15 via-slate-950/70 to-cyan-500/10 p-5 backdrop-blur-xl sm:mt-12 sm:rounded-[2rem] sm:p-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <Badge
                variant="success"
                dot
              >
                {profile?.heroBadge ??
                  "Available for opportunities"}
              </Badge>

              <h2 className="mt-4 text-2xl leading-tight sm:mt-5 sm:text-4xl">
                Looking for a motivated full-stack developer with
                practical project experience?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Explore my project case studies, review my technical
                skills, download my resume, or contact me directly to
                discuss an internship, development role, or
                collaboration.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <LinkButton
                href={`mailto:${contactEmail}`}
                leftIcon={
                  <Mail
                    aria-hidden="true"
                    size={18}
                  />
                }
              >
                Contact Me
              </LinkButton>

              <LinkButton
                href="/projects"
                variant="secondary"
                rightIcon={
                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                  />
                }
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