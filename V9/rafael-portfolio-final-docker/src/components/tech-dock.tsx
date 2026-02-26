"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import { SimpleIconMark } from "@/components/simple-icon-mark";
import { cn } from "@/lib/utils";

const FALLBACK = [
  { label: "AWS", iconKey: "siAmazonwebservices" },
  { label: "Linux", iconKey: "siLinux" },
  { label: "Docker", iconKey: "siDocker" },
  { label: "Kubernetes", iconKey: "siKubernetes" },
  { label: "Terraform", iconKey: "siTerraform" },
  { label: "NGINX", iconKey: "siNginx" },
  { label: "Cloudflare", iconKey: "siCloudflare" },
  { label: "Grafana", iconKey: "siGrafana" },
  { label: "Zabbix", iconKey: "siZabbix" },
  { label: "GitHub", iconKey: "siGithub" },
  { label: "GitLab", iconKey: "siGitlab" },
  { label: "Python", iconKey: "siPython" },
] as const;

export function TechDock({ className }: { className?: string }) {
  // Usa a lista do profile.tech (editável) e garante itens essenciais.
  const items = React.useMemo(() => {
    const base = profile.tech.map((t) => ({ label: t.label, iconKey: t.iconKey }));
    const map = new Map<string, { label: string; iconKey: string }>();
    for (const it of [...FALLBACK, ...base]) map.set(it.label, it);
    return [...map.values()];
  }, []);

  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "pointer-events-auto fixed bottom-0 left-0 right-0 z-40 border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]/72 backdrop-blur-lg",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
        <div className="marquee rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/60 px-5 py-3 shadow-sm">
          <div className="marquee__track gap-7">
            {loop.map((it, idx) => (
              <div
                key={`${it.label}-${idx}`}
                className="dock-bob flex items-center gap-3 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 px-4 py-3 text-base text-[rgb(var(--muted))]"
                title={it.label}
                style={{ animationDelay: `${(idx % 10) * 0.12}s` }}
              >
                {it.label === "AWS" ? (
                  <img src="/logos/aws.png" alt="AWS" className="h-6 w-6 object-contain" loading="lazy" />
                ) : (
                  <SimpleIconMark iconKey={it.iconKey} size={26} />
                )}
                <span className="whitespace-nowrap font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
