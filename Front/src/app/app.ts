import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./composant/navbar/navbar";
import { Footer } from './composant/footer/footer';
import { Container } from "./composant/container/container";   

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Talentime');
}
