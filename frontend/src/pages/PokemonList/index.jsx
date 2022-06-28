import { useEffect, useState } from "react";
import axios from "axios";

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState();

  const getPokemonList = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/list-pokemons");

      setPokemonList(data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        overflow: "auto",
      }}
    >
      {pokemonList && pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => {
          return (
            <div
              key={pokemon.id}
              style={{
                width: "100%",
                height: 40,
                marginTop: 7,
                fontSize: 10,
                display: "flex",
              }}
            >
              <img
                style={{ height: "100%" }}
                src={
                  pokemon.sprites.versions["generation-i"].yellow
                    .front_transparent
                }
              />
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontSize: 8 }}>
                  {pokemon.name.toUpperCase()}
                </span>
                <br></br>
                <div style={{ display: "flex", fontSize: 8 }}>
                  <span style={{ marginRight: 5 }}> HT {pokemon.height}</span>
                  <span> WT {pokemon.weight}lb</span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ fontSize: 10, marginTop: 10 }}>your pokédex is empty</div>
      )}
    </div>
  );
};
