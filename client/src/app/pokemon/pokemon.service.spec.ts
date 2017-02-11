/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {PokemonService} from './pokemon.service';
import {Http, BaseRequestOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonService,
        Http,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },]
    });
  });

  it('should ...', inject([PokemonService], (service: PokemonService) => {
    expect(service).toBeTruthy();
  }));
});
