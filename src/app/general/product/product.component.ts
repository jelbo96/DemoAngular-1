import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  idRoute: string | null = null;

  ConvertString(value: any): number {
    return parseFloat(value);
  }

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idRoute = this.route.snapshot.paramMap.get('id');
  }
}
