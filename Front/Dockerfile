# Utiliser une image de base pour Node.js
FROM node:20-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Utiliser une image de base Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le dossier de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]