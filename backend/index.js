import axios from "axios";
import { nanoid } from "nanoid";
import app from "./app.js";
import storeData from "./utils/storeData.js";
import readStoredData from "./utils/readStoredData.js";

app.get("/generate-random-pokemon", async (req, res) => {
  try {
    const {
      data: { name, sprites, id: pokemonId, weight, height, types },
    } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`
    );

    const id = nanoid();

    storeData({ id: id, name, sprites, pokemonId, weight, height, types });

    res.json({ name, sprites, pokemonId, weight, height, types });
  } catch (error) {
    console.error(error);
  }
});

app.post("/rename-pokemon", (req, res) => {
  res.send("rename");
});

app.get("/list-pokemons", (req, res) => {
  const storedData = readStoredData();

  res.send(storedData);
});
