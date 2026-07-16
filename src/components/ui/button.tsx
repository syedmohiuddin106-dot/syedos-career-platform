import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger";

type ButtonSize =
  | "small"
  | "medium"
  | "large";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-blue-600 text-white shadow-lg shadow-blue-950/20 hover:bg-blue-500 hover:shadow-blue-500/20 active:bg-blue-700",

  secondary:
    "border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-blue-500/70 hover:bg-slate-800",

  ghost:
    "border border-transparent bg-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white",

  danger:
    "border border-red-500/40 bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "min-h-9 px-3.5 py-2 text-sm",
  medium: "min-h-11 px-5 py-2.5 text-sm",
  large: "min-h-12 px-6 py-3 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "medium",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
        "motion-reduce:transition-none",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : (
        leftIcon
      )}

      <span>{loading ? "Please wait..." : children}</span>

      {!loading && rightIcon}
    </button>
  );
}