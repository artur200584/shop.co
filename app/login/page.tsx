"use client";

import React, { useState } from "react";
import Image from "next/image";
import Title from "@/components/shared/Title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/account");
  }

  async function handleGoogleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <section className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden min-h-screen w-full lg:block">
        <Image
          src="/images/login-fashion-people.png"
          alt="Hero image"
          fill
          sizes="50vw"
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center px-3">
        <div>
          <Title title="Welcome Back" />
          <p className="text-gray-500">Sign in to SHOP.CO</p>
        </div>

        <form
          className="mb-5 flex w-full max-w-md flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <Input
              className="w-full py-5 border border-gray-300 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="email"
              type="email"
              placeholder="Enter your email"
              icon={<Mail aria-hidden="true" />}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <Input
              className="w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              icon={<LockKeyhole aria-hidden="true" />}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              endIcon={
                <button
                  type="button"
                  className="flex size-8 items-center justify-center text-gray-500 transition-colors hover:text-black"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff aria-hidden="true" className="size-5" />
                  ) : (
                    <Eye aria-hidden="true" className="size-5" />
                  )}
                </button>
              }
            />

            {error && (
              <p className="text-sm font-medium text-red-500">{error}</p>
            )}
          </div>

          <Button
            className="w-full py-5 rounded-xl bg-black text-white"
            variant="secondary"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <div>
          <Button
            type="button"
            variant="secondary"
            className="w-full py-5 text-black bg-white border border-gray-300"
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} className="size-5 text-black" />
            Sign in with Google
          </Button>
        </div>
        <span className="text-gray-500 mt-5">
          Don't have a account?
          <Button variant="link" asChild>
            <Link href="/register">Create account</Link>
          </Button>
        </span>
      </div>
    </section>
  );
}
