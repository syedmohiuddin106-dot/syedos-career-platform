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

export const Projects: CollectionConfig = {
  slug: "projects",

  labels: {
    singular: "Project",
    plural: "Projects",
  },

  admin: {
    group: "Portfolio Content",
    useAsTitle: "title",
    defaultColumns: [
  "title",
  "projectType",
  "developmentStatus",
  "featured",
  "updatedAt",
],
    description:
      "Manage the projects displayed across the SyedOS professional portfolio.",
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

    delete: ({ req }) =>
      req.user?.role === "super-admin",

    readVersions: ({ req }) => Boolean(req.user),
  },

  defaultSort: "-updatedAt",

  orderable: true,

  versions: {
    maxPerDoc: 30,

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
          label: "Project Information",

          fields: [
            {
              name: "title",
              label: "Project Title",
              type: "text",
              required: true,
              maxLength: 120,

              admin: {
                description:
                  "The professional name displayed on project cards and detail pages.",
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
                        : siblingData?.title;

                    return formatSlug(source);
                  },
                ],
              },

              admin: {
                position: "sidebar",
                description:
                  "Automatically generated from the project title. Example: syedai-assistant",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "projectType",
                  label: "Project Type",
                  type: "select",
                  required: true,
                  defaultValue: "full-stack",

                  options: [
                    {
                      label: "Full-Stack Application",
                      value: "full-stack",
                    },
                    {
                      label: "Artificial Intelligence",
                      value: "ai",
                    },
                    {
                      label: "Cloud and DevOps",
                      value: "cloud-devops",
                    },
                    {
                      label: "Frontend Application",
                      value: "frontend",
                    },
                    {
                      label: "Backend System",
                      value: "backend",
                    },
                    {
                      label: "Academic Project",
                      value: "academic",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },

                {
  name: "developmentStatus",
  label: "Development Status",
  type: "select",
                  required: true,
                  defaultValue: "completed",

                  options: [
                    {
                      label: "Planning",
                      value: "planning",
                    },
                    {
                      label: "In Development",
                      value: "in-development",
                    },
                    {
                      label: "Completed",
                      value: "completed",
                    },
                    {
                      label: "Maintained",
                      value: "maintained",
                    },
                    {
                      label: "Archived",
                      value: "archived",
                    },
                  ],
                },
              ],
            },

            {
              name: "shortDescription",
              label: "Short Description",
              type: "textarea",
              required: true,
              maxLength: 260,

              admin: {
                description:
                  "A concise project summary used on portfolio cards and previews.",
              },
            },

            {
              name: "fullDescription",
              label: "Full Description",
              type: "textarea",
              required: true,

              admin: {
                description:
                  "A detailed professional explanation of the project, its purpose, and its outcome.",
              },
            },
          ],
        },

        {
          label: "Technology and Features",

          fields: [
            {
              name: "technologies",
              label: "Technologies",
              type: "array",
              required: true,
              minRows: 1,

              labels: {
                singular: "Technology",
                plural: "Technologies",
              },

              fields: [
                {
                  name: "name",
                  label: "Technology Name",
                  type: "text",
                  required: true,
                  maxLength: 60,
                },

                {
                  name: "category",
                  label: "Category",
                  type: "select",
                  required: true,
                  defaultValue: "other",

                  options: [
                    {
                      label: "Frontend",
                      value: "frontend",
                    },
                    {
                      label: "Backend",
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
                      label: "Cloud",
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
                      label: "Tool",
                      value: "tool",
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
              name: "features",
              label: "Key Features",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Feature",
                plural: "Features",
              },

              fields: [
                {
                  name: "title",
                  label: "Feature Title",
                  type: "text",
                  required: true,
                  maxLength: 100,
                },

                {
                  name: "description",
                  label: "Feature Description",
                  type: "textarea",
                  required: true,
                  maxLength: 300,
                },
              ],
            },

            {
              name: "responsibilities",
              label: "My Responsibilities",
              type: "array",

              labels: {
                singular: "Responsibility",
                plural: "Responsibilities",
              },

              fields: [
                {
                  name: "description",
                  label: "Responsibility",
                  type: "text",
                  required: true,
                  maxLength: 180,
                },
              ],
            },
          ],
        },

        {
          label: "Links and Presentation",

          fields: [
            {
              type: "row",

              fields: [
                {
                  name: "githubURL",
                  label: "GitHub Repository URL",
                  type: "text",

                  admin: {
                    placeholder:
                      "https://github.com/username/repository",
                  },
                },

                {
                  name: "liveURL",
                  label: "Live Project URL",
                  type: "text",

                  admin: {
                    placeholder:
                      "https://project.example.com",
                  },
                },
              ],
            },

            {
              name: "documentationURL",
              label: "Documentation URL",
              type: "text",

              admin: {
                placeholder:
                  "https://github.com/username/repository#readme",
              },
            },

            {
              name: "coverImageURL",
              label: "Cover Image Path or URL",
              type: "text",

              admin: {
                placeholder:
                  "/images/projects/project-cover.webp",
                description:
                  "Temporary image path field. It will later be upgraded to Payload Media uploads.",
              },
            },

            {
              name: "coverImageAlt",
              label: "Cover Image Alternative Text",
              type: "text",
              maxLength: 160,

              admin: {
                description:
                  "Describe the image for accessibility and search engines.",
              },
            },

            {
              name: "featured",
              label: "Featured Project",
              type: "checkbox",
              defaultValue: false,

              admin: {
                position: "sidebar",
                description:
                  "Display this project prominently on the homepage.",
              },
            },

            {
              name: "displayOrder",
              label: "Display Priority",
              type: "number",
              defaultValue: 100,
              min: 0,

              admin: {
                position: "sidebar",
                description:
                  "Lower numbers appear before higher numbers.",
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