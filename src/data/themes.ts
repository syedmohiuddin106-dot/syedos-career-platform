export const themeKeys = [
  "executive",
  "technology",
  "academic",
  "minimal",
  "creative",
  "aiFuturistic",
] as const;

export type ThemeKey = (typeof themeKeys)[number];

export type AnimationIntensity =
  | "none"
  | "low"
  | "medium"
  | "high";

export type ThemeMode = "light" | "dark" | "system";

export type ThemePreset = {
  key: ThemeKey;
  name: string;
  description: string;
  defaultMode: ThemeMode;
  animationIntensity: AnimationIntensity;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    mutedText: string;
    border: string;
  };
  typography: {
    heading: string;
    body: string;
    code: string;
  };
  appearance: {
    borderRadius: "small" | "medium" | "large";
    cardStyle: "solid" | "glass" | "editorial";
    profileImageStyle:
      | "rounded"
      | "circle"
      | "professionalFrame";
  };
  active: boolean;
};

export const defaultThemes: ThemePreset[] = [
  {
    key: "executive",
    name: "Executive",
    description:
      "A formal, restrained, recruiter-focused professional theme.",
    defaultMode: "light",
    animationIntensity: "low",
    colors: {
      primary: "#071A33",
      secondary: "#0B1F3A",
      accent: "#2563EB",
      background: "#F8FAFC",
      surface: "#FFFFFF",
      text: "#111827",
      mutedText: "#475569",
      border: "#E2E8F0",
    },
    typography: {
      heading: "Space Grotesk",
      body: "Inter",
      code: "JetBrains Mono",
    },
    appearance: {
      borderRadius: "medium",
      cardStyle: "solid",
      profileImageStyle: "professionalFrame",
    },
    active: true,
  },
  {
    key: "technology",
    name: "Technology",
    description:
      "A modern technical theme for engineering projects and developer audiences.",
    defaultMode: "dark",
    animationIntensity: "medium",
    colors: {
      primary: "#0B1F3A",
      secondary: "#2563EB",
      accent: "#22D3EE",
      background: "#020617",
      surface: "#0F172A",
      text: "#F8FAFC",
      mutedText: "#94A3B8",
      border: "#1E293B",
    },
    typography: {
      heading: "Space Grotesk",
      body: "Inter",
      code: "JetBrains Mono",
    },
    appearance: {
      borderRadius: "large",
      cardStyle: "glass",
      profileImageStyle: "professionalFrame",
    },
    active: true,
  },
  {
    key: "academic",
    name: "Academic",
    description:
      "A structured editorial theme for universities, research, and master’s applications.",
    defaultMode: "light",
    animationIntensity: "low",
    colors: {
      primary: "#1E293B",
      secondary: "#334155",
      accent: "#2563EB",
      background: "#FFFFFF",
      surface: "#F8FAFC",
      text: "#0F172A",
      mutedText: "#475569",
      border: "#CBD5E1",
    },
    typography: {
      heading: "Space Grotesk",
      body: "Inter",
      code: "JetBrains Mono",
    },
    appearance: {
      borderRadius: "small",
      cardStyle: "editorial",
      profileImageStyle: "rounded",
    },
    active: true,
  },
  {
    key: "minimal",
    name: "Minimal",
    description:
      "A fast and content-first theme with very limited decoration.",
    defaultMode: "system",
    animationIntensity: "none",
    colors: {
      primary: "#111827",
      secondary: "#475569",
      accent: "#2563EB",
      background: "#FFFFFF",
      surface: "#F8FAFC",
      text: "#111827",
      mutedText: "#64748B",
      border: "#E2E8F0",
    },
    typography: {
      heading: "Inter",
      body: "Inter",
      code: "JetBrains Mono",
    },
    appearance: {
      borderRadius: "small",
      cardStyle: "solid",
      profileImageStyle: "rounded",
    },
    active: true,
  },
  {
    key: "creative",
    name: "Creative",
    description:
      "A more expressive portfolio theme for selected projects and clients.",
    defaultMode: "dark",
    animationIntensity: "medium",
    colors: {
      primary: "#071A33",
      secondary: "#3B82F6",
      accent: "#22D3EE",
      background: "#020617",
      surface: "#111827",
      text: "#FFFFFF",
      mutedText: "#CBD5E1",
      border: "#334155",
    },
    typography: {
      heading: "Space Grotesk",
      body: "Inter",
      code: "JetBrains Mono",
    },
    appearance: {
      borderRadius: "large",
      cardStyle: "glass",
      profileImageStyle: "circle",
    },
    active: false,
  },
  {
    key: "aiFuturistic",
    name: "AI Futuristic",
    description:
      "An advanced immersive theme for AI projects and interactive experiences.",
    defaultMode: "dark",
    animationIntensity: "high",
    colors: {
      primary: "#020617",
      secondary: "#2563EB",
      accent: "#22D3EE",
      background: "#000000",
      surface: "#0B1120",
      text: "#F8FAFC",
      mutedText: "#94A3B8",
      border: "#1E3A5F",
    },
    typography: {
      heading: "Space Grotesk",
      body: "Inter",
      code: "JetBrains Mono",
    },
    appearance: {
      borderRadius: "large",
      cardStyle: "glass",
      profileImageStyle: "professionalFrame",
    },
    active: false,
  },
];

export function getThemeByKey(
  key: ThemeKey,
  themes: ThemePreset[] = defaultThemes,
): ThemePreset | undefined {
  return themes.find((theme) => theme.key === key);
}

export function getActiveThemes(
  themes: ThemePreset[] = defaultThemes,
): ThemePreset[] {
  return themes.filter((theme) => theme.active);
}