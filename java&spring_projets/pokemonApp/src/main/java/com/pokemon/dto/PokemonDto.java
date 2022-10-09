package com.pokemon.dto;

import com.pokemon.entity.Type;

import java.util.Date;
import java.util.List;

public class PokemonDto {

    private Integer id;
    private String name;
    private int hp;
    private int cp;
    private String picture;
    private Date created;
    private List<Type> types;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int getCp() {
        return cp;
    }

    public void setCp(int cp) {
        this.cp = cp;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public List<Type> getTypes() {
        return types;
    }

    public void setTypes(List<Type> types) {
        this.types = types;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) { this.created = created; }

    @Override
    public String toString() {
        return "PokemonDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", hp=" + hp +
                ", cp=" + cp +
                ", picture='" + picture + '\'' +
                ", created=" + created +
                ", types=" + types +
                '}';
    }
}
