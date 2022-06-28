import React, { useEffect, useState } from "react";
import axios from "axios";

export function PokemonForge() {
  const [pokemon, setPokemon] = useState();

  const getPokemon = async () => {
    try {
      const {
        data: { name, sprites, id, weight, height, types },
      } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`
      );

      setPokemon({ name, sprites, id, weight, height, types });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ width: "40%", height: "90%", backgroundColor: "red" }}
      ></div>
      <div
        style={{ width: "60%", height: "90%", backgroundColor: "blue" }}
      ></div>
    </div>
  );
}
