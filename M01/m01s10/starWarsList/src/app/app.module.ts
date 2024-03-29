import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, StarwarsComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
