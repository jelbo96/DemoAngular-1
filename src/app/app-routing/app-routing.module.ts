import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

//Components
import { AppComponent } from '../app.component';
import { LoginComponent } from '../general/login/login.component';
import { RegisterComponent } from '../general/register/register.component';
import { ProductsComponent } from '../general/products/products.component';
import { NotFoundComponent } from '../general/not-found/not-found.component';
import { HomeComponent } from '../general/home/home.component';
import { PruebasComponent } from '../general/pruebas/pruebas.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pruebas', component: PruebasComponent },
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
