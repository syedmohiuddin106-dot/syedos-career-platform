export const featureFlagKeys = [
  "aiAssistant",
  "analytics",
  "blog",
  "candidateBriefGenerator",
  "clientMode",
  "contactForm",
  "developerMode",
  "githubIntegration",
  "mastersMode",
  "opportunityManager",
  "publications",
  "recruiterMode",
  "research",
  "services",
  "testimonials",
  "threeDimensionalHero",
  "voiceAssistant",
] as const;

export type FeatureFlagKey = (typeof featureFlagKeys)[number];

export type FeatureFlagMap = Record<FeatureFlagKey, boolean>;

export const defaultFeatureFlags: FeatureFlagMap = {
  aiAssistant: false,
  analytics: false,
  blog: false,
  candidateBriefGenerator: false,
  clientMode: false,
  contactForm: false,
  developerMode: true,
  githubIntegration: false,
  mastersMode: true,
  opportunityManager: false,
  publications: false,
  recruiterMode: true,
  research: false,
  services: false,
  testimonials: false,
  threeDimensionalHero: false,
  voiceAssistant: false,
};

/**
 * Returns the final state of one feature.
 *
 * CMS values will later override these safe defaults.
 */
export function isFeatureEnabled(
  feature: FeatureFlagKey,
  overrides: Partial<FeatureFlagMap> = {},
): boolean {
  return overrides[feature] ?? defaultFeatureFlags[feature];
}

/**
 * Combines CMS or environment overrides with the safe defaults.
 */
export function resolveFeatureFlags(
  overrides: Partial<FeatureFlagMap> = {},
): FeatureFlagMap {
  return {
    ...defaultFeatureFlags,
    ...overrides,
  };
}