# Portfólio — Rafael Alves (Next.js + React + Tailwind)

Portfólio moderno, bonito em **modo claro e escuro**, com micro‑animações e pronto para hospedagem.

## Stack
- Next.js (App Router) com **static export** (gera `out/`)
- React
- Tailwind CSS
- Framer Motion (animações)

## Rodar local
```bash
npm install
npm run dev
```
Acesse: http://localhost:3000

## Build estático (para qualquer hospedagem)
```bash
npm run build
```
Isso gera a pasta **`out/`**.

Faça upload do conteúdo de `out/` para o seu hosting (raiz do domínio).

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

