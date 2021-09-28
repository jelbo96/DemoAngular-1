import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  carrito: any = [];
  montoTotal: number = 0;
  searchValue: string = '';

  constructor(
    public categoriesService: CategoriesService,
    public productsService: ProductsService
  ) {
    console.log('print desde component', productsService.productos);
  }

  buscar() {
    console.log(this.searchValue);
  }

  appendToCart(product: any) {
    if (this.carrito.includes(product)) {
      // si el producto ya esta en el carrito
      if (
        this.carrito[this.carrito.indexOf(product)].cantidad < product.stock
      ) {
        this.carrito[this.carrito.indexOf(product)].cantidad++;
        this.montoTotal = this.montoTotal + product.price;
      } else {
        alert('No hay stock suficiente');
      }
    } else {
      // si el producto no esta en el carrito
      product['cantidad'] = 1;
      this.carrito.push(product);
      this.montoTotal = this.montoTotal + product.price;
    }

    console.log(this.carrito, this.montoTotal);
  }

  deleteItem(product: any) {
    this.carrito.splice(this.carrito.indexOf(product), 1);
    this.montoTotal = this.montoTotal - product.price * product.cantidad;
  }

  showData() {
    /* Esta funcion se esta llamando desde el onInit */
  }

  ngOnInit(): void {
    this.showData;
  }
}
