import fs from "fs";

const readStoredData = () => {
  const bufferStoredData = fs.readFileSync(
    "./src/pokemonDb/pokemons.json",
    (err, data) => {
      if (err) return console.log(err);

      return data;
    }
  );

  return JSON.parse(bufferStoredData);
};

export default readStoredData;
