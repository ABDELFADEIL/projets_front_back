import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)?.subscribe(res=> {
        this.pokemon = res;
      });
    }else {
      this.pokemon = undefined;
    }
  }

}
