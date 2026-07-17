"use client";

import {
  cloneElement,
  isValidElement,
  useId,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type TooltipPosition =
  | "top"
  | "bottom"
  | "left"
  | "right";

type TooltipProps = {
  content: ReactNode;
  children: ReactElement<{
    "aria-describedby"?: string;
  }>;
  position?: TooltipPosition;
  className?: string;
};

const positionClasses: Record<TooltipPosition, string> = {
  top: [
    "bottom-full left-1/2 mb-3",
    "-translate-x-1/2",
  ].join(" "),

  bottom: [
    "left-1/2 top-full mt-3",
    "-translate-x-1/2",
  ].join(" "),

  left: [
    "right-full top-1/2 mr-3",
    "-translate-y-1/2",
  ].join(" "),

  right: [
    "left-full top-1/2 ml-3",
    "-translate-y-1/2",
  ].join(" "),
};

export function Tooltip({
  content,
  children,
  position = "top",
  className,
}: TooltipProps) {
  const tooltipId = useId();

  if (!isValidElement(children)) {
    return null;
  }

  return (
    <span
      className={cn(
        "group/tooltip relative inline-flex",
        className,
      )}
    >
      {cloneElement(children, {
        "aria-describedby": tooltipId,
      })}

      <span
        id={tooltipId}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50",
          "w-max max-w-56 rounded-lg",
          "border border-slate-700",
          "bg-slate-950 px-3 py-2",
          "text-xs font-medium leading-relaxed",
          "text-slate-200 shadow-xl",
          "opacity-0 invisible",
          "transition-all duration-200",
          "group-hover/tooltip:visible",
          "group-hover/tooltip:opacity-100",
          "group-focus-within/tooltip:visible",
          "group-focus-within/tooltip:opacity-100",
          "motion-reduce:transition-none",
          positionClasses[position],
        )}
      >
        {content}
      </span>
    </span>
  );
}