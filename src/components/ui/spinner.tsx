import { cn } from "@/lib/utils";

type SpinnerSize =
  | "small"
  | "medium"
  | "large";

type SpinnerVariant =
  | "primary"
  | "light"
  | "success"
  | "warning"
  | "danger";

type SpinnerProps = {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  className?: string;
};

const sizeClasses: Record<SpinnerSize, string> = {
  small: "h-4 w-4 border-2",
  medium: "h-6 w-6 border-2",
  large: "h-10 w-10 border-[3px]",
};

const variantClasses: Record<SpinnerVariant, string> = {
  primary:
    "border-blue-500/25 border-t-blue-400",

  light:
    "border-white/25 border-t-white",

  success:
    "border-green-500/25 border-t-green-400",

  warning:
    "border-amber-500/25 border-t-amber-400",

  danger:
    "border-red-500/25 border-t-red-400",
};

export function Spinner({
  size = "medium",
  variant = "primary",
  label = "Loading",
  className,
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-block animate-spin rounded-full",
        "motion-reduce:animate-none",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      <span className="sr-only">
        {label}
      </span>
    </span>
  );
}