# ─────────────────────────────────────────────
# STAGE 1 — Build Angular
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copier uniquement les fichiers de dépendances en premier (cache Docker)
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste du projet
COPY . .

# Build de production
RUN npm run build -- --configuration production

# ─────────────────────────────────────────────
# STAGE 2 — Servir avec Nginx
# ─────────────────────────────────────────────
FROM nginx:1.25-alpine

# Supprimer la config Nginx par défaut
RUN rm -rf /usr/share/nginx/html/* \
    && rm /etc/nginx/conf.d/default.conf

# Copier la config Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis le stage 1
COPY --from=builder /app/dist/Talentime/browser /usr/share/nginx/html/

# Renommer index.csr.html → index.html si présent
RUN if [ -f /usr/share/nginx/html/index.csr.html ]; then \
      mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html; \
    fi

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en foreground
CMD ["nginx", "-g", "daemon off;"]