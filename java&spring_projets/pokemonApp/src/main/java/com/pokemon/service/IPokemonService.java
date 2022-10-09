package com.pokemon.service;

import com.pokemon.entity.Pokemon;

import java.util.List;

public interface IPokemonService {

    Pokemon getPokemonById(Integer pokemonID);
    List<Pokemon> getAllPokemons();
    Pokemon addPokemon(Pokemon pokemon);
    Pokemon updatePokemon(Pokemon pokemon);
    void deletePokemonById(Integer pokemonID);
    List<Pokemon> getPokemonsByName(String term);
}
