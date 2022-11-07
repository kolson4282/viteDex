import { useQuery } from "@tanstack/react-query";
import getPokemon from "../utils/getPokemon";

export const BASE_URL = "https://pokeapi.co/api/v2/";

const usePokeAPI = <T,>(url: string) => {
  const query = useQuery<T, Error>([url], () => getPokemon<T>(url));

  return query;
};

export default usePokeAPI;
