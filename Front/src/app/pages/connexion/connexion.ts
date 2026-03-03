import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.css']
})
export class Connexion{
  userType: 'apprenant' | 'entreprise' = 'apprenant';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) {}

  setProfile(type: 'apprenant' | 'entreprise') {
    this.userType = type;
    this.loginForm.reset();
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(`Connexion en tant que ${this.userType}`, this.loginForm.value);
      // Redirection selon le profil après succès API
      const target = this.userType === 'apprenant' ? '/accueil-apprenant' : '/accueil-entreprise';
      this.router.navigate([target]);
    }
  }
}