import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Output() onPokemonCreated = new EventEmitter<boolean>();

  private pokemonForm: FormGroup;
  private currentPokemon = new Pokemon(null, null, null, null, null);

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.configureForm();
  }

  configureForm(pokemon?: Pokemon) {
    this.pokemonForm = new FormGroup({
      name: new FormControl(this.currentPokemon.name, Validators.required),
      elementType: new FormControl(this.currentPokemon.elementType, Validators.required),
      age: new FormControl(this.currentPokemon.age, Validators.required),
      sex: new FormControl(this.currentPokemon.sex, Validators.required)
    });
  }

  submitForm() {
    this.currentPokemon.name = this.pokemonForm.value["name"];
    this.currentPokemon.elementType = this.pokemonForm.value["elementType"];
    this.currentPokemon.age = this.pokemonForm.value["age"];
    this.currentPokemon.sex = this.pokemonForm.value["sex"];
    this.createPokemon();
  }

  freshForm() {
    this.pokemonForm.reset();
    this.cleanPokemon();
  }

  createPokemon() {
    console.log(this.currentPokemon);
    this.pokemonService.createPokemon(this.currentPokemon).then((response) => {
      this.onPokemonCreated.emit(response.ok);
    }).catch((err) => {
      console.log(err);
    });
  }

  cleanPokemon() {
    this.currentPokemon = new Pokemon(null, null, null, null, null);
  }
}
