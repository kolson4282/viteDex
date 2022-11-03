import PokemonCard from "../pokemonCard/PokemonCard";
import type { PokemonSpeciesList } from "../../Types";

type Props = {
  list: PokemonSpeciesList;
};

const PokemonList = ({ list }: Props) => {
  return (
    <div className="row gx-5 gy-5 text-center">
      {list.results.map((pokemon) => (
        <PokemonCard name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
