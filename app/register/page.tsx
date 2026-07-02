"use client";

import Title from "@/components/shared/Title";
import { Input } from "@/components/ui/input";
import { UserRound } from "lucide-react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signInWithGoogle } from "@/lib/supabase/auth-client";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Register() {
  const supabase = createClient();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleGoogleSignIn() {
    await signInWithGoogle(`${window.location.origin}/auth/callback`);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          full_name: name,
        },
      },
    });

    setIsLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      router.push("/account");
      return;
    }

    setSuccess("Account created. Check your email to confirm your account.");
  }

  return (
    <section className="flex items-center justify-center py-3 gap-20">
      <div>
        <Image
          className="rounded-xl"
          src="/images/Register hero image.svg"
          width={500}
          height={500}
          alt="image"
        />
      </div>
      <div className="flex flex-col items-left">
        <div className="pb-2">
          <Title title="Create Account" />
          <p className="text-gray-500">
            Sign up to start shopping with SHOP.CO
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="w-full">
            <label className="font-bold" htmlFor="full-name">
              Full name
            </label>
            <Input
              className="w-full py-5 border border-gray-300 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="full-name"
              type="text"
              placeholder="Enter your name"
              icon={<UserRound />}
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <Input
              className="w-full py-5 border border-gray-300 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="email"
              type="email"
              placeholder="Enter your email"
              icon={<Mail />}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <Input
              className="w-full py-5 border border-gray-300 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="password"
              type="password"
              placeholder="Create a password"
              icon={<Lock />}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="w-full">
            <label className="font-bold" htmlFor="confirm-password">
              Confirm password
            </label>
            <Input
              className="w-full py-5 border border-gray-300 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="confirm-password"
              type="password"
              placeholder="Repeat your password "
              icon={<UserRound />}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl bg-black py-5 text-white hover:bg-black"
            variant="secondary"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>

          {success && (
            <p className="text-sm font-medium text-green-600">{success}</p>
          )}
          {error && (
            <p className="text-sm font-medium text-red-500">{error}</p>
          )}
        </form>
        <div className="text-center p-3">
          <span className="text-gray-500">or</span>
        </div>

        <div>
          <Button
            type="button"
            variant="default"
            className="w-full py-5 text-black bg-white border border-gray-300"
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} className="size-5 text-black" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </section>
  );
}
