# =========================
# Étape 1 : Build Angular SSR
# =========================
FROM node:20 AS build

WORKDIR /app

# Dépendances
COPY package*.json ./
RUN npm install

# Code source
COPY . .

# Build SSR (respecte angular.json)
RUN npm run build

# =========================
# Étape 2 : Run SSR Server
# =========================
FROM node:20-alpine 

WORKDIR /app

# Copier uniquement ce qui est nécessaire
COPY --from=build /app/dist ./dist
COPY package*.json ./

# Installer dépendances PROD uniquement
RUN npm install --omit=dev

# Port SSR (Angular par défaut : 4000)
EXPOSE 4000

# Lancer le serveur SSR
CMD ["node", "dist/Talentime/server/server.mjs"]
