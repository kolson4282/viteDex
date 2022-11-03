import { useQuery } from "@tanstack/react-query";

export const BASE_URL = "https://pokeapi.co/api/v2/";

const usePokeAPI = <T,>(url: string) => {
  const query = useQuery<T, Error>([url], () => getPokemon<T>(url));

  return query;
};

const getPokemon = async <T,>(url: string): Promise<T> => {
  const r = await fetch(url);
  return r.json() as T;
};

export default usePokeAPI;
