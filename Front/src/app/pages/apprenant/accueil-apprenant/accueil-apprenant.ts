

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil-apprenant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil-apprenant.html',
  styleUrls: ['./accueil-apprenant.css']
})
export class AccueilApprenant {
  // Données fictives pour l'exemple (à remplacer par un service plus tard)
  apprenantNom = "Jean Dupont";
  
  rendezVous = [
    { entreprise: 'TechCorp', heure: '14:30', date: '22 Fév', type: 'Distanciel' },
    ];

  offresRecentes = [
    { poste: 'Développeur Angular', entreprise: 'WebAgency', ville: 'Lyon' },
    { poste: 'Alternance Data Analyst', entreprise: 'DataFix', ville: 'Paris' }
  ];

  constructor(private router: Router) {}

  logout() {
    // Logique de déconnexion ici (clear token, etc.)
    console.log('Déconnexion...');
    this.router.navigate(['/connexion']);
  }

  voirCV() {
    console.log('Ouverture du CV...');
    // Logique pour ouvrir le PDF
  }
}