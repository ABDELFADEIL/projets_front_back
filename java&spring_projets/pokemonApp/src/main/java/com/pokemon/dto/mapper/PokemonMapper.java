package com.pokemon.dto.mapper;

import com.pokemon.dto.PokemonDto;
import com.pokemon.entity.Pokemon;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

public interface PokemonMapper {


    PokemonDto toPokemonDto(Pokemon pokemon);
    Pokemon toPokemon(PokemonDto pokemonDto);


}
