import React from 'react'

export default function Character({name, gender, height, mass, hair_color, skin_color}) {
    return (
        <div className = "character">
            <h3>{name}</h3>
            <h4>Features</h4>
            <ul>
                <li>Gender: {gender}</li>
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
                <li>Hair Color: {hair_color}</li>
                <li>Skin Color: {skin_color}</li>
            </ul>
        </div>
    )
}


//Height, mass, hairc_color, skin_color