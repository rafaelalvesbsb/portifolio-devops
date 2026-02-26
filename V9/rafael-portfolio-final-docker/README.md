# Portfólio — Rafael Alves (Next.js + React + Tailwind) + Docker

Portfólio moderno, bonito em **modo claro e escuro**, com micro‑animações e pronto para produção.

## Stack
- Next.js (App Router) com **static export** (gera `out/`)
- React
- Tailwind CSS
- Framer Motion (animações)
- Docker multi‑stage (build) + Nginx (servir `out/`)

## Rodar local (sem Docker)
```bash
npm install
npm run dev
```
Acesse: http://localhost:3000

## Build estático
```bash
npm run build
```
Isso gera a pasta **`out/`**.

---

## Rodar com Docker (produção)

### Docker (build + run)
```bash
docker build -t rafael-portfolio .
docker run --rm -p 8080:80 --name rafael-portfolio rafael-portfolio
```
Acesse: http://localhost:8080

### Docker Compose
```bash
docker compose up -d --build
```
Acesse: http://localhost:8080

> O container gera o site via `next build` (static export) e serve a pasta `out/` com Nginx.

---

## Onde editar (tudo centralizado)
Abra:
- `src/data/profile.ts`

Você edita:
- **Links** (LinkedIn, GitHub, WhatsApp, **YouTube**, Instagram, TikTok)
- **Serviços** e listas (AWS/DevOps/Observabilidade)
- **Serviços AWS** (chips + filtro/busca)
- **Projetos & cases**
- **Experiências**
- **Certificações e formação**
- **Mensagem do WhatsApp** (`whatsappPrefill`)

### Atualizar YouTube / Instagram / TikTok
No `profile.ts`, procure por `links:` e altere:
- YouTube: `https://www.youtube.com/@rafaelalvesbsb`
- Instagram: `https://instagram.com/SEU_USUARIO`
- TikTok: `https://tiktok.com/@SEU_USUARIO`

### Ajustar cores do Dark/Light
Abra:
- `src/app/globals.css`

E altere os tokens `:root` (light) e `.dark`.

## CV
Coloque os PDFs em:
- `public/cv/`

## Recomendações do LinkedIn
Para exibir no site, preencha:
- `profile.recommendations` em `src/data/profile.ts`

