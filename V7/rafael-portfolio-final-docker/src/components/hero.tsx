"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { Badge } from "@/components/badge";
import { Icon } from "@/components/icons";
import { BrandIcon } from "@/components/brand-icon";
import { formatPhoneBRFromE164 } from "@/lib/utils";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const phonePretty = formatPhoneBRFromE164(profile.phoneE164);
  const waHref = `https://wa.me/${profile.phoneE164.replace(/\D/g, "")}?text=${encodeURIComponent(
    profile.whatsappPrefill
  )}`;

  const heroTech = [
    profile.tech.find((t) => t.label === "AWS"),
    profile.tech.find((t) => t.label === "Linux"),
    profile.tech.find((t) => t.label === "Docker"),
    profile.tech.find((t) => t.label === "Terraform"),
    profile.tech.find((t) => t.label === "Kubernetes"),
  ].filter(Boolean) as Array<(typeof profile.tech)[number]>;

  return (
    <section id="inicio" className="relative py-16">
      {/* blobs decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob absolute -top-24 left-[-140px] h-[320px] w-[320px] rounded-full bg-[rgba(var(--accent)/0.22)] blur-3xl" />
        <div className="blob absolute -top-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-[rgba(var(--accent3)/0.18)] blur-3xl [animation-delay:-4s]" />
        <div className="blob absolute -bottom-32 left-[30%] h-[360px] w-[360px] rounded-full bg-[rgba(var(--accent2)/0.16)] blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-10 md:grid-cols-12 md:items-center"
        >
          <div className="md:col-span-8">
            <motion.h1
              variants={item}
              className="text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-base text-[rgb(var(--muted))] sm:text-lg"
            >
              {profile.headline}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              <Badge>{profile.location}</Badge>
              <Badge>{phonePretty}</Badge>
              <Badge>{profile.email}</Badge>
            </motion.div>

            <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
              {heroTech.map((t) => (
                <BrandIcon key={t.label} iconKey={t.iconKey} label={t.label} />
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,rgba(var(--accent)/1),rgba(var(--accent3)/1))] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(var(--accent)/0.25)] transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Falar no WhatsApp
              </a>

              <a
                href="/cv/CV_Rafael_Alves_1_pagina.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/70 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:shadow"
              >
                Baixar CV (1 página)
              </a>

              <a
                href="/cv/CV_Rafael_Alves_2_paginas.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/70 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:shadow"
              >
                Baixar CV (2 páginas)
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 space-y-3 text-sm leading-relaxed">
              {profile.summary.map((p) => (
                <p key={p} className="text-[rgb(var(--muted))]">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
              {profile.links.map((l) => (
                <a
                  key={l.label}
                  href={l.label === "WhatsApp" ? waHref : l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 px-4 py-2 text-sm text-[rgb(var(--muted))] backdrop-blur transition hover:-translate-y-0.5 hover:text-[rgb(var(--fg))] hover:shadow"
                >
                  {l.icon ? <Icon name={l.icon} className="h-4 w-4" /> : null}
                  {l.label}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-4">
            <motion.div variants={item} className="floaty">
              <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/70 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur">
                <p className="text-sm font-semibold">Como posso ajudar</p>
                <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--muted))]">
                  <li>• Projetos e consultoria AWS/SysOps</li>
                  <li>• CI/CD e deploy em ECS (CodePipeline/CodeBuild)</li>
                  <li>• Observabilidade: CloudWatch, Zabbix e Grafana</li>
                  <li>• Migração On‑Prem → Cloud (Windows/Linux)</li>
                </ul>

                <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/60 p-4">
                  <p className="text-xs font-semibold tracking-widest text-[rgb(var(--muted))]">
                    FOCO
                  </p>
                  <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                    Entrega com infraestrutura resiliente, pipeline de deploy confiável e observabilidade desde o primeiro dia.
                  </p>
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[rgb(var(--fg))] px-4 py-3 text-sm font-semibold text-[rgb(var(--bg))] transition hover:-translate-y-0.5 hover:opacity-95 hover:shadow"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Solicitar orçamento / oportunidade
                </a>

                <p className="mt-3 text-xs text-[rgb(var(--muted))]">
                  Dica: edite links e textos em{" "}
                  <code className="rounded bg-[rgb(var(--bg))] px-1 py-0.5">src/data/profile.ts</code>.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
