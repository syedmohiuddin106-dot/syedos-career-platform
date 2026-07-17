"use client";

import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
} from "react";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type CheckboxProps =
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type"
  > & {
    label: string;
    description?: string;
    error?: string;
    containerClassName?: string;
  };

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function Checkbox(
  {
    id,
    label,
    description,
    error,
    className,
    containerClassName,
    disabled,
    required,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const checkboxId =
    id ?? props.name ?? generatedId;

  const descriptionId = description
    ? `${checkboxId}-description`
    : undefined;

  const errorId = error
    ? `${checkboxId}-error`
    : undefined;

  const describedBy = [
    descriptionId,
    errorId,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cn(
        "w-full",
        containerClassName,
      )}
    >
      <label
        htmlFor={checkboxId}
        className={cn(
          "group flex cursor-pointer items-start gap-3",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        <span className="relative mt-0.5 shrink-0">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={
              describedBy || undefined
            }
            className={cn(
              "peer h-5 w-5 appearance-none rounded-md border",
              "border-slate-600 bg-slate-950/70",
              "transition duration-200",
              "checked:border-blue-500",
              "checked:bg-blue-500",
              "hover:border-slate-500",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-blue-500/30",
              "disabled:cursor-not-allowed",
              error &&
                "border-red-500/70 focus-visible:ring-red-500/30",
              className,
            )}
            {...props}
          />

          <Check
            aria-hidden="true"
            size={14}
            strokeWidth={3}
            className={cn(
              "pointer-events-none absolute",
              "left-1/2 top-1/2",
              "-translate-x-1/2 -translate-y-1/2",
              "text-white opacity-0",
              "transition-opacity duration-150",
              "peer-checked:opacity-100",
            )}
          />
        </span>

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
      </label>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 pl-8 text-sm text-red-300"
        >
          {error}
        </p>
      )}
    </div>
  );
});