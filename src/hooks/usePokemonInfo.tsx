import { useQuery } from "@tanstack/react-query";
import { Pokemon } from "../Types";
import getPokemon from "../utils/getPokemon";
import { BASE_URL } from "./usePokeAPI";

const usePokemonInfo = (pokemon: string) => {
  const pokemonSpeciesInfo = useQuery<Pokemon, Error>(
    ["pokemon", pokemon],
    () => getPokemon<Pokemon>(BASE_URL + "pokemon/" + pokemon)
  );
  return pokemonSpeciesInfo;
};

export default usePokemonInfo;
