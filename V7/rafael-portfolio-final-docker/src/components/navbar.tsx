"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "stack", label: "AWS & Tech" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "certificacoes", label: "Certificações" },
  { id: "formacao", label: "Formação" },
  { id: "recomendacoes", label: "Recomendações" },
  { id: "conteudo", label: "Conteúdo" },
  { id: "contato", label: "Contato" },
];

export function Navbar() {
  const [active, setActive] = React.useState("inicio");
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const handler = () => {
      const offsets = items
        .map((it) => {
          const el = document.getElementById(it.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: it.id, top: rect.top };
        })
        .filter(Boolean) as Array<{ id: string; top: number }>;

      const candidates = offsets
        .filter((o) => o.top <= window.innerHeight * 0.38)
        .sort((a, b) => b.top - a.top);
      if (candidates[0]) setActive(candidates[0].id);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#inicio" className="font-semibold tracking-tight">
          Rafael Alves
        </a>

        <nav className="flex flex-1 items-center justify-center">
          <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 px-1 py-1 [scrollbar-width:none]">
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>

            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className={cn(
                    "relative shrink-0 rounded-xl px-3 py-2 text-sm text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--fg))]",
                    isActive && "text-[rgb(var(--fg))]"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav"
                      className="absolute inset-0 -z-10 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  {it.label}
                </a>
              );
            })}
          </div>
        </nav>

        <button
          type="button"
          aria-label="Alternar tema"
          className="inline-flex items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 dark:hidden" />
          <Moon className="hidden h-4 w-4 dark:block" />
        </button>
      </div>
    </div>
  );
}
