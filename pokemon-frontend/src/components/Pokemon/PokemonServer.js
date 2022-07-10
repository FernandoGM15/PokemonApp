import axios from "axios";

const URI = "http://localhost:8000/api/pokemons";

/*
    getPokemons: Obtiene los datos de la api mediante una petición asyncrona y la respuesta
    se almacena en la variable de estado.
*/
const index = async () => {
    try {
        const req = await axios.get(URI);
        const { data } = req.data;
        return data;
    } catch (errors) {
        console.log(errors);
    }
};

const store = async (newPokemon) => {
    try {
        const req = await axios.post(URI,newPokemon);
        return req;
    } catch (errors) {
        console.log(errors);
    }
};

const destroy = async (id) => {
    try {
        const req = await axios.delete(`${URI}/${id}`);
        return req;
    } catch (error) {
        console.log(error);
    }
};

const show = async (id) => {
    try {
        const req = await axios.get(`${URI}/${id}`);
        return req;
    } catch (error) {
        console.log(error);
    }
};

const update = async (id, pokemon) => {
    try {
        const req = await axios.put(`${URI}/${id}`, pokemon);
        return req;
    } catch (error) {
        console.log(error);
    }
};

export default {index, store, destroy, show,  update};