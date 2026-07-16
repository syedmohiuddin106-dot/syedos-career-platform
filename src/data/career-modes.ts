export const careerModeKeys = [
  "student",
  "finalYearStudent",
  "graduate",
  "internshipSeeker",
  "jobSeeker",
  "softwareDeveloper",
  "softwareEngineer",
  "aiDeveloper",
  "workingProfessional",
  "mastersApplicant",
  "researcher",
  "freelancer",
  "founder",
] as const;

export type CareerModeKey = (typeof careerModeKeys)[number];

export type CareerMode = {
  key: CareerModeKey;
  name: string;
  slug: string;
  headline: string;
  summary: string;
  availabilityMessage: string;
  primaryCallToAction: {
    label: string;
    href: string;
  };
  secondaryCallToAction?: {
    label: string;
    href: string;
  };
  visibleSections: string[];
  featuredProjectSlugs: string[];
  featuredSkillSlugs: string[];
  resumeSlug: string;
  active: boolean;
};

export const defaultCareerModes: CareerMode[] = [
  {
    key: "student",
    name: "Student",
    slug: "student",
    headline: "B.Tech IT Student | Full-Stack and AI Developer",
    summary:
      "Information Technology student building full-stack, database-driven, and AI-integrated applications.",
    availabilityMessage:
      "Open to internships, collaborative projects, and learning opportunities.",
    primaryCallToAction: {
      label: "View Projects",
      href: "/projects",
    },
    secondaryCallToAction: {
      label: "Download Resume",
      href: "/resume",
    },
    visibleSections: [
      "hero",
      "about",
      "projects",
      "skills",
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
    ],
    resumeSlug: "general-resume",
    active: false,
  },
  {
    key: "finalYearStudent",
    name: "Final-Year Student",
    slug: "final-year-student",
    headline:
      "Final-Year B.Tech IT Student | Full-Stack and AI Project Developer",
    summary:
      "Final-year Information Technology student focused on building secure, scalable, and AI-integrated software applications for real-world use cases.",
    availabilityMessage:
      "Open to software-development internships, graduate roles, and international opportunities.",
    primaryCallToAction: {
      label: "Explore My Work",
      href: "/projects",
    },
    secondaryCallToAction: {
      label: "View Recruiter Profile",
      href: "/recruiter",
    },
    visibleSections: [
      "hero",
      "professionalSummary",
      "projects",
      "skills",
      "education",
      "experience",
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
      "nextjs",
      "typescript",
    ],
    resumeSlug: "software-developer-resume",
    active: true,
  },
  {
    key: "graduate",
    name: "Graduate",
    slug: "graduate",
    headline:
      "Information Technology Graduate | Full-Stack and AI Developer",
    summary:
      "Information Technology graduate with project experience in full-stack development, databases, APIs, and AI-integrated applications.",
    availabilityMessage:
      "Open to full-time software engineering and graduate development roles.",
    primaryCallToAction: {
      label: "View Technical Projects",
      href: "/projects",
    },
    secondaryCallToAction: {
      label: "Download Resume",
      href: "/resume/software-developer",
    },
    visibleSections: [
      "hero",
      "professionalSummary",
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
      "typescript",
      "nextjs",
      "python",
      "php",
      "postgresql",
      "docker",
    ],
    resumeSlug: "software-developer-resume",
    active: false,
  },
  {
    key: "softwareEngineer",
    name: "Software Engineer",
    slug: "software-engineer",
    headline:
      "Software Engineer | Full-Stack and AI Application Developer",
    summary:
      "Software engineer focused on building secure, maintainable, and scalable web and AI applications.",
    availabilityMessage:
      "Available for selected engineering, collaboration, and professional networking opportunities.",
    primaryCallToAction: {
      label: "View Engineering Work",
      href: "/projects",
    },
    secondaryCallToAction: {
      label: "Developer Profile",
      href: "/developer",
    },
    visibleSections: [
      "hero",
      "experience",
      "projects",
      "architecture",
      "skills",
      "github",
      "resume",
      "contact",
    ],
    featuredProjectSlugs: [],
    featuredSkillSlugs: [],
    resumeSlug: "software-engineer-resume",
    active: false,
  },
  {
    key: "mastersApplicant",
    name: "Master’s Applicant",
    slug: "masters-applicant",
    headline:
      "Master’s Applicant | Software Engineering and AI",
    summary:
      "Prospective graduate student interested in software engineering, artificial intelligence, intelligent systems, and applied research.",
    availabilityMessage:
      "Open to master’s programs, research collaborations, and academic opportunities.",
    primaryCallToAction: {
      label: "View Academic Profile",
      href: "/masters",
    },
    secondaryCallToAction: {
      label: "Download Academic CV",
      href: "/resume/masters",
    },
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
    featuredProjectSlugs: [],
    featuredSkillSlugs: [],
    resumeSlug: "masters-application-cv",
    active: false,
  },
];

export function getActiveCareerMode(
  modes: CareerMode[] = defaultCareerModes,
): CareerMode {
  const activeMode = modes.find((mode) => mode.active);

  if (!activeMode) {
    throw new Error(
      "No active career mode is configured.",
    );
  }

  return activeMode;
}

export function getCareerModeBySlug(
  slug: string,
  modes: CareerMode[] = defaultCareerModes,
): CareerMode | undefined {
  return modes.find((mode) => mode.slug === slug);
}