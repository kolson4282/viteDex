import { Link } from "./LinkType";

export type Pokemon = {
  abilities: {
    ability: Link;
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: Link[];
  game_indicies: {
    game_index: number;
    version: Link;
  }[];
  height: number;
  held_items: {
    item: Link;
    version_details: {
      rarity: number;
      version: Link;
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: Link;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: Link;
      version_group: Link;
    }[];
  }[];
  name: string;
  order: number;
  past_types: {}[];
  species: Link;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      home: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      "official-artwork": {
        front_default: string;
      };
      versions: {};
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: Link;
    }[];
  };
  types: {
    slot: number;
    type: Link;
  }[];
  weight: number;
};
