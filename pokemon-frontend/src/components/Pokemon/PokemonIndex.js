import React, { useEffect, useState } from 'react';
import PokemonServer  from "./PokemonServer";
import PokemonItem from './PokemonItem';

const PokemonIndex = () => {

    
    //UseState: Declara una variable de estado
    const [pokemons, setPokemons] = useState([]);

    /*
    getPokemons: Obtiene los datos de la api mediante una petición asyncrona y la respuesta
    se almacena en la variable de estado.
    */
    const getPokemons = async () => {
        try {
            setPokemons(await PokemonServer.index());
        } catch (errors) {
            console.log(errors);
        }
    };

    /*
    /useEffect: Accede al cambio de una variable de estad
    */
    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {
                    pokemons.map((pokemon) => {
                        return <PokemonItem key={pokemon.id} pokemon={pokemon} getPokemons={getPokemons}/>
                    })
                }
            </div>

        </div>
    );
}

export default PokemonIndex; 