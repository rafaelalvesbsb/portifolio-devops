import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[linear-gradient(to_bottom,rgb(var(--card)),rgb(var(--card2)))] shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      {/* glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at 0% 0%, rgba(var(--accent) / 0.18), transparent 45%), radial-gradient(600px circle at 100% 100%, rgba(var(--accent2) / 0.12), transparent 45%)",
        }}
      />
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div className="flex items-start gap-3">
        {icon ? (
          <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
            {icon}
          </span>
        ) : null}
        <div className="min-w-0">
          <h3 className="text-base font-semibold leading-snug">{title}</h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-[rgb(var(--muted))]">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("px-6 pb-6", className)}>{children}</div>;
}
