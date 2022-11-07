import { PokemonSpecies } from "../Types";
import { BASE_URL, usePokeAPIURL } from "./usePokeAPI";

const usePokemonSpeciesInfo = (pokemon: string) => {
  const pokemonInfo = usePokeAPIURL<PokemonSpecies>(
    BASE_URL + "pokemon-species/" + pokemon,
    ["pokemon-species", pokemon]
  );
  return pokemonInfo;
};

export default usePokemonSpeciesInfo;
