import { useQuery } from "@tanstack/react-query";

export const BASE_URL = "https://pokeapi.co/api/v2/";

const usePokeAPI = <T,>(url: string) => {
  const query = useQuery<T, Error>([url], () => getPokemon<T>(url));

  return query;
};

const getPokemon = <T,>(url: string): Promise<T> => {
  return fetch(url).then((r) => r.json() as T);
};

export default usePokeAPI;
