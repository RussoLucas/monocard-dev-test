import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function getPokemonList() {
    let pokemons = [];
    try {
        const { data } = await axios.get(`${API_URL}/list-pokemons`);
        pokemons = data;
    } catch (error) {
        console.error(error.response.data);
    }

    return pokemons;
}

export async function generatePokemon() {
    let pokemon = [];
    try {
        const { data } = await axios.get(`${API_URL}/generate-random-pokemon`);

        pokemon = data;
    } catch (error) {
        console.error(error.response.data);
    }

    return pokemon;
}

export async function renamePokemon(id, newPokemonName) {
    if (!newPokemonName) return;

    try {
        await axios.post(`${API_URL}/rename-pokemon`, {
            id,
            newPokemonName,
        });
    } catch (error) {
        alert(error.response.data);
    }
}
