import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm = new FormGroup({
    objet: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.pattern('^[0-9]{10}$')]),
    organisation: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submitted = false;

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Demande envoyée :', this.contactForm.value);
      this.submitted = true;
      // Ici, vous pourriez appeler un service pour envoyer l'email
    }
  }
}