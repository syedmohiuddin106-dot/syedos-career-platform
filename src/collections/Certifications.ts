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

export const Certifications: CollectionConfig = {
  slug: "certifications",

  labels: {
    singular: "Certification",
    plural: "Certifications",
  },

  admin: {
    group: "Portfolio Content",
    useAsTitle: "title",
    defaultColumns: [
  "title",
  "issuer",
  "certificationType",
  "issueDate",
  "credentialStatus",
  "featured",
  "displayOrder",
  "updatedAt",
],
    description:
      "Manage professional certifications, course credentials, verification details, skills, and presentation settings displayed on SyedOS.",
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
          label: "Certification Information",

          fields: [
            {
              name: "title",
              label: "Certification Title",
              type: "text",
              required: true,
              maxLength: 180,

              admin: {
                description:
                  "Enter the official certification, professional credential, course, or programme title.",
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
                    const source =
                      typeof value === "string" && value.trim().length > 0
                        ? value
                        : siblingData?.title;

                    return formatSlug(source);
                  },
                ],
              },

              admin: {
                position: "sidebar",
                description:
                  "Automatically generated from the certification title.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "issuer",
                  label: "Issuing Organization",
                  type: "text",
                  required: true,
                  maxLength: 160,

                  admin: {
                    placeholder: "Meta, AWS, Google, Microsoft, Coursera",
                  },
                },

                {
                  name: "certificationType",
                  label: "Certification Type",
                  type: "select",
                  required: true,
                  defaultValue: "professional-certificate",

                  options: [
                    {
                      label: "Professional Certification",
                      value: "professional-certification",
                    },
                    {
                      label: "Professional Certificate",
                      value: "professional-certificate",
                    },
                    {
                      label: "Course Certificate",
                      value: "course-certificate",
                    },
                    {
                      label: "Specialization",
                      value: "specialization",
                    },
                    {
                      label: "Skill Badge",
                      value: "skill-badge",
                    },
                    {
                      label: "Workshop Certificate",
                      value: "workshop",
                    },
                    {
                      label: "Internship Certificate",
                      value: "internship",
                    },
                    {
                      label: "Participation Certificate",
                      value: "participation",
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
              name: "issuerWebsite",
              label: "Issuer Website",
              type: "text",

              admin: {
                placeholder: "https://www.example.com",
              },
            },

            {
              name: "description",
              label: "Certification Description",
              type: "textarea",
              required: true,
              maxLength: 700,

              admin: {
                description:
                  "Summarize the programme, skills covered, assessment, practical work, and professional relevance.",
              },
            },

            {
              name: "credentialID",
              label: "Credential ID",
              type: "text",
              maxLength: 120,

              admin: {
                description:
                  "Optional official credential or certificate identifier.",
              },
            },

            {
              name: "credentialURL",
              label: "Credential Verification URL",
              type: "text",

              admin: {
                placeholder: "https://www.example.com/verify/credential",
                description:
                  "Public verification URL supplied by the issuing organization.",
              },
            },
          ],
        },

        {
          label: "Dates and Status",

          fields: [
            {
              type: "row",

              fields: [
                {
                  name: "issueDate",
                  label: "Issue Date",
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
                  name: "expiryDate",
                  label: "Expiry Date",
                  type: "date",

                  admin: {
                    condition: (_, siblingData) =>
                      !siblingData?.doesNotExpire,
                    date: {
                      pickerAppearance: "dayOnly",
                      displayFormat: "dd MMM yyyy",
                    },
                  },
                },
              ],
            },

            {
              name: "doesNotExpire",
              label: "This Credential Does Not Expire",
              type: "checkbox",
              defaultValue: true,
            },

            {
  name: "credentialStatus",
  label: "Credential Status",
  type: "select",
              required: true,
              defaultValue: "completed",

              options: [
                {
                  label: "Completed",
                  value: "completed",
                },
                {
                  label: "In Progress",
                  value: "in-progress",
                },
                {
                  label: "Expired",
                  value: "expired",
                },
                {
                  label: "Planned",
                  value: "planned",
                },
              ],
            },

            {
              name: "completionProgress",
              label: "Completion Progress",
              type: "number",
              min: 0,
              max: 100,

              admin: {
                condition: (_, siblingData) =>
  siblingData?.credentialStatus === "in-progress",
                description:
                  "Enter the current progress percentage from 0 to 100.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "estimatedHours",
                  label: "Estimated Learning Hours",
                  type: "number",
                  min: 0,
                  max: 10000,
                },

                {
                  name: "score",
                  label: "Assessment Score",
                  type: "text",
                  maxLength: 60,

                  admin: {
                    placeholder: "92% or Pass",
                  },
                },
              ],
            },
          ],
        },

        {
          label: "Skills and Evidence",

          fields: [
            {
              name: "skillsCovered",
              label: "Skills Covered",
              type: "relationship",
              relationTo: "skills",
              hasMany: true,

              admin: {
                description:
                  "Connect the credential to relevant skills already stored in SyedOS.",
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
                  "Connect projects that demonstrate knowledge gained from this certification.",
              },
            },

            {
              name: "learningOutcomes",
              label: "Learning Outcomes",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Learning Outcome",
                plural: "Learning Outcomes",
              },

              fields: [
                {
                  name: "title",
                  label: "Outcome Title",
                  type: "text",
                  required: true,
                  maxLength: 160,
                },

                {
                  name: "description",
                  label: "Outcome Description",
                  type: "textarea",
                  maxLength: 320,
                },
              ],
            },

            {
              name: "assessmentDetails",
              label: "Assessment and Completion Details",
              type: "textarea",
              maxLength: 500,

              admin: {
                description:
                  "Describe quizzes, examinations, graded assignments, projects, or practical assessments.",
              },
            },

            {
              name: "instructors",
              label: "Instructors or Authors",
              type: "array",

              labels: {
                singular: "Instructor",
                plural: "Instructors",
              },

              fields: [
                {
                  name: "name",
                  label: "Instructor Name",
                  type: "text",
                  required: true,
                  maxLength: 120,
                },

                {
                  name: "role",
                  label: "Role or Organization",
                  type: "text",
                  maxLength: 140,
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
              label: "Featured Certification",
              type: "checkbox",
              defaultValue: false,

              admin: {
                position: "sidebar",
                description:
                  "Feature this credential prominently on the homepage or certifications page.",
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
              name: "certificateImagePath",
              label: "Certificate Image Path or URL",
              type: "text",

              admin: {
                placeholder: "/images/certifications/certificate.webp",
              },
            },

            {
              name: "certificateImageAlt",
              label: "Certificate Image Alternative Text",
              type: "text",
              maxLength: 180,

              admin: {
                description:
                  "Describe the certificate image for accessibility and search engines.",
              },
            },

            {
              name: "issuerLogoPath",
              label: "Issuer Logo Path or URL",
              type: "text",

              admin: {
                placeholder: "/images/certifications/issuer-logo.webp",
              },
            },

            {
              name: "issuerLogoAlt",
              label: "Issuer Logo Alternative Text",
              type: "text",
              maxLength: 180,
            },

            {
              name: "badgeLabel",
              label: "Optional Badge",
              type: "text",
              maxLength: 50,

              admin: {
                placeholder: "Professional Certificate",
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