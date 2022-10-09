import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon [];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.getPokemonById(+pokemonId);
    }
  }
  getPokemonById(pokemonId: number) {
     this.pokemonService.getPokemonById(pokemonId)?.subscribe(pokemon => {
      this.pokemon = pokemon;
     });
  }
  deletePokemon(pokemonId: number){
    this.pokemonService.deletePokemonById(pokemonId).subscribe({
      next: response => {this.goBack()},
      error: error   => { console.log(error)}
    });
  }
  goBack(){
   this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemons', pokemon?.id]);
   }
}
