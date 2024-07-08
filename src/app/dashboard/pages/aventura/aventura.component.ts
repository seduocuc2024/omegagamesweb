import { Component, Input } from '@angular/core';
import CarroService from '../../../services/carro.service';

@Component({
  selector: 'app-aventura',
  standalone: true,
  imports: [],
  templateUrl: './aventura.component.html',
  styleUrl: './aventura.component.css'
})
export default class AventuraComponent {
  @Input() product: any;

  constructor(private carroService: CarroService) {}

  agregarAlCarro(product: any) {
    this.carroService.agregarAlCarro(product);
  }
}

