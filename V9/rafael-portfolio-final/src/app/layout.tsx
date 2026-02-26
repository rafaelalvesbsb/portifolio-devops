import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Alves • Portfólio Cloud/DevOps",
  description:
    "Portfólio profissional de Rafael Alves: AWS, SysOps, DevOps, IaC, Observabilidade, Migrações e Projetos.",
  openGraph: {
    title: "Rafael Alves • Portfólio Cloud/DevOps",
    description: "AWS • SysOps • DevOps • IaC • Observabilidade • Migrações",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="relative min-h-screen overflow-x-hidden pb-24">
            {/* textura discreta + brilho */}
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-grid opacity-[0.22] dark:opacity-[0.14]" />
              <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(var(--accent)/0.18),transparent_60%),radial-gradient(900px_circle_at_80%_0%,rgba(var(--accent3)/0.14),transparent_55%),radial-gradient(900px_circle_at_80%_90%,rgba(var(--accent2)/0.10),transparent_60%)]" />
            </div>

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
