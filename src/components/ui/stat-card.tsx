import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StatCardTrend = {
  value: string;
  direction: "up" | "down" | "neutral";
};

type StatCardProps = {
  label: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: StatCardTrend;
  className?: string;
};

const trendClasses: Record<
  StatCardTrend["direction"],
  string
> = {
  up: "text-green-300",
  down: "text-red-300",
  neutral: "text-slate-400",
};

const trendSymbols: Record<
  StatCardTrend["direction"],
  string
> = {
  up: "↑",
  down: "↓",
  neutral: "•",
};

export function StatCard({
  label,
  value,
  description,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-800",
        "bg-slate-950/65 p-6 shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:border-blue-500/40 hover:shadow-lg",
        "hover:shadow-blue-950/20",
        "motion-reduce:transition-none",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {label}
          </p>

          <p className="mt-2 font-heading text-3xl font-bold text-white">
            {value}
          </p>
        </div>

        {icon && (
          <div
            aria-hidden="true"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-300"
          >
            {icon}
          </div>
        )}
      </div>

      {(description || trend) && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {trend && (
            <span
              className={cn(
                "text-sm font-semibold",
                trendClasses[trend.direction],
              )}
            >
              {trendSymbols[trend.direction]} {trend.value}
            </span>
          )}

          {description && (
            <p className="text-sm text-slate-400">
              {description}
            </p>
          )}
        </div>
      )}
    </article>
  );
}