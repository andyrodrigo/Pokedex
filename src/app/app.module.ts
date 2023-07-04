import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { layoutComponent } from './core/layout.component';
import { PokeListaComponent } from './componentes/poke-lista/poke-lista.component';
import { ItemListaComponent } from './componentes/item-lista/item-lista.component';
import { PokeInfoComponent } from './componentes/poke-info/poke-info.component';
import { StatsComponent } from './componentes/stats/stats.component';
import { PokeDetailsComponent } from './componentes/poke-details/poke-details.component';

@NgModule({
  declarations: [
    AppComponent,
    layoutComponent,
    PokeListaComponent,
    ItemListaComponent,
    PokeInfoComponent,
    StatsComponent,
    PokeDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
