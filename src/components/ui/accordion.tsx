"use client";

import {
  useId,
  useState,
  type ReactNode,
} from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionItem = {
  value: string;
  title: string;
  content: ReactNode;
  disabled?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: string[];
  allowMultiple?: boolean;
  className?: string;
};

export function Accordion({
  items,
  defaultOpen = [],
  allowMultiple = false,
  className,
}: AccordionProps) {
  const generatedId = useId();
  const [openItems, setOpenItems] = useState<string[]>(
    defaultOpen,
  );

  function toggleItem(value: string) {
    setOpenItems((current) => {
      const isOpen = current.includes(value);

      if (allowMultiple) {
        return isOpen
          ? current.filter((item) => item !== value)
          : [...current, value];
      }

      return isOpen ? [] : [value];
    });
  }

  return (
    <div
      className={cn(
        "divide-y divide-slate-800 overflow-hidden rounded-2xl border border-slate-800",
        className,
      )}
    >
      {items.map((item) => {
        const isOpen = openItems.includes(item.value);
        const triggerId = `${generatedId}-${item.value}-trigger`;
        const panelId = `${generatedId}-${item.value}-panel`;

        return (
          <div key={item.value}>
            <button
              id={triggerId}
              type="button"
              disabled={item.disabled}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.value)}
              className={cn(
                "flex w-full items-center justify-between gap-4",
                "bg-slate-950/50 px-5 py-4 text-left",
                "transition-colors duration-200",
                "hover:bg-slate-900/70",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-inset",
                "focus-visible:ring-blue-500/40",
                "disabled:cursor-not-allowed",
                "disabled:opacity-40",
              )}
            >
              <span className="font-medium text-slate-100">
                {item.title}
              </span>

              <ChevronDown
                aria-hidden="true"
                size={20}
                className={cn(
                  "shrink-0 text-slate-500",
                  "transition-transform duration-200",
                  isOpen && "rotate-180",
                  "motion-reduce:transition-none",
                )}
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="bg-slate-950/30 px-5 py-5 text-sm leading-relaxed text-slate-400"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}