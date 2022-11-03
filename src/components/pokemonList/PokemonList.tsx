import usePokeAPI from "../../hooks/usePokeAPI";
import PokemonCard from "../pokemonCard/PokemonCard";
import type { PokemonSpeciesList } from "../../Types";

type Props = {};

const PokemonList = (props: Props) => {
  const pokemonList = usePokeAPI<PokemonSpeciesList>(
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
