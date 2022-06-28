import express from "express";
import axios from "axios";

const app = express();

const port = 8000;

app.get("/generate-random-pokemon", async (req, res) => {
  try {
    const {
      data: { name, sprites, id, weight, height, types },
    } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`
    );

    res.json({ name, sprites, id, weight, height, types });
  } catch (error) {
    console.error(error);
  }
});

app.get("/list-pokemons", (req, res) => {
  res.send("lista");
});

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
