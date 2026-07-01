"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { Input } from "../ui/input";
import { ShoppingCart, CircleUser, Search } from "lucide-react";
import { Button } from "../ui/button";
import DesktopNavLinks from "./DesktopNavLinks";
import SearchCommandItems from "./SearchCommandItems";
import MobileNavMenu from "./MobileNavMenu";
import Link from "next/link";
import getCurrentUser from "@/lib/supabase/auth-client";

export type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "On sale", href: "/on-sale" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Brands", href: "/brands" },
];

export default function Nav() {
  const [open, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      const user = await getCurrentUser();
      setUser(user);
    }

    loadUser();
  }, []);

  return (
    <>
      {user ? null : (
        <div className="flex items-center justify-center py-2 bg-black">
          <Link href="/login">
            <p className="text-white font-bold text-sm">
              Sign up and get 20% off to your first order. Sign Up Now
            </p>
          </Link>
        </div>
      )}
      <nav className="flex w-full items-center gap-4 px-4 py-5 md:px-10">
        <div className="lg:hidden">
          <MobileNavMenu links={navLinks} />
        </div>

        <Link href="/">
          <h1 className="shrink-0 text-2xl font-black xl:text-3xl">SHOP.CO</h1>
        </Link>

        <div className="hidden lg:block">
          <DesktopNavLinks links={navLinks} />
        </div>

        <div className="hidden min-w-0 flex-1 md:block">
          <Input
            placeholder="Search for products..."
            className="border-0 shadow-none focus-visible:border-0 focus-visible:ring-0"
            icon={<Search />}
          />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Button
            onClick={() => setIsOpen(true)}
            variant="link"
            className="size-10 p-0 md:hidden"
          >
            <Search className="size-7" />
          </Button>
          <SearchCommandItems
            links={navLinks}
            open={open}
            onOpenChange={setIsOpen}
          />
          <Button variant="link" className="size-10 p-0">
            <ShoppingCart className="size-7" />
          </Button>
          {user ? (
            <Link href="/account">
              <Button variant="link" className="size-10 p-0">
                <CircleUser className="size-7" />
              </Button>
            </Link>
          ) : null}
          {/* <Link href="/account">
            <Button variant="link" className="size-10 p-0">
              <CircleUser className="size-7" />
            </Button>
          </Link> */}
        </div>
      </nav>
    </>
  );
}
