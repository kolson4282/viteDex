import { Link } from "./LinkType";

export type PokemonSpeciesList = {
  count: number;
  next: string;
  previous: string;
  results: Link[];
};
