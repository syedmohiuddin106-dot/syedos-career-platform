import { cn } from "@/lib/utils";

type DividerProps = {
  label?: string;
  className?: string;
};

export function Divider({
  label,
  className,
}: DividerProps) {
  if (!label) {
    return (
      <div
        role="separator"
        className={cn(
          "h-px w-full bg-slate-800",
          className,
        )}
      />
    );
  }

  return (
    <div
      role="separator"
      className={cn(
        "flex items-center gap-4",
        className,
      )}
    >
      <div className="h-px flex-1 bg-slate-800" />

      <span className="syedos-code-text text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>

      <div className="h-px flex-1 bg-slate-800" />
    </div>
  );
}