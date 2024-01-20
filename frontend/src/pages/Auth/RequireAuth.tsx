import { useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const { user } = useUser();

  if (!user) {
    // If the user is not signed in, redirect to the sign-in page.
    return <Navigate to="/" />;
  }

  // If the user is signed in, render the children components.
  return children;
}

export default RequireAuth;
