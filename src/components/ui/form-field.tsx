import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FormFieldProps = {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function FormField({
  label,
  description,
  error,
  required = false,
  htmlFor,
  children,
  actions,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("w-full", className)}>
      {(label || actions) && (
        <div className="mb-2 flex items-start justify-between gap-4">
          {label ? (
            <label
              htmlFor={htmlFor}
              className="text-sm font-medium text-slate-200"
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
          ) : (
            <span />
          )}

          {actions && (
            <div className="shrink-0">
              {actions}
            </div>
          )}
        </div>
      )}

      {description && (
        <p className="mb-2 text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      )}

      {children}

      {error && (
        <p
          role="alert"
          className="mt-2 text-sm text-red-300"
        >
          {error}
        </p>
      )}
    </div>
  );
}