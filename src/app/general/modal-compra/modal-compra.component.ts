import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css'],
})
export class ModalCompraComponent implements OnInit {
  @Input()
  productList: any[] = [];

  @Input()
  montoTotal: number = 0;

  constructor() {
    console.log('Product List', this.productList);
  }

  ngOnInit(): void {}
}
