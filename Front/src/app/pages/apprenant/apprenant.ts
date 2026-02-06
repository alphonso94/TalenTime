import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apprenant',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apprenant.html',
  styleUrls: ['./apprenant.css'] // Vous pouvez réutiliser le même CSS que l'entreprise
})
export class ProfilApprenantComponent {}