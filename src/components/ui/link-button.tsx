import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LinkButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

type LinkButtonSize =
  | "small"
  | "medium"
  | "large";

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
};

const variantClasses: Record<LinkButtonVariant, string> = {
  primary:
    "border border-transparent bg-blue-600 text-white shadow-lg shadow-blue-950/20 hover:bg-blue-500 hover:text-white hover:shadow-blue-500/20 active:bg-blue-700",

  secondary:
    "border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-blue-500/70 hover:bg-slate-800 hover:text-white",

  ghost:
    "border border-transparent bg-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white",
};

const sizeClasses: Record<LinkButtonSize, string> = {
  small: "min-h-9 px-3.5 py-2 text-sm",
  medium: "min-h-11 px-5 py-2.5 text-sm",
  large: "min-h-12 px-6 py-3 text-base",
};

export function LinkButton({
  children,
  href,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  external = false,
  download = false,
  ariaLabel,
}: LinkButtonProps) {
  const sharedClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    "motion-reduce:transition-none",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if (external || download) {
    return (
      <a
        href={href}
        className={sharedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
        aria-label={ariaLabel}
      >
        {leftIcon}

        <span>{children}</span>

        {rightIcon}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={sharedClasses}
      aria-label={ariaLabel}
    >
      {leftIcon}

      <span>{children}</span>

      {rightIcon}
    </Link>
  );
}