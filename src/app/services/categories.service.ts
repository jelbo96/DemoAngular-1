import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //Declaracion de variables
  categorie: Categories = {};

  constructor(private http: HttpClient) {
    console.log('CategoriesService constructor');
    this.cargarCategorias();
  }

  private cargarCategorias() {
    console.log('cargarCategorias');

    this.http
      .get('assets/data/categorias.json')
      .subscribe((resp: Categories) => {
        this.categorie = resp;

        console.log(this.categorie);
      });
  }
}
