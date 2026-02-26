import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/70 px-3 py-1 text-xs font-medium text-[rgb(var(--fg))] backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}
