import React, { useEffect, useState, useRef } from 'react';
import { getPokemonList, renamePokemon } from '../../services/dataService';
import {
    Container,
    ListItem,
    PokemonImg,
    PokemonInfoContainer,
    PokemonName,
    PokemonInfo,
    NoDataContainer,
} from './styles';

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState();
    const [newPokemonName, setNewPokemonName] = useState();

    const inputRefs = useRef([]);

    const handleInputChange = (e) => {
        setNewPokemonName(e.target.value.trim());
    };

    const setNewName = (id) => {
        renamePokemon(id, newPokemonName);
    };

    const handleKeyDown = (e, key) => {
        if (e.key.toLowerCase() === 'enter' || e.key.toLowerCase() === 'return')
            inputRefs[key].blur();
    };

    useEffect(() => {
        getPokemonList().then((pokemons) => {
            setPokemonList(pokemons);
        });
    }, []);

    return (
        <Container>
            {pokemonList && pokemonList.length > 0 ? (
                pokemonList.map(
                    ({ id, name, weight, height, sprites }, key) => (
                        <ListItem key={id}>
                            <PokemonImg
                                alt="pokemon"
                                src={
                                    sprites.versions['generation-i'].yellow
                                        .front_transparent
                                }
                            />
                            <PokemonInfoContainer>
                                <div>
                                    <PokemonName
                                        ref={(ref) => (inputRefs[key] = ref)}
                                        type="text"
                                        placeholder={name}
                                        onChange={(event) =>
                                            handleInputChange(event)
                                        }
                                        onBlur={() => setNewName(id)}
                                        onKeyDown={(e) => handleKeyDown(e, key)}
                                    />
                                </div>
                                <br />
                                <PokemonInfo>
                                    <span> HT {height}</span>
                                    <span> WT {weight}lb</span>
                                </PokemonInfo>
                            </PokemonInfoContainer>
                        </ListItem>
                    )
                )
            ) : (
                <NoDataContainer>your pokédex is empty</NoDataContainer>
            )}
        </Container>
    );
}
