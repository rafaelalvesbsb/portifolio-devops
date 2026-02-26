import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader } from "@/components/card";

export function Certifications() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader title="Certificações" subtitle="Principais credenciais" />
        <CardContent>
          <ul className="space-y-2 text-sm text-[rgb(var(--muted))]">
            {profile.certifications.map((c) => (
              <li key={c.title}>
                <span className="font-medium text-[rgb(var(--fg))]">{c.title}</span>{" "}
                <span className="text-[rgb(var(--muted))]">• {c.issuer}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Cursos & Acreditações" subtitle="Complementos relevantes" />
        <CardContent>
          <ul className="space-y-2 text-sm text-[rgb(var(--muted))]">
            {profile.courses.map((c) => (
              <li key={c.title}>
                <span className="font-medium text-[rgb(var(--fg))]">{c.title}</span>{" "}
                <span className="text-[rgb(var(--muted))]">• {c.issuer}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export function Education() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {profile.education.map((e) => (
        <Card key={e.school} className="h-full">
          <CardHeader title={e.school} subtitle={e.period} />
          <CardContent>
            <p className="text-sm text-[rgb(var(--muted))]">{e.degree}</p>
            {e.details ? <p className="mt-2 text-sm text-[rgb(var(--muted))]">{e.details}</p> : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
