import { Routes } from '@angular/router';

import { ProfilApprenantComponent } from './pages/apprenant/apprenant';
import { Entreprise } from './pages/entreprise/entreprise';
import { AccueilComponent } from './pages/accueil/accueil'; // Import AccueilComponent
import { Connexion } from './pages/connexion/connexion'; // Import Connexion component
import { Contact } from './pages/contact/contact';
import { Cgv } from './pages/cgv/cgv';
import path from 'path';
import { Partenaire } from './pages/partenaire/partenaire'; // Import Partenaire component
import { AccueilApprenant } from './pages/apprenant/accueil-apprenant/accueil-apprenant'; // Import AccueilApprenant component
import { AccueilEntreprise } from './pages/entreprise/accueil-entreprise/accueil-entreprise'; // Import AccueilEntreprise component
import { InscriptionEntreprise } from './pages/entreprise/inscription-entreprise/inscription-entreprise';   

export const routes: Routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' }, // Redirige le vide vers accueil
    { path: 'accueil', component: AccueilComponent },         // Crée un composant pour l'accueil
    { path: 'apprenant', component: ProfilApprenantComponent },
    { path: 'entreprise', component: Entreprise },
    { path: 'connexion',  component: Connexion}, // Ajoute une route pour la page de connexion
    { path: 'contact',    component: Contact }, // Ajoute une route pour la page de contact
    {path:'cgv',  component:Cgv}, // Ajoute une route pour la page des CGV
    {path:'partenaire', component:Partenaire },// Ajoute une route pour la page des partenaires
    { path: 'accueil-apprenant', component:AccueilApprenant }, // Ajoute une route pour la page d'accueil apprenant
    {path: 'accueil-entreprise', component:AccueilEntreprise }, // Ajoute une route pour la page d'accueil entreprise
    {path: 'inscription-entreprise', component:InscriptionEntreprise } // Ajoute une route pour la page d'inscription entreprise
];