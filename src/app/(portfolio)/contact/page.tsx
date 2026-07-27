import type { Metadata } from "next";
import type { ReactNode } from "react";

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
import { getContactPageData } from "@/lib/cms/get-contact-page-data";

type UnknownRecord = Record<string, unknown>;

type VisualVariant =
  | "primary"
  | "info"
  | "success"
  | "warning";

type ContactMethod = {
  title: string;
  value: string;
  description: string;
  href: string;
  icon: ReactNode;
  variant: VisualVariant;
  external: boolean;
};

type OpportunityType = {
  title: string;
  description: string;
};

type ResponseExpectation = {
  title: string;
  description: string;
  icon: ReactNode;
};

const fallbackContactMethods: ContactMethod[] = [
  {
    title: "Email",
    value: "syedmohiuddin106@gmail.com",
    description:
      "Best for internship details, fresher roles, interview requests, project discussions, and professional communication.",
    href: "mailto:syedmohiuddin106@gmail.com",
    icon: <Mail size={22} />,
    variant: "primary",
    external: false,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/syedmohiuddin106",
    description:
      "View my professional profile, project updates, learning progress, and career activity.",
    href: "https://www.linkedin.com/in/syedmohiuddin106",
    icon: <LinkIcon size={22} />,
    variant: "info",
    external: true,
  },
  {
    title: "GitHub",
    value: "github.com/syedmohiuddin106-dot",
    description:
      "Explore repositories, project source code, development history, and future technical work.",
    href: "https://github.com/syedmohiuddin106-dot",
    icon: <GitBranch size={22} />,
    variant: "success",
    external: true,
  },
];

const fallbackOpportunityTypes: OpportunityType[] = [
  {
    title: "Software Engineering Internships",
    description:
      "Remote, hybrid, or suitable onsite internships that support practical development experience while remaining compatible with my academic schedule.",
  },
  {
    title: "Full-Stack Development Roles",
    description:
      "Opportunities involving frontend, backend, databases, authentication, APIs, security, and complete application workflows.",
  },
  {
    title: "AI-Integrated Projects",
    description:
      "Projects involving AI assistants, automation, intelligent workflows, structured prompting, and user-focused software products.",
  },
  {
    title: "Technical Collaborations",
    description:
      "Student projects, open-source work, hackathons, portfolio collaborations, and practical software-development initiatives.",
  },
];

const fallbackResponseExpectations: ResponseExpectation[] = [
  {
    title: "Professional Inquiries",
    description:
      "Include the role, company, expected responsibilities, location or work mode, and preferred communication method.",
    icon: <BriefcaseBusiness size={20} />,
  },
  {
    title: "Project Discussions",
    description:
      "Mention the project scope, current stage, required technologies, expected contribution, and proposed timeline.",
    icon: <MessageSquareText size={20} />,
  },
  {
    title: "Response Timing",
    description:
      "I review genuine professional messages carefully and respond as soon as reasonably possible.",
    icon: <Clock3 size={20} />,
  },
];

const suggestedEmailDetails = [
  "Your name and organisation",
  "Role or project title",
  "Opportunity description",
  "Location or work mode",
  "Expected responsibilities",
  "Required technologies",
  "Proposed timeline",
  "Preferred next step",
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

function formatWorkMode(value: string): string {
  const labels: Record<string, string> = {
    remote: "Remote",
    hybrid: "Hybrid",
    onsite: "On-site",
  };

  return labels[value] ?? value;
}

function formatPlatform(value: string): string {
  const labels: Record<string, string> = {
    linkedin: "LinkedIn",
    github: "GitHub",
    portfolio: "Portfolio",
    email: "Email",
    youtube: "YouTube",
    x: "X / Twitter",
    instagram: "Instagram",
    other: "Professional Link",
  };

  return labels[value] ?? "Professional Link";
}

function cleanURLForDisplay(value: string): string {
  return value
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
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

function getContactIcon(platform: string): ReactNode {
  if (platform === "github") {
    return <GitBranch size={22} />;
  }

  if (platform === "email") {
    return <Mail size={22} />;
  }

  return <LinkIcon size={22} />;
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
  const { profile } = await getContactPageData();

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
    `Contact ${fullName} for internships, fresher software roles, technical collaborations, full-stack development opportunities, and project discussions.`,
  );

  return {
    title: getString(seo, "title", `Contact ${fullName}`),
    description,
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      title: `Contact | ${fullName}`,
      description,
      url: "/contact",
      type: "website",
    },
  };
}

