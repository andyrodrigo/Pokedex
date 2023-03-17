import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListaComponent } from './componentes/poke-lista/poke-lista.component';
import { PokeInfoComponent } from './componentes/poke-info/poke-info.component';

const routes: Routes = [
  { path: '', component: PokeListaComponent },
  { path: 'info', component: PokeInfoComponent },
  { path: 'info/:id', component: PokeInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
