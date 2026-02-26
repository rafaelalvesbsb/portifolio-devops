import * as React from "react";
import { cn } from "@/lib/utils";

export function AwsChip({
  abbr,
  label,
  iconUrl,
  className,
}: {
  abbr: string;
  label: string;
  iconUrl?: string;
  className?: string;
}) {
  const [imgOk, setImgOk] = React.useState(true);
  const showIcon = Boolean(iconUrl) && imgOk;

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/70 px-3 py-2 backdrop-blur transition hover:-translate-y-0.5 hover:shadow",
        className
      )}
    >
      <span
        className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[11px] font-bold tracking-tight"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(var(--accent) / 0.15)",
        }}
      >
        {showIcon ? (
          <img
            src={iconUrl}
            alt={`${label} icon`}
            className="h-full w-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgOk(false)}
          />
        ) : (
          <>
            <img
              src="/logos/aws.png"
              alt="AWS"
              className="absolute left-1 top-1 h-3.5 w-3.5 object-contain opacity-90"
              loading="lazy"
            />
            {abbr}
          </>
        )}
      </span>

      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
