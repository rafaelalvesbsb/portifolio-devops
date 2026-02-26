"use client";

import * as React from "react";
import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader } from "@/components/card";
import { AwsChip } from "@/components/aws-chip";
import { BrandIcon } from "@/components/brand-icon";
import { SimpleIconMark } from "@/components/simple-icon-mark";
import { Badge } from "@/components/badge";
import { cn } from "@/lib/utils";
import { GitBranch, Package, Rocket, ShieldCheck, LineChart, Boxes } from "lucide-react";

const groupOrder = [
  "Compute & Containers",
  "Serverless & Integration",
  "Networking",
  "Storage & Databases",
  "Security",
  "Observability",
  "DevTools",
] as const;

export function Stack() {
  const groups = React.useMemo(() => {
    const s = new Set(profile.awsServices.map((x) => x.group));
    const ordered = groupOrder.filter((g) => s.has(g));
    const rest = [...s].filter((g) => !ordered.includes(g as any)).sort();
    return ["Todos", ...ordered, ...rest];
  }, []);

  const [group, setGroup] = React.useState<string>("Todos");
  const [q, setQ] = React.useState<string>("");

  const filtered = React.useMemo(() => {
    const qq = q.trim().toLowerCase();
    return profile.awsServices
      .filter((s) => (group === "Todos" ? true : s.group === group))
      .filter((s) => (qq ? `${s.label} ${s.abbr}`.toLowerCase().includes(qq) : true));
  }, [group, q]);

  const techGroups = React.useMemo(() => {
    const map = new Map<string, typeof profile.tech>();
    for (const t of profile.tech) {
      const arr = map.get(t.group) ?? [];
      arr.push(t);
      map.set(t.group, arr);
    }
    return [...map.entries()]
      .map(([k, v]) => ({ group: k, items: v }))
      .sort((a, b) => a.group.localeCompare(b.group));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-12">
      {/* AWS services */}
      <Card className="md:col-span-7">
        <CardHeader
          title="Serviços AWS (experiência prática)"
          icon={<img src="/logos/aws.png" alt="AWS" className="h-6 w-6 object-contain" loading="lazy" />}
          subtitle="Filtre por categoria e encontre rápido o que você precisa para seu projeto."
        />
        <CardContent>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGroup(g)}
                  className={cn(
                    "rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs font-medium transition hover:-translate-y-0.5 hover:shadow",
                    g === group
                      ? "bg-[linear-gradient(135deg,rgba(var(--accent)/1),rgba(var(--accent3)/1))] text-white shadow-sm"
                      : "bg-[rgb(var(--card))]/70 text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
                  )}
                >
                  {g}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-56">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar (ex.: ECS, S3, CodeBuild)"
                className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 px-4 py-2 text-sm outline-none backdrop-blur transition focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {filtered.map((s) => (
              <AwsChip key={`${s.group}-${s.label}`} abbr={s.abbr} label={s.label} iconUrl={s.iconUrl} />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>Containers (ECS/EKS)</Badge>
            <Badge>Serverless (Lambda/EventBridge)</Badge>
            <Badge>Networking (VPC/VPN/Route 53)</Badge>
            <Badge>Observability (CloudWatch)</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Tech + CI/CD */}
      <div className="md:col-span-5 grid gap-4">
        <Card>
          <CardHeader
            title="Tecnologias & ferramentas"
            subtitle="Stack do dia a dia (logos reais via Simple Icons)."
          />
          <CardContent>
            <div className="space-y-4">
              {techGroups.map((g) => (
                <div key={g.group}>
                  <p className="text-xs font-semibold text-[rgb(var(--muted))]">{g.group}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <BrandIcon
                        key={`${g.group}-${t.label}`}
                        iconKey={t.iconKey}
                        label={t.label}
                        className=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="CI/CD & Deploy" subtitle="Um fluxo que eu aplico muito em AWS." />
          <CardContent>
            <div className="space-y-3 text-sm text-[rgb(var(--muted))]">
              <Step
                icon={<GitBranch className="h-5 w-5" />}
                title="Source"
                subtitle="GitHub/GitLab (branching + PR)"
              />
              <Step
                icon={<Package className="h-5 w-5" />}
                title="Build & Test"
                subtitle="CodePipeline + CodeBuild (lint, testes, build de imagem)"
              />
              <Step
                icon={<Boxes className="h-5 w-5" />}
                title="Artifact"
                subtitle="Publicação em ECR + versionamento"
              />
              <Step
                icon={<Rocket className="h-5 w-5" />}
                title="Deploy"
                subtitle="ECS (rolling/blue-green) + health checks no ALB"
              />
              <Step
                icon={<LineChart className="h-5 w-5" />}
                title="Observability"
                subtitle="CloudWatch + dashboards/alertas (Grafana/Zabbix) + Slack"
              />
              <Step
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Governança"
                subtitle="IAM/least privilege, Secrets Manager, tags e custos"
              />
            </div>

            <div className="mt-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
              <p className="text-sm font-semibold">ECS no operacional</p>
              <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--muted))]">
                <li>• Task definitions, logs e métricas (CloudWatch)</li>
                <li>• Scheduled tasks / EventBridge / automações com Lambda</li>
                <li>• Escala automática e ajustes controlados (produção)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Step({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-[rgb(var(--fg))]">{title}</p>
        <p className="text-sm text-[rgb(var(--muted))]">{subtitle}</p>
      </div>
    </div>
  );
}
