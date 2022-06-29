import React, { useEffect, useState } from 'react';
import { generatePokemon } from '../../services/dataService';
import {
    Container,
    PokemonInfoContainer,
    PokemonInfo,
    ImgContainer,
} from './styles';

export default function PokemonForge() {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        generatePokemon().then((pokemonData) => setPokemon(pokemonData));
    }, []);

    return (
        <Container>
            {pokemon && (
                <>
                    <ImgContainer>
                        <img
                            alt="pokemon"
                            src={
                                pokemon.sprites.versions['generation-i'].yellow
                                    .front_transparent
                            }
                        />
                    </ImgContainer>
                    <PokemonInfoContainer>
                        <PokemonInfo>
                            <span>NAME:</span>
                            {pokemon.name}
                        </PokemonInfo>
                        <PokemonInfo>
                            <span>TYPE:</span>
                            {pokemon.types[0].type.name}
                        </PokemonInfo>
                        <PokemonInfo>HT:{pokemon.height}</PokemonInfo>
                        <PokemonInfo>WT:{pokemon.weight}lb</PokemonInfo>
                    </PokemonInfoContainer>
                </>
            )}
        </Container>
    );
}
