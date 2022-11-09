import { Pokemon } from "../Types";
import usePokeAPIURL, { BASE_URL } from "./usePokeAPI";

const usePokemonInfo = (pokemon: string) => {
  const pokemonSpeciesInfo = usePokeAPIURL<Pokemon>(
    BASE_URL + "pokemon/" + pokemon,
    ["pokemon", pokemon]
  );
  return pokemonSpeciesInfo;
};

export default usePokemonInfo;
