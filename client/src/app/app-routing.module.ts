import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PokemonListComponent} from "./pokemon/pokemon-list/pokemon-list.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'pokemons',
    component: PokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
}
