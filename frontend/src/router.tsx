import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { MainLayout } from "./layouts/MainLayout";
import RequireAuth from "./pages/Auth/RequireAuth";
import Register from "./pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
  },
]);
