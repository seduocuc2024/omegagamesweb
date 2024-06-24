import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ListaProductoComponent } from '../lista-producto/lista-producto.component';
import { CarroService } from '../../services/carro.service';

/**
 * @description
 * Componente de carro de compras
 * 
 * Este componente es el carro de compras como tal, el cual lleva el conteo de los items que el 
 * comprador a ido agregando al carro.
 */

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [CommonModule, ListaProductoComponent],
  templateUrl: './carro.component.html',
  styleUrl: './carro.component.css'
})
export default class CarroComponent {
  carroService = inject(CarroService);

  borrarDeCarro(item : any){
    this.carroService.borrarDeCarro(item)
  }
}
