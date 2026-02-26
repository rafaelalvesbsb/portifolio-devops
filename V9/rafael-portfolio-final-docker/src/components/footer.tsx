"use client";

import { profile } from "@/data/profile";
import { Icon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))] py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Rafael Alves</p>
            <p className="mt-1 text-sm text-[rgb(var(--muted))]">
              © {year} • Cloud / DevOps • AWS • IaC • Observabilidade
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 px-4 py-2 text-sm text-[rgb(var(--muted))] backdrop-blur transition hover:-translate-y-0.5 hover:text-[rgb(var(--fg))] hover:shadow"
              >
                {l.icon ? <Icon name={l.icon} className="h-4 w-4" /> : null}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
