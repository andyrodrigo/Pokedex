import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListaComponent } from './componentes/poke-lista/poke-lista.component';

const routes: Routes = [{ path: 'lista', component: PokeListaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
