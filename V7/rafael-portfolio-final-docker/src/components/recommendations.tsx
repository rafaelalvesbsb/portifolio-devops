import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader } from "@/components/card";

export function Recommendations() {
  const has = profile.recommendations.length > 0;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader
          title="Recomendações"
          subtitle={
            has
              ? "Depoimentos selecionados"
              : "Clique para ver recomendações no LinkedIn (ou adicione textos no projeto)."
          }
        />
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.links.find((l) => l.label === "LinkedIn")?.href ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[rgb(var(--fg))] px-4 py-2 text-sm font-semibold text-[rgb(var(--bg))] hover:opacity-90"
            >
              Ver no LinkedIn →
            </a>
            <p className="text-sm text-[rgb(var(--muted))]">
              Para exibir aqui, adicione suas recomendações em{" "}
              <code className="rounded bg-[rgb(var(--bg))] px-1 py-0.5">src/data/profile.ts</code>.
            </p>
          </div>
        </CardContent>
      </Card>

      {has
        ? profile.recommendations.map((r) => (
            <Card key={r.name} className="h-full">
              <CardHeader
                title={r.name}
                subtitle={[r.role, r.relationship].filter(Boolean).join(" • ")}
              />
              <CardContent>
                <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">
                  “{r.text}”
                </p>
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-medium underline decoration-[rgb(var(--border))] underline-offset-4 hover:decoration-[rgb(var(--accent))]"
                  >
                    Perfil →
                  </a>
                ) : null}
              </CardContent>
            </Card>
          ))
        : null}
    </div>
  );
}
