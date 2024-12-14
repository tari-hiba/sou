import { Component } from '@angular/core';

@Component({
  selector: 'app-rendezvous',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4">Gestion des Rendez-Vous</h2>
      
      <!-- Formulaire pour prendre un rendez-vous -->
      <div class="bg-light p-4 rounded shadow-sm mb-4">
        <h5>Prendre un rendez-vous</h5>
        <form>
          <div class="mb-3">
            <label for="clientName" class="form-label">Nom du Client</label>
            <input type="text" id="clientName" class="form-control" placeholder="Entrez votre nom">
          </div>
          <div class="mb-3">
            <label for="professional" class="form-label">Professionnel</label>
            <select id="professional" class="form-select">
              <option selected>Choisir...</option>
              <option value="1">Docteur A</option>
              <option value="2">Docteur B</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Date</label>
            <input type="date" id="date" class="form-control">
          </div>
          <button type="submit" class="btn btn-primary w-100">Ajouter Rendez-Vous</button>
        </form>
      </div>
      
      <!-- Liste des rendez-vous -->
      <div class="bg-light p-4 rounded shadow-sm">
        <h5>Liste des Rendez-Vous</h5>
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Nom du Client</th>
              <th scope="col">Professionnel</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Client 1</td>
              <td>Docteur A</td>
              <td>2024-12-15</td>
              <td>
                <button class="btn btn-success btn-sm me-2">Confirmer</button>
                <button class="btn btn-danger btn-sm">Annuler</button>
              </td>
            </tr>
            <tr>
              <td>Client 2</td>
              <td>Docteur B</td>
              <td>2024-12-20</td>
              <td>
                <button class="btn btn-success btn-sm me-2">Confirmer</button>
                <button class="btn btn-danger btn-sm">Annuler</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 800px;
      }
      .table td, .table th {
        vertical-align: middle;
      }
    `,
  ],
})
export class RendezVousComponent {}
