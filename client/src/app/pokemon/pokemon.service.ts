import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http'
import {environment} from '../../environments/environment'

import 'rxjs/add/operator/toPromise'
import {Pokemon} from "./pokemon";

@Injectable()
export class PokemonService {
  private pokemonsUrl = `${environment.API_URL}/pokemons`; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getPokemons(): Promise<Pokemon[]> {
    return this.http.get(this.pokemonsUrl, this.headers)
      .toPromise()
      .then(response => response.json() as Pokemon[])
      .catch(this.handleError);
  }

  createPokemon(pokemon: Pokemon): Promise<Response> {
    const requestBody = {
      name: pokemon.name,
      element_type: pokemon.elementType,
      age: pokemon.age,
      sex: pokemon.sex
    };

    return this.http.post(this.pokemonsUrl, requestBody, this.headers)
      .toPromise()
      .then((response) => {
        return response
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
