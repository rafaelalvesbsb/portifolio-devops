"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader } from "@/components/card";
import { Icon } from "@/components/icons";
import { formatPhoneBRFromE164 } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = React.useState<null | "email" | "phone">(null);

  async function copy(text: string, kind: "email" | "phone") {
    await navigator.clipboard.writeText(text);
    setCopied(kind);
    setTimeout(() => setCopied(null), 1200);
  }

  const phonePretty = formatPhoneBRFromE164(profile.phoneE164);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader
          title="Vamos conversar"
          subtitle="Me chame no WhatsApp ou envie um e-mail — respondo o mais rápido possível."
        />
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${profile.phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(profile.whatsappPrefill)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--fg))] px-4 py-2 text-sm font-semibold text-[rgb(var(--bg))] hover:opacity-90"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Contato via portfólio")}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2 text-sm font-semibold hover:shadow-sm"
            >
              <Icon name="email" className="h-4 w-4" />
              E-mail
            </a>
            <a
              href={profile.links.find((l) => l.label === "LinkedIn")?.href ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2 text-sm font-semibold hover:shadow-sm"
            >
              <Icon name="linkedin" className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => copy(profile.email, "email")}
              className="flex items-center justify-between rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 text-left text-sm hover:shadow-sm"
            >
              <span className="font-medium">{profile.email}</span>
              <span className="text-[rgb(var(--muted))]">
                {copied === "email" ? "Copiado!" : "Copiar"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => copy(phonePretty, "phone")}
              className="flex items-center justify-between rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 text-left text-sm hover:shadow-sm"
            >
              <span className="font-medium">{phonePretty}</span>
              <span className="text-[rgb(var(--muted))]">
                {copied === "phone" ? "Copiado!" : "Copiar"}
              </span>
            </button>
          </div>

          <p className="mt-4 text-xs text-[rgb(var(--muted))]">
            Hospedagem simples? Use o build estático (pasta <code className="rounded bg-[rgb(var(--bg))] px-1 py-0.5">out/</code>) e faça upload no seu servidor.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Disponibilidade" subtitle="Formatos de trabalho" />
        <CardContent>
          <ul className="space-y-2 text-sm text-[rgb(var(--muted))]">
            <li>• CLT / PJ</li>
            <li>• Remoto / híbrido</li>
            <li>• Projetos por demanda</li>
          </ul>

          <div className="mt-5 text-sm">
            <p className="font-semibold">Links rápidos</p>
            <ul className="mt-2 space-y-2">
              {profile.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                  >
                    {l.icon ? <Icon name={l.icon} className="h-4 w-4" /> : null}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
