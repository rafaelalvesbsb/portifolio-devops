# --- Build stage ---
FROM node:22-alpine AS builder
WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then corepack enable && yarn --frozen-lockfile; \
  else npm i; fi

# Copy source and build
COPY . .
RUN npm run build

# --- Runtime stage (static) ---
FROM nginx:1.27-alpine AS runner

# Nginx config for SPA-like static export (works fine for Next static export)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy static site output
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
