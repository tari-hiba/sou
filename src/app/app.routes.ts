import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RendezVousComponent } from './rendezvous/rendezvous.component';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component'; // Assurez-vous que ce fichier existe

export const routes: Routes = [
  { path: '', redirectTo: 'inscription', pathMatch: 'full' },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'rendezvous', component: RendezVousComponent },
  { path: 'disponibilites', component: DisponibiliteComponent },
];
