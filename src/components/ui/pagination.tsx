"use client";

import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  className?: string;
};

type PaginationItem = number | "ellipsis";

function createPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): PaginationItem[] {
  const totalVisiblePages =
    siblingCount * 2 + 5;

  if (totalPages <= totalVisiblePages) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );
  }

  const leftSibling = Math.max(
    currentPage - siblingCount,
    1,
  );

  const rightSibling = Math.min(
    currentPage + siblingCount,
    totalPages,
  );

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis =
    rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItems = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, index) => index + 1,
    );

    return [
      ...leftItems,
      "ellipsis",
      totalPages,
    ];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItems = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, index) =>
        totalPages -
        (3 + siblingCount * 2) +
        index +
        1,
    );

    return [
      1,
      "ellipsis",
      ...rightItems,
    ];
  }

  return [
    1,
    "ellipsis",
    ...Array.from(
      {
        length:
          rightSibling -
          leftSibling +
          1,
      },
      (_, index) =>
        leftSibling + index,
    ),
    "ellipsis",
    totalPages,
  ];
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  const safeTotalPages = Math.max(
    totalPages,
    1,
  );

  const safeCurrentPage = Math.min(
    Math.max(currentPage, 1),
    safeTotalPages,
  );

  const pages = createPaginationRange(
    safeCurrentPage,
    safeTotalPages,
    siblingCount,
  );

  function changePage(page: number) {
    if (
      page < 1 ||
      page > safeTotalPages ||
      page === safeCurrentPage
    ) {
      return;
    }

    onPageChange?.(page);
  }

  return (
    <nav
      aria-label="Pagination"
      className={cn(
        "flex flex-wrap items-center justify-between gap-4",
        className,
      )}
    >
      <p className="text-sm text-slate-500">
        Page{" "}
        <span className="font-medium text-slate-300">
          {safeCurrentPage}
        </span>{" "}
        of{" "}
        <span className="font-medium text-slate-300">
          {safeTotalPages}
        </span>
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          aria-label="Go to previous page"
          disabled={safeCurrentPage === 1}
          onClick={() =>
            changePage(safeCurrentPage - 1)
          }
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-lg",
            "border border-slate-700 px-3",
            "text-sm font-medium text-slate-300",
            "transition-colors duration-150",
            "hover:border-blue-500/50",
            "hover:bg-slate-900",
            "hover:text-white",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-blue-500/40",
            "disabled:cursor-not-allowed",
            "disabled:opacity-40",
          )}
        >
          <ChevronLeft size={17} />
          Previous
        </button>

        <div className="flex items-center gap-1">
          {pages.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center text-slate-600"
                >
                  <MoreHorizontal size={18} />
                </span>
              );
            }

            const selected =
              item === safeCurrentPage;

            return (
              <button
                key={item}
                type="button"
                aria-label={`Go to page ${item}`}
                aria-current={
                  selected
                    ? "page"
                    : undefined
                }
                onClick={() =>
                  changePage(item)
                }
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center",
                  "rounded-lg border text-sm font-medium",
                  "transition-colors duration-150",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-blue-500/40",
                  selected
                    ? [
                        "border-blue-500",
                        "bg-blue-500",
                        "text-white",
                      ].join(" ")
                    : [
                        "border-slate-700",
                        "text-slate-400",
                        "hover:border-blue-500/50",
                        "hover:bg-slate-900",
                        "hover:text-white",
                      ].join(" "),
                )}
              >
                {item}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Go to next page"
          disabled={
            safeCurrentPage === safeTotalPages
          }
          onClick={() =>
            changePage(safeCurrentPage + 1)
          }
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-lg",
            "border border-slate-700 px-3",
            "text-sm font-medium text-slate-300",
            "transition-colors duration-150",
            "hover:border-blue-500/50",
            "hover:bg-slate-900",
            "hover:text-white",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-blue-500/40",
            "disabled:cursor-not-allowed",
            "disabled:opacity-40",
          )}
        >
          Next
          <ChevronRight size={17} />
        </button>
      </div>
    </nav>
  );
}