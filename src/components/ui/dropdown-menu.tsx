"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  Check,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";

type DropdownMenuItem = {
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  selected?: boolean;
  onSelect?: () => void;
};

type DropdownMenuProps = {
  trigger: ReactNode;
  items: DropdownMenuItem[];
  align?: "left" | "right";
  width?: "small" | "medium" | "large";
  className?: string;
};

const widthClasses = {
  small: "w-48",
  medium: "w-60",
  large: "w-72",
};

export function DropdownMenu({
  trigger,
  items,
  align = "left",
  width = "medium",
  className,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handlePointerDown,
    );

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handlePointerDown,
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-block",
        className,
      )}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex"
      >
        {trigger}
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className={cn(
            "absolute top-full z-50 mt-2",
            "overflow-hidden rounded-xl",
            "border border-slate-700",
            "bg-slate-950 p-1.5",
            "shadow-2xl shadow-black/40",
            align === "right"
              ? "right-0"
              : "left-0",
            widthClasses[width],
          )}
        >
          {items.map((item, index) => (
            <button
              key={`${item.label}-${index}`}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              onClick={() => {
                if (item.disabled) {
                  return;
                }

                item.onSelect?.();
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-3",
                "rounded-lg px-3 py-2.5",
                "text-left text-sm",
                "transition-colors duration-150",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-blue-500/40",
                "disabled:cursor-not-allowed",
                "disabled:opacity-40",
                item.danger
                  ? [
                      "text-red-300",
                      "hover:bg-red-500/10",
                      "hover:text-red-200",
                    ].join(" ")
                  : [
                      "text-slate-300",
                      "hover:bg-slate-800",
                      "hover:text-white",
                    ].join(" "),
              )}
            >
              {item.icon && (
                <span
                  aria-hidden="true"
                  className="shrink-0 text-slate-500"
                >
                  {item.icon}
                </span>
              )}

              <span className="min-w-0 flex-1">
                {item.label}
              </span>

              {item.selected && (
                <Check
                  aria-hidden="true"
                  size={16}
                  className="shrink-0 text-blue-400"
                />
              )}

              {item.shortcut && (
                <span className="shrink-0 text-xs text-slate-600">
                  {item.shortcut}
                </span>
              )}

              {!item.shortcut &&
                !item.selected &&
                item.label.endsWith("…") && (
                  <ChevronRight
                    aria-hidden="true"
                    size={16}
                    className="shrink-0 text-slate-600"
                  />
                )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}