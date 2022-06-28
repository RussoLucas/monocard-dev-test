import React, { useEffect, useState } from "react";
import axios from "axios";

export function PokemonForge() {
  const [pokemon, setPokemon] = useState();

  const getPokemon = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/generate-random-pokemon"
      );

      setPokemon(data);
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
      {pokemon && (
        <>
          <div
            style={{
              width: "40%",
              height: "90%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={
                pokemon.sprites.versions["generation-i"].yellow
                  .front_transparent
              }
            />
          </div>
          <div style={{ width: "60%", height: "90%" }}>
            <div style={{ marginTop: 15, fontSize: 10 }}>
              NAME:
              <br />
              {pokemon.name}
            </div>
            <div style={{ marginTop: 10, fontSize: 10 }}>
              TYPE:
              <br />
              {pokemon.types[0].type.name}
            </div>
            <div style={{ marginTop: 10, fontSize: 10 }}>
              HT:{pokemon.height}
            </div>
            <div style={{ marginTop: 10, fontSize: 10 }}>
              WT:{pokemon.weight}lb
            </div>
          </div>
        </>
      )}
    </div>
  );
}
