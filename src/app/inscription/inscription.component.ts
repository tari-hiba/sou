import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4" style="color: #2D3748;">Inscription</h2>
      <form class="p-4 rounded shadow-sm" style="background-color: #FFFFFF;">
        <div class="mb-3">
          <label for="username" class="form-label" style="color: #2D3748;">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            class="form-control"
            placeholder="Entrez votre nom d'utilisateur"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label" style="color: #2D3748;">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Entrez votre email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label" style="color: #2D3748;">Mot de passe</label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button type="submit" class="btn w-100" style="background-color: #2B6CB0; color: #FFFFFF;">S'inscrire</button>
      </form>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 500px;
      }
      h2 {
        font-weight: bold;
      }
      label {
        font-weight: bold;
      }
    `,
  ],
})
export class InscriptionComponent {}
