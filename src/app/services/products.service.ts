import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Declaracion de variables
  productos: Array<Product> = [];

  constructor(private http: HttpClient) {
    console.log('ProductsService constructor');
    this.cargarProductos();
  }

  private cargarProductos() {
    console.log('cargarProductos');

    this.http
      .get('assets/data/productos_homero.json')
      .subscribe((resp: any) => {
        this.productos = resp.products;
        console.log(resp);
      });
  }
}
