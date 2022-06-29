import express from 'express';
import axios from 'axios';
import { nanoid } from 'nanoid';

import storeData from '../utils/storeData.js';
import readStoredData from '../utils/readStoredData.js';
import renamePokemon from '../utils/renamePokemon.js';

const router = express.Router();

router.get('/generate-random-pokemon', async (req, res) => {
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

router.get('/list-pokemons', async (req, res) => {
  const storedData = readStoredData();

  res.send(storedData);
});

router.post('/rename-pokemon', async (req, res) => {
  const { id, newPokemonName } = req.body;

  renamePokemon(id, newPokemonName);

  res.send('ok');
});

export { router };
