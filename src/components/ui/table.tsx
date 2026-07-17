import type {
  ReactNode,
  TableHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type TableColumn<T> = {
  key: string;
  header: ReactNode;
  cell: (row: T) => ReactNode;
  className?: string;
};

type TableProps<T> = Omit<
  TableHTMLAttributes<HTMLTableElement>,
  "children"
> & {
  columns: TableColumn<T>[];
  data: T[];
  getRowKey: (row: T, index: number) => string;
  caption?: string;
  emptyMessage?: string;
  containerClassName?: string;
};

export function Table<T>({
  columns,
  data,
  getRowKey,
  caption,
  emptyMessage = "No records found.",
  className,
  containerClassName,
  ...props
}: TableProps<T>) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl",
        "border border-slate-800",
        containerClassName,
      )}
    >
      <div className="w-full overflow-x-auto">
        <table
          className={cn(
            "w-full min-w-[720px] border-collapse text-left",
            className,
          )}
          {...props}
        >
          {caption && (
            <caption className="sr-only">
              {caption}
            </caption>
          )}

          <thead className="bg-slate-900/80">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={cn(
                    "border-b border-slate-800",
                    "px-5 py-4 text-xs font-semibold",
                    "uppercase tracking-[0.14em]",
                    "text-slate-400",
                    column.className,
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 bg-slate-950/40">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={getRowKey(row, rowIndex)}
                  className={cn(
                    "transition-colors duration-150",
                    "hover:bg-slate-900/55",
                    "motion-reduce:transition-none",
                  )}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={cn(
                        "px-5 py-4 align-middle",
                        "text-sm text-slate-300",
                        column.className,
                      )}
                    >
                      {column.cell(row)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-sm text-slate-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}