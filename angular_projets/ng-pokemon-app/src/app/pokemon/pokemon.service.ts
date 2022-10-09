import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { API_URL } from '../api_params';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList() :Observable<Pokemon[]> {
   return this.http.get<Pokemon[]>(API_URL + "pokemons/").pipe(
    tap(pokemons => this.log(pokemons)),
    catchError((error)=> this.handleError(error, []))
   );
  }
  getPokemonById(pokemonId: number) :Observable<Pokemon | undefined>{
    return this.http.get<Pokemon>(`${API_URL}pokemons/${pokemonId}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((error)=> this.handleError(error, undefined))
     );
  }

  addPokemon(pokemon: Pokemon) :Observable<Pokemon | undefined>{
    this.log(pokemon)
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Pokemon>(`${API_URL}pokemons/`, pokemon, httpOptions).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((error)=> this.handleError(error, undefined))
     );
  }
  updatePokemon(pokemon: Pokemon) :Observable<Pokemon | undefined>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put<Pokemon>(`${API_URL}pokemons/`, pokemon, httpOptions).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((error)=> this.handleError(error, undefined))
     );
  }

  deletePokemonById(pokemonId: number) :Observable<Pokemon | undefined>{
    return this.http.delete<Pokemon>(`${API_URL}pokemons/${pokemonId}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((error)=> this.handleError(error, undefined))
     );
  }
 searchPokemons(term: string) :Observable<Pokemon[]>{
  if(term.length <= 1){
    return of([]);
  }
    return this.http.get<Pokemon[]>(`${API_URL}pokemons?name=${term}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((error)=> this.handleError(error, []))
    )
 }
  private log(response: Pokemon[] | Pokemon | undefined){
    console.table(response);
  }
  private handleError(error: Error, errorValue: any){
    console.log(error);
    return of(errorValue);
  }

  getPokemonTypeList() :string[] {
    return [
      'Poison',
      'Plante',
      'Fau', 
      'Insecte',
      'Normal',
      'Electrik',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
