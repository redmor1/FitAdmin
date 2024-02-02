import "./App.css";
import { RouterProvider } from "react-router-dom";
import { SupabaseProvider } from "./context/SupabaseContext";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <RouterProvider router={router} />
      </SupabaseProvider>
    </QueryClientProvider>
  );
}

export default App;
