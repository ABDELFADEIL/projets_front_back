package com.pokemon.api;

import com.pokemon.dto.PokemonDto;
import com.pokemon.dto.mapper.PokemonMapper;
import com.pokemon.entity.Pokemon;
import com.pokemon.service.IPokemonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/pokemons")
public class PokemonRest {

    private final IPokemonService pokemonService;
    private final PokemonMapper pokemonMapper;

    public PokemonRest(IPokemonService pokemonService, PokemonMapper pokemonMapper) {
        this.pokemonService = pokemonService;
        this.pokemonMapper = pokemonMapper;
    }


    @GetMapping("/{id}")
    public ResponseEntity<Pokemon> getPokemonById(@PathVariable(name = "id") Integer pokemonID){
        return ResponseEntity.ok(pokemonService.getPokemonById(pokemonID));
    }

    @GetMapping("/")
    public ResponseEntity<List<Pokemon>> getAllPokemons(){
        return ResponseEntity.ok(pokemonService.getAllPokemons());
    }

    @GetMapping("")
    public ResponseEntity<List<Pokemon>> getPokemonsByName(@RequestParam(name = "name") String term){
        return ResponseEntity.ok(pokemonService.getPokemonsByName(term));
    }

    @PostMapping(value = "/")
    public ResponseEntity<Pokemon> addPokemon(@RequestBody PokemonDto pokemonDto){
        Pokemon pokemon = pokemonMapper.toPokemon(pokemonDto);
        return ResponseEntity.ok(pokemonService.updatePokemon(pokemon));
    }
    @PutMapping(value = "/")
    public Pokemon updatePokemon(@RequestBody PokemonDto pokemonDto){
        Pokemon pokemon = pokemonMapper.toPokemon(pokemonDto);
        return pokemonService.updatePokemon(pokemon);
    }

    @DeleteMapping(value = "/{id}")
    public void deletePokemonById(@PathVariable(name = "id") Integer pokemonID){
         pokemonService.deletePokemonById(pokemonID);
    }
}
