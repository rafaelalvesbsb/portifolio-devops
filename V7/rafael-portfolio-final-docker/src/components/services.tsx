"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader } from "@/components/card";
import { Activity, Boxes, Cloud, GitBranch, Shield } from "lucide-react";
import { SimpleIconMark } from "@/components/simple-icon-mark";
import { cn } from "@/lib/utils";

function ServiceIcon({ name }: { name?: string }) {
  switch (name) {
    case "cloud":
      return <Cloud className="h-5 w-5" />;
    case "boxes":
      return <Boxes className="h-5 w-5" />;
    case "git":
      return <GitBranch className="h-5 w-5" />;
    case "activity":
      return <Activity className="h-5 w-5" />;
    case "shield":
      return <Shield className="h-5 w-5" />;
    default:
      return null;
  }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 },
  }),
};

export function Services() {
  const spans = [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-6",
    "md:col-span-6",
  ];

  return (
    <div className="grid gap-4 md:grid-cols-12">
      {profile.services.map((s, idx) => (
        <motion.div
          key={s.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          custom={idx}
          className={cn(spans[idx] ?? "md:col-span-6")}
        >
          <Card className="h-full">
            <CardHeader
              title={s.title}
              icon={idx === 0 ? <img src="/logos/aws.png" alt="AWS" className="h-6 w-6 object-contain" loading="lazy" /> : <ServiceIcon name={s.icon} />}
              subtitle={
                idx === 0
                  ? "Arquitetura, operação e governança para ambientes que precisam escalar sem dor."
                  : idx === 1
                  ? "Pipeline confiável com testes, build de imagem e deploy contínuo."
                  : idx === 2
                  ? "Métricas, logs, alertas e relatórios para o time agir rápido."
                  : "Conectividade, migração e custos com foco em eficiência."
              }
            />
            <CardContent>
              <ul className="space-y-2 text-sm text-[rgb(var(--muted))]">
                {s.items.map((it) => (
                  <li key={it} className="leading-relaxed">
                    • {it}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
