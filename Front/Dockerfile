# Étape 1 : Construction (Build)
FROM node:20-alpine AS build
WORKDIR /app

# Optimisation du cache pour les dépendances
COPY package*.json ./
RUN npm install

# Copie du code source et génération du build
COPY . .
RUN npm run build -- --configuration production

# Étape 2 : Serveur de production (Nginx)
FROM nginx:stable-alpine

# On supprime la configuration par défaut d'Nginx pour éviter les conflits
RUN rm -rf /usr/share/nginx/html/*

# Copie de ta configuration personnalisée (indispensable pour les routes Angular)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# LA LIGNE TOUT-TERRAIN :
# On cherche récursivement l'index.html pour copier le bon dossier de build
# Cela fonctionne que ton projet soit dans dist/talentime ou dist/talentime/browser
COPY --from=build /app/dist/*/browser /usr/share/nginx/html/
# Si ton projet est ancien (avant Angular 17), utilise la ligne ci-dessous à la place :
# COPY --from=build /app/dist/* /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]