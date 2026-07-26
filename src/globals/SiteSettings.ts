import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",

  label: "Site Settings",

  admin: {
    group: "System Configuration",
    description:
      "Manage global branding, navigation, footer, contact, SEO, and platform-wide settings used across SyedOS.",
  },

  access: {
    read: () => true,

    update: ({ req }) => Boolean(req.user),
  },

  versions: {
    max: 20,

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
          label: "Branding",

          fields: [
            {
              name: "siteName",
              label: "Site Name",
              type: "text",
              required: true,
              defaultValue: "SyedOS",
              maxLength: 80,
            },

            {
              name: "siteTagline",
              label: "Site Tagline",
              type: "text",
              required: true,
              defaultValue: "Career Platform and Professional Portfolio",
              maxLength: 160,
            },

            {
              name: "siteDescription",
              label: "Site Description",
              type: "textarea",
              required: true,
              maxLength: 500,

              admin: {
                description:
                  "A platform-wide summary used in metadata, footer content, and general presentation.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "logo",
                  label: "Primary Logo",
                  type: "relationship",
                  relationTo: "media",

                  filterOptions: {
                    mediaType: {
                      equals: "general",
                    },
                  },
                },

                {
                  name: "favicon",
                  label: "Favicon",
                  type: "relationship",
                  relationTo: "media",
                },
              ],
            },

            {
              name: "brandInitials",
              label: "Brand Initials",
              type: "text",
              defaultValue: "SM",
              maxLength: 10,

              admin: {
                description:
                  "Fallback initials shown when no logo image is available.",
              },
            },
          ],
        },

        {
          label: "Navigation",

          fields: [
            {
              name: "navigationItems",
              label: "Primary Navigation",
              type: "array",
              minRows: 1,

              labels: {
                singular: "Navigation Item",
                plural: "Navigation Items",
              },

              fields: [
                {
                  name: "label",
                  label: "Label",
                  type: "text",
                  required: true,
                  maxLength: 60,
                },

                {
                  name: "url",
                  label: "URL",
                  type: "text",
                  required: true,
                  maxLength: 180,

                  admin: {
                    placeholder: "/projects",
                  },
                },

                {
                  name: "openInNewTab",
                  label: "Open in New Tab",
                  type: "checkbox",
                  defaultValue: false,
                },

                {
                  name: "highlighted",
                  label: "Highlighted Item",
                  type: "checkbox",
                  defaultValue: false,
                },
              ],
            },

            {
              name: "showResumeButton",
              label: "Show Resume Button in Navigation",
              type: "checkbox",
              defaultValue: true,
            },

            {
              name: "resumeButtonLabel",
              label: "Resume Button Label",
              type: "text",
              defaultValue: "Resume",
              maxLength: 40,
            },
          ],
        },

        {
          label: "Footer",

          fields: [
            {
              name: "footerDescription",
              label: "Footer Description",
              type: "textarea",
              required: true,
              maxLength: 400,
            },

            {
              name: "footerLinks",
              label: "Footer Links",
              type: "array",

              labels: {
                singular: "Footer Link",
                plural: "Footer Links",
              },

              fields: [
                {
                  name: "label",
                  label: "Label",
                  type: "text",
                  required: true,
                  maxLength: 60,
                },

                {
                  name: "url",
                  label: "URL",
                  type: "text",
                  required: true,
                  maxLength: 180,
                },
              ],
            },

            {
              name: "copyrightText",
              label: "Copyright Text",
              type: "text",
              required: true,
              defaultValue:
                "© 2026 Syed Mohiuddin. All rights reserved.",
              maxLength: 180,
            },

            {
              name: "showBuiltWith",
              label: "Show Technology Credit",
              type: "checkbox",
              defaultValue: true,
            },

            {
              name: "builtWithText",
              label: "Technology Credit Text",
              type: "text",
              defaultValue:
                "Built with Next.js, TypeScript, Payload CMS, PostgreSQL, and Docker.",
              maxLength: 200,
            },
          ],
        },

        {
          label: "Contact",

          fields: [
            {
              name: "contactHeading",
              label: "Contact Section Heading",
              type: "text",
              required: true,
              defaultValue: "Let’s Build Something Meaningful",
              maxLength: 120,
            },

            {
              name: "contactDescription",
              label: "Contact Section Description",
              type: "textarea",
              required: true,
              maxLength: 400,
            },

            {
              name: "contactEmail",
              label: "Primary Contact Email",
              type: "email",
              required: true,
            },

            {
              name: "responseTime",
              label: "Typical Response Time",
              type: "text",
              defaultValue: "Usually responds within 24–48 hours",
              maxLength: 100,
            },

            {
              name: "acceptedInquiryTypes",
              label: "Accepted Inquiry Types",
              type: "array",

              labels: {
                singular: "Inquiry Type",
                plural: "Inquiry Types",
              },

              fields: [
                {
                  name: "label",
                  label: "Inquiry Type",
                  type: "text",
                  required: true,
                  maxLength: 100,
                },
              ],
            },
          ],
        },

        {
          label: "SEO and Social",

          fields: [
            {
              name: "defaultSEO",
              label: "Default SEO",
              type: "group",

              fields: [
                {
                  name: "title",
                  label: "Default SEO Title",
                  type: "text",
                  required: true,
                  maxLength: 70,
                },

                {
                  name: "description",
                  label: "Default SEO Description",
                  type: "textarea",
                  required: true,
                  maxLength: 170,
                },

                {
                  name: "keywords",
                  label: "Default SEO Keywords",
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

                {
                  name: "socialImage",
                  label: "Default Social Sharing Image",
                  type: "relationship",
                  relationTo: "media",
                },
              ],
            },

            {
              name: "socialLinks",
              label: "Global Social Links",
              type: "array",

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
                      label: "Email",
                      value: "email",
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
                },
              ],
            },
          ],
        },

        {
          label: "Platform Controls",

          fields: [
            {
              name: "maintenanceMode",
              label: "Maintenance Mode",
              type: "checkbox",
              defaultValue: false,

              admin: {
                description:
                  "Enable this only when temporarily hiding the public portfolio.",
              },
            },

            {
              name: "maintenanceMessage",
              label: "Maintenance Message",
              type: "textarea",
              maxLength: 300,

              admin: {
                condition: (_, siblingData) =>
                  Boolean(siblingData?.maintenanceMode),
              },
            },

            {
              name: "enableContactForm",
              label: "Enable Contact Form",
              type: "checkbox",
              defaultValue: true,
            },

            {
              name: "enableResumeDownload",
              label: "Enable Resume Download",
              type: "checkbox",
              defaultValue: true,
            },

            {
              name: "enableAnalytics",
              label: "Enable Analytics",
              type: "checkbox",
              defaultValue: false,
            },

            {
              name: "analyticsProvider",
              label: "Analytics Provider",
              type: "select",

              admin: {
                condition: (_, siblingData) =>
                  Boolean(siblingData?.enableAnalytics),
              },

              options: [
                {
                  label: "Vercel Analytics",
                  value: "vercel",
                },
                {
                  label: "Google Analytics",
                  value: "google",
                },
                {
                  label: "Plausible",
                  value: "plausible",
                },
                {
                  label: "Other",
                  value: "other",
                },
              ],
            },

            {
              name: "analyticsID",
              label: "Analytics ID",
              type: "text",
              maxLength: 120,

              admin: {
                condition: (_, siblingData) =>
                  Boolean(siblingData?.enableAnalytics),
              },
            },
          ],
        },
      ],
    },
  ],
};