import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FilhoComponent } from '../components/filho/filho.component';
import { ConsumindoServicoComponent } from './consumindo-servico/consumindo-servico.component'

@NgModule({
  declarations: [
    AppComponent,
    FilhoComponent,
    ConsumindoServicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
