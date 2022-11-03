import usePokeAPI from "../../hooks/usePokeAPI";

type Props = {
  name: string;
};

type PokemonSpecies = {
  name: string;
  id: number;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

type Pokemon = {
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

const PokemonCard = ({ name }: Props) => {
  const species = usePokeAPI<PokemonSpecies>(
    "https://pokeapi.co/api/v2/pokemon-species/" + name
  );
  const pokemon = usePokeAPI<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon/" + name
  );

  if (species.isLoading || pokemon.isLoading) return <p>Loading...</p>;
  if (!species.data || !pokemon.data) return <p>No Data Returned</p>;

  const genus = species.data.genera.find(
    (genus) => genus.language.name == "en"
  )?.genus;
  return (
    <div className="col-xs-6 col-md-4 col-lg-3 col-xxl-2">
      <div className="card" style={{ height: "100%" }}>
        <img
          src={pokemon.data.sprites.other["official-artwork"].front_default}
        />
        <div className="card-body">
          <div className="card-title">
            {species.data.id} - {name}
          </div>
        </div>
        <div className="card-subtitle mv-2 text-muted">{genus}</div>
        <ul
          className="list-group list-group-horizontal justify-content-center"
          style={{ width: "100%" }}
        >
          {pokemon.data.types.map((type) => (
            <li
              className="list-group-item .flex-fill"
              style={{ width: "100%" }}
              key={type.type.name}
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
