import { Link } from "./LinkType";

export type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: Link;
  egg_groups: Link[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: Link;
  flavor_text_entries: {
    flavor_text: string;
    language: Link;
    Version: Link;
  }[];
  form_descriptions: {
    description: string;
    language: Link;
  }[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: Link;
  }[];
  generation: Link;
  growth_rate: Link;
  habitat: Link;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: Link;
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: Link;
    base_score: number;
    rate: number;
  }[];
  PokedexNumbers: {
    endtry_number: number;
    pokedex: Link;
  }[];
  shape: Link;
  varieties: {
    is_default: boolean;
    pokemon: Link;
  }[];
};
