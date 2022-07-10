import PokemonServer from "./PokemonServer";
import { useNavigate } from "react-router-dom";

const PokemonItem = ({ pokemon, getPokemons }) => {
    
    const navigate = useNavigate();

    const handleDelete = async (id)=>{
        await PokemonServer.destroy(id);
        await getPokemons();
    }

    return (
        <div className="col-md-4 mb-3 mt-3">
            <div className="card text-white bg-dark" >
                <img src={pokemon.image} className="card-img-top bg-light" alt="..."  />
                <div className="card-body ">
                    <h4 className="card-title text-center">{pokemon.name}</h4>
                    <ul className="list-group list-group-flush ">
                        <li className="list-group-item text-white bg-dark" ><b>Height:</b> {pokemon.height} kgs.</li>
                        <li className="list-group-item text-white bg-dark"><b>Weight:</b> {pokemon.weight} kgs.</li>
                    </ul>
                    <div className="card-footer bg-transparent d-flex justify-content-end">
                        <button className="btn btn-success me-1" onClick={()=> navigate(`/pokemons/${pokemon.id}/edit`)}>Update</button>
                        <button className="btn btn-danger me-1" onClick={() => handleDelete(pokemon.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PokemonItem;