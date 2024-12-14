import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importation de RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #4A5568">
        <div class="container">
          <a class="navbar-brand" href="#" style="color: #F7FAFC;">Gestion des Rendez-vous</a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" routerLink="/inscription" routerLinkActive="active" style="color: #F7FAFC;">Inscription</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/connexion" routerLinkActive="active" style="color: #F7FAFC;">Connexion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/rendezvous" routerLinkActive="active" style="color: #F7FAFC;">Rendez-vous</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main class="container mt-4">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .navbar-brand {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .nav-link {
        font-size: 1.2rem;
        margin-left: 15px;
      }
      .active {
        font-weight: bold;
        text-decoration: underline;
      }
      main.container {
        padding: 20px;
        background-color: #EDF2F7;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class AppComponent {}
