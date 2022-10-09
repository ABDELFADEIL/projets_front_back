package com.pokemon;

import com.pokemon.entity.Pokemon;
import com.pokemon.entity.Type;
import com.pokemon.service.IPokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.Set;

@SpringBootApplication
public class PokemonApplication implements CommandLineRunner {

    @Autowired
    private IPokemonService pokemonService;

    public static void main(String[] args) {
        SpringApplication.run(PokemonApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        final Pokemon pokemon = null; // pokemonService.getPokemonById(1);
        System.out.println(pokemon);
        System.out.println(Type.Plante);
        Pokemon pokemon1 = new Pokemon();
        pokemon1.setId(1);
        pokemon1.setName("Nazir");
        pokemon1.setCp(99);
        pokemon1.setHp(66);
        pokemon1.setPicture("gggggggggggggggggg");
        pokemon1.setTypes(Set.of(Type.Plante, Type.Electrik));
        System.out.println(pokemon1);
    }
}
