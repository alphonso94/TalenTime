import { Component, signal, computed, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Map, Marker } from 'leaflet'; // Types

interface JobOffer {
  company: string;
  time: string;
  places: string;
  room: string;
  duration: string;
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.html',
  styleUrls: ['./container.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
  // ✅ Propriété 'jobs' déclarée ici
  jobs = signal<JobOffer[]>([
    { company: 'Septeo', time: '9H-14H', places: '18/25', room: 'Salle 109', duration: '15 minutes' },
    { company: 'Capgemini', time: '9H-16H', places: '30/30', room: 'Amphitéâtre B', duration: '10 minutes' },
    { company: 'Teads', time: '9H-14H', places: '10/25', room: 'Amphitéâtre A', duration: '15 minutes' },
    { company: 'Acelys', time: '9H-16H', places: '14/30', room: 'Salle 111', duration: '10 minutes' },
    { company: 'Devensys', time: '9H-14H', places: '20/25', room: 'Amphitéâtre A', duration: '15 minutes' },
    { company: 'Graft Central', time: '9H-12H', places: '15/15', room: 'Amphithéâtre A', duration: '10 minutes' },
    { company: 'Solutek', time: '9H-18H', places: '13/20', room: 'Salle 110', duration: '25 minutes' }
  ]);

  searchTerm = signal('');

  // ✅ 'availablePlaces' et 'filteredJobs' déclarés
  filteredJobs = computed(() => this.jobs().filter(job => 
    job.company.toLowerCase().includes(this.searchTerm().toLowerCase())
  ));

  availablePlaces = computed(() => this.jobs().filter(job => {
    const [taken, total] = job.places.split('/').map(Number);
    return total - taken > 0;
  }));

  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  private map?: Map;
  private marker?: Marker;

  ngOnInit() {
    setTimeout(() => this.initMap(), 100);
  }

  ngOnDestroy() {
    this.map?.remove();
  }

  onSearchChange(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  reserveSlot(job: JobOffer) {
    alert(`Réservation ${job.company}`);
  }

  private initMap() {
    if (!this.mapContainer?.nativeElement) return;
    this.map = L.map(this.mapContainer.nativeElement).setView([43.6119, 3.8767], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    this.marker = L.marker([43.6119, 3.8767]).addTo(this.map)
      .bindPopup('EPSI Montpellier - Job Dating');
  }
}
