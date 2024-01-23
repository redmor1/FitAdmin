import { useContext } from "react";
import { SupabaseContext } from "../context/SupabaseContext";

export const useSupabase = () => {
  const supabase = useContext(SupabaseContext);
  return supabase;
};
