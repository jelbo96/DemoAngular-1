import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { GeneralModule } from './general/general.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HeaderComponent } from './compartida/header/header.component';

import { AppRoutingModule } from '../app/app-routing/app-routing.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    GeneralModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
