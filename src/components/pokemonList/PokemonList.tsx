import usePokeAPI from "../../hooks/usePokeAPI";
import PokemonCard from "../pokemonCard/PokemonCard";

type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

type Props = {};

const PokemonList = (props: Props) => {
  const pokemonList = usePokeAPI<PokemonList>(
    "https://pokeapi.co/api/v2/pokemon-species"
  );

  if (pokemonList.isLoading) return <p>Loading...</p>;
  if (pokemonList.error || !pokemonList.data) return <p>Error...</p>;

  return (
    <div className="row gx-5 gy-5 text-center">
      {pokemonList.data.results.map((pokemon) => (
        <PokemonCard name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
