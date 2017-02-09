// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

// Service
import {PokemonService} from "./pokemon.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PokemonListComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
