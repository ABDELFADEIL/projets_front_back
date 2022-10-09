import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemons(term))
    )
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  gotoDetailPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
