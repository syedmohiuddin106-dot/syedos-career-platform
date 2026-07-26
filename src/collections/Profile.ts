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

export const Profile: CollectionConfig = {
  slug: "profile",

  labels: {
    singular: "Profile",
    plural: "Profile",
  },

  admin: {
    group: "Portfolio Content",
    useAsTitle: "fullName",
    defaultColumns: [
      "fullName",
      "professionalTitle",
      "availabilityStatus",
      "featured",
      "updatedAt",
    ],
    description:
      "Manage the main professional identity, biography, contact details, career preferences, social links, and personal presentation used across SyedOS.",
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
          label: "Personal Information",

          fields: [
            {
              name: "fullName",
              label: "Full Name",
              type: "text",
              required: true,
              maxLength: 120,

              admin: {
                description:
                  "Enter the professional name displayed throughout the portfolio.",
              },
            },

            {
              name: "slug",
              label: "Profile Slug",
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
                        : siblingData?.fullName;

                    return formatSlug(source);
                  },
                ],
              },

              admin: {
                position: "sidebar",
                description:
                  "Automatically generated from the full name.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "professionalTitle",
                  label: "Professional Title",
                  type: "text",
                  required: true,
                  maxLength: 160,

                  admin: {
                    placeholder:
                      "Software Developer and Full-Stack Web Developer",
                  },
                },

                {
                  name: "shortTitle",
                  label: "Short Title",
                  type: "text",
                  maxLength: 80,

                  admin: {
                    placeholder: "Full-Stack Developer",
                    description:
                      "A shorter title for compact cards, metadata, and navigation.",
                  },
                },
              ],
            },

            {
              name: "headline",
              label: "Professional Headline",
              type: "textarea",
              required: true,
              maxLength: 260,

              admin: {
                description:
                  "A concise professional introduction for the homepage hero section.",
              },
            },

            {
              name: "shortBio",
              label: "Short Biography",
              type: "textarea",
              required: true,
              maxLength: 500,

              admin: {
                description:
                  "A brief professional summary for cards, homepage sections, and metadata.",
              },
            },

            {
              name: "fullBio",
              label: "Full Biography",
              type: "textarea",
              required: true,
              maxLength: 1800,

              admin: {
                description:
                  "A detailed biography for the About page, including education, interests, projects, and career direction.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "location",
                  label: "Current Location",
                  type: "text",
                  maxLength: 140,

                  admin: {
                    placeholder: "Hanamkonda, Telangana, India",
                  },
                },

                {
                  name: "nationality",
                  label: "Nationality",
                  type: "text",
                  maxLength: 80,

                  admin: {
                    placeholder: "Indian",
                  },
                },
              ],
            },

            {
              name: "languages",
              label: "Languages",
              type: "array",

              labels: {
                singular: "Language",
                plural: "Languages",
              },

              fields: [
                {
                  name: "language",
                  label: "Language",
                  type: "text",
                  required: true,
                  maxLength: 60,
                },

                {
                  name: "proficiency",
                  label: "Proficiency",
                  type: "select",
                  required: true,
                  defaultValue: "professional",

                  options: [
                    {
                      label: "Basic",
                      value: "basic",
                    },
                    {
                      label: "Conversational",
                      value: "conversational",
                    },
                    {
                      label: "Professional",
                      value: "professional",
                    },
                    {
                      label: "Native or Bilingual",
                      value: "native-bilingual",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          label: "Career Information",

          fields: [
            {
              name: "careerObjective",
              label: "Career Objective",
              type: "textarea",
              required: true,
              maxLength: 700,

              admin: {
                description:
                  "Describe the type of opportunities, responsibilities, technologies, and professional growth you are pursuing.",
              },
            },

            {
              name: "careerInterests",
              label: "Career Interests",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Career Interest",
                plural: "Career Interests",
              },

              fields: [
                {
                  name: "title",
                  label: "Interest",
                  type: "text",
                  required: true,
                  maxLength: 120,
                },

                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                  maxLength: 280,
                },
              ],
            },

            {
              name: "preferredRoles",
              label: "Preferred Roles",
              type: "array",

              labels: {
                singular: "Preferred Role",
                plural: "Preferred Roles",
              },

              fields: [
                {
                  name: "role",
                  label: "Role",
                  type: "text",
                  required: true,
                  maxLength: 120,
                },
              ],
            },

            {
              name: "availabilityStatus",
              label: "Availability Status",
              type: "select",
              required: true,
              defaultValue: "open-to-internships",

              options: [
                {
                  label: "Open to Internships",
                  value: "open-to-internships",
                },
                {
                  label: "Open to Part-Time Opportunities",
                  value: "open-to-part-time",
                },
                {
                  label: "Open to Full-Time Opportunities",
                  value: "open-to-full-time",
                },
                {
                  label: "Open to Freelance Work",
                  value: "open-to-freelance",
                },
                {
                  label: "Not Currently Available",
                  value: "not-available",
                },
              ],
            },

            {
              name: "preferredWorkModes",
              label: "Preferred Work Modes",
              type: "select",
              hasMany: true,

              options: [
                {
                  label: "Remote",
                  value: "remote",
                },
                {
                  label: "Hybrid",
                  value: "hybrid",
                },
                {
                  label: "On-site",
                  value: "onsite",
                },
              ],
            },

            {
              name: "preferredLocations",
              label: "Preferred Locations",
              type: "array",

              labels: {
                singular: "Location",
                plural: "Locations",
              },

              fields: [
                {
                  name: "location",
                  label: "Location",
                  type: "text",
                  required: true,
                  maxLength: 120,
                },
              ],
            },

            {
              name: "higherEducationGoal",
              label: "Higher Education Goal",
              type: "textarea",
              maxLength: 500,

              admin: {
                description:
                  "Optional plans related to postgraduate education, specialization, or international study.",
              },
            },

            {
              name: "focusAreas",
              label: "Current Focus Areas",
              type: "relationship",
              relationTo: "skills",
              hasMany: true,

              admin: {
                description:
                  "Connect the profile to the most important skills currently being developed.",
              },
            },
          ],
        },

        {
          label: "Contact and Social Links",

          fields: [
            {
              name: "publicEmail",
              label: "Public Email",
              type: "email",
              required: true,

              admin: {
                description:
                  "The professional email displayed publicly for recruiters and collaborators.",
              },
            },

            {
              name: "phone",
              label: "Phone Number",
              type: "text",
              maxLength: 30,

              admin: {
                description:
                  "Optional public phone number. Leave blank when you prefer email contact only.",
              },
            },

            {
              name: "socialLinks",
              label: "Social and Professional Links",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Social Link",
                plural: "Social Links",
              },

              fields: [
                {
                  name: "platform",
                  label: "Platform",
                  type: "select",
                  required: true,

                  options: [
                    {
                      label: "LinkedIn",
                      value: "linkedin",
                    },
                    {
                      label: "GitHub",
                      value: "github",
                    },
                    {
                      label: "Portfolio",
                      value: "portfolio",
                    },
                    {
                      label: "Email",
                      value: "email",
                    },
                    {
                      label: "YouTube",
                      value: "youtube",
                    },
                    {
                      label: "X / Twitter",
                      value: "x",
                    },
                    {
                      label: "Instagram",
                      value: "instagram",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },

                {
                  name: "label",
                  label: "Display Label",
                  type: "text",
                  required: true,
                  maxLength: 80,
                },

                {
                  name: "url",
                  label: "URL",
                  type: "text",
                  required: true,

                  admin: {
                    placeholder: "https://example.com/profile",
                  },
                },

                {
                  name: "featured",
                  label: "Featured Link",
                  type: "checkbox",
                  defaultValue: false,
                },
              ],
            },

            {
              name: "contactPreferences",
              label: "Contact Preferences",
              type: "array",

              labels: {
                singular: "Contact Preference",
                plural: "Contact Preferences",
              },

              fields: [
                {
                  name: "preference",
                  label: "Preference",
                  type: "text",
                  required: true,
                  maxLength: 160,
                },
              ],
            },
          ],
        },

        {
          label: "Media and Documents",

          fields: [
            {
              name: "profilePhoto",
              label: "Profile Photo",
              type: "relationship",
              relationTo: "media",

              filterOptions: {
                mediaType: {
                  equals: "profile-photo",
                },
              },

              admin: {
                description:
                  "Select the primary professional profile photo from the Media collection.",
              },
            },

            {
              name: "resume",
              label: "Resume",
              type: "relationship",
              relationTo: "media",

              filterOptions: {
                mediaType: {
                  equals: "resume",
                },
              },

              admin: {
                description:
                  "Select the current downloadable resume from the Media collection.",
              },
            },

            {
              name: "resumeLabel",
              label: "Resume Button Label",
              type: "text",
              defaultValue: "Download Resume",
              maxLength: 60,
            },

            {
              name: "resumeLastUpdated",
              label: "Resume Last Updated",
              type: "date",

              admin: {
                date: {
                  pickerAppearance: "dayOnly",
                  displayFormat: "dd MMM yyyy",
                },
              },
            },

            {
              name: "introVideoURL",
              label: "Introduction Video URL",
              type: "text",

              admin: {
                description:
                  "Optional professional introduction or portfolio walkthrough video.",
              },
            },
          ],
        },

        {
          label: "Highlights and Presentation",

          fields: [
            {
              name: "professionalHighlights",
              label: "Professional Highlights",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Highlight",
                plural: "Highlights",
              },

              fields: [
                {
                  name: "title",
                  label: "Highlight Title",
                  type: "text",
                  required: true,
                  maxLength: 120,
                },

                {
                  name: "value",
                  label: "Highlight Value",
                  type: "text",
                  required: true,
                  maxLength: 80,

                  admin: {
                    placeholder: "3+ Projects",
                  },
                },

                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                  maxLength: 240,
                },
              ],
            },

            {
              name: "personalStrengths",
              label: "Professional Strengths",
              type: "array",

              labels: {
                singular: "Strength",
                plural: "Strengths",
              },

              fields: [
                {
                  name: "title",
                  label: "Strength",
                  type: "text",
                  required: true,
                  maxLength: 120,
                },

                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                  maxLength: 260,
                },
              ],
            },

            {
              name: "featured",
              label: "Active Primary Profile",
              type: "checkbox",
              defaultValue: true,

              admin: {
                position: "sidebar",
                description:
                  "Mark this as the active profile used throughout the public portfolio.",
              },
            },

            {
              name: "heroBadge",
              label: "Hero Badge",
              type: "text",
              maxLength: 80,

              admin: {
                placeholder: "Available for Internships",
              },
            },

            {
              name: "primaryCallToAction",
              label: "Primary Call-to-Action",
              type: "group",

              fields: [
                {
                  name: "label",
                  label: "Button Label",
                  type: "text",
                  maxLength: 60,
                  defaultValue: "View My Work",
                },

                {
                  name: "url",
                  label: "Button URL",
                  type: "text",
                  maxLength: 180,
                  defaultValue: "/projects",
                },
              ],
            },

            {
              name: "secondaryCallToAction",
              label: "Secondary Call-to-Action",
              type: "group",

              fields: [
                {
                  name: "label",
                  label: "Button Label",
                  type: "text",
                  maxLength: 60,
                  defaultValue: "Contact Me",
                },

                {
                  name: "url",
                  label: "Button URL",
                  type: "text",
                  maxLength: 180,
                  defaultValue: "/contact",
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