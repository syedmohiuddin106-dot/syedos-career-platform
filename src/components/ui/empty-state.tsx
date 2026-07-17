import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  secondaryAction?: ReactNode;
  compact?: boolean;
  className?: string;
};

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  compact = false,
  className,
}: EmptyStateProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center",
        "rounded-2xl border border-dashed border-slate-700",
        "bg-slate-950/45 text-center",
        compact ? "px-5 py-8" : "px-6 py-14",
        className,
      )}
    >
      {icon && (
        <div
          aria-hidden="true"
          className={cn(
            "flex items-center justify-center",
            "rounded-2xl border border-slate-700",
            "bg-slate-900 text-slate-300",
            compact ? "h-11 w-11" : "h-14 w-14",
          )}
        >
          {icon}
        </div>
      )}

      <h3
        className={cn(
          "font-heading font-semibold text-white",
          icon && "mt-5",
          compact ? "text-lg" : "text-xl",
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "mx-auto mt-2 max-w-lg text-slate-400",
          compact ? "text-sm" : "text-base",
        )}
      >
        {description}
      </p>

      {(action || secondaryAction) && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {action}
          {secondaryAction}
        </div>
      )}
    </section>
  );
}