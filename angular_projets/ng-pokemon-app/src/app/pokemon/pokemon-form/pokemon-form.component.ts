import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: [ './pokemon-form.component.css' ]
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  pokemonTypeList: string [];
  idAddForm: boolean;

  constructor(private pokemonService: PokemonService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonTypeList = this.pokemonService.getPokemonTypeList();
    this.idAddForm = this.router.url.includes('add');
  }

  hasType(type: string) :boolean{
    return this.pokemon.types.includes(type);
  }
  selectType($event: Event, type: string){
    const isChecked = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type);
    }else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }
  onSubmit(){
    if(this.idAddForm){
   this.pokemonService.addPokemon(this.pokemon).subscribe({
  next: pokemon => {
    if(pokemon){
      this.router.navigate(['/pokemons', pokemon.id])
  }}, 
  error: error=> console.log(error)
})
    }else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe({next: pokemon => {
        if(pokemon){
          this.router.navigate(['/pokemons', pokemon.id]);
        }else {
          // message à traiter pour indiquer qu'il a eu une erreur
        }
       
      }, error: (error) => console.log(error)
    });
    }
    
  }
  isTypesValid(type: string) :boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    return true;
    }
}
