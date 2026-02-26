import * as React from "react";
import * as si from "simple-icons/icons";
import { cn } from "@/lib/utils";

type SimpleIcon = { title: string; hex: string; path: string };

function getIcon(iconKey: string): SimpleIcon | null {
  const v = (si as unknown as Record<string, unknown>)[iconKey];
  if (!v) return null;
  const maybe = v as Partial<SimpleIcon>;
  if (!maybe.path || !maybe.hex || !maybe.title) return null;
  return maybe as SimpleIcon;
}

export function SimpleIconMark({
  iconKey,
  title,
  size = 20,
  colored = true,
  className,
}: {
  iconKey: string;
  title?: string;
  size?: number;
  colored?: boolean;
  className?: string;
}) {
  const icon = getIcon(iconKey);
  if (!icon) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        className
      )}
      title={title ?? icon.title}
      aria-hidden="true"
      style={colored ? { color: `#${icon.hex}` } : undefined}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" role="img">
        <path d={icon.path} fill="currentColor" />
      </svg>
    </span>
  );
}
