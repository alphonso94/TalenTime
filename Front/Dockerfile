# Étape 1 : Construction (Build)
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Étape 2 : Serveur de production (Nginx)
FROM nginx:stable-alpine

# On vide le dossier par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie de la configuration Nginx (crucial pour les routes et images)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPIE DIRECTE : 
# On utilise le chemin exact révélé par tes logs d'erreur
COPY --from=build /app/dist/Talentime/browser /usr/share/nginx/html

# Vérification visuelle lors du build (pour confirmer que les images sont là)
RUN ls -R /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]