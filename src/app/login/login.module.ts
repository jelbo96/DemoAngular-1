import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  exports: [LoginComponent, RegistroComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class LoginModule {}
