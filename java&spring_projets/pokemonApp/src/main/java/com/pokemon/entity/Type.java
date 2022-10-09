package com.pokemon.entity;


import java.util.*;

public enum Type {

    Plante, Poison, Feu, Eau, Normal, Vol, Electrik, Fée, Insecte;
    public static final Set<Type> types = EnumSet.of(Plante, Poison, Feu, Eau, Normal, Electrik, Fée, Insecte);

    public List<Type> getTypeValues(){
        return new ArrayList<>(Arrays.asList(values()));
    }
}
