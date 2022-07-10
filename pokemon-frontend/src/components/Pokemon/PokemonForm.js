import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonServer from "./PokemonServer";

const PokemonForm = () => {

    const navigate = useNavigate();
    const params = useParams();

    const initialState = {
        "name": "",
        "height": 0,
        "weight": 0,
        "image": ""
    };

    const [pokemon, setPokemon] = useState(initialState);

    const handleInputChange = (e) => {
        setPokemon({ ...pokemon, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!params.id) {
            createPokemon(pokemon);
        }
        else {
            updatePokemon(params.id, pokemon);
        }

    };

    const createPokemon = async (pokemon) => {
        try {
            const res = await PokemonServer.store(pokemon);
            if (res.status === 200) {
                alert("Pokemon registrado con exito");
                navigate("/pokemons");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updatePokemon = async (id, pokemon) => {
        try {
            const res = await PokemonServer.update(id,pokemon);
            if (res.status === 200) {
                alert("Pokemon actualizado con exito");
                navigate("/pokemons");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getPokemon = async (pokemonId) => {
        try {
            const { data } = await PokemonServer.show(pokemonId);
            const { name, height, weight, image } = data;
            setPokemon({ name, height, weight, image });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (params.id) {
            getPokemon(params.id);
        }
    }, [params.id]);

    return (
        <div className="container d-flex align-items-center" style={{ height: "80vh" }}>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title" >Create Pokemon</h3>
                    <form onSubmit={handleSubmit} id="pokemon-form">
                        <div className="row">
                            <div className="col-4">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={handleInputChange} value={pokemon.name} id="name" />
                            </div>
                            <div className="col-2">
                                <label className="form-label">Height</label>
                                <input type="number" step=".01" className="form-control" onChange={handleInputChange} value={pokemon.height} id="height" />
                            </div>
                            <div className="col-2">
                                <label className="form-label">Weight</label>
                                <input type="number" step=".01" className="form-control" onChange={handleInputChange} value={pokemon.weight} id="weight" />
                            </div>
                            <div className="col-4">
                                <label className="form-label">URL Image</label>
                                <input type="url" className="form-control" onChange={handleInputChange} value={pokemon.image} id="image" />
                            </div>
                            <div className="col-12 mt-3 d-flex justify-content-end">
                                <button className="btn btn-success">
                                    {
                                        params.id ? 'Update' : 'Save'
                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PokemonForm;