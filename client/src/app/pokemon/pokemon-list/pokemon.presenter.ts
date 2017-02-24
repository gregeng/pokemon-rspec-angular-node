import {Injectable} from "@angular/core";
import {Pokemon} from "../pokemon";
import {DatePipe} from "@angular/common";
@Injectable()
export class PokemonPresenter {
    private datePipe = new DatePipe("MST");

    present(pokemons: Pokemon[]) {
        pokemons.map((pokemon) => {
            this.presentedAge(pokemon);
            return pokemon
        })
    }

    private presentedAge(pokemon) {
        pokemon['presentedAgeFromPresenter'] = this.datePipe.transform(pokemon.age, "MM/dd/yyyy");
        return pokemon
    }
}