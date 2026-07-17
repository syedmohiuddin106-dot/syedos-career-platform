import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type CardVariant =
  | "solid"
  | "glass"
  | "elevated"
  | "editorial";

type CardPadding =
  | "none"
  | "small"
  | "medium"
  | "large";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
};

const variantClasses: Record<CardVariant, string> = {
  solid:
    "border border-slate-800 bg-slate-950/70 shadow-sm",

  glass:
    "border border-slate-700/60 bg-slate-900/65 shadow-xl backdrop-blur-xl",

  elevated:
    "border border-blue-500/20 bg-slate-900 shadow-2xl shadow-blue-950/20",

  editorial:
    "border-l-4 border-blue-500 bg-slate-950/40 shadow-none",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  small: "p-4",
  medium: "p-6",
  large: "p-8 md:p-10",
};

export function Card({
  children,
  variant = "solid",
  padding = "medium",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "transition-all duration-300 ease-out",
        "motion-reduce:transition-none",
        variantClasses[variant],
        paddingClasses[padding],
        interactive &&
          "hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}