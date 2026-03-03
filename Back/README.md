🚀 TalenTime - Backend
📋 Prérequis
Docker Desktop (Windows) ou Docker Engine (Ubuntu)

Git

🛠️ Lancement (Commandes)
1. Récupérer la branche
Bash

git checkout Back-Mohamed-Takia-3
git pull origin Back-Mohamed-Takia-3
2. Build Java
Ubuntu / Windows (Git Bash) :

Bash

cd Back
chmod +x mvnw  # Nécessaire sur Ubuntu pour les permissions
./mvnw clean package -DskipTests
Windows (CMD / PowerShell) :

DOS

cd Back
mvnw.cmd clean package -DskipTests
3. Lancer Docker
Bash

cd ..
docker-compose up --build
✅ Vérification
Logs : Chercher la ligne >>> TEST RÉUSSI : Un nouvel utilisateur et son profil étudiant ont été créés.

Navigateur : http://localhost:8080

🛑 Reset complet (Supprimer DB et Volumes)
Bash

docker-compose down -v