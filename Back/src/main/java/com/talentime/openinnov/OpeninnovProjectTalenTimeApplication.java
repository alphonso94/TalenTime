package com.talentime.openinnov;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.talentime.openinnov.entity.Student;
import com.talentime.openinnov.entity.User;
import com.talentime.openinnov.repository.StudentRepository;
import com.talentime.openinnov.repository.UserRepository;

@SpringBootApplication
public class OpeninnovProjectTalenTimeApplication {

    public static void main(String[] args) {
        SpringApplication.run(OpeninnovProjectTalenTimeApplication.class, args);
    }

    /**
     * Ce bloc de code s'exécute automatiquement au démarrage de l'application.
     * Il sert à tester la connexion à la base de données et l'insertion de données.
     */
    @Bean
    CommandLineRunner testDatabase(UserRepository userRepo, StudentRepository studentRepo) {
        return args -> {
            System.out.println(">>> Vérification de la base de données...");

            String testEmail = "test2.etudiant@talentime.fr";

            // On vérifie si l'utilisateur existe déjà pour éviter les doublons (ID 1, 2, 3...)
            if (userRepo.findByEmail(testEmail).isEmpty()) {
                
                // 1. Création de l'objet User (le compte de connexion)
                User user = new User();
                user.setEmail(testEmail);
                user.setPasswordHash("password123"); // Utilise camelCase ici
                user.setRole("STUDENT");
                user.setRgpdConsent(true);
                user.setCreatedAt(LocalDateTime.now());
            
                
                // On enregistre l'utilisateur d'abord
                userRepo.save(user);

                // 2. Création de l'objet Student (le profil personnel)
                Student student = new Student();
                student.setUser(user); // On fait le lien avec l'utilisateur créé juste au-dessus
                student.setFirstName("Alexandre");
                student.setLastName("Dupont");
                student.setSchool("OpenInnov School");
                
                // On enregistre l'étudiant
                studentRepo.save(student);

                System.out.println(">>> TEST RÉUSSI : Un nouvel utilisateur et son profil étudiant ont été créés.");
            } else {
                System.out.println(">>> INFO : L'utilisateur de test existe déjà. Aucune donnée ajoutée.");
            }
            
            System.out.println(">>> Serveur TalenTime prêt sur http://localhost:8080");
        };
    }
}