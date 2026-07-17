import { cn } from "@/lib/utils";

type ProgressVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";

type ProgressSize =
  | "small"
  | "medium"
  | "large";

type ProgressProps = {
  value: number;
  label?: string;
  showValue?: boolean;
  variant?: ProgressVariant;
  size?: ProgressSize;
  className?: string;
};

const progressColors: Record<ProgressVariant, string> = {
  primary: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
  info: "bg-cyan-500",
};

const progressSizes: Record<ProgressSize, string> = {
  small: "h-1.5",
  medium: "h-2.5",
  large: "h-4",
};

export function Progress({
  value,
  label,
  showValue = true,
  variant = "primary",
  size = "medium",
  className,
}: ProgressProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="mb-2 flex items-center justify-between gap-4">
          {label ? (
            <p className="text-sm font-medium text-slate-300">
              {label}
            </p>
          ) : (
            <span />
          )}

          {showValue && (
            <span className="syedos-code-text text-xs font-semibold text-slate-400">
              {safeValue}%
            </span>
          )}
        </div>
      )}

      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-slate-800",
          progressSizes[size],
        )}
        role="progressbar"
        aria-label={label ?? "Progress"}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
      >
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-500 ease-out",
            "motion-reduce:transition-none",
            progressColors[variant],
          )}
          style={{
            width: `${safeValue}%`,
          }}
        />
      </div>
    </div>
  );
}