import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type IconContainerVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type IconContainerSize =
  | "small"
  | "medium"
  | "large";

type IconContainerProps = {
  children: ReactNode;
  variant?: IconContainerVariant;
  size?: IconContainerSize;
  rounded?: "medium" | "large" | "full";
  className?: string;
  label?: string;
};

const variantClasses: Record<
  IconContainerVariant,
  string
> = {
  default:
    "border-slate-700 bg-slate-800/70 text-slate-200",

  primary:
    "border-blue-500/30 bg-blue-500/15 text-blue-300",

  success:
    "border-green-500/30 bg-green-500/15 text-green-300",

  warning:
    "border-amber-500/30 bg-amber-500/15 text-amber-300",

  danger:
    "border-red-500/30 bg-red-500/15 text-red-300",

  info:
    "border-cyan-500/30 bg-cyan-500/15 text-cyan-300",
};

const sizeClasses: Record<IconContainerSize, string> = {
  small: "h-9 w-9",
  medium: "h-11 w-11",
  large: "h-14 w-14",
};

const roundedClasses = {
  medium: "rounded-xl",
  large: "rounded-2xl",
  full: "rounded-full",
};

export function IconContainer({
  children,
  variant = "default",
  size = "medium",
  rounded = "medium",
  className,
  label,
}: IconContainerProps) {
  return (
    <span
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-flex shrink-0 items-center justify-center border",
        "transition-colors duration-200",
        "motion-reduce:transition-none",
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        className,
      )}
    >
      {children}
    </span>
  );
}