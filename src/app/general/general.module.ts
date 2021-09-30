import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ModalComponent } from './modal/modal.component';
import { ModalCompraComponent } from './modal-compra/modal-compra.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    ProductsComponent,
    PruebasComponent,
    ModalComponent,
    ModalCompraComponent,
  ],
  exports: [
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
    ProductsComponent,
    PruebasComponent,
    ModalComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
})
export class GeneralModule {}
