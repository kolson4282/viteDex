import usePokemonInfo from "../../hooks/usePokemonInfo";
import usePokemonSpeciesInfo from "../../hooks/usePokemonSpeciesInfo";

type Props = {
  name: string;
};

const PokemonCard = ({ name }: Props) => {
  const species = usePokemonSpeciesInfo(name);
  const pokemon = usePokemonInfo(name);

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
