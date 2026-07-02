"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { use, useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");

    const { error: signOutError } = await supabase.auth.signOut();

    if (signOutError) {
      setError(signOutError.message);
      return;
    }

    router.push("/login");
    router.refresh();
  }

  return (
    <Button type="button" onClick={handleLogout}>
      Logout
    </Button>
  );
}
