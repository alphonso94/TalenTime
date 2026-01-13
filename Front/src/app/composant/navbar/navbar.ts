

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importation nécessaire pour *ngIf
import { RouterModule } from '@angular/router'; // Pour routerLink

@Component({
  selector: 'app-navbar',
  standalone: true, // Si vous utilisez Angular 17+
  imports: [CommonModule, RouterModule], // Résout l'avertissement NG8103 (*ngIf)
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  // Déclaration de la propriété pour l'affichage du menu
  isMenuOpen: boolean = false;

  // Déclaration de la méthode de bascule
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}