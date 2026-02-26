"use client";

import * as React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader } from "@/components/card";
import { BrandIcon } from "@/components/brand-icon";
import { SimpleIconMark } from "@/components/simple-icon-mark";
import { cn } from "@/lib/utils";
import { Play, X, Images, Youtube, Instagram, Music2 } from "lucide-react";

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function getYouTubeId(url?: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "").trim();
      return id || null;
    }

    // youtube.com/watch?v=<id>
    if (u.searchParams.get("v")) return u.searchParams.get("v");

    // youtube.com/embed/<id>
    const m = u.pathname.match(/\/embed\/(.+)$/);
    if (m?.[1]) return m[1];

    return null;
  } catch {
    return null;
  }
}

export function ContentSection() {
  const youtube = profile.links.find((l) => l.label === "YouTube")?.href;
  const instagram = profile.links.find((l) => l.label === "Instagram")?.href;
  const tiktok = profile.links.find((l) => l.label === "TikTok")?.href;

  const [openVideo, setOpenVideo] = React.useState<null | { id: string; title: string }>(
    null
  );
  const [openPhoto, setOpenPhoto] = React.useState<null | { src: string; alt: string }>(
    null
  );

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenVideo(null);
        setOpenPhoto(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="grid gap-4">
      {/* Videos */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <Card>
          <CardHeader
            title="Vídeos (YouTube)"
            subtitle="Clique para abrir em popup. Deixei 4 vídeos fixos (você troca depois em profile.ts)."
            icon={<Youtube className="h-5 w-5" />}
          />
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {profile.featuredVideos.slice(0, 4).map((v) => {
                const id = getYouTubeId(v.href);
                const thumb = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;

                return (
                  <motion.button
                    key={v.title}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => (id ? setOpenVideo({ id, title: v.title }) : null)}
                    className={cn(
                      "group relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 text-left shadow-sm backdrop-blur transition hover:shadow-lg",
                      !id && "opacity-60"
                    )}
                    aria-label={`Abrir vídeo: ${v.title}`}
                    title={id ? "Abrir vídeo" : "Link inválido"}
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      {thumb ? (
                        <img
                          src={thumb}
                          alt={v.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <p className="text-sm text-[rgb(var(--muted))]">Thumbnail indisponível</p>
                        </div>
                      )}

                      {/* overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent_60%)]" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                        <Play className="h-4 w-4" />
                        Assistir
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold leading-snug">{v.title}</p>
                        <SimpleIconMark iconKey="siYoutube" size={18} />
                      </div>
                      <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                        Abrir em modal (embed) • depois você troca o link
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <BrandIcon iconKey="siYoutube" label="YouTube" />
              <BrandIcon iconKey="siAmazonwebservices" label="AWS" />
              <BrandIcon iconKey="siDocker" label="Docker" />
              <BrandIcon iconKey="siTerraform" label="Terraform" />
              <BrandIcon iconKey="siKubernetes" label="Kubernetes" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Fotos */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <Card>
          <CardHeader
            title="Galeria de fotos"
            subtitle="Clique para abrir em popup. Imagens exemplo já inclusas no projeto (public/gallery)."
            icon={<Images className="h-5 w-5" />}
          />
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {profile.galleryPhotos.map((p) => (
                <motion.button
                  key={p.src}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setOpenPhoto({ src: p.src, alt: p.alt })}
                  className="group relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 text-left shadow-sm backdrop-blur transition hover:shadow-lg"
                  aria-label={`Abrir foto: ${p.alt}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={p.src}
                      alt={p.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_65%)]" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-sm font-semibold text-white drop-shadow">{p.alt}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Redes sociais */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <div className="grid gap-4 md:grid-cols-12">
          <Card className="md:col-span-7">
            <CardHeader
              title="Canais e redes"
              subtitle="Atalhos rápidos para entrar em contato e acompanhar meu conteúdo."
              icon={<Instagram className="h-5 w-5" />}
            />
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(var(--accent3)/0.18)] text-[rgb(var(--fg))]">
                    <Youtube className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">YouTube</p>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">@rafaelalvesbsb</p>
                  </div>
                </a>

                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(var(--accent)/0.18)] text-[rgb(var(--fg))]">
                    <Instagram className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Instagram</p>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">Editar URL em profile.ts</p>
                  </div>
                </a>

                <a
                  href={tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:shadow"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(var(--accent2)/0.18)] text-[rgb(var(--fg))]">
                    <Music2 className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">TikTok</p>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">Editar URL em profile.ts</p>
                  </div>
                </a>

                <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 p-4 backdrop-blur">
                  <p className="text-sm font-semibold">Pautas / ideias</p>
                  <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--muted))]">
                    <li>• CI/CD (CodePipeline/CodeBuild) e deploy em ECS</li>
                    <li>• Observabilidade (CloudWatch/Grafana/Zabbix) + Slack</li>
                    <li>• IaC (Terraform/CloudFormation) e padrões de produção</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-5">
            <CardHeader
              title="Checklist (pra ficar sempre profissional)"
              subtitle="O que eu costumo mostrar quando publico cases/tutoriais."
              icon={<Play className="h-5 w-5" />}
            />
            <CardContent>
              <ul className="space-y-2 text-sm text-[rgb(var(--muted))]">
                <li>• Objetivo + contexto (o problema real)</li>
                <li>• Arquitetura (diagrama simples)</li>
                <li>• IaC / pipeline (o que automatizei)</li>
                <li>• Observabilidade + alertas</li>
                <li>• Resultados (tempo, custo, estabilidade)</li>
              </ul>

              <div className="mt-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 p-4 backdrop-blur">
                <p className="text-sm font-semibold">Dica rápida</p>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  Para trocar os 4 vídeos e as fotos, edite:{" "}
                  <code className="rounded bg-[rgb(var(--bg))] px-1 py-0.5">
                    src/data/profile.ts
                  </code>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Modal vídeo */}
      <AnimatePresence>
        {openVideo ? (
          <Modal onClose={() => setOpenVideo(null)} title={openVideo.title}>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${openVideo.id}?autoplay=1&rel=0`}
                title={openVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Modal>
        ) : null}
      </AnimatePresence>

      {/* Modal foto */}
      <AnimatePresence>
        {openPhoto ? (
          <Modal onClose={() => setOpenPhoto(null)} title={openPhoto.alt}>
            <img
              src={openPhoto.src}
              alt={openPhoto.alt}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
          </Modal>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function Modal({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[rgb(var(--card))] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      >
        <div className="flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/55 px-5 py-4 backdrop-blur">
          <p className="text-sm font-semibold">{title}</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] transition hover:-translate-y-0.5 hover:shadow"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </motion.div>
    </motion.div>
  );
}
