import {
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    description?: string;
    error?: string;
    showCharacterCount?: boolean;
    containerClassName?: string;
  };

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(function Textarea(
  {
    id,
    label,
    description,
    error,
    showCharacterCount = false,
    maxLength,
    value,
    defaultValue,
    className,
    containerClassName,
    required,
    disabled,
    ...props
  },
  ref,
) {
  const textareaId =
    id ??
    props.name ??
    `textarea-${label
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`;

  const descriptionId = description
    ? `${textareaId}-description`
    : undefined;

  const errorId = error
    ? `${textareaId}-error`
    : undefined;

  const countId = showCharacterCount
    ? `${textareaId}-count`
    : undefined;

  const describedBy = [
    descriptionId,
    errorId,
    countId,
  ]
    .filter(Boolean)
    .join(" ");

  const currentValue =
    typeof value === "string"
      ? value
      : typeof defaultValue === "string"
        ? defaultValue
        : "";

  return (
    <div className={cn("w-full", containerClassName)}>
      {label && (
        <label
          htmlFor={textareaId}
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

      <textarea
        ref={ref}
        id={textareaId}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        aria-invalid={Boolean(error)}
        aria-describedby={
          describedBy || undefined
        }
        className={cn(
          "min-h-32 w-full resize-y rounded-xl border",
          "bg-slate-950/70 px-3.5 py-3",
          "text-sm leading-relaxed text-slate-100",
          "placeholder:text-slate-600",
          "transition duration-200",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "disabled:cursor-not-allowed",
          "disabled:opacity-50",
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

      <div className="mt-2 flex items-start justify-between gap-4">
        <div>
          {error && (
            <p
              id={errorId}
              role="alert"
              className="text-sm text-red-300"
            >
              {error}
            </p>
          )}
        </div>

        {showCharacterCount && (
          <p
            id={countId}
            className="shrink-0 text-xs text-slate-500"
          >
            {currentValue.length}
            {maxLength ? ` / ${maxLength}` : ""}
          </p>
        )}
      </div>
    </div>
  );
});