import { Component, Input } from '@angular/core';
import CarroService from '../../../services/carro.service';

@Component({
  selector: 'app-dosjugadores',
  standalone: true,
  imports: [],
  templateUrl: './dosjugadores.component.html',
  styleUrl: './dosjugadores.component.css'
})
export default class DosjugadoresComponent {
  @Input() product: any;

  constructor(private carroService: CarroService) {}

  agregarAlCarro(product: any) {
    this.carroService.agregarAlCarro(product);
  }
}
