import fs from "fs";
import readStoredData from "./readStoredData.js";

const storeData = (data) => {
  let pokemons = [];

  const storedData = readStoredData();

  if (storedData.length !== 0) {
    storedData.forEach((pokemon) => {
      pokemons.push(pokemon);
    });
  }

  pokemons.push(data);

  fs.writeFile(
    "./src/pokemonDb/pokemons.json",
    JSON.stringify(pokemons),
    (err) => {
      if (err) return console.log(err);
    }
  );
};

export default storeData;
