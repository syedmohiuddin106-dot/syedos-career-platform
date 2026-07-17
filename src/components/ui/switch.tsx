"use client";

import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
  description?: string;
  error?: string;
  containerClassName?: string;
};

export const Switch = forwardRef<
  HTMLInputElement,
  SwitchProps
>(function Switch(
  {
    id,
    label,
    description,
    error,
    containerClassName,
    className,
    disabled,
    required,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const switchId = id ?? props.name ?? generatedId;

  const descriptionId = description
    ? `${switchId}-description`
    : undefined;

  const errorId = error
    ? `${switchId}-error`
    : undefined;

  const describedBy = [
    descriptionId,
    errorId,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cn("w-full", containerClassName)}>
      <label
        htmlFor={switchId}
        className={cn(
          "flex cursor-pointer items-start justify-between gap-5",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span className="min-w-0">
          <span className="block text-sm font-medium text-slate-200">
            {label}

            {required && (
              <span
                aria-hidden="true"
                className="ml-1 text-red-400"
              >
                *
              </span>
            )}
          </span>

          {description && (
            <span
              id={descriptionId}
              className="mt-1 block text-sm leading-relaxed text-slate-500"
            >
              {description}
            </span>
          )}
        </span>

        <span className="relative mt-0.5 inline-flex h-6 w-11 shrink-0">
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            role="switch"
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy || undefined}
            className={cn(
              "peer sr-only",
              className,
            )}
            {...props}
          />

          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 rounded-full border",
              "border-slate-600 bg-slate-800",
              "transition-colors duration-200",
              "peer-checked:border-blue-500",
              "peer-checked:bg-blue-500",
              "peer-focus-visible:ring-2",
              "peer-focus-visible:ring-blue-500/30",
              "peer-disabled:cursor-not-allowed",
              error &&
                "border-red-500/70 peer-focus-visible:ring-red-500/30",
            )}
          />

          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute",
              "left-1 top-1 h-4 w-4 rounded-full",
              "bg-white shadow-sm",
              "transition-transform duration-200",
              "peer-checked:translate-x-5",
              "motion-reduce:transition-none",
            )}
          />
        </span>
      </label>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-sm text-red-300"
        >
          {error}
        </p>
      )}
    </div>
  );
});