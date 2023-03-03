import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieComponent } from './serie/serie.component';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';

@NgModule({
  declarations: [AppComponent, SerieComponent, ListaEpisodiosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
