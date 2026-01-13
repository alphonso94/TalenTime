# Utilise Java 21 (JDK) pour compiler et exécuter
FROM eclipse-temurin:17-jdk-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie le fichier JAR généré par Maven dans le conteneur
COPY target/*.jar app.jar

# Port sur lequel l'app tourne
EXPOSE 8080

# Commande pour lancer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]