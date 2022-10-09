package com.pokemon.dto.mapper;


import com.pokemon.dto.PokemonDto;
import com.pokemon.entity.Pokemon;
import com.pokemon.entity.Type;

import java.util.*;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;


@Component
public class PokemonMapperImpl implements PokemonMapper {

    @Override
    public PokemonDto toPokemonDto(Pokemon pokemon) {
        if ( pokemon == null ) {
            return null;
        }
        PokemonDto pokemonDto = new PokemonDto();
        pokemonDto.setName( pokemon.getName() );
        pokemonDto.setHp( pokemon.getHp() );
        pokemonDto.setCp( pokemon.getCp() );
        pokemonDto.setPicture( pokemon.getPicture() );
        pokemonDto.setId( pokemon.getId() );
        Set<Type> set = pokemon.getTypes();
        if ( set != null ) {
            pokemonDto.setTypes( new ArrayList<>( set ) );
        }
        if (Objects.nonNull(pokemon.getCreated())){
            pokemonDto.setCreated( pokemon.getCreated() );
        }
        return pokemonDto;
    }

    @Override
    public Pokemon toPokemon(PokemonDto pokemonDto) {
        if ( pokemonDto == null ) {
            return null;
        }
        Pokemon pokemon = new Pokemon();
        pokemon.setName( pokemonDto.getName() );
        pokemon.setHp( pokemonDto.getHp() );
        pokemon.setCp( pokemonDto.getCp() );
        pokemon.setPicture( pokemonDto.getPicture() );
        pokemon.setId( pokemonDto.getId() );
        List<Type> list = pokemonDto.getTypes();
        if ( list != null ) {
            pokemon.setTypes( new LinkedHashSet<>( list ) );
        }
        if (Objects.nonNull(pokemonDto.getCreated())){
            pokemon.setCreated( pokemonDto.getCreated() );
        }
        return pokemon;
    }
}

