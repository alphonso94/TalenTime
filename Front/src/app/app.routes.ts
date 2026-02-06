import { Routes } from '@angular/router';
import { ProfilApprenantComponent } from './pages/apprenant/apprenant';
import { Entreprise } from './pages/entreprise/entreprise';
import { AccueilComponent } from './pages/accueil/accueil'; // Import AccueilComponent
import { Connexion } from './pages/connexion/connexion'; // Import Connexion component
import { Contact } from './pages/contact/contact';
import { Cgv } from './pages/cgv/cgv';
import path from 'path';
import { Partenaire } from './pages/partenaire/partenaire'; // Import Partenaire component

export const routes: Routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' }, // Redirige le vide vers accueil
    { path: 'accueil', component: AccueilComponent },         // Crée un composant pour l'accueil
    { path: 'apprenant', component: ProfilApprenantComponent },
    { path: 'entreprise', component: Entreprise },
    { path: 'connexion',  component: Connexion}, // Ajoute une route pour la page de connexion
    { path: 'contact',    component: Contact }, // Ajoute une route pour la page de contact
    {path:'cgv',  component:Cgv}, // Ajoute une route pour la page des CGV
    {path:'partenaire', component:Partenaire } // Ajoute une route pour la page des partenaires
];