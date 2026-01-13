# Utiliser une image de base pour Node.js
FROM node:20-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances (npm ci est plus fiable pour Docker)
RUN npm ci

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Utiliser une image de base Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le dossier de Nginx
# Pour Angular, le dossier de sortie est généralement dist/<nom-projet>
COPY --from=build /app/dist/talentime /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]