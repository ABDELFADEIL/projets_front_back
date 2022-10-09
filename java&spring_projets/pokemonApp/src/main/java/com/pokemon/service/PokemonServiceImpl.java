package com.pokemon.service;

import com.pokemon.dao.PokemonRepo;
import com.pokemon.entity.Pokemon;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PokemonServiceImpl implements IPokemonService{

    private final PokemonRepo pokemonRepo;

    public PokemonServiceImpl(PokemonRepo pokemonRepo) {
        this.pokemonRepo = pokemonRepo;
    }

    @Override
    public Pokemon getPokemonById(Integer pokemonID) {
        return pokemonRepo.getReferenceById(pokemonID);
    }

    @Override
    public List<Pokemon> getAllPokemons() {
        return pokemonRepo.findAll();
    }

    @Override
    public Pokemon addPokemon(Pokemon pokemon) {
        pokemon.setCreated(new Date());
        return pokemonRepo.save(pokemon);
    }

    @Override
    public Pokemon updatePokemon(Pokemon pokemon) {
        return pokemonRepo.save(pokemon);
    }

    @Override
    public void deletePokemonById(Integer pokemonID) {
         pokemonRepo.deleteById(pokemonID);
    }

    @Override
    public List<Pokemon> getPokemonsByName(String term) {
        return pokemonRepo.findAllByNameContains(term);
    }
}
