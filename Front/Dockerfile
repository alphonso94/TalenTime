# Étape 1 : Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Étape 2 : Nginx
FROM nginx:stable-alpine

# Nettoyage
RUN rm -rf /usr/share/nginx/html/*

# Config Nginx (indispensable pour les routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPIE INTELLIGENTE :
# On copie tout le contenu de dist. 
# Si Angular a généré dist/projet/browser, on va tout remonter d'un coup.
COPY --from=build /app/dist/ /usr/share/nginx/html/

# SCRIPT DE RESTRUCTURATION :
# On cherche où est l'index.html et on ramène tout à la racine de /html
RUN cd /usr/share/nginx/html && \
    # Trouve le dossier contenant l'index.html (ex: ./talentime/browser)
    TARGET_DIR=$(find . -name index.html -exec dirname {} \;) && \
    # Si le dossier trouvé n'est pas déjà la racine (.)
    if [ "$TARGET_DIR" != "." ]; then \
        cp -r "$TARGET_DIR"/* . && \
        # On supprime les dossiers d'origine devenus inutiles (ex: ./talentime)
        rm -rf $(echo "$TARGET_DIR" | cut -d'/' -f2); \
    fi

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]