export default async function ContactPage() {
  const { profile, projects, skills } =
    await getContactPageData();

  const profileRecord = isRecord(profile) ? profile : null;

  const fullName = getString(
    profileRecord,
    "fullName",
    "Syed Mohiuddin",
  );

  const publicEmail = getString(
    profileRecord,
    "publicEmail",
    "syedmohiuddin106@gmail.com",
  );

  const location = getString(
    profileRecord,
    "location",
    "Hanamkonda, Telangana, India",
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
      "I am open to suitable internships, fresher software roles, full-stack development opportunities, AI-integrated projects, and professional technical conversations.",
    ),
    250,
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

  const careerObjective = compactText(
    getString(
      profileRecord,
      "careerObjective",
      "I am seeking practical software-engineering opportunities where I can contribute to real products, improve my technical skills, and gain professional development experience.",
    ),
    290,
  );

  const preferredWorkModes = getArray(
    profileRecord,
    "preferredWorkModes",
  )
    .filter(
      (item): item is string =>
        typeof item === "string",
    )
    .map(formatWorkMode);

  const workModeSummary =
    preferredWorkModes.length > 0
      ? preferredWorkModes.join(", ")
      : "Remote, hybrid, and suitable onsite";

  const preferredRoles = getArray(
    profileRecord,
    "preferredRoles",
  )
    .filter(isRecord)
    .map((item) => getString(item, "role"))
    .filter(Boolean);

  const careerDirection =
    preferredRoles[0] ?? shortTitle;

  const primaryCTAValue = getObjectValue(
    profileRecord,
    "primaryCallToAction",
  );

  const primaryCTA = isRecord(primaryCTAValue)
    ? primaryCTAValue
    : null;

  const secondaryCTAValue = getObjectValue(
    profileRecord,
    "secondaryCallToAction",
  );

  const secondaryCTA = isRecord(secondaryCTAValue)
    ? secondaryCTAValue
    : null;

  const primaryLabel = getString(
    primaryCTA,
    "label",
    "View Projects",
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

  const socialLinks = getArray(
    profileRecord,
    "socialLinks",
  )
    .filter(isRecord)
    .map((link, index): ContactMethod | null => {
      const platform = getString(
        link,
        "platform",
        "other",
      );

      const url = getString(link, "url");

      if (!url) {
        return null;
      }

      const label = getString(
        link,
        "label",
        formatPlatform(platform),
      );

      return {
        title: formatPlatform(platform),
        value:
          platform === "email"
            ? url.replace(/^mailto:/, "")
            : cleanURLForDisplay(url),
        description:
          platform === "linkedin"
            ? "View my professional profile, project updates, learning progress, and career activity."
            : platform === "github"
              ? "Explore repositories, project source code, development history, and future technical work."
              : `Open my ${label} profile for additional professional information and updates.`,
        href:
          platform === "email" && !url.startsWith("mailto:")
            ? `mailto:${url}`
            : url,
        icon: getContactIcon(platform),
        variant: getVariant(index + 1),
        external:
          platform !== "email" &&
          !url.startsWith("mailto:"),
      };
    })
    .filter(
      (method): method is ContactMethod =>
        method !== null,
    );

  const emailMethod: ContactMethod = {
    title: "Email",
    value: publicEmail,
    description:
      "Best for internship details, fresher roles, interview requests, project discussions, and formal professional communication.",
    href: `mailto:${publicEmail}`,
    icon: <Mail size={22} />,
    variant: "primary",
    external: false,
  };

  const contactMethods = fillItems(
    [
      emailMethod,
      ...socialLinks.filter(
        (method) =>
          method.title.toLowerCase() !== "email",
      ),
    ],
    fallbackContactMethods,
    3,
  );

  const linkedInMethod =
    contactMethods.find(
      (method) =>
        method.title.toLowerCase() === "linkedin",
    ) ?? fallbackContactMethods[1];

  const careerInterests = getArray(
    profileRecord,
    "careerInterests",
  )
    .filter(isRecord)
    .map((interest): OpportunityType => ({
      title: getString(
        interest,
        "title",
        "Professional Opportunity",
      ),
      description: compactText(
        getString(
          interest,
          "description",
          "A suitable opportunity aligned with software engineering, practical development, and continued professional growth.",
        ),
        220,
      ),
    }));

  const opportunityTypes = fillItems(
    careerInterests,
    fallbackOpportunityTypes,
    4,
  );

  const contactPreferences = getArray(
    profileRecord,
    "contactPreferences",
  )
    .filter(isRecord)
    .map((item, index): ResponseExpectation => ({
      title:
        index === 0
          ? "Professional Inquiries"
          : index === 1
            ? "Project Discussions"
            : "Communication Preference",
      description: getString(
        item,
        "preference",
        fallbackResponseExpectations[
          index % fallbackResponseExpectations.length
        ].description,
      ),
      icon:
        fallbackResponseExpectations[
          index % fallbackResponseExpectations.length
        ].icon,
    }));

  const responseExpectations = fillItems(
    contactPreferences,
    fallbackResponseExpectations,
    3,
  );

  const publishedProjectCount = projects.length;
  const publishedSkillCount = skills.length;

  const projectSummary =
    publishedProjectCount > 0
      ? `${publishedProjectCount} published project${
          publishedProjectCount === 1 ? "" : "s"
        }`
      : "Project portfolio available";

  const skillSummary =
    publishedSkillCount > 0
      ? `${publishedSkillCount} published skill${
          publishedSkillCount === 1 ? "" : "s"
        }`
      : "Full-Stack · AI · Cloud";

  return (
    <main className="min-w-0 overflow-hidden">
      <section
        className="relative overflow-hidden border-b border-slate-800/80"
        aria-labelledby="contact-page-title"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-44 -top-52 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute right-[-10rem] top-8 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute bottom-[-16rem] left-[40%] h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-3xl" />

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
                    Software Engineering
                  </Badge>

                  <Badge
                    variant="info"
                    className="px-4 py-2 text-sm sm:text-[0.95rem]"
                  >
                    Professional Contact
                  </Badge>
                </div>

                <p className="syedos-code-text text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Contact {fullName}
                </p>
              </div>

              <h1
                id="contact-page-title"
                className="mt-4 max-w-3xl text-[2.5rem] font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
              >
                Let&apos;s discuss software opportunities and
                technical projects.
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
                  <BriefcaseBusiness
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 text-green-400"
                  />

                  {workModeSummary} opportunities
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton
                  href={`mailto:${publicEmail}`}
                  leftIcon={
                    <Send
                      aria-hidden="true"
                      size={18}
                    />
                  }
                  className="w-full justify-center sm:w-auto"
                >
                  Send an Email
                </LinkButton>

                <LinkButton
                  href={linkedInMethod.href}
                  external={linkedInMethod.external}
                  variant="secondary"
                  leftIcon={
                    <LinkIcon
                      aria-hidden="true"
                      size={18}
                    />
                  }
                  rightIcon={
                    linkedInMethod.external ? (
                      <ExternalLink
                        aria-hidden="true"
                        size={14}
                      />
                    ) : undefined
                  }
                  ariaLabel={`Open ${fullName}'s LinkedIn profile`}
                  className="w-full justify-center sm:w-auto"
                >
                  Connect on LinkedIn
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
                      Contact Summary
                    </p>

                    <h2 className="mt-3 text-2xl leading-tight">
                      Best way to reach me
                    </h2>
                  </div>

                  <IconContainer
                    variant="primary"
                    size="large"
                    rounded="large"
                    label={`Contact ${fullName}`}
                  >
                    <Mail size={24} />
                  </IconContainer>
                </div>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4 sm:p-5">
                  <p className="font-semibold text-white">
                    Email is preferred
                  </p>

                  <p className="mt-2 break-all text-sm text-cyan-300">
                    {publicEmail}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Use email for detailed internship
                    information, interview requests, project
                    proposals, recruiter communication, and
                    formal professional inquiries.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Career direction
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {careerDirection}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {professionalTitle}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Portfolio evidence
                    </p>

                    <p className="mt-2 font-semibold text-white">
                      {projectSummary}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {skillSummary}
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
                        {availabilityLabel}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/65">
                        {careerObjective}
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
        aria-label="Contact methods"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Contact Methods"
            title="Choose the most suitable way to connect"
            description="Each contact method supports a different type of professional interaction."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Card
                key={`${method.title}-${index}`}
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

      <section
        className="border-b border-slate-800/80"
        aria-label="Professional opportunities"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Opportunity Interests"
            title="Professional opportunities I am open to discussing"
            description="My priority is gaining practical software-engineering experience while strengthening full-stack, AI, cloud, and professional skills."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {opportunityTypes.map(
              (opportunity, index) => (
                <Card
                  key={`${opportunity.title}-${index}`}
                  variant="elevated"
                  className="h-full"
                >
                  <div className="flex items-start gap-4">
                    <IconContainer
                      variant={getVariant(index)}
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
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="border-b border-slate-800/80"
        aria-label="Response expectations"
      >
        <div className="syedos-container py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="Professional Communication"
            title="Information that helps me respond effectively"
            description="Clear professional messages make it easier to understand the opportunity, project, or collaboration."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {responseExpectations.map(
              (item, index) => (
                <Card
                  key={`${item.title}-${index}`}
                  variant="glass"
                  className="h-full"
                >
                  <IconContainer
                    variant={getVariant(index)}
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
              ),
            )}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8">
            <p className="syedos-code-text text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Suggested Email Details
            </p>

            <h2 className="mt-3 text-2xl">
              Include these details in a professional message
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {suggestedEmailDetails.map((detail) => (
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
                  {availabilityLabel}
                </Badge>

                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Have an internship, fresher role, or
                  technical project to discuss?
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Send a clear professional email or connect
                  with me on LinkedIn. You can also review my
                  projects and technical skills before
                  reaching out.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <LinkButton
                  href={`mailto:${publicEmail}`}
                  leftIcon={<Send size={18} />}
                >
                  Email Me
                </LinkButton>

                <LinkButton
                  href={
                    primaryURL === "/contact"
                      ? "/projects"
                      : primaryURL
                  }
                  variant="secondary"
                  rightIcon={<ArrowRight size={17} />}
                >
                  {primaryURL === "/contact"
                    ? "View Projects"
                    : primaryLabel}
                </LinkButton>

                {secondaryURL !== "/contact" && (
                  <LinkButton
                    href={secondaryURL}
                    variant="secondary"
                    rightIcon={<ArrowRight size={17} />}
                  >
                    {secondaryLabel}
                  </LinkButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}