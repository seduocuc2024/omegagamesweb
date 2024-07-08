import { Component, Input } from '@angular/core';
import CarroService from '../../../services/carro.service';

/**
 * @description
 * 
 * Componente Familiar
 * 
 * En este componente se encuentran todos los juegos que corresponden a la categoria familiar.
 * 
 */

@Component({
  selector: 'app-familiar',
  standalone: true,
  imports: [],
  templateUrl: './familiar.component.html',
  styleUrl: './familiar.component.css'
})
export default class FamiliarComponent {
  @Input() product: any;

  constructor(private carroService: CarroService) {}

  agregarAlCarro(product: any) {
    this.carroService.agregarAlCarro(product);
  }
}
