import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http'

import 'rxjs/add/operator/toPromise'
import {Pokemon} from "./pokemon";

@Injectable()
export class PokemonService {
  private pokemonsUrl = 'http://localhost:3000/api/pokemons'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getPokemons(): Promise<Pokemon[]> {
    return this.http.get(this.pokemonsUrl, this.headers)
      .toPromise()
      .then(response => response.json() as Pokemon[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
