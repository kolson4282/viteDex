import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./pages/HomePage";

const client = new QueryClient();
/*{
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
}*/

function App() {
  return (
    <QueryClientProvider client={client}>
      <HomePage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
