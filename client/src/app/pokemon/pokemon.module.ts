// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

// Component
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

// Service
import {PokemonService} from "./pokemon.service";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import {PokemonPresenter} from "./pokemon-list/pokemon.presenter";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PokemonListComponent,
    PokemonFormComponent
  ],
  providers: [
    PokemonService,
    PokemonPresenter
  ]
})
export class PokemonModule { }
