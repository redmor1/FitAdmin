import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Navigate to="/app" />
      </SignedIn>
    </>
  );
};

export default Login;
