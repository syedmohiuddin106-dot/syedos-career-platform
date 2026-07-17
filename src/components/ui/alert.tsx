"use client";

import type { ReactNode } from "react";

import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "danger";

type AlertProps = {
  title: string;
  description?: string;
  variant?: AlertVariant;
  action?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
};

const variantClasses: Record<AlertVariant, string> = {
  info: [
    "border-cyan-500/30",
    "bg-cyan-500/10",
    "text-cyan-100",
  ].join(" "),

  success: [
    "border-green-500/30",
    "bg-green-500/10",
    "text-green-100",
  ].join(" "),

  warning: [
    "border-amber-500/30",
    "bg-amber-500/10",
    "text-amber-100",
  ].join(" "),

  danger: [
    "border-red-500/30",
    "bg-red-500/10",
    "text-red-100",
  ].join(" "),
};

const descriptionClasses: Record<AlertVariant, string> = {
  info: "text-cyan-200/75",
  success: "text-green-200/75",
  warning: "text-amber-200/75",
  danger: "text-red-200/75",
};

const iconClasses: Record<AlertVariant, string> = {
  info: "text-cyan-300",
  success: "text-green-300",
  warning: "text-amber-300",
  danger: "text-red-300",
};

const alertIcons: Record<AlertVariant, ReactNode> = {
  info: <Info size={20} />,
  success: <CheckCircle2 size={20} />,
  warning: <TriangleAlert size={20} />,
  danger: <AlertCircle size={20} />,
};

export function Alert({
  title,
  description,
  variant = "info",
  action,
  dismissible = false,
  onDismiss,
  className,
}: AlertProps) {
  return (
    <div
      role={variant === "danger" ? "alert" : "status"}
      className={cn(
        "flex items-start gap-4 rounded-2xl border p-5",
        variantClasses[variant],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "mt-0.5 shrink-0",
          iconClasses[variant],
        )}
      >
        {alertIcons[variant]}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-semibold">
          {title}
        </p>

        {description && (
          <p
            className={cn(
              "mt-1 text-sm leading-relaxed",
              descriptionClasses[variant],
            )}
          >
            {description}
          </p>
        )}

        {action && (
          <div className="mt-4">
            {action}
          </div>
        )}
      </div>

      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss alert"
          onClick={onDismiss}
          className={cn(
            "shrink-0 rounded-lg p-1",
            "transition hover:bg-white/10",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-current",
            "motion-reduce:transition-none",
          )}
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}