import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  icon?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(eyebrow || icon) && (
        <div
          className={cn(
            "mb-3 flex items-center gap-2",
            align === "center" && "justify-center",
          )}
        >
          {icon && (
            <span className="text-cyan-400">
              {icon}
            </span>
          )}

          {eyebrow && (
            <p className="syedos-code-text text-sm font-medium uppercase tracking-[0.18em] text-cyan-400">
              {eyebrow}
            </p>
          )}
        </div>
      )}

      <h2>{title}</h2>

      {description && (
        <p className="mt-4 text-lg">
          {description}
        </p>
      )}
    </div>
  );
}