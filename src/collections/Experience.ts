import type { CollectionConfig } from "payload";

const formatSlug = (value: unknown): string => {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const Experience: CollectionConfig = {
  slug: "experience",

  labels: {
    singular: "Experience Record",
    plural: "Experience",
  },

  admin: {
    group: "Portfolio Content",
    useAsTitle: "role",
    defaultColumns: [
      "role",
      "organization",
      "experienceType",
      "startDate",
      "currentlyWorking",
      "featured",
      "displayOrder",
      "updatedAt",
    ],
    description:
      "Manage internships, employment, freelance work, academic experience, leadership roles, and professional responsibilities displayed on SyedOS.",
  },

  access: {
    read: ({ req }) => {
      if (req.user) {
        return true;
      }

      return {
        _status: {
          equals: "published",
        },
      };
    },

    create: ({ req }) => Boolean(req.user),

    update: ({ req }) => Boolean(req.user),

    delete: ({ req }) => req.user?.role === "super-admin",

    readVersions: ({ req }) => Boolean(req.user),
  },

  defaultSort: "displayOrder",

  orderable: true,

  versions: {
    maxPerDoc: 20,

    drafts: {
      autosave: {
        interval: 1500,
        showSaveDraftButton: true,
      },
    },
  },

  fields: [
    {
      type: "tabs",

      tabs: [
        {
          label: "Experience Information",

          fields: [
            {
              name: "role",
              label: "Role or Position",
              type: "text",
              required: true,
              maxLength: 160,

              admin: {
                description:
                  "Enter the official role, internship title, job title, leadership position, or responsibility.",
                placeholder: "Full-Stack Web Development Intern",
              },
            },

            {
              name: "slug",
              label: "URL Slug",
              type: "text",
              required: true,
              unique: true,
              index: true,

              hooks: {
                beforeValidate: [
                  ({ value, siblingData }) => {
                    const role =
                      typeof siblingData?.role === "string"
                        ? siblingData.role
                        : "";

                    const organization =
                      typeof siblingData?.organization === "string"
                        ? siblingData.organization
                        : "";

                    const source =
                      typeof value === "string" && value.trim().length > 0
                        ? value
                        : `${role}-${organization}`;

                    return formatSlug(source);
                  },
                ],
              },

              admin: {
                position: "sidebar",
                description:
                  "Automatically generated from the role and organization.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "organization",
                  label: "Organization",
                  type: "text",
                  required: true,
                  maxLength: 180,

                  admin: {
                    placeholder:
                      "Kakatiya Institute of Technology and Science",
                  },
                },

                {
                  name: "experienceType",
                  label: "Experience Type",
                  type: "select",
                  required: true,
                  defaultValue: "internship",

                  options: [
                    {
                      label: "Internship",
                      value: "internship",
                    },
                    {
                      label: "Full-Time Employment",
                      value: "full-time",
                    },
                    {
                      label: "Part-Time Employment",
                      value: "part-time",
                    },
                    {
                      label: "Freelance",
                      value: "freelance",
                    },
                    {
                      label: "Contract",
                      value: "contract",
                    },
                    {
                      label: "Academic Project Experience",
                      value: "academic-project",
                    },
                    {
                      label: "Leadership",
                      value: "leadership",
                    },
                    {
                      label: "Volunteer Experience",
                      value: "volunteer",
                    },
                    {
                      label: "Training",
                      value: "training",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },
              ],
            },

            {
              type: "row",

              fields: [
                {
                  name: "location",
                  label: "Location",
                  type: "text",
                  maxLength: 140,

                  admin: {
                    placeholder: "Warangal, Telangana, India",
                  },
                },

                {
                  name: "workMode",
                  label: "Work Mode",
                  type: "select",
                  defaultValue: "onsite",

                  options: [
                    {
                      label: "On-site",
                      value: "onsite",
                    },
                    {
                      label: "Remote",
                      value: "remote",
                    },
                    {
                      label: "Hybrid",
                      value: "hybrid",
                    },
                  ],
                },
              ],
            },

            {
              name: "organizationWebsite",
              label: "Organization Website",
              type: "text",

              admin: {
                placeholder: "https://www.example.com",
              },
            },

            {
              name: "summary",
              label: "Experience Summary",
              type: "textarea",
              required: true,
              maxLength: 700,

              admin: {
                description:
                  "Summarize the role, major responsibilities, technologies used, and professional relevance.",
              },
            },
          ],
        },

        {
          label: "Duration",

          fields: [
            {
              type: "row",

              fields: [
                {
                  name: "startDate",
                  label: "Start Date",
                  type: "date",
                  required: true,

                  admin: {
                    date: {
                      pickerAppearance: "dayOnly",
                      displayFormat: "dd MMM yyyy",
                    },
                  },
                },

                {
                  name: "endDate",
                  label: "End Date",
                  type: "date",

                  admin: {
                    condition: (_, siblingData) =>
                      !siblingData?.currentlyWorking,

                    date: {
                      pickerAppearance: "dayOnly",
                      displayFormat: "dd MMM yyyy",
                    },
                  },
                },
              ],
            },

            {
              name: "currentlyWorking",
              label: "Currently Working in This Role",
              type: "checkbox",
              defaultValue: false,
            },

            {
              name: "durationLabel",
              label: "Optional Duration Label",
              type: "text",
              maxLength: 80,

              admin: {
                placeholder: "June 2026 – July 2026",
                description:
                  "Optional human-readable duration shown on the public portfolio.",
              },
            },
          ],
        },

        {
          label: "Responsibilities and Impact",

          fields: [
            {
              name: "responsibilities",
              label: "Key Responsibilities",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Responsibility",
                plural: "Responsibilities",
              },

              fields: [
                {
                  name: "title",
                  label: "Responsibility",
                  type: "text",
                  required: true,
                  maxLength: 180,
                },

                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                  maxLength: 320,
                },
              ],
            },

            {
              name: "achievements",
              label: "Achievements and Impact",
              type: "array",

              labels: {
                singular: "Achievement",
                plural: "Achievements",
              },

              fields: [
                {
                  name: "title",
                  label: "Achievement",
                  type: "text",
                  required: true,
                  maxLength: 180,
                },

                {
                  name: "description",
                  label: "Impact Description",
                  type: "textarea",
                  maxLength: 320,
                },

                {
                  name: "metric",
                  label: "Optional Metric",
                  type: "text",
                  maxLength: 100,

                  admin: {
                    placeholder: "Completed 3 modules",
                  },
                },
              ],
            },

            {
              name: "technologies",
              label: "Technologies Used",
              type: "relationship",
              relationTo: "skills",
              hasMany: true,

              admin: {
                description:
                  "Connect this experience to the relevant skills stored in SyedOS.",
              },
            },

            {
              name: "relatedProjects",
              label: "Related Projects",
              type: "relationship",
              relationTo: "projects",
              hasMany: true,

              admin: {
                description:
                  "Connect projects completed or developed during this experience.",
              },
            },

            {
              name: "teamSize",
              label: "Team Size",
              type: "number",
              min: 1,
              max: 10000,
            },

            {
              name: "supervisor",
              label: "Supervisor or Mentor",
              type: "group",

              fields: [
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  maxLength: 140,
                },

                {
                  name: "role",
                  label: "Role or Designation",
                  type: "text",
                  maxLength: 140,
                },

                {
                  name: "organization",
                  label: "Organization",
                  type: "text",
                  maxLength: 160,
                },
              ],
            },
          ],
        },

        {
          label: "Evidence and Links",

          fields: [
            {
              name: "certificateURL",
              label: "Experience Certificate URL",
              type: "text",

              admin: {
                description:
                  "Optional public certificate, internship letter, or verification link.",
              },
            },

            {
              name: "projectURL",
              label: "Project or Work URL",
              type: "text",

              admin: {
                placeholder: "https://github.com/username/project",
              },
            },

            {
              name: "organizationLogoPath",
              label: "Organization Logo Path or URL",
              type: "text",

              admin: {
                placeholder: "/images/experience/organization-logo.webp",
              },
            },

            {
              name: "organizationLogoAlt",
              label: "Organization Logo Alternative Text",
              type: "text",
              maxLength: 180,
            },

            {
              name: "supportingDocuments",
              label: "Supporting Documents",
              type: "array",

              labels: {
                singular: "Document",
                plural: "Documents",
              },

              fields: [
                {
                  name: "title",
                  label: "Document Title",
                  type: "text",
                  required: true,
                  maxLength: 160,
                },

                {
                  name: "url",
                  label: "Document URL",
                  type: "text",
                  required: true,
                },

                {
                  name: "documentType",
                  label: "Document Type",
                  type: "select",
                  defaultValue: "other",

                  options: [
                    {
                      label: "Certificate",
                      value: "certificate",
                    },
                    {
                      label: "Offer Letter",
                      value: "offer-letter",
                    },
                    {
                      label: "Completion Letter",
                      value: "completion-letter",
                    },
                    {
                      label: "Recommendation",
                      value: "recommendation",
                    },
                    {
                      label: "Project Report",
                      value: "project-report",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          label: "Presentation",

          fields: [
            {
              name: "featured",
              label: "Featured Experience",
              type: "checkbox",
              defaultValue: false,

              admin: {
                position: "sidebar",
                description:
                  "Feature this experience prominently on the homepage or experience page.",
              },
            },

            {
              name: "displayOrder",
              label: "Display Priority",
              type: "number",
              required: true,
              defaultValue: 100,
              min: 0,

              admin: {
                position: "sidebar",
                description:
                  "Lower values appear before higher values.",
              },
            },

            {
              name: "badgeLabel",
              label: "Optional Badge",
              type: "text",
              maxLength: 50,

              admin: {
                placeholder: "Internship",
              },
            },

            {
              name: "accentStyle",
              label: "Accent Style",
              type: "select",
              defaultValue: "blue",

              options: [
                {
                  label: "Blue",
                  value: "blue",
                },
                {
                  label: "Cyan",
                  value: "cyan",
                },
                {
                  label: "Teal",
                  value: "teal",
                },
                {
                  label: "Violet",
                  value: "violet",
                },
                {
                  label: "Amber",
                  value: "amber",
                },
                {
                  label: "Emerald",
                  value: "emerald",
                },
              ],
            },
          ],
        },

        {
          label: "SEO",

          fields: [
            {
              name: "seo",
              label: "Search Engine Information",
              type: "group",

              fields: [
                {
                  name: "title",
                  label: "SEO Title",
                  type: "text",
                  maxLength: 70,
                },

                {
                  name: "description",
                  label: "SEO Description",
                  type: "textarea",
                  maxLength: 170,
                },

                {
                  name: "keywords",
                  label: "SEO Keywords",
                  type: "array",

                  fields: [
                    {
                      name: "keyword",
                      label: "Keyword",
                      type: "text",
                      required: true,
                      maxLength: 60,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};