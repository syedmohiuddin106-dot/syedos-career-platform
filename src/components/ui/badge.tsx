import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

type BadgeSize =
  | "small"
  | "medium";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
};

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "border border-slate-700 bg-slate-800/70 text-slate-200",

  primary:
    "border border-blue-500/30 bg-blue-500/15 text-blue-300",

  success:
    "border border-green-500/30 bg-green-500/15 text-green-300",

  warning:
    "border border-amber-500/30 bg-amber-500/15 text-amber-300",

  danger:
    "border border-red-500/30 bg-red-500/15 text-red-300",

  info:
    "border border-cyan-500/30 bg-cyan-500/15 text-cyan-300",

  outline:
    "border border-slate-600 bg-transparent text-slate-300",
};

const sizeClasses: Record<BadgeSize, string> = {
  small: "px-2.5 py-1 text-xs",
  medium: "px-3 py-1.5 text-sm",
};

const dotClasses: Record<BadgeVariant, string> = {
  default: "bg-slate-400",
  primary: "bg-blue-400",
  success: "bg-green-400",
  warning: "bg-amber-400",
  danger: "bg-red-400",
  info: "bg-cyan-400",
  outline: "bg-slate-400",
};

export function Badge({
  children,
  variant = "default",
  size = "small",
  dot = false,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        "transition-colors duration-200",
        "motion-reduce:transition-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            dotClasses[variant],
          )}
        />
      )}

      {children}
    </span>
  );
}