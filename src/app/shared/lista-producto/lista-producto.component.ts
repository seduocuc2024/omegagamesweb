import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarroService } from '../../services/carro.service';

/**
 * @description
 * Componente de listado de productos
 * 
 * Este componente es el que se encarga de mantener el listado de productos que se encuentra en la parte superior de la vista del carro de compras
 */

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  carroService = inject(CarroService);

  productos : any[] = [
    {
      id: 1,
      nombre: 'Eldritch Horror',
      precio: 59990,
      descripcion: 'A cooperative game of cosmic horror.',
      imagenUrl: 'assets/imagenes/aventura/ELDRITCH_HORROR.jpg'
    },
    {
      id: 2,
      nombre: 'The Island',
      precio: 31990,
      descripcion: 'A game of suspense, action, and adventure.',
      imagenUrl: 'assets/imagenes/aventura/THE_ISLAND.jpg'
    },
    {
      id: 3,
      nombre: 'Gloomhaven: Fauces del León',
      precio: 69990,
      descripcion: 'A simplified version of the acclaimed Gloomhaven.',
      imagenUrl: 'assets/imagenes/aventura/GLOOMHAVEN.jpg'
    }
    ];
    

    agregarAlCarro(producto : any){
      this.carroService.agregarAlCarro(producto);
    }

}
