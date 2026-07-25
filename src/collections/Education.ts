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

export const Education: CollectionConfig = {
  slug: "education",

  labels: {
    singular: "Education Record",
    plural: "Education",
  },

  admin: {
    group: "Portfolio Content",
    useAsTitle: "institution",
    defaultColumns: [
      "institution",
      "qualification",
      "educationLevel",
      "startYear",
      "endYear",
      "currentlyStudying",
      "displayOrder",
      "updatedAt",
    ],
    description:
      "Manage academic qualifications, institutions, achievements, coursework, and education details displayed on SyedOS.",
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
          label: "Academic Information",

          fields: [
            {
              name: "institution",
              label: "Institution Name",
              type: "text",
              required: true,
              maxLength: 180,

              admin: {
                description:
                  "Enter the complete official name of the school, college, university, or training institution.",
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
                    const qualification =
                      typeof siblingData?.qualification === "string"
                        ? siblingData.qualification
                        : "";

                    const institution =
                      typeof siblingData?.institution === "string"
                        ? siblingData.institution
                        : "";

                    const source =
                      typeof value === "string" && value.trim().length > 0
                        ? value
                        : `${qualification}-${institution}`;

                    return formatSlug(source);
                  },
                ],
              },

              admin: {
                position: "sidebar",
                description:
                  "Automatically generated from the qualification and institution.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "educationLevel",
                  label: "Education Level",
                  type: "select",
                  required: true,

                  options: [
                    {
                      label: "Secondary School",
                      value: "secondary-school",
                    },
                    {
                      label: "Higher Secondary / Intermediate",
                      value: "higher-secondary",
                    },
                    {
                      label: "Diploma",
                      value: "diploma",
                    },
                    {
                      label: "Undergraduate Degree",
                      value: "undergraduate",
                    },
                    {
                      label: "Postgraduate Degree",
                      value: "postgraduate",
                    },
                    {
                      label: "Doctorate",
                      value: "doctorate",
                    },
                    {
                      label: "Professional Certification",
                      value: "professional-certification",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },

                {
                  name: "qualification",
                  label: "Qualification or Degree",
                  type: "text",
                  required: true,
                  maxLength: 160,

                  admin: {
                    placeholder:
                      "Bachelor of Technology in Information Technology",
                  },
                },
              ],
            },

            {
              type: "row",

              fields: [
                {
                  name: "fieldOfStudy",
                  label: "Field of Study",
                  type: "text",
                  maxLength: 140,

                  admin: {
                    placeholder: "Information Technology",
                  },
                },

                {
                  name: "specialization",
                  label: "Specialization",
                  type: "text",
                  maxLength: 140,

                  admin: {
                    description:
                      "Optional specialization, concentration, branch, or major.",
                  },
                },
              ],
            },

            {
              type: "row",

              fields: [
                {
                  name: "university",
                  label: "Affiliated University",
                  type: "text",
                  maxLength: 180,

                  admin: {
                    description:
                      "Enter the university name when the institution is an affiliated college.",
                  },
                },

                {
                  name: "location",
                  label: "Institution Location",
                  type: "text",
                  maxLength: 140,

                  admin: {
                    placeholder: "Warangal, Telangana, India",
                  },
                },
              ],
            },

            {
              name: "institutionWebsite",
              label: "Institution Website",
              type: "text",

              admin: {
                placeholder: "https://www.example.edu",
              },
            },
          ],
        },

        {
          label: "Duration and Results",

          fields: [
            {
              type: "row",

              fields: [
                {
                  name: "startYear",
                  label: "Start Year",
                  type: "number",
                  required: true,
                  min: 1900,
                  max: 2200,
                },

                {
                  name: "endYear",
                  label: "End Year",
                  type: "number",
                  min: 1900,
                  max: 2200,

                  admin: {
                    condition: (_, siblingData) =>
                      !siblingData?.currentlyStudying,
                  },
                },
              ],
            },

            {
              name: "currentlyStudying",
              label: "Currently Studying",
              type: "checkbox",
              defaultValue: false,

              admin: {
                description:
                  "Enable this when the qualification is still in progress.",
              },
            },

            {
              name: "expectedCompletion",
              label: "Expected Completion",
              type: "text",
              maxLength: 80,

              admin: {
                condition: (_, siblingData) =>
                  Boolean(siblingData?.currentlyStudying),
                placeholder: "Expected 2027",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "resultType",
                  label: "Result Type",
                  type: "select",
                  defaultValue: "cgpa",

                  options: [
                    {
                      label: "CGPA",
                      value: "cgpa",
                    },
                    {
                      label: "GPA",
                      value: "gpa",
                    },
                    {
                      label: "Percentage",
                      value: "percentage",
                    },
                    {
                      label: "Grade",
                      value: "grade",
                    },
                    {
                      label: "Pass",
                      value: "pass",
                    },
                    {
                      label: "Not Applicable",
                      value: "not-applicable",
                    },
                  ],
                },

                {
                  name: "result",
                  label: "Result",
                  type: "text",
                  maxLength: 40,

                  admin: {
                    placeholder: "8.5 CGPA or 85%",
                  },
                },
              ],
            },

            {
              name: "resultScale",
              label: "Result Scale",
              type: "text",
              maxLength: 40,

              admin: {
                placeholder: "10-point scale",
                description:
                  "Optional grading scale used by the institution.",
              },
            },

            {
              name: "academicStanding",
              label: "Academic Standing",
              type: "select",

              options: [
                {
                  label: "Distinction",
                  value: "distinction",
                },
                {
                  label: "First Class",
                  value: "first-class",
                },
                {
                  label: "Second Class",
                  value: "second-class",
                },
                {
                  label: "Pass",
                  value: "pass",
                },
                {
                  label: "In Progress",
                  value: "in-progress",
                },
                {
                  label: "Not Applicable",
                  value: "not-applicable",
                },
              ],
            },
          ],
        },

        {
          label: "Experience and Achievements",

          fields: [
            {
              name: "summary",
              label: "Education Summary",
              type: "textarea",
              required: true,
              maxLength: 600,

              admin: {
                description:
                  "Explain the programme, academic focus, practical work, and its relevance to your professional goals.",
              },
            },

            {
              name: "coursework",
              label: "Relevant Coursework",
              type: "array",

              labels: {
                singular: "Course",
                plural: "Courses",
              },

              fields: [
                {
                  name: "courseName",
                  label: "Course Name",
                  type: "text",
                  required: true,
                  maxLength: 140,
                },

                {
                  name: "description",
                  label: "Course Description",
                  type: "textarea",
                  maxLength: 280,
                },
              ],
            },

            {
              name: "achievements",
              label: "Academic Achievements",
              type: "array",

              labels: {
                singular: "Achievement",
                plural: "Achievements",
              },

              fields: [
                {
                  name: "title",
                  label: "Achievement Title",
                  type: "text",
                  required: true,
                  maxLength: 160,
                },

                {
                  name: "description",
                  label: "Achievement Description",
                  type: "textarea",
                  maxLength: 300,
                },

                {
                  name: "year",
                  label: "Achievement Year",
                  type: "number",
                  min: 1900,
                  max: 2200,
                },
              ],
            },

            {
              name: "activities",
              label: "Activities and Responsibilities",
              type: "array",

              labels: {
                singular: "Activity",
                plural: "Activities",
              },

              fields: [
                {
                  name: "title",
                  label: "Activity or Responsibility",
                  type: "text",
                  required: true,
                  maxLength: 160,
                },

                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                  maxLength: 300,
                },
              ],
            },

            {
              name: "relatedSkills",
              label: "Related Skills",
              type: "relationship",
              relationTo: "skills",
              hasMany: true,

              admin: {
                description:
                  "Connect this education record to relevant technical and professional skills.",
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
                  "Connect academic projects completed during this qualification.",
              },
            },
          ],
        },

        {
          label: "Presentation",

          fields: [
            {
              name: "featured",
              label: "Featured Education Record",
              type: "checkbox",
              defaultValue: false,

              admin: {
                position: "sidebar",
                description:
                  "Feature this qualification prominently on the portfolio.",
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
              name: "logoPath",
              label: "Institution Logo Path or URL",
              type: "text",

              admin: {
                placeholder: "/images/education/institution-logo.webp",
              },
            },

            {
              name: "logoAlt",
              label: "Institution Logo Alternative Text",
              type: "text",
              maxLength: 180,

              admin: {
                description:
                  "Describe the logo for accessibility and search engines.",
              },
            },

            {
              name: "certificateURL",
              label: "Certificate or Verification URL",
              type: "text",

              admin: {
                description:
                  "Optional public URL for the certificate, marks memo, credential, or verification page.",
              },
            },

            {
              name: "badgeLabel",
              label: "Optional Badge",
              type: "text",
              maxLength: 50,

              admin: {
                placeholder: "Current Education",
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