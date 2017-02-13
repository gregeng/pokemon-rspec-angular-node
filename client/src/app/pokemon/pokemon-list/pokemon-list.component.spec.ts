/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokemonListComponent } from './pokemon-list.component';
import {PokemonService} from "../pokemon.service";
import {Http, BaseRequestOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { ReactiveFormsModule } from '@angular/forms'


describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
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
        },
      ],
      declarations: [ PokemonListComponent, PokemonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should work', () => {
    expect(true).toBeTruthy();
  })

});
