import { User as SupabaseUser } from "@supabase/supabase-js";

export type User = SupabaseUser | null;

export interface State {
  user: User;
}

interface Setters {
  setUser: (value: User) => void;
}

export interface GlobalState extends State, Setters {}

export interface ReducerActions {
  type: string;
  payload: any;
}

export interface ProviderProps {
  children?: JSX.Element | JSX.Element[];
}
