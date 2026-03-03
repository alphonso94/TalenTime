

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil-entreprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil-entreprise.html',
  styleUrls: ['./accueil-entreprise.css']
})
export class AccueilEntreprise {
  entrepriseNom = "Tech Solutions SAS";

  // Liste des candidats ayant postulé
  candidatsPostules = [
    { nom: 'Alice Martin', poste: 'Alternance Développeur Web', score: '95%', date: 'Hier' },
    { nom: 'Kévin Bernard', poste: 'Stage Data Analyst', score: '88%', date: 'Il y a 2 jours' },
    { nom: 'Sofia Rossi', poste: 'Alternance Développeur Web', score: '92%', date: 'Aujourd\'hui' }
  ];

  // Planning des rendez-vous (Job Datings)
  rendezVous = [
    { candidat: 'Alice Martin', heure: '09:00', salle: 'Virtuelle A' },
    { candidat: 'Lucas Petit', heure: '10:30', salle: 'Stand 12 (Campus)' }
  ];

  constructor(private router: Router) {}

  logout() {
    console.log('Déconnexion entreprise...');
    this.router.navigate(['/connexion']);
  }

  telechargerCV(candidat: string) {
    console.log(`Téléchargement du CV de ${candidat}`);
  }
}