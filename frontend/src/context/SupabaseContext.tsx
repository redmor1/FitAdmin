import { ReactNode, createContext, useEffect, useState } from "react";
import { createClient, Session } from "@supabase/supabase-js";

interface SupabaseProviderProps {
  children: ReactNode;
}

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Define context value type
type SupabaseContextValue = {
  session: Session | null;
  isLoading: boolean;
  signOut: () => void;
};

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Create context
export const SupabaseContext = createContext<SupabaseContextValue>({
  session: null,
  isLoading: true,
  signOut: () => {},
});

// Provider component
export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("Error getting session:", error);
    } else if (data) {
      setSession(data.session);
    }

    setIsLoading(false); // Set loading to false after getting the session
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error signing out:", error);
  };

  useEffect(() => {
    // Check initial session state
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT") {
          setSession(null);
          setIsLoading(false);
        } else if (session) {
          setSession(session);
          setIsLoading(false);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <SupabaseContext.Provider value={{ session, isLoading, signOut }}>
      {children}
    </SupabaseContext.Provider>
  );
};
