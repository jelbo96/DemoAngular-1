import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ev-sumativa-uno';

  constructor(
    public productsService: ProductsService,
    public categoriesService: CategoriesService
  ) {
    console.log('AppComponent constructor');
  }
}
