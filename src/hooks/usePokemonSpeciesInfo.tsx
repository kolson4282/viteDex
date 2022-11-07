import { useQuery } from "@tanstack/react-query";
import { PokemonSpecies } from "../Types";
import getPokemon from "../utils/getPokemon";
import { BASE_URL } from "./usePokeAPI";

const usePokemonSpeciesInfo = (pokemon: string) => {
  const pokemonInfo = useQuery<PokemonSpecies, Error>(
    ["pokemon-species", pokemon],
    () => getPokemon<PokemonSpecies>(BASE_URL + "pokemon-species/" + pokemon)
  );
  return pokemonInfo;
};

export default usePokemonSpeciesInfo;
