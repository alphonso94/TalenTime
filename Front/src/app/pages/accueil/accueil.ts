import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.html',
  styleUrls: ['./acceueil.css'] // Correction de la référence au fichier CSS
})
export class AccueilComponent {
  // Tu pourras plus tard injecter un service pour récupérer ces données
  stats = {
    offres: 154,
    entreprises: 42,
    candidats: 310
  };
}