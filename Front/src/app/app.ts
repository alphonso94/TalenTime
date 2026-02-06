import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./composant/navbar/navbar";
import { Footer } from './composant/footer/footer';
import { AccueilComponent } from "./pages/accueil/accueil";
import { ProfilApprenantComponent } from './pages/apprenant/apprenant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Talentime');
}
