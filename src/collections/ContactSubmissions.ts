import type { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",

  labels: {
    singular: "Contact Submission",
    plural: "Contact Submissions",
  },

  admin: {
    group: "Communication",
    useAsTitle: "subject",
    defaultColumns: [
      "name",
      "email",
      "subject",
      "submissionStatus",
      "priority",
      "createdAt",
    ],
    description:
      "Review and manage messages submitted through the public SyedOS contact form.",
  },

  access: {
    read: ({ req }) => Boolean(req.user),

    create: () => true,

    update: ({ req }) => Boolean(req.user),

    delete: ({ req }) => req.user?.role === "super-admin",
  },

  timestamps: true,

  fields: [
    {
      type: "tabs",

      tabs: [
        {
          label: "Submission Details",

          fields: [
            {
              type: "row",

              fields: [
                {
                  name: "name",
                  label: "Sender Name",
                  type: "text",
                  required: true,
                  maxLength: 120,
                },

                {
                  name: "email",
                  label: "Sender Email",
                  type: "email",
                  required: true,
                },
              ],
            },

            {
              type: "row",

              fields: [
                {
                  name: "company",
                  label: "Company or Organization",
                  type: "text",
                  maxLength: 160,
                },

                {
                  name: "phone",
                  label: "Phone Number",
                  type: "text",
                  maxLength: 30,
                },
              ],
            },

            {
              name: "subject",
              label: "Subject",
              type: "text",
              required: true,
              maxLength: 180,
            },

            {
              name: "message",
              label: "Message",
              type: "textarea",
              required: true,
              minLength: 10,
              maxLength: 3000,
            },

            {
              type: "row",

              fields: [
                {
                  name: "inquiryType",
                  label: "Inquiry Type",
                  type: "select",
                  required: true,
                  defaultValue: "general",

                  options: [
                    {
                      label: "Internship Opportunity",
                      value: "internship",
                    },
                    {
                      label: "Job Opportunity",
                      value: "job",
                    },
                    {
                      label: "Freelance Project",
                      value: "freelance",
                    },
                    {
                      label: "Project Collaboration",
                      value: "collaboration",
                    },
                    {
                      label: "Academic or Research",
                      value: "academic",
                    },
                    {
                      label: "General Inquiry",
                      value: "general",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },

                {
                  name: "preferredContactMethod",
                  label: "Preferred Contact Method",
                  type: "select",
                  defaultValue: "email",

                  options: [
                    {
                      label: "Email",
                      value: "email",
                    },
                    {
                      label: "Phone",
                      value: "phone",
                    },
                    {
                      label: "LinkedIn",
                      value: "linkedin",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          label: "Management",

          fields: [
            {
              type: "row",

              fields: [
                {
                  name: "submissionStatus",
                  label: "Submission Status",
                  type: "select",
                  required: true,
                  defaultValue: "new",

                  options: [
                    {
                      label: "New",
                      value: "new",
                    },
                    {
                      label: "Reviewed",
                      value: "reviewed",
                    },
                    {
                      label: "Replied",
                      value: "replied",
                    },
                    {
                      label: "Archived",
                      value: "archived",
                    },
                    {
                      label: "Spam",
                      value: "spam",
                    },
                  ],
                },

                {
                  name: "priority",
                  label: "Priority",
                  type: "select",
                  required: true,
                  defaultValue: "normal",

                  options: [
                    {
                      label: "Low",
                      value: "low",
                    },
                    {
                      label: "Normal",
                      value: "normal",
                    },
                    {
                      label: "High",
                      value: "high",
                    },
                    {
                      label: "Urgent",
                      value: "urgent",
                    },
                  ],
                },
              ],
            },

            {
              name: "adminNotes",
              label: "Private Admin Notes",
              type: "textarea",
              maxLength: 1000,

              admin: {
                description:
                  "Private notes visible only inside the administration dashboard.",
              },
            },

            {
              name: "responseSummary",
              label: "Response Summary",
              type: "textarea",
              maxLength: 1000,

              admin: {
                description:
                  "Optional summary of the response or follow-up action taken.",
              },
            },

            {
              type: "row",

              fields: [
                {
                  name: "reviewedAt",
                  label: "Reviewed At",
                  type: "date",

                  admin: {
                    date: {
                      pickerAppearance: "dayAndTime",
                      displayFormat: "dd MMM yyyy, HH:mm",
                    },
                  },
                },

                {
                  name: "repliedAt",
                  label: "Replied At",
                  type: "date",

                  admin: {
                    date: {
                      pickerAppearance: "dayAndTime",
                      displayFormat: "dd MMM yyyy, HH:mm",
                    },
                  },
                },
              ],
            },

            {
              name: "assignedTo",
              label: "Assigned Administrator",
              type: "relationship",
              relationTo: "users",

              admin: {
                description:
                  "Assign the submission to an administrator for follow-up.",
              },
            },
          ],
        },

        {
          label: "Technical Information",

          fields: [
            {
              name: "sourcePage",
              label: "Source Page",
              type: "text",
              maxLength: 200,

              admin: {
                readOnly: true,
              },
            },

            {
              name: "referrer",
              label: "Referrer",
              type: "text",
              maxLength: 500,

              admin: {
                readOnly: true,
              },
            },

            {
              name: "userAgent",
              label: "User Agent",
              type: "textarea",
              maxLength: 1000,

              admin: {
                readOnly: true,
              },
            },

            {
              name: "ipAddress",
              label: "IP Address",
              type: "text",
              maxLength: 100,

              admin: {
                readOnly: true,
              },
            },

            {
              name: "consentAccepted",
              label: "Contact Consent Accepted",
              type: "checkbox",
              required: true,
              defaultValue: false,

              admin: {
                description:
                  "Confirms that the sender agreed to be contacted regarding the submitted message.",
              },
            },
          ],
        },
      ],
    },
  ],
};