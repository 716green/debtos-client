import { AuthResponse, createClient, SupabaseClientOptions } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const schemaName = import.meta.env.VITE_SUPABASE_SCHEMA;

if (!supabaseUrl || !supabaseKey || !schemaName) {
  throw new Error("Missing environment variables");
}

const options: SupabaseClientOptions<typeof schemaName> = {
  db: {
    schema: schemaName,
  },
};

const supabase = createClient(supabaseUrl, supabaseKey, options);

//* create account
export const signup = async (email: string, password: string) => {
  const { data, error }: AuthResponse = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
};

//* login with password
export const loginWithPassword = async (email: string, password: string) => {
  const { data, error }: AuthResponse = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
};
