import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    ProductsComponent,
    PruebasComponent,
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    ProductsComponent,
    PruebasComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
})
export class GeneralModule {}
