import { z } from "zod";

const serverEnvironmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  DATABASE_URL: z
    .string()
    .min(1, "DATABASE_URL is required")
    .optional(),

  PAYLOAD_SECRET: z
    .string()
    .min(32, "PAYLOAD_SECRET must contain at least 32 characters")
    .optional(),

  GEMINI_API_KEY: z.string().min(1).optional(),

  ADMIN_EMAIL: z
    .string()
    .email("ADMIN_EMAIL must be a valid email address")
    .optional(),

  DEPLOYMENT_ENVIRONMENT: z
    .enum(["development", "staging", "production"])
    .default("development"),
});

const publicEnvironmentSchema = z.object({
  NEXT_PUBLIC_SITE_NAME: z.string().default("SyedOS"),

  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url("NEXT_PUBLIC_SITE_URL must be a valid URL")
    .default("http://localhost:3000"),

  NEXT_PUBLIC_DEFAULT_LOCALE: z.string().default("en"),

  NEXT_PUBLIC_ANALYTICS_ENABLED: z
    .enum(["true", "false"])
    .default("false")
    .transform((value) => value === "true"),
});

const serverEnvironment = serverEnvironmentSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  DEPLOYMENT_ENVIRONMENT: process.env.DEPLOYMENT_ENVIRONMENT,
});

if (!serverEnvironment.success) {
  console.error(
    "Invalid server environment variables:",
    serverEnvironment.error.flatten().fieldErrors,
  );

  throw new Error("Invalid server environment configuration.");
}

const publicEnvironment = publicEnvironmentSchema.safeParse({
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_DEFAULT_LOCALE:
    process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  NEXT_PUBLIC_ANALYTICS_ENABLED:
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
});

if (!publicEnvironment.success) {
  console.error(
    "Invalid public environment variables:",
    publicEnvironment.error.flatten().fieldErrors,
  );

  throw new Error("Invalid public environment configuration.");
}

export const env = {
  server: serverEnvironment.data,
  public: publicEnvironment.data,
} as const;