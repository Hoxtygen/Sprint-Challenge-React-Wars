import React from 'react'
import Character from "./Character";

export default function CharacterList({characters, key}) {
    return (
        <div className = "character-list">
            <h2>Star Wars Characters</h2>
            {
                characters.map(character => {
                    return <Character 
                    name = {character.name}
                    gender = {character.gender}
                    height = {character.height}
                    mass = {character.mass}
                    hair_color = {character.hair_color}
                    skin_color = {character.skin_color}
                    key = {character.url}
                    />
                })
            }
        </div>
    )
}


//Height, mass, hairc_color, skin_color