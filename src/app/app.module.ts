import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceApiService } from './services/service-api.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ServiceApiService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
