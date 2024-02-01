import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { MainLayout } from "./layouts/MainLayout";
import RequireAuth from "./pages/Auth/RequireAuth";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Inventory from "./pages/Inventory";

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
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
