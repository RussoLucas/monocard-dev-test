import fs from "fs";

const readStoredData = () => {
  const bufferStoredData = fs.readFileSync(
    "./pokemonDb/pokemons.json",
    (err, data) => {
      if (err) return console.log(err);

      return data;
    }
  );

  return JSON.parse(bufferStoredData);
};

export default readStoredData;
