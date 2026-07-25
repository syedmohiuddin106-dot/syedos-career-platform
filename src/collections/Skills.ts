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

export const Skills: CollectionConfig = {
  slug: "skills",

  labels: {
    singular: "Skill",
    plural: "Skills",
  },

  admin: {
    group: "Portfolio Content",
    useAsTitle: "name",
    defaultColumns: [
      "name",
      "category",
      "proficiency",
      "featured",
      "displayOrder",
      "updatedAt",
    ],
    description:
      "Manage the technical skills displayed throughout the SyedOS professional portfolio.",
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
          label: "Skill Information",

          fields: [
            {
              name: "name",
              label: "Skill Name",
              type: "text",
              required: true,
              maxLength: 80,

              admin: {
                description:
                  "The professional technology or skill name displayed across the portfolio.",
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
                      typeof value === "string" &&
                      value.trim().length > 0
                        ? value
                        : siblingData?.name;

                    return formatSlug(source);
                  },
                ],
              },

              admin: {
                position: "sidebar",
                description:
                  "Automatically generated from the skill name. Example: next-js",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "category",
                  label: "Skill Category",
                  type: "select",
                  required: true,
                  defaultValue: "frontend",

                  options: [
                    {
                      label: "Programming Language",
                      value: "programming-language",
                    },
                    {
                      label: "Frontend Development",
                      value: "frontend",
                    },
                    {
                      label: "Backend Development",
                      value: "backend",
                    },
                    {
                      label: "Database",
                      value: "database",
                    },
                    {
                      label: "Artificial Intelligence",
                      value: "ai",
                    },
                    {
                      label: "Cloud Computing",
                      value: "cloud",
                    },
                    {
                      label: "DevOps",
                      value: "devops",
                    },
                    {
                      label: "Testing",
                      value: "testing",
                    },
                    {
                      label: "Cybersecurity",
                      value: "cybersecurity",
                    },
                    {
                      label: "Development Tool",
                      value: "tool",
                    },
                    {
                      label: "Soft Skill",
                      value: "soft-skill",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },

                {
                  name: "proficiency",
                  label: "Proficiency Level",
                  type: "select",
                  required: true,
                  defaultValue: "intermediate",

                  options: [
                    {
                      label: "Beginner",
                      value: "beginner",
                    },
                    {
                      label: "Intermediate",
                      value: "intermediate",
                    },
                    {
                      label: "Advanced",
                      value: "advanced",
                    },
                    {
                      label: "Professional",
                      value: "professional",
                    },
                  ],
                },
              ],
            },

            {
              type: "row",

              fields: [
                {
                  name: "proficiencyPercentage",
                  label: "Proficiency Percentage",
                  type: "number",
                  required: true,
                  defaultValue: 70,
                  min: 0,
                  max: 100,

                  admin: {
                    description:
                      "Used for skill indicators. Enter a value from 0 to 100.",
                  },
                },

                {
                  name: "yearsOfExperience",
                  label: "Years of Experience",
                  type: "number",
                  min: 0,
                  max: 50,

                  admin: {
                    description:
                      "Approximate practical experience with this skill.",
                  },
                },
              ],
            },

            {
              name: "shortDescription",
              label: "Short Description",
              type: "textarea",
              required: true,
              maxLength: 240,

              admin: {
                description:
                  "A concise explanation of how this skill is used in your work.",
              },
            },

            {
              name: "iconName",
              label: "Icon Name",
              type: "text",
              maxLength: 60,

              admin: {
                description:
                  "Optional icon identifier, such as nextjs, typescript, docker, or postgres.",
                placeholder: "typescript",
              },
            },
          ],
        },

        {
          label: "Experience and Evidence",

          fields: [
            {
              name: "capabilities",
              label: "Capabilities",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Capability",
                plural: "Capabilities",
              },

              fields: [
                {
                  name: "title",
                  label: "Capability",
                  type: "text",
                  required: true,
                  maxLength: 140,
                },

                {
                  name: "description",
                  label: "Capability Description",
                  type: "textarea",
                  maxLength: 280,
                },
              ],
            },

            {
              name: "relatedProjects",
              label: "Related Projects",
              type: "relationship",
              relationTo: "projects",
              hasMany: true,

              admin: {
                description:
                  "Connect this skill to projects that demonstrate practical experience.",
              },
            },

            {
              name: "learningSources",
              label: "Learning and Certification Sources",
              type: "array",

              labels: {
                singular: "Learning Source",
                plural: "Learning Sources",
              },

              fields: [
                {
                  name: "title",
                  label: "Source or Course Name",
                  type: "text",
                  required: true,
                  maxLength: 140,
                },

                {
                  name: "provider",
                  label: "Provider",
                  type: "text",
                  maxLength: 100,
                },

                {
                  name: "url",
                  label: "Source URL",
                  type: "text",

                  admin: {
                    placeholder: "https://example.com/course",
                  },
                },
              ],
            },

            {
              name: "highlights",
              label: "Practical Highlights",
              type: "array",

              labels: {
                singular: "Highlight",
                plural: "Highlights",
              },

              fields: [
                {
                  name: "description",
                  label: "Highlight",
                  type: "text",
                  required: true,
                  maxLength: 200,
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
              label: "Featured Skill",
              type: "checkbox",
              defaultValue: false,

              admin: {
                position: "sidebar",
                description:
                  "Display this skill prominently on the homepage or skills overview.",
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

              admin: {
                description:
                  "Controls the visual accent used for this skill in the portfolio.",
              },
            },

            {
              name: "badgeLabel",
              label: "Optional Badge",
              type: "text",
              maxLength: 40,

              admin: {
                placeholder: "Core Skill",
                description:
                  "Examples: Core Skill, Currently Learning, Certified, or Advanced.",
              },
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