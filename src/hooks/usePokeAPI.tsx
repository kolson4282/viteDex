import { QueryKey, useQuery } from "@tanstack/react-query";

export const BASE_URL = "https://pokeapi.co/api/v2/";

export const usePokeAPIURL = <T,>(url: string, queryKey?: QueryKey) => {
  const query = useQuery<T, Error>(queryKey || [url], () =>
    getPokemonFromURL<T>(url)
  );
  return query;
};

export const getPokemonFromURL = async <T,>(url: string): Promise<T> => {
  const r = await fetch(url);
  return r.json() as T;
};
