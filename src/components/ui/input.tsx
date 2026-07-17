import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightElement?: ReactNode;
  containerClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      id,
      label,
      description,
      error,
      leftIcon,
      rightElement,
      className,
      containerClassName,
      required,
      disabled,
      ...props
    },
    ref,
  ) {
    const inputId =
      id ??
      props.name ??
      `input-${label
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`;

    const descriptionId = description
      ? `${inputId}-description`
      : undefined;

    const errorId = error
      ? `${inputId}-error`
      : undefined;

    const describedBy = [
      descriptionId,
      errorId,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            {label}

            {required && (
              <span
                aria-hidden="true"
                className="ml-1 text-red-400"
              >
                *
              </span>
            )}
          </label>
        )}

        {description && (
          <p
            id={descriptionId}
            className="mb-2 text-sm text-slate-500"
          >
            {description}
          </p>
        )}

        <div className="relative">
          {leftIcon && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500"
            >
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            required={required}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={
              describedBy || undefined
            }
            className={cn(
              "h-11 w-full rounded-xl border",
              "bg-slate-950/70 px-3.5",
              "text-sm text-slate-100",
              "placeholder:text-slate-600",
              "transition duration-200",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "disabled:cursor-not-allowed",
              "disabled:opacity-50",
              leftIcon && "pl-10",
              rightElement && "pr-11",
              error
                ? [
                    "border-red-500/60",
                    "focus-visible:border-red-400",
                    "focus-visible:ring-red-500/25",
                  ].join(" ")
                : [
                    "border-slate-700",
                    "hover:border-slate-600",
                    "focus-visible:border-blue-500",
                    "focus-visible:ring-blue-500/25",
                  ].join(" "),
              className,
            )}
            {...props}
          />

          {rightElement && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightElement}
            </div>
          )}
        </div>

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
  },
);