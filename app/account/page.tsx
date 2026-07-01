import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "../auth/LogoutButton";

export default async function Account() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const name =
    user.user_metadata?.full_name || user.user_metadata?.name || user.email;

  return (
    <section>
      <h1>Welcome {name}</h1>
      <LogoutButton />
    </section>
  );
}
