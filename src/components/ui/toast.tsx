"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

type ToastVariant =
  | "info"
  | "success"
  | "warning"
  | "danger";

type ToastItem = {
  id: number;
  title: string;
  description?: string;
  variant: ToastVariant;
};

type ShowToastOptions = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
};

type ToastContextValue = {
  showToast: (options: ShowToastOptions) => void;
};

const ToastContext =
  createContext<ToastContextValue | null>(null);

const variantClasses: Record<ToastVariant, string> = {
  info:
    "border-cyan-500/30 bg-slate-950 text-cyan-100",

  success:
    "border-green-500/30 bg-slate-950 text-green-100",

  warning:
    "border-amber-500/30 bg-slate-950 text-amber-100",

  danger:
    "border-red-500/30 bg-slate-950 text-red-100",
};

const descriptionClasses: Record<
  ToastVariant,
  string
> = {
  info: "text-cyan-200/70",
  success: "text-green-200/70",
  warning: "text-amber-200/70",
  danger: "text-red-200/70",
};

const iconClasses: Record<ToastVariant, string> = {
  info: "text-cyan-300",
  success: "text-green-300",
  warning: "text-amber-300",
  danger: "text-red-300",
};

const icons: Record<ToastVariant, ReactNode> = {
  info: <Info size={20} />,
  success: <CheckCircle2 size={20} />,
  warning: <TriangleAlert size={20} />,
  danger: <AlertCircle size={20} />,
};

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toasts, setToasts] = useState<ToastItem[]>(
    [],
  );

  const dismissToast = useCallback(
    (id: number) => {
      setToasts((current) =>
        current.filter((toast) => toast.id !== id),
      );
    },
    [],
  );

  const showToast = useCallback(
    ({
      title,
      description,
      variant = "info",
      duration = 4000,
    }: ShowToastOptions) => {
      const id = Date.now();

      setToasts((current) => [
        ...current,
        {
          id,
          title,
          description,
          variant,
        },
      ]);

      window.setTimeout(() => {
        dismissToast(id);
      }, duration);
    },
    [dismissToast],
  );

  const value = useMemo(
    () => ({
      showToast,
    }),
    [showToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed bottom-5 right-5 z-[70] flex w-[min(24rem,calc(100vw-2.5rem))] flex-col gap-3"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role={
              toast.variant === "danger"
                ? "alert"
                : "status"
            }
            className={cn(
              "pointer-events-auto flex items-start gap-3",
              "rounded-2xl border p-4",
              "shadow-2xl shadow-black/40",
              variantClasses[toast.variant],
            )}
          >
            <div
              aria-hidden="true"
              className={cn(
                "mt-0.5 shrink-0",
                iconClasses[toast.variant],
              )}
            >
              {icons[toast.variant]}
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-semibold">
                {toast.title}
              </p>

              {toast.description && (
                <p
                  className={cn(
                    "mt-1 text-sm leading-relaxed",
                    descriptionClasses[
                      toast.variant
                    ],
                  )}
                >
                  {toast.description}
                </p>
              )}
            </div>

            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() =>
                dismissToast(toast.id)
              }
              className="shrink-0 rounded-lg p-1 text-slate-500 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X size={17} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider.",
    );
  }

  return context;
}