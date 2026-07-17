"use client";

import {
  useEffect,
  useId,
  type ReactNode,
} from "react";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

type ModalSize =
  | "small"
  | "medium"
  | "large";

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  closeOnBackdrop?: boolean;
  onClose: () => void;
  className?: string;
};

const sizeClasses: Record<ModalSize, string> = {
  small: "max-w-md",
  medium: "max-w-2xl",
  large: "max-w-4xl",
};

export function Modal({
  open,
  title,
  description,
  children,
  footer,
  size = "medium",
  closeOnBackdrop = true,
  onClose,
  className,
}: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={
          closeOnBackdrop
            ? onClose
            : undefined
        }
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={
          description
            ? descriptionId
            : undefined
        }
        className={cn(
          "relative z-10 w-full overflow-hidden rounded-2xl",
          "border border-slate-700",
          "bg-slate-950 shadow-2xl",
          "shadow-black/50",
          sizeClasses[size],
          className,
        )}
      >
        <header className="flex items-start justify-between gap-5 border-b border-slate-800 px-6 py-5">
          <div className="min-w-0">
            <h2
              id={titleId}
              className="text-xl"
            >
              {title}
            </h2>

            {description && (
              <p
                id={descriptionId}
                className="mt-2 text-sm text-slate-400"
              >
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className={cn(
              "shrink-0 rounded-lg p-2",
              "text-slate-500",
              "transition-colors duration-200",
              "hover:bg-slate-800",
              "hover:text-white",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-blue-500/40",
            )}
          >
            <X size={20} />
          </button>
        </header>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
          {children}
        </div>

        {footer && (
          <footer className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-800 px-6 py-4">
            {footer}
          </footer>
        )}
      </section>
    </div>
  );
}