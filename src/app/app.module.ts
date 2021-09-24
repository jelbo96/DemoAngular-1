import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HeaderComponent } from './compartida/header/header.component';
import { RegisterComponent } from './general/register/register.component';
import { LoginComponent } from './general/login/login.component';
import { ProductsComponent } from './general/products/products.component';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { HomeComponent } from './general/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
