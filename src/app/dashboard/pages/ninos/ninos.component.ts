import { Component, Input } from '@angular/core';
import CarroService from '../../../services/carro.service';

@Component({
  selector: 'app-ninos',
  standalone: true,
  imports: [],
  templateUrl: './ninos.component.html',
  styleUrl: './ninos.component.css'
})
export default class NinosComponent {
  @Input() product: any;

  constructor(private carroService: CarroService) {}

  agregarAlCarro(product: any) {
    this.carroService.agregarAlCarro(product);
  }
}
