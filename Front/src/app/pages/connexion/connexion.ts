import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.css']
})
export class Connexion implements OnInit {
  authForm!: FormGroup;
  mode: 'login' | 'register' = 'login'; // État initial

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      // On peut ajouter le nom seulement pour l'inscription
      nom: new FormControl('') 
    });
  }

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
    // On réinitialise le formulaire quand on change de mode
    this.authForm.reset();
  }

  onSubmit() {
    if (this.authForm.valid) {
      console.log(`Données envoyées (${this.mode}) :`, this.authForm.value);
    }
  }
}