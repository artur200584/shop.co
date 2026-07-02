import { createClient } from "@/lib/supabase/client";

export default async function getCurrentUser() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function signInWithGoogle(redirectTo: string) {
  const supabase = createClient();

  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
    },
  });
}
