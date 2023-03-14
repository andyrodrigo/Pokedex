import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListaComponent } from './componentes/poke-lista/poke-lista.component';

import { HttpClientModule } from '@angular/common/http';
import { ItemListaComponent } from './componentes/item-lista/item-lista.component';

@NgModule({
  declarations: [AppComponent, PokeListaComponent, ItemListaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
