import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";
import PokemonList from "./components/pokemonList/PokemonList";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="container">
        <Navbar />
        <PokemonList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
