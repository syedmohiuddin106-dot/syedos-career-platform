import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SkeletonVariant =
  | "text"
  | "circle"
  | "rectangle";

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariant;
  width?: string;
  height?: string;
  animated?: boolean;
};

const variantClasses: Record<SkeletonVariant, string> = {
  text: "h-4 rounded-md",
  circle: "rounded-full",
  rectangle: "rounded-xl",
};

export function Skeleton({
  variant = "rectangle",
  width,
  height,
  animated = true,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-slate-800",
        animated && "animate-pulse",
        variantClasses[variant],
        className,
      )}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    />
  );
}