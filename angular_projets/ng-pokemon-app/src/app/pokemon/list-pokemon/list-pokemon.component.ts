import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  constructor(private router: Router, private pokemonService: PokemonService){

  }
  ngOnInit(): void {
    this.getPokemonList();
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon: Pokemon){
    if(!pokemon) return;
  this.router.navigate(['/pokemons', pokemon.id]);
  }
  getPokemonList(){
    this.pokemonService.getPokemonList().subscribe(pokemons=> {
      this.pokemonList = pokemons;
    });
  }
}
