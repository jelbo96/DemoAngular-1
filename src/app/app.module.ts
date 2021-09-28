import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HeaderComponent } from './compartida/header/header.component';
import { RegisterComponent } from './general/register/register.component';
import { LoginComponent } from './general/login/login.component';
import { ProductsComponent } from './general/products/products.component';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { HomeComponent } from './general/home/home.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';
import { ProductComponent } from './general/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    NotFoundComponent,
    HomeComponent,
    PruebasComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
