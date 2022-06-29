import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  ListItem,
  PokemonInfoContainer,
  PokemonName,
  PokemonInfo,
  NoDataContainer,
} from "./styles.js";

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState();
  const [newPokemonName, setNewPokemonName] = useState();
  const [reload, setReload] = useState(false);

  const getPokemonList = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/list-pokemons");

      setPokemonList(data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleInputChange = (event) => {
    setNewPokemonName(event.target.value);
  };

  const renamePokemon = async (id) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/rename-pokemon",
        { id, newPokemonName }
      );

      setReload(true);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, [reload]);

  return (
    <Container>
      {pokemonList && pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => {
          return (
            <ListItem key={pokemon.id}>
              <img
                style={{ height: "100%" }}
                src={
                  pokemon.sprites.versions["generation-i"].yellow
                    .front_transparent
                }
              />
              <PokemonInfoContainer>
                <div style={{ cursor: "pointer" }}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      renamePokemon(pokemon.id);
                    }}
                    onBlur={() => renamePokemon(pokemon.id)}
                  >
                    <PokemonName
                      type="text"
                      placeholder={pokemon.name}
                      onChange={(event) => handleInputChange(event)}
                    />
                  </form>
                </div>
                <br></br>
                <PokemonInfo>
                  <span style={{ marginRight: 5 }}> HT {pokemon.height}</span>
                  <span> WT {pokemon.weight}lb</span>
                </PokemonInfo>
              </PokemonInfoContainer>
            </ListItem>
          );
        })
      ) : (
        <NoDataContainer>your pokédex is empty</NoDataContainer>
      )}
    </Container>
  );
};
