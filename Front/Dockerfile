# Étape 1 : Construction (Build)
FROM node:20-alpine AS build
WORKDIR /app

# Optimisation du cache : on installe les dépendances d'abord
COPY package*.json ./
RUN npm install

# On copie le reste du code et on build
COPY . .
RUN npm run build -- --configuration production

# Étape 2 : Serveur de production (Nginx)
FROM nginx:stable-alpine

# Copie de la config Nginx pour gérer le routage Angular (évite les 404)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# CORRECTION DE L'ERREUR : 
# On utilise /*/ pour ignorer le nom du projet et accéder directement au dossier 'browser'
# Angular 17/18/19 génère : dist/[nom-du-projet]/browser
COPY --from=build /app/dist/*/browser /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]