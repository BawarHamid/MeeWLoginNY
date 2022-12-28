import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function SignInAsync(email: string, password: string) {
  try {
    const userResult = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(userResult);
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function SignUpAsync(email: string, password: string) {
  try {
    const userResult = await supabase.auth.signUp({ email, password });
    console.log(userResult);
  } catch (error) {
    console.log(error);
    return false;
  }
}
