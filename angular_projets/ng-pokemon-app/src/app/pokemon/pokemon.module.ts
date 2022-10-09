import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { AuthGuard } from '../auth.guard';


const pokemonRoutes: Routes = [
  { path: 'edit/pokemons/:id', component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemons/add', component: AddPokemonComponent },
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id', component: DetailPokemonComponent }

]
@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    LoaderComponent,
    SearchPokemonComponent,
    AddPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
