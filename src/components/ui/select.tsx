import {
  forwardRef,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SelectProps =
  SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    description?: string;
    error?: string;
    options: SelectOption[];
    placeholder?: string;
    leftIcon?: ReactNode;
    containerClassName?: string;
  };

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(function Select(
  {
    id,
    label,
    description,
    error,
    options,
    placeholder,
    leftIcon,
    className,
    containerClassName,
    required,
    disabled,
    ...props
  },
  ref,
) {
  const selectId =
    id ??
    props.name ??
    `select-${label
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`;

  const descriptionId = description
    ? `${selectId}-description`
    : undefined;

  const errorId = error
    ? `${selectId}-error`
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
          htmlFor={selectId}
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

        <select
          ref={ref}
          id={selectId}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={
            describedBy || undefined
          }
          className={cn(
            "h-11 w-full appearance-none rounded-xl border",
            "bg-slate-950/70 px-3.5 pr-10",
            "text-sm text-slate-100",
            "transition duration-200",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            leftIcon && "pl-10",
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
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          aria-hidden="true"
          size={18}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
        />
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
});