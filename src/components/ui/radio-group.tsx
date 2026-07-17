"use client";

import {
  useId,
  type InputHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type RadioOption = {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
};

type RadioGroupProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value"
> & {
  label?: string;
  description?: string;
  error?: string;
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  orientation?: "vertical" | "horizontal";
  containerClassName?: string;
};

export function RadioGroup({
  label,
  description,
  error,
  name,
  options,
  defaultValue,
  orientation = "vertical",
  containerClassName,
  required,
  disabled,
  ...props
}: RadioGroupProps) {
  const groupId = useId();

  const descriptionId = description
    ? `${groupId}-description`
    : undefined;

  const errorId = error
    ? `${groupId}-error`
    : undefined;

  const describedBy = [
    descriptionId,
    errorId,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <fieldset
  className={cn(
    "w-full",
    containerClassName,
  )}
  aria-describedby={
    describedBy || undefined
  }
  aria-invalid={Boolean(error)}
>
      {label && (
        <legend className="text-sm font-medium text-slate-200">
          {label}

          {required && (
            <span
              aria-hidden="true"
              className="ml-1 text-red-400"
            >
              *
            </span>
          )}
        </legend>
      )}

      {description && (
        <p
          id={descriptionId}
          className="mt-2 text-sm text-slate-500"
        >
          {description}
        </p>
      )}

      <div
        className={cn(
          "mt-4",
          orientation === "vertical"
            ? "space-y-4"
            : "flex flex-wrap gap-5",
        )}
      >
        {options.map((option) => {
          const optionId =
            `${groupId}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                "group flex cursor-pointer items-start gap-3",
                (disabled || option.disabled) &&
                  "cursor-not-allowed opacity-50",
              )}
            >
              <span className="relative mt-0.5 shrink-0">
                <input
                  {...props}
                  id={optionId}
                  type="radio"
                  name={name}
                  value={option.value}
                  defaultChecked={
                    defaultValue === option.value
                  }
                  required={required}
                  disabled={
                    disabled || option.disabled
                  }
                  className={cn(
                    "peer h-5 w-5 appearance-none rounded-full border",
                    "border-slate-600 bg-slate-950/70",
                    "transition duration-200",
                    "checked:border-blue-500",
                    "hover:border-slate-500",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-blue-500/30",
                    "disabled:cursor-not-allowed",
                    error &&
                      "border-red-500/70 focus-visible:ring-red-500/30",
                  )}
                />

                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute",
                    "left-1/2 top-1/2 h-2.5 w-2.5",
                    "-translate-x-1/2 -translate-y-1/2",
                    "rounded-full bg-blue-500",
                    "opacity-0 transition-opacity duration-150",
                    "peer-checked:opacity-100",
                  )}
                />
              </span>

              <span className="min-w-0">
                <span className="block text-sm font-medium text-slate-200">
                  {option.label}
                </span>

                {option.description && (
                  <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                    {option.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-3 text-sm text-red-300"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}