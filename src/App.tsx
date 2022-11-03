import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import PokemonList from "./components/pokemonList/PokemonList";
import usePokeAPI from "./hooks/usePokeAPI";
import HomePage from "./pages/HomePage";
import { PokemonSpeciesList } from "./Types";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
