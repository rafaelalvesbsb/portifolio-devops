"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { Badge } from "@/components/badge";
import { Card, CardContent, CardHeader } from "@/components/card";
import { Github, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 },
  }),
};

export function Projects() {
  const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-6", "md:col-span-6"];

  return (
    <div className="grid gap-4 md:grid-cols-12">
      {profile.projects.map((p, idx) => (
        <motion.div
          key={p.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          custom={idx}
          className={cn(spans[idx] ?? "md:col-span-6")}
        >
          <Card className="h-full">
            <CardHeader
              title={p.title}
              subtitle={p.badge ? p.badge : p.kind === "github" ? "GitHub" : "Case"}
              icon={
                p.kind === "github" ? <Github className="h-5 w-5" /> : <FileText className="h-5 w-5" />
              }
            />
            <CardContent>
              <p className="text-sm text-[rgb(var(--muted))] leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--fg))]"
                >
                  <span className="rounded-full bg-[rgba(var(--accent)/0.14)] px-3 py-1">
                    Ver projeto
                  </span>
                  <span className="text-[rgb(var(--muted))]">→</span>
                </a>
              ) : (
                <p className="mt-5 text-xs text-[rgb(var(--muted))]">
                  *Este case descreve uma entrega/abordagem (sem repositório público).
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
