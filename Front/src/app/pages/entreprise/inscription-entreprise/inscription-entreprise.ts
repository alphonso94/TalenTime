import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription-entreprise',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './inscription-entreprise.html',
  styleUrls: ['./inscription-entreprise.css']
})
export class InscriptionEntreprise {
  entrepriseForm = new FormGroup({
    nomEntreprise: new FormControl('', [Validators.required]),
    siret: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{14}$')]),
    secteur: new FormControl('', [Validators.required]),
    nomContact: new FormControl('', [Validators.required]),
    emailPro: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(private router: Router) {}

  onRegister() {
    if (this.entrepriseForm.valid) {
      console.log('Données Entreprise :', this.entrepriseForm.value);
      // Simuler une inscription réussie
      this.router.navigate(['/accueil-entreprise']);
    }
  }
}