import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  labels: {
    singular: "Media File",
    plural: "Media",
  },

  admin: {
    group: "Content Management",
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "mediaType",
      "filename",
      "featured",
      "updatedAt",
    ],
    description:
      "Manage project images, profile photos, institution logos, certificates, resume files, and other media used across SyedOS.",
  },

  access: {
    read: () => true,

    create: ({ req }) => Boolean(req.user),

    update: ({ req }) => Boolean(req.user),

    delete: ({ req }) => req.user?.role === "super-admin",
  },

  upload: {
    staticDir: "media",
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
      "application/pdf",
    ],
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        name: "thumbnail",
        width: 320,
        height: 240,
        position: "centre",
      },
      {
        name: "card",
        width: 800,
        height: 600,
        position: "centre",
      },
      {
        name: "hero",
        width: 1600,
        height: 900,
        position: "centre",
      },
    ],
  },

  fields: [
    {
      name: "title",
      label: "Media Title",
      type: "text",
      required: true,
      maxLength: 160,

      admin: {
        description:
          "Enter a clear internal title for identifying this file in the CMS.",
      },
    },

    {
      name: "alt",
      label: "Alternative Text",
      type: "text",
      required: true,
      maxLength: 220,

      admin: {
        description:
          "Describe the image or document for accessibility and search engines.",
      },
    },

    {
      name: "caption",
      label: "Caption",
      type: "textarea",
      maxLength: 400,

      admin: {
        description:
          "Optional public caption or supporting context for this media item.",
      },
    },

    {
      type: "row",

      fields: [
        {
          name: "mediaType",
          label: "Media Type",
          type: "select",
          required: true,
          defaultValue: "general",

          options: [
            {
              label: "Profile Photo",
              value: "profile-photo",
            },
            {
              label: "Project Cover",
              value: "project-cover",
            },
            {
              label: "Project Screenshot",
              value: "project-screenshot",
            },
            {
              label: "Institution Logo",
              value: "institution-logo",
            },
            {
              label: "Organization Logo",
              value: "organization-logo",
            },
            {
              label: "Issuer Logo",
              value: "issuer-logo",
            },
            {
              label: "Certificate",
              value: "certificate",
            },
            {
              label: "Resume",
              value: "resume",
            },
            {
              label: "Document",
              value: "document",
            },
            {
              label: "General",
              value: "general",
            },
          ],
        },

        {
          name: "visibility",
          label: "Visibility",
          type: "select",
          required: true,
          defaultValue: "public",

          options: [
            {
              label: "Public",
              value: "public",
            },
            {
              label: "Private",
              value: "private",
            },
            {
              label: "Unlisted",
              value: "unlisted",
            },
          ],
        },
      ],
    },

    {
      name: "featured",
      label: "Featured Media",
      type: "checkbox",
      defaultValue: false,

      admin: {
        position: "sidebar",
        description:
          "Mark this as a preferred file for featured sections or primary display.",
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
      name: "credit",
      label: "Credit or Source",
      type: "text",
      maxLength: 180,

      admin: {
        description:
          "Optional photographer, creator, institution, or source attribution.",
      },
    },

    {
      name: "copyrightNotice",
      label: "Copyright Notice",
      type: "text",
      maxLength: 220,

      admin: {
        description:
          "Optional ownership or usage-rights information.",
      },
    },

    {
      name: "tags",
      label: "Tags",
      type: "array",

      labels: {
        singular: "Tag",
        plural: "Tags",
      },

      fields: [
        {
          name: "tag",
          label: "Tag",
          type: "text",
          required: true,
          maxLength: 60,
        },
      ],
    },

    {
      name: "notes",
      label: "Internal Notes",
      type: "textarea",
      maxLength: 500,

      admin: {
        description:
          "Private CMS notes for file usage, replacement plans, or verification status.",
      },
    },
  ],
};