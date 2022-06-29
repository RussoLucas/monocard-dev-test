import fs from "fs";
import readStoredData from "./readStoredData.js";

const renamePokemon = (id, newPokemonName) => {
  const storedData = readStoredData();

  storedData.map((pokemon) => {
    if (pokemon.id === id) {
      pokemon.name = newPokemonName;
    }
  });

  console.log(storedData);

  fs.writeFile(
    "./src/pokemonDb/pokemons.json",
    JSON.stringify(storedData),
    (err) => {
      if (err) return console.log(err);
    }
  );
};

export default renamePokemon;
