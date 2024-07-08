import { Injectable } from '@angular/core';

/**
 * @description
 * Servicio de carro de compras
 * 
 * Este servicio es el encargado de dar vida al carro de compras, en el estan todas las acciones que se pueden realizar con el carro de compras.
 * 
 */

@Injectable({
  providedIn: 'root'
})
export default class CarroService {
  public items: any[] = [];

  constructor() {
    if (this.isLocalStorageAvailable()) {
      this.items = JSON.parse(localStorage.getItem('itemsCarro') || '[]');
    }
  }

  public isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  agregarAlCarro(producto: any) {
    this.items.push({ ...producto, cantidad: 1 });
    this.updateLocalStorage();
  }

  getItems() {
    return this.items;
  }

  borrarDeCarro(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.updateLocalStorage();
  }

  sumarCantidad(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.cantidad++;
      this.updateLocalStorage();
    }
  }

  restarCantidad(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.cantidad--;
      this.updateLocalStorage();
    }
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.precio * item.cantidad;
    }, 0);
  }

  public updateLocalStorage() {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('itemsCarro', JSON.stringify(this.items));
    }
  }
}
