# Étape 1 : Build (Inchangée)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Étape 2 : Serveur de production (Nginx)
FROM nginx:stable-alpine

# 1. Nettoyage radical du dossier par défaut d'Nginx
RUN rm -rf /usr/share/nginx/html/*

# 2. Copie de la configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 3. LA SOLUTION : Copie de TOUT le contenu du dossier dist
COPY --from=build /app/dist/ /usr/share/nginx/html/

# 4. SCRIPT D'ADAPTATION : 
# On cherche l'index.html n'importe où dans le dossier copié 
# et on remonte tout son contenu à la racine de /html
RUN cd /usr/share/nginx/html && \
    FILE_PATH=$(find . -name index.html | head -n 1) && \
    DIR_PATH=$(dirname "$FILE_PATH") && \
    cp -r "$DIR_PATH"/. . && \
    echo "Fichiers déplacés depuis $DIR_PATH vers la racine."

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]