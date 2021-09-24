import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

//Components
import { AppComponent } from '../app.component';
import { LoginComponent } from '../general/login/login.component';
import { RegisterComponent } from '../general/register/register.component';
import { ProductsComponent } from '../general/products/products.component';

const routes: Routes = [
  /* { path: '', component: AppComponent }, */
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
