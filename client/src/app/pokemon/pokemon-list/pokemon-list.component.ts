import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {PokemonPresenter} from "./pokemon.presenter";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  public highlightedCell;

  constructor(
    private pokemonService: PokemonService,
    private pokemonPresenter: PokemonPresenter
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().then((pokemons) => {
      console.log(pokemons);
      this.pokemonPresenter.present(pokemons)
      this.pokemons = pokemons
    });
  }

  onPokemonCreated(created: boolean) {
    created ? this.getPokemons() : null;
  }

  highlightCell(event) {
    if(this.highlightedCell) {
      this.highlightedCell.classList.remove('highlighted');
    }

    event.currentTarget.classList.add('highlighted');
    this.highlightedCell = event.currentTarget;
  }
}
