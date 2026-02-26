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

export function BrandIcon({
  iconKey,
  label,
  className,
  size = 22,
  colored = true,
}: {
  iconKey: string;
  label: string;
  className?: string;
  size?: number;
  colored?: boolean;
}) {
  // Logo oficial da AWS (PNG local) para garantir consistência visual
  // e evitar variações de ícone por versão do pacote.
  if (label === "AWS") {
    return (
      <span
        title="Amazon Web Services"
        className={cn(
          "group inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/70 px-3 py-2 text-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow",
          className
        )}
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] transition group-hover:scale-[1.02]">
          <img
            src="/logos/aws.png"
            alt="AWS"
            className="h-6 w-6 object-contain"
            loading="lazy"
          />
        </span>
        <span className="font-medium">AWS</span>
      </span>
    );
  }

  const icon = getIcon(iconKey);
  if (!icon) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-xs font-semibold",
          className
        )}
      >
        {label}
      </span>
    );
  }

  // Alguns ícones (ex.: GitHub) são quase pretos e "somem" no tema escuro.
  // Para esses casos, usamos monocromático (currentColor) para garantir contraste.
  const useColored = colored && iconKey !== "siGithub";

  return (
    <span
      title={icon.title}
      className={cn(
        "group inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/70 px-3 py-2 text-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow",
        className
      )}
    >
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] transition group-hover:scale-[1.02]"
        style={useColored ? { color: `#${icon.hex}` } : undefined}
        aria-hidden="true"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          role="img"
          aria-label={icon.title}
          className="block"
        >
          <path d={icon.path} fill="currentColor" />
        </svg>
      </span>
      <span className="font-medium">{label}</span>
    </span>
  );
}
