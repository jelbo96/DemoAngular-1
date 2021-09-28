import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  /* carrito: any = []; */

  constructor(
    public categoriesService: CategoriesService,
    public productsService: ProductsService
  ) {
    console.log('print desde component', productsService.productos);
  }

  /*   appendToCart(product) {
    this.carrito.push(product);
  } */

  showData() {
    /* Esta funcion se esta llamando desde el onInit */
  }

  ngOnInit(): void {
    this.showData;
  }
}
