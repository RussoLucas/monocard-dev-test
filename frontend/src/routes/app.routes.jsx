import { Start } from "../pages/Start";
import { PokemonForge } from "../pages/PokemonForge";
import { PokemonList } from "../pages/PokemonList";

export default [
  {
    name: "/",
    component: <Start />,
  },
  {
    name: "/pokemonForge",
    component: <PokemonForge />,
  },
  {
    name: "/pokemonList",
    component: <PokemonList />,
  },
];
