import Link from "next/link";
import {
  ChevronRight,
  Home,
} from "lucide-react";

import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
  className?: string;
};

export function Breadcrumb({
  items,
  showHomeIcon = true,
  className,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "w-full",
        className,
      )}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast =
            index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  size={15}
                  className="shrink-0 text-slate-600"
                />
              )}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-2",
                    "text-sm font-medium text-slate-500",
                    "transition-colors duration-150",
                    "hover:text-slate-200",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-blue-500/40",
                    "motion-reduce:transition-none",
                  )}
                >
                  {index === 0 &&
                    showHomeIcon && (
                      <Home
                        aria-hidden="true"
                        size={15}
                      />
                    )}

                  <span>
                    {item.label}
                  </span>
                </Link>
              ) : (
                <span
                  aria-current={
                    isLast
                      ? "page"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300"
                >
                  {index === 0 &&
                    showHomeIcon && (
                      <Home
                        aria-hidden="true"
                        size={15}
                      />
                    )}

                  <span>
                    {item.label}
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}