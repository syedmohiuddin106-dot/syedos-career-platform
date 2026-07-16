export const audienceModeKeys = [
  "public",
  "recruiter",
  "developer",
  "internshipRecruiter",
  "universityReviewer",
  "researchReviewer",
  "client",
] as const;

export type AudienceModeKey =
  (typeof audienceModeKeys)[number];

export type AudienceMode = {
  key: AudienceModeKey;
  name: string;
  slug: string;
  description: string;
  heroMessage: string;
  sectionOrder: string[];
  visibleSections: string[];
  featuredProjectSlugs: string[];
  featuredSkillSlugs: string[];
  resumeSlug: string;
  primaryCallToAction: {
    label: string;
    href: string;
  };
  themePreset:
    | "executive"
    | "technology"
    | "academic"
    | "minimal"
    | "creative"
    | "aiFuturistic";
  active: boolean;
};

export const defaultAudienceModes: AudienceMode[] = [
  {
    key: "public",
    name: "Public",
    slug: "public",
    description:
      "A balanced professional portfolio for general visitors.",
    heroMessage:
      "Explore my projects, technical skills, education, and professional journey.",
    sectionOrder: [
      "hero",
      "about",
      "projects",
      "skills",
      "experience",
      "education",
      "resume",
      "contact",
    ],
    visibleSections: [
      "hero",
      "about",
      "projects",
      "skills",
      "experience",
      "education",
      "resume",
      "contact",
    ],
    featuredProjectSlugs: [
      "syedai-assistant",
      "campushire",
    ],
    featuredSkillSlugs: [
      "php",
      "mysql",
      "javascript",
      "python",
      "typescript",
      "nextjs",
    ],
    resumeSlug: "general-resume",
    primaryCallToAction: {
      label: "Explore My Work",
      href: "/projects",
    },
    themePreset: "technology",
    active: true,
  },
  {
    key: "recruiter",
    name: "Recruiter",
    slug: "recruiter",
    description:
      "A focused portfolio view for recruiters and hiring managers.",
    heroMessage:
      "Review my relevant skills, major projects, experience, availability, and resume.",
    sectionOrder: [
      "hero",
      "professionalSummary",
      "skills",
      "projects",
      "experience",
      "education",
      "resume",
      "contact",
    ],
    visibleSections: [
      "hero",
      "professionalSummary",
      "skills",
      "projects",
      "experience",
      "education",
      "resume",
      "contact",
    ],
    featuredProjectSlugs: [
      "syedai-assistant",
      "campushire",
    ],
    featuredSkillSlugs: [
      "typescript",
      "nextjs",
      "python",
      "php",
      "mysql",
      "git",
    ],
    resumeSlug: "software-developer-resume",
    primaryCallToAction: {
      label: "Download Resume",
      href: "/resume/software-developer",
    },
    themePreset: "executive",
    active: true,
  },
  {
    key: "developer",
    name: "Developer",
    slug: "developer",
    description:
      "A technical view focused on architecture, code, APIs, and engineering decisions.",
    heroMessage:
      "Explore project architecture, technical decisions, repositories, testing, and implementation details.",
    sectionOrder: [
      "hero",
      "projects",
      "architecture",
      "skills",
      "github",
      "technicalWriting",
      "contact",
    ],
    visibleSections: [
      "hero",
      "projects",
      "architecture",
      "skills",
      "github",
      "technicalWriting",
      "contact",
    ],
    featuredProjectSlugs: [
      "syedai-assistant",
      "campushire",
    ],
    featuredSkillSlugs: [
      "typescript",
      "nextjs",
      "python",
      "php",
      "postgresql",
      "docker",
      "git",
    ],
    resumeSlug: "full-stack-developer-resume",
    primaryCallToAction: {
      label: "View GitHub",
      href: "https://github.com/syedmohiuddin106-dot",
    },
    themePreset: "technology",
    active: true,
  },
  {
    key: "internshipRecruiter",
    name: "Internship Recruiter",
    slug: "internship-recruiter",
    description:
      "A student-focused view for internship evaluators.",
    heroMessage:
      "Review my academic projects, technical foundation, learning progress, and internship readiness.",
    sectionOrder: [
      "hero",
      "education",
      "projects",
      "skills",
      "internship",
      "achievements",
      "resume",
      "contact",
    ],
    visibleSections: [
      "hero",
      "education",
      "projects",
      "skills",
      "internship",
      "achievements",
      "resume",
      "contact",
    ],
    featuredProjectSlugs: [
      "syedai-assistant",
      "campushire",
    ],
    featuredSkillSlugs: [
      "php",
      "mysql",
      "javascript",
      "python",
      "html",
      "css",
    ],
    resumeSlug: "internship-resume",
    primaryCallToAction: {
      label: "View Internship Resume",
      href: "/resume/internship",
    },
    themePreset: "executive",
    active: true,
  },
  {
    key: "universityReviewer",
    name: "University Reviewer",
    slug: "university-reviewer",
    description:
      "An academic view for master’s admissions and university reviewers.",
    heroMessage:
      "Explore my academic background, technical projects, research interests, and graduate-study goals.",
    sectionOrder: [
      "hero",
      "education",
      "academicProjects",
      "research",
      "publications",
      "skills",
      "academicResume",
      "contact",
    ],
    visibleSections: [
      "hero",
      "education",
      "academicProjects",
      "research",
      "publications",
      "skills",
      "academicResume",
      "contact",
    ],
    featuredProjectSlugs: [
      "syedai-assistant",
      "campushire",
    ],
    featuredSkillSlugs: [
      "python",
      "artificial-intelligence",
      "software-engineering",
      "databases",
      "research",
    ],
    resumeSlug: "masters-application-cv",
    primaryCallToAction: {
      label: "View Academic CV",
      href: "/resume/masters",
    },
    themePreset: "academic",
    active: true,
  },
  {
    key: "researchReviewer",
    name: "Research Reviewer",
    slug: "research-reviewer",
    description:
      "A research-focused view for academic and technical reviewers.",
    heroMessage:
      "Review my research interests, technical experiments, academic projects, and publications.",
    sectionOrder: [
      "hero",
      "researchInterests",
      "researchProjects",
      "publications",
      "technicalSkills",
      "education",
      "academicResume",
      "contact",
    ],
    visibleSections: [
      "hero",
      "researchInterests",
      "researchProjects",
      "publications",
      "technicalSkills",
      "education",
      "academicResume",
      "contact",
    ],
    featuredProjectSlugs: [],
    featuredSkillSlugs: [
      "python",
      "artificial-intelligence",
      "data-analysis",
      "software-engineering",
    ],
    resumeSlug: "research-cv",
    primaryCallToAction: {
      label: "View Research Profile",
      href: "/research",
    },
    themePreset: "academic",
    active: false,
  },
  {
    key: "client",
    name: "Potential Client",
    slug: "client",
    description:
      "A results-focused view for future freelance and consulting clients.",
    heroMessage:
      "Explore the applications I build, the problems I solve, and the services I can provide.",
    sectionOrder: [
      "hero",
      "services",
      "featuredProjects",
      "process",
      "technologyStack",
      "testimonials",
      "contact",
    ],
    visibleSections: [
      "hero",
      "services",
      "featuredProjects",
      "process",
      "technologyStack",
      "testimonials",
      "contact",
    ],
    featuredProjectSlugs: [
      "syedai-assistant",
      "campushire",
    ],
    featuredSkillSlugs: [
      "full-stack-development",
      "php",
      "nextjs",
      "databases",
      "api-integration",
    ],
    resumeSlug: "general-resume",
    primaryCallToAction: {
      label: "Discuss a Project",
      href: "/contact?purpose=project-collaboration",
    },
    themePreset: "creative",
    active: false,
  },
];

export function getAudienceModeBySlug(
  slug: string,
  modes: AudienceMode[] = defaultAudienceModes,
): AudienceMode | undefined {
  return modes.find((mode) => mode.slug === slug);
}

export function getActiveAudienceModes(
  modes: AudienceMode[] = defaultAudienceModes,
): AudienceMode[] {
  return modes.filter((mode) => mode.active);
}