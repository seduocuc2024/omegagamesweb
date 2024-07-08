import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import NavMaterialComponent from '../../shared/nav-material/nav-material.component';
import CarroService from '../../services/carro.service';

/**
 * @description
 * Componente Dashboard, pagina principal
 * 
 * Este componente es el inicial, al abrir la pagina lo primero que se ve es el dashboard, que en el menu se llama "Home",
 * en el cual existe una descripcion completa del sitio web de OMEGAGAMES.
 */

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, NavMaterialComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  @Input() product: any;

  constructor(private carroService: CarroService) {}

  agregarAlCarro(product: any) {
    this.carroService.agregarAlCarro(product);
  }
}
