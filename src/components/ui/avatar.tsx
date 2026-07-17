import Image from "next/image";

import { cn } from "@/lib/utils";

type AvatarSize =
  | "small"
  | "medium"
  | "large"
  | "extraLarge";

type AvatarStatus =
  | "online"
  | "away"
  | "busy"
  | "offline";

type AvatarProps = {
  src?: string;
  alt: string;
  initials?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  priority?: boolean;
  className?: string;
};

const sizeClasses: Record<AvatarSize, string> = {
  small: "h-9 w-9 text-xs",
  medium: "h-12 w-12 text-sm",
  large: "h-16 w-16 text-lg",
  extraLarge: "h-24 w-24 text-2xl",
};

const imageSizes: Record<AvatarSize, number> = {
  small: 36,
  medium: 48,
  large: 64,
  extraLarge: 96,
};

const statusClasses: Record<AvatarStatus, string> = {
  online: "bg-green-400",
  away: "bg-amber-400",
  busy: "bg-red-400",
  offline: "bg-slate-500",
};

const statusSizeClasses: Record<AvatarSize, string> = {
  small: "h-2.5 w-2.5",
  medium: "h-3 w-3",
  large: "h-3.5 w-3.5",
  extraLarge: "h-4 w-4",
};

export function Avatar({
  src,
  alt,
  initials,
  size = "medium",
  status,
  priority = false,
  className,
}: AvatarProps) {
  const fallbackInitials =
    initials ??
    alt
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join("");

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center",
          "overflow-hidden rounded-full",
          "border border-slate-700",
          "bg-gradient-to-br from-blue-500/25 to-cyan-500/15",
          "font-semibold text-slate-100",
          sizeClasses[size],
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={imageSizes[size]}
            height={imageSizes[size]}
            priority={priority}
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-label={alt}>
            {fallbackInitials}
          </span>
        )}
      </div>

      {status && (
        <span
          aria-label={`Status: ${status}`}
          className={cn(
            "absolute bottom-0 right-0 rounded-full",
            "border-2 border-slate-950",
            statusClasses[status],
            statusSizeClasses[size],
          )}
        />
      )}
    </div>
  );
}