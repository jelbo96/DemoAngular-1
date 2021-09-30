import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login/login.component';
import { RegistroComponent } from '../login/registro/registro.component';
import { ProductsComponent } from '../general/products/products.component';
import { NotFoundComponent } from '../general/not-found/not-found.component';
import { HomeComponent } from '../general/home/home.component';
import { PruebasComponent } from '../general/pruebas/pruebas.component';
import { ProductComponent } from '../general/product/product.component';
import { PurchaseSummaryComponent } from '../general/purchase-summary/purchase-summary.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'pruebas', component: PruebasComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'purchase-summary', component: PurchaseSummaryComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
