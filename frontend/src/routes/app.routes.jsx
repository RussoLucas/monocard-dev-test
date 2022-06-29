import React from 'react';
import Start from '../pages/Start';
import GameView from '../pages/GameView';
import PokemonList from '../pages/PokemonList';
import PokemonForge from '../pages/PokemonForge';

export default [
    {
        name: '/',
        component: <Start />,
    },
    {
        name: '/game-view',
        component: <GameView />,
    },
    {
        name: '/pokemon-forge',
        component: <PokemonForge />,
    },
    {
        name: '/pokemon-list',
        component: <PokemonList />,
    },
];
