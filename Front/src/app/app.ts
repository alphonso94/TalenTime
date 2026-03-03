import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./composant/navbar/navbar";
import { Footer } from './composant/footer/footer';
import { AccueilComponent } from "./pages/accueil/accueil";
import { AccueilApprenant } from "./pages/apprenant/accueil-apprenant/accueil-apprenant";
import { AccueilEntreprise } from "./pages/entreprise/accueil-entreprise/accueil-entreprise";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Talentime');
}
