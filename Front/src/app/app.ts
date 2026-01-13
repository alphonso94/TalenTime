import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./composant/navbar/navbar";
import { Footer } from './composant/footer/footer';
import { ContainerComponent } from "./composant/container/container";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Talentime');
}


