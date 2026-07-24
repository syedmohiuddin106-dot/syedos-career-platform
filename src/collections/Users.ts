import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",

  admin: {
    useAsTitle: "name",
    group: "Administration",
    defaultColumns: ["name", "email", "role", "updatedAt"],
    description:
      "Authorized administrators who can securely manage SyedOS content.",
  },

  auth: {
    tokenExpiration: 2 * 60 * 60,
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    useAPIKey: false,
  },

  access: {
    admin: ({ req }) => req.user?.role === "super-admin",

    create: ({ req }) => req.user?.role === "super-admin",

    read: ({ req }) => {
      if (req.user?.role === "super-admin") {
        return true;
      }

      if (req.user?.id) {
        return {
          id: {
            equals: req.user.id,
          },
        };
      }

      return false;
    },

    update: ({ req }) => {
      if (req.user?.role === "super-admin") {
        return true;
      }

      if (req.user?.id) {
        return {
          id: {
            equals: req.user.id,
          },
        };
      }

      return false;
    },

    delete: ({ req }) => req.user?.role === "super-admin",
  },

  fields: [
    {
  name: "name",
  type: "text",
  required: true,
  maxLength: 100,
      admin: {
        description: "The administrator’s professional display name.",
      },
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "super-admin",
      saveToJWT: true,
      options: [
        {
          label: "Super Administrator",
          value: "super-admin",
        },
        {
          label: "Content Editor",
          value: "editor",
        },
      ],
      access: {
        update: ({ req }) => req.user?.role === "super-admin",
      },
      admin: {
        description:
          "Controls access to protected SyedOS administration features.",
      },
    },
  ],

  timestamps: true,
};