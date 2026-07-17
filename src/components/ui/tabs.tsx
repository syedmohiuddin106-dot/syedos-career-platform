"use client";

import {
  useId,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type TabItem = {
  value: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
};

type TabsProps = {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
};

export function Tabs({
  items,
  defaultValue,
  className,
}: TabsProps) {
  const generatedId = useId();

  const firstEnabledTab =
    items.find((item) => !item.disabled)?.value ?? "";

  const [activeTab, setActiveTab] = useState(
    defaultValue ?? firstEnabledTab,
  );

  const activeItem =
    items.find((item) => item.value === activeTab) ??
    items.find((item) => !item.disabled);

  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Content tabs"
        className="flex flex-wrap gap-2 border-b border-slate-800"
      >
        {items.map((item) => {
          const selected = item.value === activeTab;
          const tabId = `${generatedId}-${item.value}-tab`;
          const panelId = `${generatedId}-${item.value}-panel`;

          return (
            <button
              key={item.value}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              disabled={item.disabled}
              onClick={() => setActiveTab(item.value)}
              className={cn(
                "relative px-4 py-3 text-sm font-medium",
                "transition-colors duration-200",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-blue-500/30",
                "disabled:cursor-not-allowed",
                "disabled:opacity-40",
                selected
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200",
              )}
            >
              {item.label}

              <span
                aria-hidden="true"
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-full",
                  "bg-blue-500",
                  selected ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          );
        })}
      </div>

      {activeItem && (
        <div
          id={`${generatedId}-${activeItem.value}-panel`}
          role="tabpanel"
          aria-labelledby={`${generatedId}-${activeItem.value}-tab`}
          className="pt-6"
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}