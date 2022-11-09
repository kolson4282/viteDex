import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PokemonList from "../components/pokemonList/PokemonList";
import usePokeAPIURL from "../hooks/usePokeAPI";
import { PokemonSpeciesList } from "../Types";

type Props = {};

const HomePage = (props: Props) => {
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon-species`);

  const pokemonList = usePokeAPIURL<PokemonSpeciesList>(url);

  if (pokemonList.isLoading) return <p>Loading...</p>;
  if (pokemonList.error || !pokemonList.data) return <p>Error...</p>;
  return (
    <div className="container">
      <Navbar
        next={
          pokemonList.data.next
            ? () => setUrl(pokemonList.data.next)
            : undefined
        }
        prev={
          pokemonList.data.previous
            ? () => setUrl(pokemonList.data.previous)
            : undefined
        }
      />
      <PokemonList list={pokemonList.data} />
    </div>
  );
};

export default HomePage;
