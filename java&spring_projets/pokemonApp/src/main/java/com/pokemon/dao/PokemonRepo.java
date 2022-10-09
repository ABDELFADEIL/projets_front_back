package com.pokemon.dao;

import com.pokemon.entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PokemonRepo extends JpaRepository<Pokemon, Integer> {


    List<Pokemon> findAllByNameContains(String name);
}
