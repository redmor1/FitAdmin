import { ReactNode } from "react";
import { useSupabase } from "../../hooks/useSupabase";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const supabase = useSupabase();
  // console.log(supabase.session?.user.user_metadata.full_name);
  // console.log(supabase.session);

  // TODO: Loader component
  if (supabase.isLoading) {
    return null;
  }

  if (!supabase.session) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RequireAuth;
